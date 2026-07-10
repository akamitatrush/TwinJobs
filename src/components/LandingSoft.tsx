"use client";

import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Badge, Button, Card } from "@/components/ui";
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
  UserRound,
} from "lucide-react";

const personas = [
  {
    title: "Recolocação",
    text: "Mandou dezenas de currículos e o silêncio pesa. Quer saber o que ajustar primeiro — sem culpa e sem milagre.",
  },
  {
    title: "Transição de carreira",
    text: "Tem experiência, mas o mercado parece pedir “outro perfil”. Precisa separar o que falta de verdade do que só está mal contado.",
  },
  {
    title: "Sênior com LinkedIn fraco",
    text: "Histórico forte, título genérico. Quer posicionamento à altura do que já entregou — sem inventar promoção.",
  },
];

const features = [
  {
    icon: FileText,
    title: "Parte do que você envia",
    text: "Currículo e LinkedIn em texto (PDF pode ser guardado). A análise usa o conteúdo real — não inventa cargos nem resultados.",
  },
  {
    icon: Sparkles,
    title: "Recomendações priorizadas",
    text: "O que mudar no currículo e no LinkedIn, com impacto, esforço e ação. Você marca o que já fez.",
  },
  {
    icon: Target,
    title: "Aderência a cargo e vaga",
    text: "Score de 0 a 100 para o cargo-alvo e, se colar uma vaga, leitura extra de alinhamento — sem prometer entrevista.",
  },
  {
    icon: MessageSquareQuote,
    title: "Tradução da experiência",
    text: "Sugestões de reescrita em linguagem de mercado, sempre com alerta de autenticidade.",
  },
  {
    icon: GitCompare,
    title: "Plano e reanálise",
    text: "Checklist com status. Atualizou o material? Gere outra análise e compare a evolução.",
  },
  {
    icon: Lock,
    title: "Conta e privacidade",
    text: "Só você vê suas análises e arquivos. Login com e-mail, dados isolados por usuário.",
  },
];

const steps = [
  {
    n: "01",
    title: "Crie a conta e envie o que tem",
    text: "Cole o texto do currículo e do LinkedIn, informe o cargo-alvo e, se quiser, uma vaga. Sem formulário infinito.",
  },
  {
    n: "02",
    title: "Receba o diagnóstico em 5 abas",
    text: "Visão geral, recomendações, aderência, tradução e plano — formato estável, conteúdo da sua trajetória.",
  },
  {
    n: "03",
    title: "Execute e volte se quiser",
    text: "Marque o que concluiu. Quando atualizar os materiais, faça reanálise e veja o comparativo de score.",
  },
];

