import type { Metadata } from "next";
import { JetBrains_Mono, Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteMeta } from "@/data/landing-page";
import "./globals.css";

const sans = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
  // Roboto no Google Fonts: 400, 500, 700, 900 (sem 600/800)
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-face",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
  },
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
      className={`${sans.variable} ${mono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
