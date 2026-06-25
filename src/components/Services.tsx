import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    index: "01",
    title: "Sites vitrines",
    tagline: "Un site élégant qui inspire confiance dès la première visite.",
    image: "/services/vitrine.jpg",
    alt: "Interface de site web moderne affichée à l'écran",
    position: "top" as const,
  },
  {
    index: "02",
    title: "Landing pages",
    tagline: "Une page pensée pour transformer vos visiteurs en clients.",
    image: "/services/landing.jpg",
    alt: "Équipe travaillant sur la maquette d'une page web",
    position: "center" as const,
  },
  {
    index: "03",
    title: "E-commerce",
    tagline: "Vendez vos produits en ligne, simplement et en sécurité.",
    image: "/services/ecommerce-v2.jpg",
    alt: "Boutique en ligne consultée sur un smartphone",
    position: "center" as const,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white pt-24">
      {/* Header */}
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl">
          Nos services
        </h2>
      </div>

      {/* Full-width service bands */}
      <div className="mt-14 border-t border-ink/10">
        {services.map((s) => (
          <Link
            key={s.title}
            href="/contact"
            aria-label={`${s.title} — me contacter`}
            className="group relative block h-[33vh] overflow-hidden border-b border-ink/10"
          >
            {/* Background image */}
            <Image
              src={s.image}
              alt={s.alt}
              fill
              sizes="100vw"
              className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                s.position === "top" ? "object-top" : "object-center"
              }`}
            />
            {/* Legibility gradient */}
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-r from-ink/85 via-ink/45 to-transparent transition-colors duration-300 group-hover:from-ink/90"
            />

            {/* Content */}
            <div className="absolute inset-0">
              <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
                <div>
                  <h3 className="text-4xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-white/80 sm:text-base">
                    {s.tagline}
                  </p>
                </div>

                {/* Arrow */}
                <span className="hidden h-14 w-14 flex-none items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 group-hover:border-primary group-hover:bg-primary sm:flex">
                  <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
