import { cn } from "@/lib/utils";

export function OrganicShape({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("organic-blob absolute bg-[var(--brand-soft)]", className)}
    />
  );
}
