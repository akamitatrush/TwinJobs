import { LandingHeader } from "@/components/layout/landing-header";
import { LandingFooter } from "@/components/layout/landing-footer";
import { HeroSection } from "@/components/landing/hero-section";
import { TrustBar } from "@/components/landing/trust-bar";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { ResultsSection } from "@/components/landing/results-section";
import { CompaniesSection } from "@/components/landing/companies-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";

/**
 * Landing Human-Centered Editorial SaaS (diretrizes de produto).
 * Força tema claro na vitrine — o app autenticado mantém ThemeProvider.
 */
export function LandingPage() {
  return (
    <div className="landing-root min-h-full flex flex-col">
      <LandingHeader />
      <main className="flex-1">
        <HeroSection />
        <TrustBar />
        <HowItWorksSection />
        <FeaturesSection />
        <ResultsSection />
        <CompaniesSection />
        <FinalCtaSection />
      </main>
      <LandingFooter />
    </div>
  );
}
