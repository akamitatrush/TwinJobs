"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";
import { LogOut, Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/analise/nova", label: "Nova análise" },
  { href: "/planos", label: "Planos" },
  { href: "/configuracoes", label: "Configurações" },
];

export function AppHeader({ fullName }: { fullName?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function logout() {
    setLoading(true);
    try {
      const supabase = createClient();
      await supabase.auth.signOut();
      router.push("/");
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  const initials =
    fullName
      ?.split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0]?.toUpperCase())
      .join("") || "?";

  return (
    <header className="sticky top-0 z-40 border-b border-card-border/80 bg-white/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo href="/dashboard" size="sm" priority />

        <nav className="hidden md:flex items-center gap-0.5 rounded-full bg-muted-bg/90 p-1 ring-1 ring-card-border/80 shadow-[inset_0_1px_1px_rgba(0,0,0,0.03)]">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-[13px] font-semibold tracking-[-0.01em] transition-all",
                  active
                    ? "bg-white text-foreground shadow-sm ring-1 ring-black/[0.06]"
                    : "text-muted hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2.5">
          {fullName && (
            <div className="flex items-center gap-2 rounded-full border border-card-border bg-white py-1 pl-1 pr-3 shadow-sm">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#ff6b38] to-primary text-[11px] font-bold text-white">
                {initials}
              </span>
              <span className="max-w-[120px] truncate text-sm font-medium text-neutral-700">
                {fullName}
              </span>
            </div>
          )}
          <Button variant="ghost" size="sm" onClick={logout} disabled={loading}>
            <LogOut className="h-4 w-4" />
            Sair
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-card-border bg-white shadow-sm hover:bg-muted-bg"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-card-border bg-white px-4 py-3 space-y-1 shadow-lg">
          {fullName && (
            <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted">
              {fullName}
            </p>
          )}
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block rounded-xl px-3 py-2.5 text-sm font-semibold",
                pathname.startsWith(item.href)
                  ? "bg-primary-soft text-[color:var(--brand-hover)]"
                  : "text-foreground hover:bg-muted-bg"
              )}
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={logout}
            className="w-full text-left rounded-xl px-3 py-2.5 text-sm font-semibold text-danger hover:bg-red-50"
          >
            Sair
          </button>
        </div>
      )}
    </header>
  );
}

/** Header marketing legado — landing usa nav própria */
export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-card-border/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-end gap-2 px-4 sm:px-6">
        <Link href="/login">
          <Button variant="ghost" size="sm">
            Entrar
          </Button>
        </Link>
        <Link href="/cadastro">
          <Button size="sm">Começar grátis</Button>
        </Link>
      </div>
    </header>
  );
}
