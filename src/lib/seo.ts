/**
 * Configuration SEO centrale du site.
 * L'URL de production peut être surchargée via la variable d'environnement
 * NEXT_PUBLIC_SITE_URL (ex. dans Vercel) sans toucher au code.
 */
export const siteConfig = {
  name: "SynerJ",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://synerj.fr").replace(
    /\/$/,
    ""
  ),
  title: "SynerJ — Création de sites web pour TPE & indépendants",
  description:
    "SynerJ conçoit des sites vitrines, landing pages et boutiques e-commerce responsives, modernes et abordables pour les TPE, PME et indépendants. Tarifs fixes à partir de 250 €.",
  email: "contact@synerj.fr",
  locale: "fr_FR",
  ogImage: "/og.png",
  keywords: [
    "création site web",
    "création site internet",
    "site vitrine",
    "landing page",
    "site e-commerce",
    "site responsive",
    "agence web",
    "développeur web freelance",
    "TPE",
    "PME",
    "indépendant",
    "auto-entrepreneur",
    "SynerJ",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
