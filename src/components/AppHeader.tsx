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

  return (
    <header className="sticky top-0 z-40 border-b border-card-border/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo href="/dashboard" size="sm" priority />

        <nav className="hidden md:flex items-center gap-0.5 rounded-full bg-muted-bg/80 p-1 ring-1 ring-card-border/60">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-all",
                pathname.startsWith(item.href)
                  ? "bg-white text-foreground shadow-sm ring-1 ring-card-border/80"
                  : "text-muted hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {fullName && (
            <span className="text-sm text-muted max-w-[140px] truncate font-medium">
              {fullName}
            </span>
          )}
          <Button variant="ghost" size="sm" onClick={logout} disabled={loading}>
            <LogOut className="h-4 w-4" />
            Sair
          </Button>
        </div>

        <button
          className="md:hidden p-2 rounded-xl hover:bg-muted-bg"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-card-border bg-white px-4 py-3 space-y-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block rounded-xl px-3 py-2.5 text-sm font-medium",
                pathname.startsWith(item.href)
                  ? "bg-primary-soft text-orange-950"
                  : "text-foreground hover:bg-muted-bg"
              )}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={logout}
            className="w-full text-left rounded-xl px-3 py-2.5 text-sm font-medium text-danger hover:bg-red-50"
          >
            Sair
          </button>
        </div>
      )}
    </header>
  );
}

export function MarketingHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/75 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo href="/" size="sm" onDark priority />
        <div className="flex items-center gap-2">
          <Link href="/login">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-white hover:bg-white/15 font-semibold"
            >
              Entrar
            </Button>
          </Link>
          <Link href="/cadastro">
            <Button size="sm" variant="white" className="shadow-md">
              Começar grátis
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
