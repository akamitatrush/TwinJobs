"use client";

import { useState } from "react";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProductPreview } from "@/components/shared/product-preview";
import { features } from "@/data/landing-page";
import { cn } from "@/lib/utils";
import { Check, ChevronDown } from "lucide-react";

function FeatureBody({
  feature,
}: {
  feature: (typeof features)[number];
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
      <div>
        <h3 className="text-xl font-bold text-foreground md:text-2xl md:leading-8">
          {feature.title}
        </h3>
        <p className="mt-3 text-base leading-6 text-muted md:text-lg md:leading-7">
          {feature.description}
        </p>
        {"benefits" in feature && feature.benefits && (
          <ul className="mt-6 space-y-3">
            {feature.benefits.map((b) => (
              <li key={b} className="flex gap-2.5 text-sm text-foreground">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand)]">
                  <Check className="h-3 w-3" strokeWidth={2.5} />
                </span>
                {b}
              </li>
            ))}
          </ul>
        )}
        {"example" in feature && feature.example && (
          <div className="mt-6 space-y-3">
            <div className="rounded-xl border border-[var(--card-border)] bg-[var(--muted-bg)] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-fg">
                Antes
              </p>
              <p className="mt-1 text-sm italic text-muted">
                “{feature.example.before}”
              </p>
            </div>
            <div className="rounded-xl border border-[var(--brand)]/20 bg-[var(--brand-soft)] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--brand-active)]">
                Depois
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                “{feature.example.after}”
              </p>
            </div>
          </div>
        )}
      </div>
      <ProductPreview className="lg:sticky lg:top-28" />
    </div>
  );
}

type FeatureId = (typeof features)[number]["id"];

export function FeaturesSection() {
  const [active, setActive] = useState<FeatureId>(features[0].id);
  const current = features.find((f) => f.id === active) ?? features[0];
  const [openId, setOpenId] = useState<FeatureId | null>(features[0].id);

  return (
    <section
      id="solucoes"
      className="landing-section bg-[var(--muted-bg)]"
      aria-labelledby="solucoes-title"
    >
      <SectionContainer>
        <SectionHeading
          id="solucoes-title"
          title="Tudo o que você precisa para avançar na carreira"
        />

        {/* Desktop tabs */}
        <div className="mt-10 hidden md:block">
          <div
            className="flex flex-wrap gap-2 border-b border-[var(--card-border)] pb-px"
            role="tablist"
            aria-label="Funcionalidades"
          >
            {features.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={active === f.id}
                onClick={() => setActive(f.id)}
                className={cn(
                  "rounded-t-lg px-4 py-3 text-sm font-semibold transition-colors",
                  active === f.id
                    ? "border border-b-white border-[var(--card-border)] bg-white text-[var(--brand)]"
                    : "text-muted hover:text-foreground"
                )}
              >
                {f.title.split(" ").slice(0, 3).join(" ")}…
              </button>
            ))}
          </div>
          <div
            role="tabpanel"
            className="mt-0 rounded-b-2xl rounded-tr-2xl border border-t-0 border-[var(--card-border)] bg-white p-6 shadow-[var(--shadow)] md:p-8"
          >
            <FeatureBody feature={current} />
          </div>
        </div>

        {/* Mobile accordion — conteúdo acessível sem JS via details fallback pattern */}
        <div className="mt-8 space-y-3 md:hidden">
          {features.map((f) => {
            const open = openId === f.id;
            return (
              <div
                key={f.id}
                className="overflow-hidden rounded-xl border border-[var(--card-border)] bg-white shadow-[var(--shadow)]"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : f.id)}
                >
                  <span className="text-sm font-bold text-foreground">{f.title}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-muted transition-transform",
                      open && "rotate-180 text-[var(--brand)]"
                    )}
                    strokeWidth={1.75}
                  />
                </button>
                {open && (
                  <div className="border-t border-[var(--card-border)] px-4 py-5">
                    <FeatureBody feature={f} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Fallback noscript: lista estática */}
        <noscript>
          <div className="mt-8 space-y-8">
            {features.map((f) => (
              <div key={f.id} className="rounded-xl border border-[var(--card-border)] bg-white p-6">
                <FeatureBody feature={f} />
              </div>
            ))}
          </div>
        </noscript>
      </SectionContainer>
    </section>
  );
}
