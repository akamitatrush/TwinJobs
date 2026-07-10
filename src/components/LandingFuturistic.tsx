"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui";
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
  Zap,
} from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * i,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const steps = [
  {
    n: "01",
    title: "Envie seus materiais",
    text: "Currículo e LinkedIn em texto. Só o que você realmente fez.",
  },
  {
    n: "02",
    title: "Defina o alvo",
    text: "Cargo, área e senioridade — ou peça sugestões de direção.",
  },
  {
    n: "03",
    title: "Diagnóstico com IA",
    text: "Recomendações, aderência, tradução e plano de evolução.",
  },
  {
    n: "04",
    title: "Execute e reanalise",
    text: "Marque ações feitas e compare scores entre versões.",
  },
];

const features = [
  {
    icon: Sparkles,
    title: "Recomendações priorizadas",
    text: "Impacto × esforço × urgência — o que mudar primeiro no currículo e no LinkedIn.",
  },
  {
    icon: Target,
    title: "Aderência 0–100",
    text: "Score claro para cargo e vaga, com lacunas reais vs. de comunicação.",
  },
  {
    icon: MessageSquareQuote,
    title: "Tradução honesta",
    text: "Linguagem de mercado com alerta de autenticidade em cada sugestão.",
  },
  {
    icon: GitCompare,
    title: "Plano + evolução",
    text: "Checklist prático e reanálise para ver se o posicionamento melhorou.",
  },
];

