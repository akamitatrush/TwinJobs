import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  href?: string | null;
  /** sm: header | md: auth | lg: footer | xl: landing destaque */
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  /** Pill branco atrás do logo (só se fundo for escuro) */
  onDark?: boolean;
  priority?: boolean;
};

const sizes = {
  sm: { h: 40, w: 140, className: "h-10 w-auto max-w-[140px]" },
  md: { h: 64, w: 200, className: "h-16 w-auto max-w-[200px]" },
  lg: { h: 80, w: 240, className: "h-20 w-auto max-w-[240px]" },
  xl: { h: 128, w: 320, className: "h-28 w-auto max-w-[280px] sm:h-32 sm:max-w-[320px]" },
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
}: LogoProps) {
  const s = sizes[size];

  const mark = (
    <span
      className={cn(
        "inline-flex items-center justify-center",
        onDark && "rounded-2xl bg-white px-2.5 py-1.5 shadow-md ring-1 ring-black/5"
      )}
    >
      <Image
        src="/logo-careertwin.png"
        alt="CareerTwin — Evolua, Reposicione e Conquiste"
        width={s.w}
        height={s.h}
        priority={priority}
        className={cn(s.className, "object-contain object-left", className)}
      />
    </span>
  );

  if (href === null) {
    return mark;
  }

  return (
    <Link
      href={href}
      className="inline-flex items-center transition-opacity hover:opacity-90"
      aria-label="CareerTwin — início"
    >
      {mark}
    </Link>
  );
}
