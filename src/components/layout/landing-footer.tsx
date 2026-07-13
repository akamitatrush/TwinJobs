import Link from "next/link";
import { Logo } from "@/components/Logo";
import { SectionContainer } from "@/components/layout/section-container";
import {
  footerDescription,
  footerGroups,
  socialNetworks,
} from "@/data/landing-page";

export function LandingFooter() {
  return (
    <footer className="border-t border-[var(--card-border)] bg-white">
      <SectionContainer className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo href="/" size="md" />
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
              {footerDescription}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {socialNetworks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-sm font-semibold text-muted transition-colors hover:text-[var(--brand)]"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="text-sm font-bold text-foreground">{group.title}</p>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") || link.href.startsWith("#") ? (
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[var(--card-border)] pt-6 text-sm text-muted-fg sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CareerTwin. Todos os direitos reservados.</p>
          <p>Evolua. Reposicione-se. Conquiste.</p>
        </div>
      </SectionContainer>
    </footer>
  );
}
