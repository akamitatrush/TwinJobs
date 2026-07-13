import Link from "next/link";
import { SectionContainer } from "@/components/layout/section-container";
import { companiesSection } from "@/data/landing-page";
import { Building2 } from "lucide-react";

export function CompaniesSection() {
  return (
    <section
      id="empresas"
      className="landing-section bg-[var(--muted-bg)]"
      aria-labelledby="empresas-title"
    >
      <SectionContainer>
        <div className="grid items-center gap-8 rounded-2xl border border-[var(--card-border)] bg-white p-8 shadow-[var(--shadow)] md:grid-cols-[auto_1fr_auto] md:p-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--brand-soft)] text-[var(--brand)]">
            <Building2 className="h-7 w-7" strokeWidth={1.75} aria-hidden />
          </div>
          <div>
            <h2
              id="empresas-title"
              className="text-2xl font-bold tracking-tight text-foreground md:text-3xl"
            >
              {companiesSection.title}
            </h2>
            <p className="mt-3 max-w-xl text-base leading-6 text-muted">
              {companiesSection.description}
            </p>
          </div>
          <Link
            href={companiesSection.cta.href}
            className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-[var(--border-strong)] px-5 text-sm font-semibold text-foreground transition-colors hover:bg-[var(--muted-bg)] md:w-auto"
          >
            {companiesSection.cta.label}
          </Link>
        </div>
      </SectionContainer>
    </section>
  );
}
