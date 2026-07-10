import Link from "next/link";
import { MarketingHeader } from "@/components/AppHeader";
import { Logo } from "@/components/Logo";
import { Button, Card } from "@/components/ui";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  GitCompare,
  Lock,
  MessageSquareQuote,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

const steps = [
  {
    n: "1",
    title: "Envie currículo e LinkedIn",
    text: "Cole o texto dos seus materiais. Usamos o que você realmente fez — sem inventar.",
  },
  {
    n: "2",
    title: "Informe o cargo-alvo",
    text: "Área, senioridade e, se quiser, uma vaga específica. Ou peça sugestões de cargo.",
  },
  {
    n: "3",
    title: "Receba o diagnóstico",
    text: "Recomendações, aderência, tradução da experiência e plano de evolução.",
  },
  {
    n: "4",
    title: "Ajuste e evolua",
    text: "Marque ações feitas e faça reanálises para comparar seu progresso.",
  },
];

const benefits = [
  {
    icon: FileText,
    title: "Recomendações priorizadas",
    text: "O que mudar no currículo e no LinkedIn, por impacto e esforço — com ação clara.",
  },
  {
    icon: Target,
    title: "Aderência a cargos e vagas",
    text: "Score de 0 a 100 e leitura honesta: lacuna real, de comunicação ou de evidência.",
  },
  {
    icon: MessageSquareQuote,
    title: "Tradução para o mercado",
    text: "Reescreva experiências reais em linguagem competitiva, com alerta de autenticidade.",
  },
  {
    icon: GitCompare,
    title: "Plano + reanálise",
    text: "Checklist prático e comparativo de evolução depois de atualizar seus materiais.",
  },
];

export default function LandingPage() {
  return (
    <div className="flex min-h-full flex-col bg-background">
      <MarketingHeader />

      {/* ═══════════ HERO — marca em destaque ═══════════ */}
      <section className="relative hero-brand overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[color:var(--brand)]/[0.07] blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 pb-16 pt-10 text-center sm:px-6 sm:pb-20 sm:pt-14">
          {/* Logo grande — estrela da landing */}
          <div className="animate-fade-up">
            <Logo href={null} size="hero" centered priority />
          </div>

          <p className="animate-fade-up-delay-1 mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            Mentor de carreira com IA
          </p>

          <h1 className="animate-fade-up-delay-1 mt-4 font-display text-[2.15rem] leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]">
            Transforme sua experiência real em uma narrativa{" "}
            <span className="text-primary">clara e competitiva</span>.
          </h1>

          <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Analise currículo, LinkedIn e vagas de interesse. Receba recomendações,
            diagnóstico de aderência e um plano de evolução —{" "}
            <strong className="font-semibold text-foreground">
              sem prometer contratação e sem inventar experiências
            </strong>
            .
          </p>

          <div className="animate-fade-up-delay-3 mt-9 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <Link href="/cadastro" className="w-full sm:w-auto">
              <Button size="lg" className="w-full shadow-md shadow-orange-900/10 sm:min-w-[200px]">
                Começar análise
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="#como-funciona" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:min-w-[200px]">
                Como funciona
              </Button>
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-foreground">
            {[
              "Baseado no que você já fez",
              "Dados só seus",
              "Plano acionável",
            ].map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════ COMO FUNCIONA ═══════════ */}
      <section
        id="como-funciona"
        className="border-t border-card-border bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold text-primary">Como funciona</p>
            <h2 className="mt-2 font-display text-3xl text-foreground sm:text-[2.15rem]">
              Do material ao plano, em quatro passos
            </h2>
            <p className="mt-3 text-muted leading-relaxed">
              Fluxo guiado, linguagem simples e resultado que você consegue executar.
            </p>
          </div>

          <ol className="mt-12 grid gap-4 sm:grid-cols-2">
            {steps.map((step) => (
              <li key={step.n}>
                <Card className="h-full border-card-border p-6 transition hover:border-orange-200 hover:shadow-[var(--shadow-lg)]">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-base font-bold text-white">
                      {step.n}
                    </span>
                    <div className="text-left">
                      <h3 className="text-base font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══════════ O QUE VOCÊ RECEBE ═══════════ */}
      <section className="border-t border-card-border bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold text-primary">O que você recebe</p>
            <h2 className="mt-2 font-display text-3xl text-foreground sm:text-[2.15rem]">
              Clareza para decidir o próximo passo
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {benefits.map((b) => (
              <Card
                key={b.title}
                className="flex gap-4 p-6 text-left transition hover:border-orange-200"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <b.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{b.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{b.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ HONESTIDADE ═══════════ */}
      <section className="border-t border-card-border bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden border-orange-100 bg-gradient-to-br from-white to-primary-soft/50 p-8 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="font-display text-2xl text-foreground sm:text-3xl">
                  Compromisso de honestidade
                </h2>
                <p className="mt-3 max-w-2xl text-muted leading-relaxed">
                  O CareerTwin não promete contratação e não inventa experiências. A proposta
                  é ajudar você a comunicar melhor sua trajetória e tomar decisões mais
                  estratégicas.
                </p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {[
                    "Não cria métricas falsas",
                    "Não substitui recrutadores",
                    "Diferencia lacuna real de comunicação",
                    "Seus dados ficam só com você (RLS)",
                  ].map((t) => (
                    <li
                      key={t}
                      className="flex items-center gap-2 text-sm font-medium text-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted">
                  <Lock className="h-4 w-4 text-primary" />
                  Privacidade por design — cada usuário só acessa as próprias análises.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ═══════════ CTA FINAL ═══════════ */}
      <section className="border-t border-card-border bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="mx-auto mb-6 flex justify-center">
            <Logo href={null} size="lg" centered />
          </div>
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">
            Pronto para a primeira análise?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted leading-relaxed">
            Crie sua conta e envie os materiais que você já tem. Em poucos minutos você
            sai com um diagnóstico e próximos passos claros.
          </p>
          <div className="mt-8">
            <Link href="/cadastro">
              <Button size="lg" className="min-w-[240px] shadow-md shadow-orange-900/10">
                Criar minha primeira análise
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted">
            Já tem conta?{" "}
            <Link href="/login" className="font-semibold text-primary hover:underline">
              Entrar
            </Link>
          </p>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="border-t border-card-border bg-white py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
          <Logo href="/" size="md" />
          <div className="text-center text-sm text-muted sm:text-right">
            <p className="font-medium text-foreground">Evolua, Reposicione e Conquiste.</p>
            <p className="mt-1">
              © {new Date().getFullYear()} CareerTwin · Mentor de carreira
            </p>
            <p className="mt-0.5">Sem promessas de contratação</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
