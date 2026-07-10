import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import {
  type ButtonHTMLAttributes,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white shadow-sm hover:bg-primary-hover hover:shadow-md",
        secondary:
          "bg-primary-soft text-orange-950 hover:bg-orange-100",
        ghost: "bg-transparent text-foreground hover:bg-muted-bg",
        outline:
          "border-2 border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50 hover:border-zinc-400",
        danger: "bg-danger text-white hover:bg-red-700",
        dark: "bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm",
        white:
          "bg-white text-zinc-900 hover:bg-zinc-100 shadow-sm font-semibold",
        /** Botão claro sobre fundo escuro (hero) */
        "on-dark":
          "border-2 border-white/80 bg-transparent text-white hover:bg-white hover:text-zinc-900",
      },
      size: {
        sm: "h-9 px-3.5 text-sm rounded-lg",
        md: "h-11 px-5 text-sm rounded-xl",
        lg: "h-12 px-7 text-[15px] rounded-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full h-11 rounded-xl border border-card-border bg-card px-3.5 text-sm text-foreground placeholder:text-muted shadow-sm transition",
        "hover:border-zinc-300 focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none",
        className
      )}
      {...props}
    />
  );
}

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "w-full min-h-[120px] rounded-xl border border-card-border bg-card px-3.5 py-3 text-sm text-foreground placeholder:text-muted shadow-sm transition resize-y",
        "hover:border-zinc-300 focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none",
        className
      )}
      {...props}
    />
  );
}

export function Label({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("block text-sm font-semibold text-zinc-800 mb-1.5", className)}
      {...props}
    />
  );
}

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-card-border bg-card p-5 shadow-[var(--shadow)]",
        className
      )}
      {...props}
    />
  );
}

export function Badge({
  className,
  tone = "neutral",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "neutral" | "primary" | "accent" | "success" | "warning" | "danger";
}) {
  const tones = {
    neutral: "bg-zinc-100 text-zinc-800 border border-zinc-300",
    primary: "bg-teal-100 text-teal-900 border border-teal-300",
    accent: "bg-indigo-100 text-indigo-900 border border-indigo-300",
    success: "bg-emerald-100 text-emerald-900 border border-emerald-300",
    warning: "bg-amber-100 text-amber-950 border border-amber-300",
    danger: "bg-red-100 text-red-900 border border-red-300",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-tight",
        tones[tone],
        className
      )}
      {...props}
    />
  );
}

export function PageShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <Card className="text-center py-14 px-6 border-dashed">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-muted-bg text-muted">
        <span className="text-lg">∅</span>
      </div>
      <h3 className="font-display text-2xl text-foreground mb-2">{title}</h3>
      <p className="text-muted max-w-md mx-auto mb-6 leading-relaxed text-[15px]">
        {description}
      </p>
      {action}
    </Card>
  );
}

export function ScoreRing({
  score,
  size = 88,
  label,
}: {
  score: number;
  size?: number;
  label?: string;
}) {
  const stroke = 7;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, score)) / 100;
  const offset = c * (1 - pct);
  const color =
    score >= 85
      ? "var(--success)"
      : score >= 65
        ? "var(--primary)"
        : score >= 40
          ? "var(--warning)"
          : "var(--danger)";

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--muted-bg)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-semibold tabular-nums tracking-tight text-foreground">
          {score}
        </span>
        {label && (
          <span className="text-[10px] text-muted uppercase tracking-wider font-medium">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}

export function ProgressBar({ value, className }: { value: number; className?: string }) {
  return (
    <div className={cn("h-1.5 w-full rounded-full bg-muted-bg overflow-hidden", className)}>
      <div
        className="h-full rounded-full bg-gradient-to-r from-primary to-teal-400 transition-all duration-500"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}

export function Alert({
  children,
  tone = "info",
  className,
}: {
  children: React.ReactNode;
  tone?: "info" | "warning" | "success" | "danger";
  className?: string;
}) {
  const tones = {
    info: "bg-teal-50 border-teal-300 text-teal-950",
    warning: "bg-amber-50 border-amber-300 text-amber-950",
    success: "bg-emerald-50 border-emerald-300 text-emerald-950",
    danger: "bg-red-50 border-red-300 text-red-950",
  };
  return (
    <div
      className={cn(
        "rounded-xl border px-4 py-3 text-sm leading-relaxed",
        tones[tone],
        className
      )}
    >
      {children}
    </div>
  );
}

export { buttonVariants };
