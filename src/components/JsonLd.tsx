import { headers } from "next/headers";
import { siteConfig } from "@/lib/seo";

/**
 * Données structurées Schema.org (JSON-LD).
 * Invisibles à l'écran, elles aident les moteurs de recherche à comprendre
 * l'activité, les services et les tarifs de SynerJ.
 */
export default async function JsonLd() {
  // Nonce CSP injecté par le middleware (production) pour autoriser ce script.
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  const offers = [
    { name: "Landing Page", price: "250" },
    { name: "Site Vitrine", price: "500" },
    { name: "Site E-commerce", price: "800" },
  ];

  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    logo: `${siteConfig.url}/synerj.png`,
    description: siteConfig.description,
    email: siteConfig.email,
    priceRange: "250€–800€",
    inLanguage: "fr",
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    serviceType: [
      "Création de site vitrine",
      "Création de landing page",
      "Création de site e-commerce",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Création de sites web",
      itemListElement: offers.map((offer) => ({
        "@type": "Offer",
        name: offer.name,
        price: offer.price,
        priceCurrency: "EUR",
        itemOffered: {
          "@type": "Service",
          name: offer.name,
          provider: { "@id": `${siteConfig.url}/#business` },
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
