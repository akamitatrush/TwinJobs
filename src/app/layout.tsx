import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
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
      className={`${sans.variable} ${display.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased font-sans">{children}</body>
    </html>
  );
}
