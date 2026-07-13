import Link from "next/link";
import { SectionContainer } from "@/components/layout/section-container";
import { OrganicShape } from "@/components/shared/organic-shape";
import { finalCta } from "@/data/landing-page";
import { ArrowRight } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="landing-section relative overflow-hidden bg-[var(--brand-soft)]">
      <OrganicShape className="absolute -left-20 -top-16 h-56 w-56 opacity-80" />
      <OrganicShape className="absolute -bottom-24 -right-16 h-72 w-72 opacity-60" />
      <SectionContainer className="relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-bold leading-9 tracking-tight text-foreground md:text-4xl md:leading-[44px]">
              {finalCta.title}
            </h2>
            <p className="mt-4 text-base leading-6 text-muted md:text-lg md:leading-7">
              {finalCta.description}
            </p>
          </div>
          <Link
            href={finalCta.cta.href}
            className="inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-[var(--brand)] px-6 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-hover)] active:bg-[var(--brand-active)] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(251,83,2,0.25)] sm:w-auto"
          >
            {finalCta.cta.label}
            <ArrowRight className="h-[18px] w-[18px]" strokeWidth={1.75} />
          </Link>
        </div>
      </SectionContainer>
    </section>
  );
}
