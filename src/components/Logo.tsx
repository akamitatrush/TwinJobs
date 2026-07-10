import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  href?: string | null;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  className?: string;
  /**
   * @deprecated Prefer fundo claro ou use LogoWordmark no escuro.
   * Mantido só se precisar de superfície branca mínima.
   */
  onDark?: boolean;
  priority?: boolean;
  centered?: boolean;
};

const sizes = {
  sm: { h: 44, w: 150, className: "h-11 w-auto max-w-[150px]" },
  md: { h: 72, w: 220, className: "h-[4.5rem] w-auto max-w-[220px]" },
  lg: { h: 96, w: 280, className: "h-24 w-auto max-w-[280px]" },
  xl: { h: 140, w: 360, className: "h-[8.5rem] w-auto max-w-[340px] sm:h-36 sm:max-w-[380px]" },
  hero: {
    h: 220,
    w: 480,
    className:
      "h-[11rem] w-auto max-w-[min(90vw,420px)] sm:h-[13.5rem] sm:max-w-[480px] md:h-[15rem] md:max-w-[520px]",
  },
};

/**
 * Logo completo (ícone + wordmark + tagline).
 * Ideal em fundo **claro** — o texto do PNG é preto.
 * Em fundo escuro, use `LogoWordmark` (sem caixinha).
 */
export function Logo({
  href = "/",
  size = "sm",
  className,
  onDark = false,
  priority = false,
  centered = false,
}: LogoProps) {
  const s = sizes[size];

  const mark = (
    <span
      className={cn(
        "inline-flex items-center justify-center",
        centered && "mx-auto",
        // fundo mínimo só se explicitamente pedido — sem ring/sombra pesada
        onDark && "rounded-xl bg-white px-2 py-1.5"
      )}
    >
      <Image
        src="/logo-careertwin.png"
        alt="CareerTwin — Evolua, Reposicione e Conquiste"
        width={s.w}
        height={s.h}
        priority={priority}
        className={cn(
          s.className,
          "object-contain bg-transparent",
          centered ? "object-center" : "object-left",
          className
        )}
      />
    </span>
  );

  if (href === null) return mark;

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center transition-opacity hover:opacity-90",
        centered && "mx-auto"
      )}
      aria-label="CareerTwin — início"
    >
      {mark}
    </Link>
  );
}

/** Só o pictograma laranja (funciona em fundo escuro, sem caixa branca). */
export function LogoIcon({
  size = 36,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={cn("relative inline-block shrink-0 overflow-hidden", className)}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <Image
        src="/logo-careertwin.png"
        alt=""
        width={size * 2}
        height={size * 2}
        className="absolute left-1/2 top-0 h-[185%] w-[185%] max-w-none -translate-x-1/2 object-cover object-top"
      />
    </span>
  );
}

/**
 * Marca limpa para fundo escuro: ícone laranja + texto claro.
 * Sem fundo, sem borda, sem “caixa”.
 */
export function LogoWordmark({
  href = "/",
  className,
  size = "md",
}: {
  href?: string | null;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const icon = size === "sm" ? 28 : size === "lg" ? 44 : 36;
  const text =
    size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : "text-xl";

  const inner = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoIcon size={icon} />
      <span className={cn("font-semibold tracking-[-0.02em] text-white", text)}>
        Career<span className="text-[var(--site-accent,#ff5922)]">Twin</span>
      </span>
    </span>
  );

  if (href === null) return inner;

  return (
    <Link
      href={href}
      className="inline-flex items-center transition-opacity hover:opacity-90"
      aria-label="CareerTwin — início"
    >
      {inner}
    </Link>
  );
}
