import type { GenerateAnalysisInput } from "@/lib/types";

/** PEÇA 2 — Prompt de usuário (variável a cada análise). */

export function buildUserPrompt(input: GenerateAnalysisInput): string {
  const marketBlock =
    input.market_terms && input.market_terms.length > 0
      ? `
## TERMOS DE MERCADO DESTA ÁREA — use com precisão e apenas quando a experiência real do usuário sustentar
${input.market_terms.map((t) => `- ${t}`).join("\n")}
`
      : "";

  const progressBlock =
    (input.completed_plan_actions && input.completed_plan_actions.length > 0) ||
    (input.completed_recommendations && input.completed_recommendations.length > 0)
      ? `
## PROGRESSO DECLARADO PELO USUÁRIO (reanálise)
O usuário marcou as itens abaixo como **concluídos** no plano/recomendações da análise anterior.
Importante: o currículo/LinkedIn abaixo podem **ainda não refletir** essas mudanças (ele pode ter feito fora do app).
- Se o texto dos materiais NÃO mostrar evidência da mudança, reconheça o progresso declarado, mas deixe claro que a comunicação no material ainda não prova isso (lacuna de evidência/comunicação). Não invente trechos no CV.
- Se o texto JÁ mostrar a mudança, celebre e priorize o próximo gap.
- Ajuste o plano de evolução: não repita ações claramente concluídas e evidentes no material; avance para o próximo passo.

Ações do plano marcadas como concluídas:
${(input.completed_plan_actions || []).map((t) => `- ${t}`).join("\n") || "(nenhuma)"}

Recomendações marcadas como concluídas:
${(input.completed_recommendations || []).map((t) => `- ${t}`).join("\n") || "(nenhuma)"}
`
      : "";

  return `Analise o posicionamento profissional abaixo e retorne o JSON no schema definido.

## OBJETIVO DE CARREIRA
- Cargo-alvo: ${input.target_role || "(não definido — sugerir cargos se solicitado)"}
- Área: ${input.target_area || "(não informada)"}
- Senioridade desejada: ${input.target_seniority || "(não informada)"}
- Quer sugestões de cargo: ${input.wants_role_suggestions ? "sim" : "não"}

## CURRÍCULO (texto real do usuário)
${input.resume_text?.trim() || "(não enviado)"}

## LINKEDIN
- URL (apenas referência, sem scraping): ${input.linkedin_url || "(não informado)"}
- Texto do perfil:
${input.linkedin_text?.trim() || "(não enviado)"}

## VAGA ESPECÍFICA (opcional)
${input.job_description_text?.trim() || "(não enviada)"}

## MATERIAIS COMPLEMENTARES
${input.complementary_files_text?.trim() || "(nenhum)"}
${marketBlock}${progressBlock}
## INSTRUÇÕES FINAIS
- Cite trechos reais quando fizer recomendações e traduções.
- Se materiais forem escassos, reflita isso em confidence e no diagnóstico.
- Produza recomendações priorizadas, diagnóstico de aderência, traduções com alerta de autenticidade e plano de evolução acionável.
`;
}
