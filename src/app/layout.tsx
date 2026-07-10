import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans, Spectral } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const display = Spectral({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "CareerTwin — Evolua, Reposicione e Conquiste",
  description:
    "Mentor de carreira com IA. Analise currículo, LinkedIn e vagas. Receba recomendações, diagnóstico de aderência e plano de evolução. Sem promessas de contratação.",
  icons: {
    icon: "/logo-careertwin.png",
    apple: "/logo-careertwin.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${sans.variable} ${display.variable} ${mono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased font-sans">{children}</body>
    </html>
  );
}
