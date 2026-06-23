import { Check } from "lucide-react";
import CtaButton from "./CtaButton";

const plans = [
  {
    name: "Landing Page",
    price: "500",
    tagline: "Idéal pour un lancement ou une campagne",
    features: [
      "Page unique sur-mesure",
      "Design moderne & responsive",
      "Formulaire de contact",
      "Optimisation SEO de base",
      "Mise en ligne incluse",
    ],
    featured: false,
  },
  {
    name: "Site Vitrine",
    price: "700",
    tagline: "Le choix des TPE et indépendants",
    features: [
      "Jusqu'à 5 pages",
      "Design personnalisé",
      "100% responsive",
      "Référencement SEO optimisé",
      "Formulaire & Google Maps",
      "Accompagnement personnalisé",
    ],
    featured: true,
  },
  {
    name: "Mini E-commerce",
    price: "900",
    tagline: "Pour vendre vos produits en ligne",
    features: [
      "Boutique en ligne complète",
      "Paiement sécurisé intégré",
      "Gestion des produits",
      "Design responsive premium",
      "SEO & formulaire de contact",
      "Formation à la prise en main",
    ],
    featured: false,
  },
];

export default function Tarifs() {
  return (
    <section id="tarifs" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Tarifs
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Des prix clairs, sans surprise
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Chaque projet est unique : ces tarifs sont des points de départ,
            ajustés selon la complexité de votre besoin.
          </p>
        </div>

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 transition-all duration-200 ${
                plan.featured
                  ? "border-2 border-primary bg-white shadow-xl shadow-primary/10 lg:-translate-y-4"
                  : "border border-ink/10 bg-secondary/50 hover:border-primary/30"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                  Le plus populaire
                </span>
              )}

              <h3 className="text-xl font-bold text-ink">{plan.name}</h3>
              <p className="mt-1 text-sm text-ink/60">{plan.tagline}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-sm font-medium text-ink/60">
                  à partir de
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-ink">
                  {plan.price}
                </span>
                <span className="text-2xl font-bold text-ink">€</span>
              </div>

              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-ink/75">{feature}</span>
                  </li>
                ))}
              </ul>

              <CtaButton
                variant={plan.featured ? "solid" : "outline"}
                className="mt-8 w-full"
              >
                Choisir cette offre
              </CtaButton>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink/55">
          Un besoin spécifique ?{" "}
          <a href="/contact" className="font-semibold text-primary hover:underline">
            Demandez un devis gratuit
          </a>
          .
        </p>
      </div>
    </section>
  );
}
