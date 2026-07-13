import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { metrics, testimonials } from "@/data/landing-page";
import { Star } from "lucide-react";

export function ResultsSection() {
  const t = testimonials[0];

  return (
    <section
      id="resultados"
      className="landing-section bg-white"
      aria-labelledby="resultados-title"
    >
      <SectionContainer>
        <SectionHeading
          id="resultados-title"
          title="Resultados que transformam carreiras"
          description="Indicadores demonstrativos para a experiência da página — substituíveis por métricas reais de produto."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-[var(--card-border)] bg-white p-5 shadow-[var(--shadow)] sm:p-6"
              >
                <p className="text-3xl font-extrabold tracking-tight text-[var(--brand)] md:text-4xl">
                  {m.value}
                </p>
                <p className="mt-2 text-sm leading-5 text-muted">{m.label}</p>
              </div>
            ))}
          </div>

          <figure className="flex flex-col justify-between rounded-2xl border border-[var(--card-border)] bg-[var(--muted-bg)] p-6 shadow-[var(--shadow)] md:p-8">
            <div>
              <div className="flex gap-1" aria-label={`Avaliação ${t.rating} de 5`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[var(--brand)] text-[var(--brand)]"
                    strokeWidth={1.75}
                  />
                ))}
              </div>
              <blockquote className="mt-5 text-lg font-medium leading-7 text-foreground md:text-xl md:leading-8">
                “{t.quote}”
              </blockquote>
            </div>
            <figcaption className="mt-8 border-t border-[var(--card-border)] pt-5">
              <p className="font-bold text-foreground">{t.name}</p>
              <p className="text-sm text-muted">{t.role}</p>
              <p className="mt-2 text-xs text-muted-fg">
                Depoimento ilustrativo — substituir por casos reais autorizados.
              </p>
            </figcaption>
          </figure>
        </div>
      </SectionContainer>
    </section>
  );
}
