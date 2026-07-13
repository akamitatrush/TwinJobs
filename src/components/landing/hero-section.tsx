import Link from "next/link";
import { SectionContainer } from "@/components/layout/section-container";
import { OrganicShape } from "@/components/shared/organic-shape";
import { ProductPreview } from "@/components/shared/product-preview";
import { heroContent } from "@/data/landing-page";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="landing-section relative overflow-hidden bg-white pt-10 md:pt-14">
      <SectionContainer>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-[var(--brand)]">
              {heroContent.eyebrow}
            </p>
            <h1 className="mt-4 text-[38px] font-black leading-[44px] tracking-[-0.02em] text-foreground sm:text-5xl sm:leading-[54px] sm:tracking-[-0.025em] xl:text-[64px] xl:leading-[68px] xl:tracking-[-0.03em]">
              {heroContent.titleLines.map((line) => (
                <span
                  key={line}
                  className={
                    line === heroContent.highlight
                      ? "block text-[var(--brand)]"
                      : "block"
                  }
                >
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 text-base leading-6 text-muted md:text-lg md:leading-7">
              {heroContent.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={heroContent.primaryCta.href}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[var(--brand)] px-5 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-hover)] active:bg-[var(--brand-active)] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(251,83,2,0.25)] sm:w-auto"
              >
                {heroContent.primaryCta.label}
                <ArrowRight className="h-[18px] w-[18px]" strokeWidth={1.75} />
              </Link>
              <a
                href={heroContent.secondaryCta.href}
                className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-[var(--border-strong)] bg-white px-5 text-sm font-semibold text-foreground transition-colors hover:bg-[var(--muted-bg)] sm:w-auto"
              >
                {heroContent.secondaryCta.label}
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-fg">{heroContent.microcopy}</p>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <OrganicShape className="absolute -right-6 -top-8 h-64 w-64 md:h-80 md:w-80" />
            {/* Placeholder humano — substituível por foto oficial */}
            <div className="relative overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--muted-bg)] shadow-[var(--shadow)]">
              <div
                className="flex aspect-[4/5] flex-col justify-end bg-gradient-to-br from-[#f5f0ec] via-[#fff0e8] to-[#e8e4df] p-6"
                role="img"
                aria-label="Profissional confiante em ambiente de trabalho contemporâneo — placeholder visual"
              >
                <div className="mb-auto flex h-full flex-1 items-center justify-center">
                  <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white/70 text-5xl font-extrabold text-[var(--brand)] shadow-[var(--shadow)]">
                    CT
                  </div>
                </div>
                <p className="text-sm font-semibold text-foreground">
                  Clareza para o próximo passo
                </p>
                <p className="mt-1 text-xs text-muted">
                  Foto editorial — substitua por asset oficial da marca
                </p>
              </div>
              <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-[280px]">
                <ProductPreview />
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