export function LandingFuturistic() {
  return (
    <div className="landing-futuristic min-h-full flex flex-col overflow-x-hidden">
      {/* Header — só CTAs, sem logo pequeno */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070708]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-end gap-2 px-4 sm:h-16 sm:px-6">
          <Link href="/login">
            <Button
              variant="ghost"
              size="sm"
              className="font-semibold text-white/90 hover:bg-white/10 hover:text-white"
            >
              Entrar
            </Button>
          </Link>
          <Link href="/cadastro">
            <Button size="sm" className="shadow-lg shadow-orange-600/20">
              Começar grátis
            </Button>
          </Link>
        </div>
      </header>

      {/* ═══ HERO ═══ */}
      <section className="relative isolate flex flex-1 flex-col items-center px-4 pb-24 pt-10 sm:px-6 sm:pt-14">
        {/* atmosphere */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="grid-bg absolute inset-0" />
          <div className="glow-orb beam absolute -left-32 top-10 h-80 w-80 bg-[#ff5922]/35" />
          <div className="glow-orb absolute -right-24 top-40 h-96 w-96 bg-[#ff5922]/20" />
          <div className="glow-orb absolute bottom-0 left-1/2 h-64 w-[40rem] -translate-x-1/2 bg-[#ff5922]/15" />
          {/* horizon line */}
          <div className="absolute inset-x-0 top-[42%] h-px bg-gradient-to-r from-transparent via-[#ff5922]/40 to-transparent" />
        </div>

        <motion.div
          className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center"
          initial="hidden"
          animate="show"
        >
          <motion.div
            custom={0}
            variants={fade}
            className="mb-2 rounded-full glass px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ffb39a]"
          >
            <span className="inline-flex items-center gap-2">
              <Zap className="h-3.5 w-3.5 text-[#ff5922]" />
              Mentor de carreira com IA
            </span>
          </motion.div>

          {/* Logo grande com ring glow */}
          <motion.div custom={1} variants={fade} className="relative mt-6">
            <div className="absolute -inset-8 rounded-full bg-[#ff5922]/15 blur-2xl" />
            <div className="relative rounded-3xl glass-strong p-4 sm:p-6 shadow-2xl shadow-orange-950/40 ring-1 ring-[#ff5922]/25">
              <Logo href={null} size="hero" centered priority />
            </div>
          </motion.div>

          <motion.h1
            custom={2}
            variants={fade}
            className="mt-10 font-display text-[2.2rem] leading-[1.12] tracking-tight sm:text-5xl md:text-[3.1rem]"
          >
            <span className="text-white">Sua trajetória real, </span>
            <span className="text-gradient-brand">com clareza de mercado</span>
            <span className="text-white">.</span>
          </motion.h1>

          <motion.p
            custom={3}
            variants={fade}
            className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            Analise currículo, LinkedIn e vagas. Receba recomendações, aderência e plano de
            evolução —{" "}
            <span className="text-zinc-200">
              sem inventar experiências e sem prometer contratação
            </span>
            .
          </motion.p>

          <motion.div
            custom={4}
            variants={fade}
            className="mt-9 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center"
          >
            <Link href="/cadastro" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:min-w-[210px] shadow-xl shadow-orange-600/30 ring-1 ring-white/10"
              >
                Começar análise
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="#como-funciona" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="on-dark"
                className="w-full border-white/20 sm:min-w-[210px]"
              >
                Como funciona
              </Button>
            </a>
          </motion.div>

          <motion.ul
            custom={5}
            variants={fade}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-300"
          >
            {["Trajetória real", "Dados só seus", "Plano acionável"].map((t) => (
              <li key={t} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#ff5922]" />
                {t}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* floating metric chips */}
        <div className="relative z-10 mx-auto mt-16 grid w-full max-w-4xl gap-3 sm:grid-cols-3">
          {[
            { k: "Diagnóstico", v: "Score + aderência" },
            { k: "Ação", v: "Recomendações priorizadas" },
            { k: "Evolução", v: "Plano + reanálise" },
          ].map((item, i) => (
            <motion.div
              key={item.k}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="glass rounded-2xl px-5 py-4 text-left"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#ffb39a]">
                {item.k}
              </p>
              <p className="mt-1 text-sm font-semibold text-white">{item.v}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ COMO FUNCIONA ═══ */}
      <section id="como-funciona" className="relative border-t border-white/10 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold text-[#ff5922]">Como funciona</p>
            <h2 className="mt-2 font-display text-3xl text-white sm:text-4xl">
              Quatro passos. Zero enrolação.
            </h2>
            <p className="mt-3 text-zinc-400 leading-relaxed">
              Do material que você já tem até um plano executável na semana.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: 0.05 * i }}
                className="group relative overflow-hidden rounded-3xl glass p-6 transition hover:border-[#ff5922]/40 hover:bg-white/[0.06]"
              >
                <div className="absolute -right-4 -top-4 text-7xl font-display text-white/[0.04]">
                  {step.n}
                </div>
                <span className="inline-flex h-9 items-center rounded-full bg-[#ff5922]/15 px-3 text-xs font-bold text-[#ffb39a] ring-1 ring-[#ff5922]/30">
                  Passo {step.n}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className="relative border-t border-white/10 py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#ff5922]/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold text-[#ff5922]">O que você recebe</p>
            <h2 className="mt-2 font-display text-3xl text-white sm:text-4xl">
              Clareza para decidir o próximo passo
            </h2>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.06 * i }}
                className="flex gap-4 rounded-3xl glass p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ff5922]/15 text-[#ff5922] ring-1 ring-[#ff5922]/30">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{f.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HONESTIDADE ═══ */}
      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#ff5922]/25 bg-gradient-to-br from-[#1a0f0c] to-[#070708] p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#ff5922]/20 blur-3xl" />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ff5922] text-white shadow-lg shadow-orange-600/40">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-display text-2xl text-white sm:text-3xl">
                  Compromisso de honestidade
                </h2>
                <p className="mt-3 max-w-2xl text-zinc-400 leading-relaxed">
                  CareerTwin não promete contratação e não inventa experiências. A proposta é
                  ajudar você a comunicar melhor sua trajetória e decidir com estratégia.
                </p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {[
                    "Não cria métricas falsas",
                    "Não substitui recrutadores",
                    "Lacuna real ≠ comunicação",
                    "Dados só seus (RLS)",
                  ].map((t) => (
                    <li
                      key={t}
                      className="flex items-center gap-2 text-sm font-medium text-zinc-200"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#ff5922]" />
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-500">
                  <Lock className="h-4 w-4 text-[#ff5922]" />
                  Privacidade por design
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="mx-auto mb-8 flex justify-center">
            <div className="rounded-3xl glass-strong p-4 ring-1 ring-[#ff5922]/20">
              <Logo href={null} size="lg" centered />
            </div>
          </div>
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Pronto para a primeira análise?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-zinc-400 leading-relaxed">
            Crie sua conta e envie os materiais que você já tem. Em minutos você sai com
            diagnóstico e próximos passos.
          </p>
          <div className="mt-8">
            <Link href="/cadastro">
              <Button
                size="lg"
                className="min-w-[260px] shadow-xl shadow-orange-600/30"
              >
                Criar minha primeira análise
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-zinc-500">
            Já tem conta?{" "}
            <Link href="/login" className="font-semibold text-[#ffb39a] hover:text-white">
              Entrar
            </Link>
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <Logo href="/" size="md" onDark />
          <div className="text-center text-sm text-zinc-500 sm:text-right">
            <p className="font-medium text-zinc-300">Evolua, Reposicione e Conquiste.</p>
            <p className="mt-1">© {new Date().getFullYear()} CareerTwin</p>
            <p className="mt-0.5">Sem promessas de contratação</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
