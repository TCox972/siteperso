import { ArrowUpRight } from "lucide-react";
import CtaButton from "./CtaButton";

const projects = [
  {
    title: "Atelier Bois & Co",
    category: "Site vitrine — Artisan",
    accent: "from-primary/90 to-primary-dark",
  },
  {
    title: "Studio Yoga Zen",
    category: "Landing page — Bien-être",
    accent: "from-ink to-ink/70",
  },
  {
    title: "La Petite Épicerie",
    category: "Mini e-commerce — Commerce",
    accent: "from-primary to-ink",
  },
  {
    title: "Cabinet Lefèvre",
    category: "Site vitrine — Profession libérale",
    accent: "from-ink/80 to-primary-dark",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-secondary py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Portfolio
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Quelques réalisations
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Un aperçu de projets pensés pour des entreprises et indépendants
            comme vous. Votre site pourrait être le prochain.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-ink/5 bg-white"
            >
              <div
                className={`relative flex aspect-[16/10] items-center justify-center bg-gradient-to-br ${p.accent}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:24px_24px]" />
                <span className="relative text-2xl font-bold tracking-tight text-white/95">
                  {p.title}
                </span>
              </div>
              <div className="flex items-center justify-between p-6">
                <div>
                  <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
                  <p className="mt-1 text-sm text-ink/60">{p.category}</p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-ink/40 transition-colors group-hover:bg-primary group-hover:text-white">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <CtaButton>Donnez vie à votre projet</CtaButton>
        </div>
      </div>
    </section>
  );
}
