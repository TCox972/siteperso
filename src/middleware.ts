import { NextResponse, type NextRequest } from "next/server";

/**
 * Content-Security-Policy stricte basée sur un nonce généré à chaque requête.
 *
 * - 'strict-dynamic' + nonce : seuls les scripts portant le nonce (ceux de
 *   Next.js et notre JSON-LD) peuvent s'exécuter -> protection forte anti-XSS.
 * - La CSP n'est appliquée qu'en production : en développement, elle entrerait
 *   en conflit avec le rechargement à chaud (HMR) de Next.
 */
export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV !== "production") {
    return NextResponse.next();
  }

  const nonce = btoa(crypto.randomUUID());

  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' blob: data:",
    "font-src 'self'",
    "connect-src 'self'",
    "manifest-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].join("; ");

  // La CSP est transmise dans la requête pour que Next.js applique le nonce
  // à ses propres scripts, puis dans la réponse pour le navigateur.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("content-security-policy", csp);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("content-security-policy", csp);
  return response;
}

export const config = {
  matcher: [
    /*
     * Applique la CSP aux pages HTML uniquement, en excluant les ressources
     * statiques et les fichiers générés (déjà couverts par les autres en-têtes).
     */
    {
      source:
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|manifest.webmanifest|icon.png|apple-icon.png|og.png).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
