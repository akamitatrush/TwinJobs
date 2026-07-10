import Link from "next/link";
import { MarketingHeader } from "@/components/AppHeader";
import { Logo } from "@/components/Logo";
import { Badge, Button, Card } from "@/components/ui";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  MessageSquareQuote,
  ShieldCheck,
  Sparkles,
  Target,
  Layers,
  GitCompare,
  Lock,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-full flex-col bg-background">
      {/* ─── HERO (claro = combina com o logo) ─── */}
      <section className="relative hero-brand overflow-hidden pb-20 pt-28 sm:pt-32 sm:pb-28">
        <MarketingHeader />

        <div className="pointer-events-none absolute -right-20 top-32 h-72 w-72 rounded-full bg-[color:var(--brand)]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-[color:var(--brand)]/8 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-orange-200 bg-primary-soft px-3 py-1.5 text-xs font-semibold text-[color:var(--brand-hover)]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                Mentor de carreira com IA · sem promessas falsas
              </div>

              <h1 className="animate-fade-up-delay-1 mt-6 font-display text-[2.55rem] leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
                Evolua, reposicione e{" "}
                <em className="not-italic text-primary sm:italic">conquiste</em> — com
                clareza de mercado.
              </h1>

              <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                CareerTwin analisa sua trajetória real, mede aderência a cargos e vagas e
                monta um plano de evolução — sem inventar experiência e sem vender
                contratação.
              </p>

              <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center gap-3">
                <Link href="/cadastro">
                  <Button size="lg" className="shadow-md shadow-orange-900/10">
                    Começar análise
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <a href="#como-funciona">
                  <Button size="lg" variant="outline">
                    Ver como funciona
                  </Button>
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-foreground">
                {["Honestidade total", "Dados só seus", "Plano acionável"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Preview + logo mark */}
            <div className="animate-fade-up-delay-2 relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-orange-200/40 via-transparent to-orange-100/30 blur-xl" />
              <div className="animate-float relative space-y-4">
                <Card className="overflow-hidden border-orange-100 p-0 shadow-[var(--shadow-lg)]">
                  <div className="flex items-center justify-between border-b border-card-border bg-white px-5 py-3">
                    <Logo href={null} size="sm" />
                    <Badge tone="primary">Demo de resultado</Badge>
                  </div>
                  <div className="bg-white p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold text-muted">Score de aderência</p>
                        <p className="mt-1 font-display text-4xl text-foreground">72</p>
                        <span className="mt-2 inline-flex rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-white">
                          Boa aderência
                        </span>
                      </div>
                      <div className="h-20 w-20 rounded-full border-[6px] border-muted-bg border-t-primary border-r-primary/50" />
                    </div>

                    <div className="mt-6 h-2 overflow-hidden rounded-full bg-muted-bg">
                      <div className="h-full w-[72%] rounded-full bg-primary" />
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {[
                        { k: "Ponto forte", v: "Experiência em TI sênior" },
                        { k: "Lacuna", v: "Evidências de impacto" },
                        { k: "Próxima ação", v: "Título no LinkedIn" },
                        { k: "Confiança", v: "Alta · materiais ok" },
                      ].map((item) => (
                        <div
                          key={item.k}
                          className="rounded-2xl border border-card-border bg-muted-bg/50 p-3"
                        >
                          <p className="text-[11px] font-semibold text-muted">{item.k}</p>
                          <p className="mt-1 text-sm font-semibold text-foreground leading-snug">
                            {item.v}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {["Visão geral", "Recomendações", "Aderência", "Plano"].map(
                        (tab, i) => (
                          <span
                            key={tab}
                            className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold ${
                              i === 0
                                ? "bg-primary text-white"
                                : "bg-muted-bg text-muted"
                            }`}
                          >
                            {tab}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* strip */}
      <section className="border-y border-card-border bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-muted">
            Evolua, Reposicione e Conquiste — com a linguagem do mercado.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Currículo", "LinkedIn", "Cargo-alvo", "Vaga", "Plano"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-card-border bg-muted-bg px-3 py-1 text-xs font-semibold text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* como funciona */}
      <section id="como-funciona" className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-primary">Como funciona</p>
            <h2 className="mt-2 font-display text-3xl text-foreground sm:text-4xl">
              Quatro passos. Zero enrolação.
            </h2>
            <p className="mt-3 text-muted leading-relaxed">
              Do material que você já tem até um plano que dá para executar na semana.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                icon: FileText,
                t: "Envie seus materiais",
                d: "Currículo e LinkedIn em texto. PDF fica guardado; o texto alimenta a análise.",
              },
              {
                n: "02",
                icon: Target,
                t: "Defina o alvo",
                d: "Cargo, área e senioridade — ou peça sugestões se ainda não souber.",
              },
              {
                n: "03",
                icon: Sparkles,
                t: "Receba o diagnóstico",
                d: "Recomendações, aderência, tradução da experiência e plano.",
              },
              {
                n: "04",
                icon: GitCompare,
                t: "Ajuste e reanalise",
                d: "Marque ações feitas e compare a evolução entre versões.",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="group relative overflow-hidden rounded-3xl border border-card-border bg-card p-6 shadow-[var(--shadow)] transition hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-[var(--shadow-lg)]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-white">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-3xl text-neutral-300">{step.n}</span>
                </div>
                <h3 className="mt-5 text-base font-semibold tracking-tight">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* bento */}
      <section className="border-y border-card-border bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-primary">O que você recebe</p>
            <h2 className="mt-2 font-display text-3xl text-foreground sm:text-4xl">
              Um gêmeo profissional que fala a língua do mercado
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-6">
            <Card className="md:col-span-4 border-orange-100 bg-gradient-to-br from-white to-primary-soft/60 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl">Recomendações priorizadas</h3>
              <p className="mt-2 max-w-lg text-muted leading-relaxed">
                Impacto, esforço e urgência em cada item — com ação clara e justificativa.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Alto impacto", "Baixo esforço", "Posicionamento", "Evidência"].map(
                  (t) => (
                    <Badge key={t} tone="primary">
                      {t}
                    </Badge>
                  )
                )}
              </div>
            </Card>

            <Card className="md:col-span-2 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">Aderência 0–100</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Score fixo por faixas. Lacuna real, comunicação e evidência separadas.
              </p>
            </Card>

            <Card className="md:col-span-2 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                <MessageSquareQuote className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">Tradução honesta</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Linguagem de mercado com alerta de autenticidade em toda sugestão.
              </p>
            </Card>

            <Card className="md:col-span-2 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-muted-bg text-foreground">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">Plano de evolução</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Ações com prazo, critério de sucesso e progresso visível.
              </p>
            </Card>

            <Card className="md:col-span-2 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-muted-bg text-foreground">
                <Lock className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">Privacidade real</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                RLS no banco: só você acessa suas análises e arquivos.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* trust */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-card-border bg-ink text-white shadow-[var(--shadow-lg)]">
            <div className="grid lg:grid-cols-[1fr_0.9fr]">
              <div className="p-8 sm:p-12">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary ring-1 ring-primary/40">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h2 className="mt-6 font-display text-3xl sm:text-4xl">
                  Compromisso de honestidade
                </h2>
                <p className="mt-4 max-w-lg text-neutral-300 leading-relaxed">
                  CareerTwin não promete contratação e não inventa experiências. A proposta
                  é ajudar você a comunicar melhor sua trajetória e decidir com estratégia.
                </p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Não cria métricas falsas",
                    "Não substitui recrutadores",
                    "Lacuna real ≠ comunicação",
                    "Seus dados ficam só com você",
                  ].map((t) => (
                    <li
                      key={t}
                      className="flex items-center gap-2 text-sm font-medium text-neutral-100"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-white/10 bg-neutral-900 p-8 sm:p-12 lg:border-l lg:border-t-0">
                <p className="text-sm font-bold text-primary">Para quem é</p>
                <ul className="mt-6 space-y-5">
                  {[
                    {
                      t: "Recolocação",
                      d: "Quer clareza no que melhorar primeiro no perfil.",
                    },
                    {
                      t: "Transição de carreira",
                      d: "Precisa traduzir experiência sem forçar narrativa.",
                    },
                    {
                      t: "Sênior em TI ou outras áreas",
                      d: "Posicionamento confuso no LinkedIn apesar do histórico forte.",
                    },
                  ].map((item) => (
                    <li key={item.t}>
                      <p className="font-semibold text-white">{item.t}</p>
                      <p className="mt-1 text-sm text-neutral-300 leading-relaxed">
                        {item.d}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-primary px-8 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/15 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-black/10 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl text-white sm:text-4xl">
                Pronto para clarear seu caminho?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-base font-medium text-white/95">
                Crie sua conta e gere a primeira análise com os materiais que você já tem.
              </p>
              <div className="mt-8">
                <Link href="/cadastro">
                  <Button size="lg" variant="white">
                    Criar minha primeira análise
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-card-border bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
          <Logo href="/" size="md" />
          <p className="text-sm text-muted text-center sm:text-right">
            Evolua, Reposicione e Conquiste · © {new Date().getFullYear()}
            <br />
            Mentor de carreira · Sem promessas de contratação
          </p>
        </div>
      </footer>
    </div>
  );
}
