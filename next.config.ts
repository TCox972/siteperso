import type { NextConfig } from "next";

/**
 * En-têtes de sécurité appliqués à toutes les réponses.
 * La Content-Security-Policy (avec nonce) est gérée séparément dans
 * src/middleware.ts car elle doit être générée par requête.
 */
const securityHeaders = [
  // Force HTTPS pendant 2 ans, sous-domaines inclus, éligible au preload.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Empêche l'inclusion du site dans une iframe (anti-clickjacking).
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Empêche le navigateur de deviner le type MIME.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Ne transmet pas l'URL complète aux sites tiers.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Désactive les API sensibles non utilisées par le site.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  // Isole le contexte de navigation (protection Spectre / cross-origin).
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
];

const nextConfig: NextConfig = {
  // Masque l'en-tête "X-Powered-By: Next.js".
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
