import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import CtaButton from "./CtaButton";

const SITE_URL = "https://chris-goldcut.vercel.app";

const tags = [
  "Réservation en ligne",
  "Boutique e-commerce",
  "Espace client",
  "Back-office admin",
  "Responsive",
];

const shots = [
  {
    src: "/portfolio/goldcut-home-v2.png",
    label: "Page d'accueil",
    url: "chris-goldcut.vercel.app",
    alt: "Page d'accueil du site Gold Cut",
    width: 1280,
    height: 709,
  },
  {
    src: "/portfolio/goldcut-admin-v2.png",
    label: "Espace admin",
    url: "chris-goldcut.vercel.app/admin",
    alt: "Tableau de bord d'administration du site Gold Cut",
    width: 1280,
    height: 709,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-secondary py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Portfolio
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Une réalisation, deux faces du projet
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Du site visible par vos clients au tableau de bord qui vous fait
            gagner du temps : voici un projet livré de A à Z.
          </p>
        </div>

        {/* Featured project */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm">
          {/* Project meta */}
          <div className="flex flex-col gap-6 border-b border-ink/5 p-6 sm:p-10 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-dark">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Projet réalisé
              </span>
              <h3 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">
                Gold Cut
              </h3>
              <p className="mt-1 text-ink/60">
                Salon de barbier — réservation, boutique &amp; gestion complète
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-ink/10 bg-secondary px-3 py-1 text-xs font-medium text-ink/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-none items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
            >
              Visiter le site
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* Screenshots */}
          <div className="grid items-start gap-6 bg-secondary/40 p-6 sm:p-10 md:grid-cols-2">
            {shots.map((shot) => (
              <figure
                key={shot.label}
                className="group overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-md shadow-ink/5"
              >
                {/* browser chrome */}
                <div className="flex items-center gap-2 border-b border-ink/5 bg-secondary px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
                  <div className="ml-3 flex-1 truncate rounded bg-white px-3 py-1 text-xs text-ink/40">
                    {shot.url}
                  </div>
                </div>
                {/* screenshot */}
                <div className="overflow-hidden">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="flex items-center justify-between px-5 py-4">
                  <span className="text-sm font-semibold text-ink">
                    {shot.label}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-ink/40 transition-colors group-hover:bg-primary group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <CtaButton>Donnez vie à votre projet</CtaButton>
        </div>
      </div>
    </section>
  );
}