export function LandingSoft() {
  return (
    <div className="min-h-full flex flex-col bg-[#faf9f7] text-foreground">
      {/* NAV */}
      <nav
        className="sticky top-0 z-50 border-b border-card-border/90 bg-white/90 backdrop-blur-xl"
        aria-label="Navegação principal"
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo href="/" size="sm" priority />

          <ul className="hidden items-center gap-7 md:flex">
            {[
              { href: "#para-quem", label: "Para quem" },
              { href: "#resultado", label: "Resultado" },
              { href: "#como-funciona", label: "Como funciona" },
              { href: "#limites", label: "Limites" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-semibold text-muted transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link href="/login" className="hidden sm:inline-flex">
              <Button variant="ghost" size="sm">
                Entrar
              </Button>
            </Link>
            <Link href="/cadastro">
              <Button size="sm">Começar grátis</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-card-border">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 10% -10%, rgba(255,89,34,0.12), transparent 55%), radial-gradient(ellipse 50% 40% at 90% 20%, rgba(255,89,34,0.06), transparent 50%)",
            }}
          />
          <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
            <p className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-primary-soft px-3 py-1.5 text-xs font-semibold text-[color:var(--brand-hover)]">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Mentor de carreira · Brasil · sem promessa de emprego
            </p>

            <h1 className="mt-6 font-display text-[clamp(2.15rem,5vw,3.35rem)] leading-[1.12] tracking-tight text-foreground">
              Você manda currículo e{" "}
              <em className="not-italic text-primary sm:italic">
                não sabe o que está errado
              </em>
              .
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              O CareerTwin analisa o que você{" "}
              <strong className="font-semibold text-foreground">já viveu</strong> — currículo,
              LinkedIn, cargo-alvo e vaga opcional — e devolve clareza: o que ajustar primeiro,
              se o perfil cola na vaga e um plano executável.{" "}
              <strong className="font-semibold text-foreground">
                Sem inventar trajetória. Sem vender contratação.
              </strong>
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/cadastro">
                <Button size="lg">
                  Quero meu diagnóstico
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href="#resultado">
                <Button size="lg" variant="outline">
                  Ver como fica o resultado
                </Button>
              </a>
            </div>

            <p className="mt-5 text-sm text-muted">
              Conta gratuita no MVP · você cola o texto dos materiais · histórico no dashboard
            </p>
          </div>
        </section>

        {/* PARA QUEM */}
        <section id="para-quem" className="border-b border-card-border bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-bold text-primary">Para quem é</p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-foreground sm:text-[2.15rem]">
              Feito para quem está no meio da névoa da recolocação
            </h2>
            <p className="mt-3 max-w-xl text-muted leading-relaxed">
              Não é job board. Não é gerador de CV milagroso. É um espaço para entender o
              posicionamento e decidir o próximo passo com mais calma.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {personas.map((p) => (
                <Card key={p.title} variant="interactive" className="h-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft text-primary">
                    <UserRound className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTADO — demo */}
        <section id="resultado" className="border-b border-card-border py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
              <div>
                <p className="text-sm font-bold text-primary">Por dentro do produto</p>
                <h2 className="mt-2 font-display text-3xl tracking-tight text-foreground sm:text-[2.15rem]">
                  Assim fica o resultado — de verdade
                </h2>
                <p className="mt-3 text-muted leading-relaxed">
                  Depois do wizard, você abre uma análise com score, confiança e cinco abas.
                  Abaixo é um{" "}
                  <strong className="font-semibold text-foreground">exemplo ilustrativo</strong>{" "}
                  (números fictícios), no mesmo formato que o app usa.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {[
                    "Visão geral com o que priorizar",
                    "Recomendações que você marca como feitas",
                    "Aderência ao cargo e à vaga (se enviou)",
                    "Tradução com alerta de autenticidade",
                    "Plano de evolução no seu ritmo",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <Card variant="elevated" padding="none" className="overflow-hidden">
                <div className="flex items-center justify-between border-b border-card-border bg-muted-bg/40 px-5 py-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Exemplo · não é o seu resultado
                  </span>
                  <Badge tone="success">Concluída</Badge>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-muted">Score de aderência</p>
                      <p className="mt-1 font-display text-5xl font-semibold text-foreground">
                        68
                      </p>
                      <p className="mt-1 text-sm font-semibold text-primary">
                        Boa aderência · confiança média
                      </p>
                    </div>
                    <div className="h-[72px] w-[72px] rounded-full border-[5px] border-muted-bg border-t-primary border-r-primary/40" />
                  </div>
                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-muted-bg">
                    <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-primary to-[#ff8f66]" />
                  </div>

                  <Card variant="soft" padding="sm" className="mt-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge tone="primary">Comunicação</Badge>
                      <Badge>Impacto alto</Badge>
                      <Badge>Esforço médio</Badge>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-foreground">
                      Reescrever a experiência genérica do último emprego
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      <span className="font-semibold text-foreground">Problema:</span> “Ajudava a
                      equipe no dia a dia” não mostra demanda, ferramenta nem impacto.
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      <span className="font-semibold text-foreground">Ação:</span> detalhar 2–3
                      rotinas reais — sem inventar números.
                    </p>
                    <div className="mt-3 rounded-lg border border-orange-200 bg-primary-soft px-3 py-2 text-[11px] leading-relaxed text-[color:var(--brand-hover)]">
                      Alerta de autenticidade: use a sugestão só se essas atividades realmente
                      fizeram parte da sua experiência.
                    </div>
                  </Card>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {["Visão geral", "Recomendações", "Aderência", "Tradução", "Plano"].map(
                      (tab, i) => (
                        <span
                          key={tab}
                          className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold ${
                            i === 1
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
        </section>

        {/* CTA MEIO */}
        <section className="border-b border-card-border bg-white px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Card
              variant="brand"
              className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"
            >
              <div>
                <p className="text-sm font-semibold text-primary">Pronto para sair da névoa?</p>
                <p className="mt-1 max-w-lg text-muted">
                  Crie a conta, cole o texto do seu material e gere a primeira análise. Leva
                  poucos minutos.
                </p>
              </div>
              <Link href="/cadastro" className="shrink-0">
                <Button size="lg">
                  Criar conta grátis
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </Card>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="border-b border-card-border py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-bold text-primary">Como funciona</p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-foreground sm:text-[2.15rem]">
              Três passos. Sem atalho mágico.
            </h2>
            <p className="mt-3 max-w-xl text-muted leading-relaxed">
              O mesmo fluxo que você percorre depois do login — simples e guiado.
            </p>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {steps.map((s) => (
                <Card key={s.n} className="h-full">
                  <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-primary px-2.5 text-sm font-bold text-white">
                    {s.n}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="border-b border-card-border bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-bold text-primary">O que você leva</p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-foreground sm:text-[2.15rem]">
              Clareza prática — não um monólogo de IA
            </h2>
            <p className="mt-3 max-w-2xl text-muted leading-relaxed">
              Tudo baseado no material que você envia. Formato estável, prioridades e plano
              para executar.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <Card key={f.title} variant="interactive" className="h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* LIMITES */}
        <section id="limites" className="border-b border-card-border py-16 sm:py-20">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <p className="text-sm font-bold text-primary">Limites honestos</p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-foreground sm:text-[2.15rem]">
              Preferimos dizer o que{" "}
              <em className="not-italic text-primary sm:italic">não</em> fazemos
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-muted leading-relaxed">
              Assim você usa a ferramenta pelo valor certo — posicionamento e plano — e não por
              uma expectativa que o produto não cumpre.
            </p>
            <ul className="mx-auto mt-8 max-w-md space-y-2.5 text-left">
              {[
                "Não prometemos contratação nem entrevista",
                "Não inventamos experiências, métricas ou certificações",
                "Não fazemos scraping do LinkedIn — você cola o texto",
                "Não “lemos” PDF sozinhos no MVP — cole o conteúdo para a melhor análise",
                "Não buscamos vagas na internet por você",
              ].map((t) => (
                <li
                  key={t}
                  className="flex gap-3 rounded-xl border border-card-border bg-white px-4 py-3 text-sm text-muted shadow-sm"
                >
                  <span className="font-bold text-primary">—</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
            <p className="text-sm font-bold text-primary">Vamos juntos</p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
              Do silêncio das candidaturas para um plano claro
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted leading-relaxed">
              Crie a conta, cole o texto do seu currículo e do LinkedIn, diga o cargo que busca
              e gere o diagnóstico. Você decide o ritmo.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/cadastro">
                <Button size="lg">
                  Criar conta e começar
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline">
                  Já tenho conta
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-card-border bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <Logo href="/" size="md" />
            <p className="text-sm text-muted">Evolua, Reposicione e Conquiste.</p>
          </div>
          <div className="text-center text-sm text-muted sm:text-right">
            <p>© {new Date().getFullYear()} CareerTwin</p>
            <p className="mt-1">Mentor de carreira · MVP · Sem promessas de contratação</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
