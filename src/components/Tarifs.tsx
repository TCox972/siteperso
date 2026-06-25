import { Check, Rocket, LayoutTemplate, ShoppingBag } from "lucide-react";
import CtaButton from "./CtaButton";

const plans = [
  {
    icon: Rocket,
    name: "Landing Page",
    price: "250",
    tagline: "Une page percutante pour vous lancer",
    features: [
      "Page unique sur-mesure",
      "Design moderne & responsive",
      "Formulaire de contact",
      "Optimisation SEO de base",
      "Mise en ligne incluse",
    ],
  },
  {
    icon: LayoutTemplate,
    name: "Site Vitrine",
    price: "500",
    tagline: "Présentez votre activité avec élégance",
    features: [
      "Jusqu'à 5 pages",
      "Design personnalisé",
      "100% responsive",
      "Référencement SEO optimisé",
      "Formulaire & Google Maps",
      "Accompagnement personnalisé",
    ],
  },
  {
    icon: ShoppingBag,
    name: "E-Commerce",
    price: "800",
    tagline: "Vendez vos produits en ligne",
    features: [
      "Boutique en ligne complète",
      "Paiement sécurisé intégré",
      "Gestion des produits",
      "Design responsive premium",
      "SEO & formulaire de contact",
      "Formation à la prise en main",
    ],
  },
];

export default function Tarifs() {
  return (
    <section id="tarifs" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-center text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Nos tarifs
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Un tarif clair et tout compris pour chaque type de projet. Pas de
            coûts cachés, pas de mauvaise surprise.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Subtle accent glow on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/30">
                  <plan.icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-ink">{plan.name}</h3>
                <p className="mt-1 text-sm text-ink/60">{plan.tagline}</p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-5xl font-extrabold tracking-tight text-ink">
                    {plan.price}
                  </span>
                  <span className="text-3xl font-bold text-primary">€</span>
                </div>
                <div className="my-7 h-px w-full bg-ink/10" />
              </div>

              <ul className="relative flex flex-1 flex-col gap-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-ink/75">{feature}</span>
                  </li>
                ))}
              </ul>

              <CtaButton className="relative mt-8 w-full">
                Choisir cette offre
              </CtaButton>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink/55">
          Un besoin spécifique ?{" "}
          <a
            href="/contact"
            className="font-semibold text-primary hover:underline"
          >
            Demandez un devis gratuit
          </a>
          .
        </p>
      </div>
    </section>
  );
}
