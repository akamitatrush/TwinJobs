import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  href?: string | null;
  /** sm header | md auth | lg footer | xl | hero landing */
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  className?: string;
  /** Pill branco atrás do logo (só se fundo for escuro) */
  onDark?: boolean;
  priority?: boolean;
  /** Centraliza o logo */
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
 * Logo oficial CareerTwin (ícone + wordmark + tagline).
 * Arquivo: /public/logo-careertwin.png
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
        onDark && "rounded-2xl bg-white px-3 py-2 shadow-md ring-1 ring-black/5"
      )}
    >
      <Image
        src="/logo-careertwin.png"
        alt="CareerTwin — Evolua, Reposicione e Conquiste"
        width={s.w}
        height={s.h}
        priority={priority}
        className={cn(s.className, "object-contain", centered ? "object-center" : "object-left", className)}
      />
    </span>
  );

  if (href === null) {
    return mark;
  }

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
