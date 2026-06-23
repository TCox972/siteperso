import Link from "next/link";
import { Mail } from "lucide-react";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#portfolio", label: "Portfolio" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white">
      {/* Final CTA band */}
      <div className="bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-14 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Prêt à lancer votre site&nbsp;?
            </h2>
            <p className="mt-2 text-white/70">
              Échangeons sur votre projet — réponse rapide et devis gratuit.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex flex-none items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            <Mail className="h-4 w-4" />
            Me contacter
          </Link>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <Link
          href="#accueil"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-ink"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
            S
          </span>
          Syner<span className="text-primary">J</span>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink/60 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/contact"
            className="text-sm text-ink/60 transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        <p className="text-sm text-ink/50">
          © {new Date().getFullYear()} SynerJ. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
