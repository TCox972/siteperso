import { Globe, Rocket, ShoppingBag, Smartphone } from "lucide-react";
import CtaButton from "./CtaButton";

const services = [
  {
    icon: Globe,
    title: "Sites vitrines",
    description:
      "Présentez votre activité avec un site élégant et professionnel qui inspire confiance à vos clients dès le premier coup d'œil.",
  },
  {
    icon: Rocket,
    title: "Landing pages",
    description:
      "Une page unique et percutante, optimisée pour convertir vos visiteurs en prospects et soutenir vos campagnes.",
  },
  {
    icon: ShoppingBag,
    title: "Mini e-commerce",
    description:
      "Vendez en ligne simplement avec une boutique claire, sécurisée et facile à gérer au quotidien.",
  },
  {
    icon: Smartphone,
    title: "100% responsive",
    description:
      "Chaque site s'adapte parfaitement au mobile, à la tablette et à l'ordinateur, pour une expérience irréprochable.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-secondary py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Services
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Des solutions web pensées pour votre réussite
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Que vous lanciez votre activité ou souhaitiez moderniser votre image,
            je vous accompagne avec une solution adaptée à vos besoins.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-ink/5 bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-ink/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <CtaButton>Parlons de vos besoins</CtaButton>
        </div>
      </div>
    </section>
  );
}
