import CtaButton from "./CtaButton";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden bg-white pt-16"
    >
      {/* Soft decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(13,13,13,0.04)_1px,transparent_0)] [background-size:32px_32px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary-dark">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Agence web — sites modernes &amp; abordables
          </span>

          <h1 className="mt-8 text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-6xl">
            Votre présence en ligne,{" "}
            <span className="text-primary">simple et performante</span>.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
            SynerJ crée des sites vitrines, landing pages et mini-boutiques
            e-commerce <strong className="font-semibold text-ink">100&nbsp;% responsives</strong>.
            Pensés pour les TPE, PME et indépendants qui veulent un site élégant
            sans exploser leur budget.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CtaButton>Lancer mon projet</CtaButton>
            <CtaButton href="#services" variant="outline">
              Découvrir les services
            </CtaButton>
          </div>

          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            {[
              { value: "À partir de 500€", label: "Tarifs transparents" },
              { value: "100% responsive", label: "Mobile, tablette, desktop" },
              { value: "Sur-mesure", label: "Design adapté à vous" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-base font-bold text-ink sm:text-lg">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-ink/60 sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
