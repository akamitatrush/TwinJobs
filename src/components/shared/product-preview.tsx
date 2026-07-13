import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

export function ProductPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--card-border)] bg-white p-5 shadow-[var(--shadow-lg)]",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-fg">
            Aderência ao cargo
          </p>
          <p className="mt-1 text-sm font-semibold text-foreground">
            Analista de Produto Pleno
          </p>
        </div>
        <span className="inline-flex items-center rounded-full bg-[var(--brand-soft)] px-3 py-1 text-sm font-bold text-[var(--brand-active)]">
          78%
        </span>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-[var(--muted-bg)]">
        <div
          className="h-full rounded-full bg-[var(--brand)]"
          style={{ width: "78%" }}
        />
      </div>
      <div className="mt-4 rounded-xl border border-[var(--card-border)] bg-[var(--muted-bg)] p-3">
        <p className="text-xs font-semibold text-[var(--brand)]">
          Recomendação prioritária
        </p>
        <p className="mt-1 text-sm leading-snug text-foreground">
          Reescrever 3 bullets com evidências reais de impacto no último cargo.
        </p>
        <p className="mt-2 flex items-start gap-1.5 text-xs text-muted">
          <CheckCircle2 className="mt-0.5 h-[14px] w-[14px] shrink-0 text-[var(--brand)]" strokeWidth={1.75} />
          Impacto alto · Esforço médio
        </p>
      </div>
    </div>
  );
}
