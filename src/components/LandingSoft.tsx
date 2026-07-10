"use client";

import Link from "next/link";
import { LogoWordmark } from "@/components/Logo";
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

/** O que o MVP entrega de verdade — copy alinhada ao produto */
const features = [
  {
    icon: FileText,
    title: "Análise a partir do que você envia",
    text: "Você cola o texto do currículo e do LinkedIn (e pode guardar PDF). A análise usa esse conteúdo — não inventamos cargos, ferramentas nem resultados.",
    foot: "PDF é armazenado; o texto colado alimenta o diagnóstico.",
  },
  {
    icon: Sparkles,
    title: "Recomendações priorizadas",
    text: "Lista o que melhorar no currículo e no LinkedIn, com impacto, esforço, urgência e ação sugerida. Você marca o que já fez.",
    foot: "Prioridade, não um texto genérico de chat.",
  },
  {
    icon: Target,
    title: "Aderência a cargo e vaga",
    text: "Score de 0 a 100 para o cargo-alvo e, se você colar uma vaga, um diagnóstico extra com recomendação de candidatura.",
    foot: "Não é promessa de vaga — é leitura de alinhamento.",
  },
  {
    icon: MessageSquareQuote,
    title: "Tradução da experiência",
    text: "Sugestões de como reescrever trechos reais em linguagem de mercado, sempre com alerta de autenticidade.",
    foot: "Só use se aquilo realmente fez parte da sua trajetória.",
  },
  {
    icon: GitCompare,
    title: "Plano e reanálise",
    text: "Plano de ações com status. Depois de ajustar materiais, você pode gerar outra análise e ver o comparativo de score.",
    foot: "Histórico no dashboard, progresso visível.",
  },
  {
    icon: Lock,
    title: "Conta e privacidade",
    text: "Login com e-mail. Cada usuário só acessa as próprias análises e arquivos (RLS no banco e pasta privada no storage).",
    foot: "Seus dados não aparecem para outros usuários.",
  },
];

const steps = [
  {
    n: "01",
    time: "cadastro + wizard",
    title: "Crie a conta e envie o que você tem",
    text: "Informe currículo (texto), LinkedIn (link e/ou texto), cargo-alvo e, se quiser, uma vaga. Arquivos complementares são opcionais.",
  },
  {
    n: "02",
    time: "geração da análise",
    title: "Receba um resultado em cinco abas",
    text: "Visão geral, recomendações, aderência, tradução da experiência e plano de evolução — sempre no mesmo formato estruturado.",
  },
  {
    n: "03",
    time: "no seu ritmo",
    title: "Execute, marque e volte se quiser",
    text: "Marque recomendações e ações como feitas. Quando atualizar o material, faça uma reanálise e compare a evolução.",
  },
];

const trust = [
  "Sem promessa de emprego",
  "Sem inventar experiência",
  "Texto do CV / LinkedIn",
  "Vaga opcional",
  "5 abas de resultado",
  "Dados só seus",
];

