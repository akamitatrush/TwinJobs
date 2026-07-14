import { generateCareerAnalysis } from "@/lib/ai/generateCareerAnalysis";
import { persistAnalysisResult } from "@/lib/ai/persistAnalysis";
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

/**
 * Reanálise rápida: reutiliza textos já salvos em user_documents
 * da análise original — sem wizard / reupload.
 */
export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Não autenticado." }, { status: 401 });
    }

    const body = (await request.json()) as { analysis_id?: string };
    if (!body.analysis_id) {
      return NextResponse.json({ error: "analysis_id é obrigatório." }, { status: 400 });
    }

    const { data: parent, error: parentErr } = await supabase
      .from("career_analyses")
      .select("*")
      .eq("id", body.analysis_id)
      .eq("user_id", user.id)
      .single();

    if (parentErr || !parent) {
      return NextResponse.json({ error: "Análise não encontrada." }, { status: 404 });
    }

    const { data: docs } = await supabase
      .from("user_documents")
      .select("document_type, raw_text, file_url, file_name")
      .eq("analysis_id", body.analysis_id)
      .eq("user_id", user.id);

    let resume_text = "";
    let linkedin_text = "";
    let linkedin_url = "";
    let job_description_text = "";
    const complementary: string[] = [];

    for (const d of docs || []) {
      const text = (d.raw_text || "").trim();
      switch (d.document_type) {
        case "resume":
        case "pasted_text":
          if (text.length > resume_text.length) resume_text = text;
          break;
        case "linkedin_pdf":
          if (text.length > linkedin_text.length) linkedin_text = text;
          break;
        case "linkedin_url":
          linkedin_url = d.file_url || linkedin_url;
          if (text && text.length > linkedin_text.length) linkedin_text = text;
          break;
        case "job_description":
          if (text.length > job_description_text.length) job_description_text = text;
          break;
        case "complementary_file":
          if (text) complementary.push(`[${d.file_name || "complemento"}]\n${text}`);
          break;
        default:
          break;
      }
    }

    // Às vezes o LinkedIn colado veio como pasted_text junto do resume
    if (!resume_text && !linkedin_text) {
      return NextResponse.json(
        {
          error:
            "Não há texto de currículo/LinkedIn salvo nesta análise. Faça uma nova análise colando o material (ou PDF com texto).",
          code: "NO_STORED_TEXT",
        },
        { status: 400 }
      );
    }

    const [{ data: planDone }, { data: recsDone }] = await Promise.all([
      supabase
        .from("evolution_plans")
        .select("action_title, action_description")
        .eq("analysis_id", body.analysis_id)
        .eq("status", "concluido"),
      supabase
        .from("recommendations")
        .select("title, suggested_action")
        .eq("analysis_id", body.analysis_id)
        .eq("status", "concluida"),
    ]);

    const completed_plan_actions = (planDone || []).map(
      (p) => `${p.action_title}${p.action_description ? ` — ${p.action_description}` : ""}`
    );
    const completed_recommendations = (recsDone || []).map(
      (r) => `${r.title}${r.suggested_action ? ` — ${r.suggested_action}` : ""}`
    );

    let market_terms: string[] = [];
    if (parent.target_area) {
      const { data: jargon } = await supabase
        .from("market_jargons")
        .select("terms")
        .eq("area", parent.target_area)
        .maybeSingle();
      if (jargon?.terms) market_terms = jargon.terms;
    }

    const titleBase = parent.target_role || "posicionamento";
    const { data: created, error: createErr } = await supabase
      .from("career_analyses")
      .insert({
        user_id: user.id,
        title: `Reanálise: ${titleBase}`,
        target_role: parent.target_role,
        target_area: parent.target_area,
        target_seniority: parent.target_seniority,
        wants_role_suggestions: parent.wants_role_suggestions,
        job_title: parent.job_title,
        job_company: parent.job_company,
        job_url: parent.job_url,
        status: "processing",
        parent_analysis_id: parent.id,
      })
      .select("*")
      .single();

    if (createErr || !created) {
      return NextResponse.json(
        { error: createErr?.message || "Não foi possível criar a reanálise." },
        { status: 500 }
      );
    }

    // Copia documentos (mesmo texto) para a nova análise
    if (docs && docs.length > 0) {
      await supabase.from("user_documents").insert(
        docs.map((d) => ({
          user_id: user.id,
          analysis_id: created.id,
          document_type: d.document_type,
          file_url: d.file_url,
          file_name: d.file_name,
          raw_text: d.raw_text,
        }))
      );
    }

    console.info("[api/reanalyze] start", {
      parent: parent.id,
      new_id: created.id,
      resume_chars: resume_text.length,
      linkedin_chars: linkedin_text.length,
      plan_done: completed_plan_actions.length,
      recs_done: completed_recommendations.length,
    });

    const { result, provider, usedFallback, error: aiError } = await generateCareerAnalysis({
      user_id: user.id,
      analysis_id: created.id,
      resume_text,
      linkedin_text,
      linkedin_url,
      target_role: parent.target_role || "",
      target_area: parent.target_area || "",
      target_seniority: parent.target_seniority || "",
      wants_role_suggestions: Boolean(parent.wants_role_suggestions),
      job_description_text,
      complementary_files_text: complementary.join("\n\n"),
      market_terms,
      completed_plan_actions,
      completed_recommendations,
    });

    await persistAnalysisResult(supabase, created.id, result);

    const { data: credits } = await supabase
      .from("user_credits")
      .select("*")
      .eq("user_id", user.id)
      .maybeSingle();

    if (credits) {
      await supabase
        .from("user_credits")
        .update({
          used_analyses: (credits.used_analyses || 0) + 1,
          available_analyses: Math.max(0, (credits.available_analyses || 0) - 1),
        })
        .eq("user_id", user.id);
    }

    const scoreChange =
      result.summary.overall_score - (parent.overall_score ?? result.summary.overall_score);

    await supabase
      .from("career_analyses")
      .update({ status: "reanalyzed" })
      .eq("id", parent.id)
      .eq("user_id", user.id);

    await supabase.from("analysis_versions").insert({
      original_analysis_id: parent.id,
      new_analysis_id: created.id,
      user_id: user.id,
      improvements_summary:
        scoreChange > 0
          ? "Há sinais de evolução no posicionamento em relação à análise anterior."
          : scoreChange < 0
            ? "O score caiu ou o material ainda não reflete as ações concluídas — revise a comunicação no CV/LinkedIn."
            : "Score estável — o material pode ainda não evidenciar as ações que você marcou como feitas.",
      remaining_gaps: result.summary.main_gap,
      score_change: scoreChange,
    });

    console.info("[api/reanalyze] done", {
      new_id: created.id,
      provider,
      usedFallback,
      score: result.summary.overall_score,
      scoreChange,
    });

    return NextResponse.json({
      ok: true,
      analysis_id: created.id,
      parent_analysis_id: parent.id,
      provider,
      usedFallback,
      warning: aiError,
      overall_score: result.summary.overall_score,
      previous_score: parent.overall_score,
      score_change: scoreChange,
      reused_materials: true,
    });
  } catch (err) {
    console.error("[api/reanalyze]", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Erro ao reanalisar." },
      { status: 500 }
    );
  }
}
