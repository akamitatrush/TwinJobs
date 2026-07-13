import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { howItWorksSteps } from "@/data/landing-page";
import { FileUser, SearchCheck, Target, Trophy } from "lucide-react";

const icons = {
  FileUser,
  Target,
  SearchCheck,
  Trophy,
} as const;

export function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      className="landing-section bg-white"
      aria-labelledby="como-funciona-title"
    >
      <SectionContainer>
        <SectionHeading
          id="como-funciona-title"
          title="Como a CareerTwin funciona"
          description="Um processo inteligente e objetivo para transformar sua experiência em oportunidades."
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {howItWorksSteps.map((step, i) => {
            const Icon = icons[step.icon];
            return (
              <li
                key={step.title}
                className="rounded-xl border border-[var(--card-border)] bg-white p-6 shadow-[var(--shadow)] transition-transform duration-150 hover:-translate-y-0.5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-soft)] text-[var(--brand)]">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </div>
                <p className="mt-5 font-mono text-xs font-semibold text-[var(--brand)]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-lg font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
              </li>
            );
          })}
        </ol>
      </SectionContainer>
    </section>
  );
}