export function LandingSoft() {
  return (
    <div className="landing-soft relative overflow-x-hidden">
      <div aria-hidden className="pointer-events-none fixed inset-0 site-mesh" />
      <div aria-hidden className="pointer-events-none fixed inset-0 site-noise" />

      {/* NAV */}
      <nav
        className="fixed inset-x-0 top-0 z-[100] border-b border-[var(--site-border)]/80 bg-[var(--site-bg)]/80 backdrop-blur-xl"
        aria-label="Navegação principal"
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-3.5">
          <LogoWordmark href="/" size="sm" />

          <ul className="hidden items-center gap-8 md:flex">
            {[
              { href: "#como-funciona", label: "Como funciona" },
              { href: "#o-que-voce-recebe", label: "O que entregamos" },
              { href: "#limites", label: "Limites honestos" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-[var(--site-fg-muted)] no-underline transition-colors hover:text-[var(--site-fg)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden rounded-full border border-[var(--site-border-strong)] bg-[var(--site-card-bg)] px-[18px] py-2.5 text-sm font-medium text-[var(--site-fg)] no-underline sm:inline-flex"
            >
              Entrar
            </Link>
            <Link href="/cadastro" className="site-btn-primary !px-[18px] !py-2.5 !text-sm">
              Criar conta
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-[2]">
        {/* HERO */}
        <section className="relative flex min-h-[min(100vh,900px)] flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-32 text-center sm:pt-36">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(at 30% 20%, var(--site-mesh), transparent 50%), radial-gradient(at 80% 60%, var(--site-mesh-2), transparent 60%)",
            }}
          />

          <div className="relative z-[2] w-full max-w-[720px]">
            {/* Logo limpo no início — sem caixa */}
            <div className="site-fade-up mb-8 flex justify-center">
              <LogoWordmark href={null} size="lg" />
            </div>

            <p className="site-eyebrow site-fade-up mb-5 flex items-center justify-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--site-accent)]" />
              MVP · recolocação e transição de carreira
            </p>

            <h1
              className="site-h-display site-fade-up mx-auto text-[clamp(2rem,5vw,3.25rem)]"
              style={{ animationDelay: "0.05s" }}
            >
              Um mentor de carreira para{" "}
              <em className="not-italic text-[var(--site-accent)] sm:italic">
                comunicar melhor
              </em>{" "}
              o que você já fez.
            </h1>

            <p
              className="site-fade-up mx-auto mt-5 max-w-[36rem] text-[16px] leading-relaxed text-[var(--site-fg-muted)] sm:text-[17px]"
              style={{ animationDelay: "0.1s" }}
            >
              O CareerTwin analisa o material que <strong className="font-medium text-[var(--site-fg)]">você envia</strong> —
              currículo, LinkedIn, cargo-alvo e vaga opcional — e devolve recomendações,
              aderência, tradução da experiência e um plano de ações.{" "}
              <strong className="font-medium text-[var(--site-fg)]">
                Não promete emprego. Não inventa trajetória.
              </strong>
            </p>

            <div
              className="site-fade-up mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
              style={{ animationDelay: "0.15s" }}
            >
              <Link href="/cadastro" className="site-btn-primary w-full sm:w-auto">
                Criar conta e analisar
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#como-funciona" className="site-btn-secondary w-full sm:w-auto">
                Ver o fluxo real
              </a>
            </div>

            <p
              className="site-fade-up mt-5 text-sm text-[var(--site-fg-dim)]"
              style={{ animationDelay: "0.18s" }}
            >
              Grátis no MVP · conta com e-mail · resultado salvo no seu dashboard
            </p>

            {/* Preview honesto do que o app mostra */}
            <div
              className="site-fade-up site-card-glass mx-auto mt-14 max-w-lg p-6 text-left sm:p-7"
              style={{ animationDelay: "0.22s" }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--site-fg-dim)]">
                O que você vê depois da análise
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Visão geral com score e confiança da análise",
                  "Recomendações para currículo e LinkedIn",
                  "Aderência ao cargo (e à vaga, se enviou)",
                  "Tradução de trechos + alerta de autenticidade",
                  "Plano de evolução com itens para marcar",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-[var(--site-fg-muted)]"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--site-accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="border-y border-[var(--site-border)] py-7">
          <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-center gap-2 px-6 sm:gap-3">
            {trust.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[var(--site-border)] bg-[var(--site-card-bg)] px-3.5 py-1.5 text-xs font-medium text-[var(--site-fg-muted)] sm:text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* O QUE ENTREGAMOS */}
        <section id="o-que-voce-recebe" className="px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-[1100px]">
            <p className="site-eyebrow mb-4">O que entregamos de verdade</p>
            <h2 className="site-h-display max-w-[18ch] text-[clamp(1.75rem,3.5vw,2.5rem)]">
              Só o que o produto faz hoje
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--site-fg-muted)] leading-relaxed">
              Sem vitrine de features futuras. Abaixo está o que você consegue usar assim que
              criar a conta neste MVP.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <article key={f.title} className="site-card-glass flex flex-col p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[var(--site-accent)]/12 text-[var(--site-accent)]">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.01em] text-[var(--site-fg)]">
                    {f.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--site-fg-muted)]">
                    {f.text}
                  </p>
                  <p className="mt-4 text-xs font-medium text-[var(--site-fg-dim)]">{f.foot}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section
          id="como-funciona"
          className="border-t border-[var(--site-border)] px-6 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-[1100px]">
            <p className="site-eyebrow mb-4">Como funciona</p>
            <h2 className="site-h-display max-w-[16ch] text-[clamp(1.75rem,3.5vw,2.5rem)]">
              Do cadastro ao plano, sem atalho mágico
            </h2>
            <p className="mt-4 max-w-xl text-[var(--site-fg-muted)] leading-relaxed">
              O fluxo real do app — o mesmo que você percorre depois do login.
            </p>

            <div className="mt-14 space-y-10">
              {steps.map((s) => (
                <div
                  key={s.n}
                  className="grid items-start gap-6 border-b border-[var(--site-border)] pb-10 last:border-0 md:grid-cols-[auto_1fr] md:gap-12"
                >
                  <span className="site-step-number">{s.n}</span>
                  <div>
                    <p className="site-eyebrow !normal-case !tracking-wide text-[var(--site-accent)]">
                      {s.time}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.01em] text-[var(--site-fg)] sm:text-2xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-[var(--site-fg-muted)] leading-relaxed">
                      {s.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LIMITES HONESTOS */}
        <section id="limites" className="border-t border-[var(--site-border)] px-6 py-20">
          <div className="mx-auto max-w-[1100px]">
            <div className="site-card-glass p-8 sm:p-12">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[var(--site-accent)] text-white shadow-[0_8px_24px_var(--site-accent-glow)]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="site-eyebrow mb-2 text-[var(--site-accent)]">Transparência</p>
                  <h2 className="site-h-display text-[clamp(1.5rem,3vw,2.25rem)]">
                    O que este MVP <em className="not-italic sm:italic">não</em> faz
                  </h2>
                  <p className="mt-4 max-w-2xl text-[var(--site-fg-muted)] leading-relaxed">
                    Preferimos ser claros. Assim você usa a ferramenta pelo valor certo —
                    posicionamento e plano — e não por uma expectativa que o produto não
                    cumpre.
                  </p>
                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="text-sm font-semibold text-[var(--site-fg)]">Fazemos</p>
                      <ul className="mt-3 space-y-2">
                        {[
                          "Analisar texto de currículo e LinkedIn",
                          "Sugerir melhorias e reescritas com ressalvas",
                          "Avaliar aderência a cargo e vaga colada",
                          "Salvar histórico e permitir reanálise",
                        ].map((t) => (
                          <li
                            key={t}
                            className="flex gap-2 text-sm text-[var(--site-fg-muted)]"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--site-accent)]" />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--site-fg)]">Não fazemos</p>
                      <ul className="mt-3 space-y-2">
                        {[
                          "Prometer contratação ou entrevista",
                          "Inventar experiências ou métricas",
                          "Scraping automático do LinkedIn",
                          "Ler PDF magicamente (cole o texto)",
                          "Buscar vagas na internet por você",
                        ].map((t) => (
                          <li
                            key={t}
                            className="flex gap-2 text-sm text-[var(--site-fg-muted)]"
                          >
                            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center text-[var(--site-fg-dim)]">
                              —
                            </span>
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[var(--site-border)] px-6 py-20 text-center">
          <div className="mx-auto max-w-2xl">
            <div className="mb-6 flex justify-center">
              <LogoWordmark href={null} size="md" />
            </div>
            <p className="site-eyebrow mb-4">Começar</p>
            <h2 className="site-h-display text-[clamp(1.75rem,3.5vw,2.5rem)]">
              Pronto para a primeira análise?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[var(--site-fg-muted)] leading-relaxed">
              Crie a conta, cole o texto do seu currículo e do LinkedIn, informe o cargo-alvo
              e gere o diagnóstico. Você pode voltar depois e marcar o que já executou.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/cadastro" className="site-btn-primary w-full sm:w-auto">
                Criar conta
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/login" className="site-btn-secondary w-full sm:w-auto">
                Já tenho conta
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-[2] border-t border-[var(--site-border)] px-6 py-12">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <LogoWordmark href="/" size="md" />
            <p className="text-sm text-[var(--site-fg-dim)]">
              Evolua, Reposicione e Conquiste.
            </p>
          </div>
          <div className="text-center text-sm text-[var(--site-fg-dim)] sm:text-right">
            <p>© {new Date().getFullYear()} CareerTwin</p>
            <p className="mt-1">Mentor de carreira · MVP · Sem promessas de contratação</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
