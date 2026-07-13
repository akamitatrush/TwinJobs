"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { navigationItems } from "@/data/landing-page";
import { SectionContainer } from "@/components/layout/section-container";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function LandingHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-white/95 backdrop-blur-md transition-shadow duration-150",
        scrolled
          ? "border-[var(--card-border)] shadow-[0_1px_0_rgba(50,45,45,0.08)]"
          : "border-transparent"
      )}
    >
      <SectionContainer className="flex h-16 items-center justify-between gap-4 md:h-[72px]">
        <Logo href="/" size="sm" priority />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-muted transition-colors duration-150 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className="inline-flex h-11 items-center justify-center rounded-lg px-4 text-sm font-semibold text-foreground transition-colors hover:bg-[var(--muted-bg)]"
          >
            Entrar
          </Link>
          <Link
            href="/cadastro"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-[var(--brand)] px-5 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-hover)] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(251,83,2,0.25)] active:bg-[var(--brand-active)]"
          >
            Começar agora
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--border-strong)] text-foreground lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
        </button>
      </SectionContainer>

      {/* Mobile sheet */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/30 transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[min(100%,320px)] flex-col border-l border-[var(--card-border)] bg-white p-6 shadow-[var(--shadow-lg)] transition-transform duration-200 ease-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm font-bold text-foreground">Menu</p>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--border-strong)]"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" strokeWidth={1.75} />
          </button>
        </div>
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-3 text-base font-semibold text-foreground hover:bg-[var(--muted-bg)]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-3 pt-8">
          <Link
            href="/login"
            className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-[var(--border-strong)] text-sm font-semibold"
            onClick={() => setOpen(false)}
          >
            Entrar
          </Link>
          <Link
            href="/cadastro"
            className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-[var(--brand)] text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Começar agora
          </Link>
        </div>
      </div>
    </header>
  );
}
