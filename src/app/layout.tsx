import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SynerJ — Création de sites web pour TPE & indépendants",
  description:
    "SynerJ conçoit des sites vitrines, landing pages et mini-boutiques e-commerce responsives, modernes et abordables pour les petites entreprises et les indépendants.",
  keywords: [
    "création site web",
    "site vitrine",
    "landing page",
    "e-commerce",
    "site responsive",
    "TPE",
    "indépendant",
    "SynerJ",
  ],
  openGraph: {
    title: "SynerJ — Création de sites web",
    description:
      "Sites vitrines, landing pages et mini-boutiques responsives pour TPE, PME et indépendants. À partir de 500 €.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-ink">
        {children}
      </body>
    </html>
  );
}
