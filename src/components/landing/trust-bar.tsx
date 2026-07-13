import { SectionContainer } from "@/components/layout/section-container";
import { trustMessage, trustedCompanies } from "@/data/landing-page";

export function TrustBar() {
  return (
    <section className="border-y border-[var(--card-border)] bg-[var(--muted-bg)] py-8 md:py-10">
      <SectionContainer>
        <p className="text-center text-sm text-muted-fg">{trustMessage}</p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustedCompanies.map((name) => (
            <li
              key={name}
              className="text-sm font-semibold uppercase tracking-wide text-[#b0aaa7]"
            >
              {name}
            </li>
          ))}
        </ul>
      </SectionContainer>
    </section>
  );
}
