import { Smartphone, TrendingUp } from "lucide-react";
import CtaButton from "./CtaButton";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Modern textured background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {/* Base tint */}
        <div className="absolute inset-0 bg-secondary" />

        {/* Subtle grid with soft fade */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(13,13,13,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(13,13,13,0.04)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_90%_80%_at_50%_35%,#000_70%,transparent_100%)]" />

        {/* Green accent glows */}
        <div className="absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute -bottom-20 left-1/4 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        {/* Fade to white at the bottom for a clean transition */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-8">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-6xl">
            Votre présence en ligne,{" "}
            <span className="text-primary">simple et performante</span>
          </h1>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <CtaButton>Lancer mon projet</CtaButton>
            <CtaButton href="#services" variant="outline">
              Découvrir les services
            </CtaButton>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            {[
              { value: "Dès 250€", label: "Tarifs transparents" },
              { value: "100%", label: "Responsive" },
              { value: "Sur-mesure", label: "Design adapté" },
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

        {/* Right: modern browser mockup */}
        <div className="relative mx-auto hidden w-full max-w-md lg:block">
          {/* Glow behind */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-[2rem] bg-primary/20 blur-2xl"
          />

          {/* Browser window */}
          <div className="animate-float overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-2xl shadow-ink/15">
            {/* Chrome bar */}
            <div className="flex items-center gap-2 border-b border-ink/5 bg-secondary px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-ink/15" />
              <span className="h-3 w-3 rounded-full bg-ink/15" />
              <span className="h-3 w-3 rounded-full bg-ink/15" />
              <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1 text-xs text-ink/40">
                synerj.fr
              </div>
            </div>

            {/* Viewport / mini site */}
            <div className="space-y-5 p-5">
              {/* mini nav */}
              <div className="flex items-center justify-between">
                <span className="h-5 w-5 rounded-md bg-primary" />
                <div className="flex items-center gap-2">
                  <span className="h-2 w-8 rounded-full bg-ink/10" />
                  <span className="h-2 w-8 rounded-full bg-ink/10" />
                  <span className="h-5 w-14 rounded-full bg-primary/20" />
                </div>
              </div>

              {/* hero block */}
              <div className="space-y-2.5 pt-2">
                <div className="h-3 w-4/5 rounded-full bg-ink/15" />
                <div className="h-3 w-3/5 rounded-full bg-ink/10" />
                <div className="h-2 w-full rounded-full bg-ink/5" />
                <div className="h-2 w-2/3 rounded-full bg-ink/5" />
                <div className="mt-3 h-8 w-28 rounded-lg bg-primary" />
              </div>

              {/* cards row */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="space-y-2 rounded-lg border border-ink/5 bg-secondary/60 p-3"
                  >
                    <span className="block h-5 w-5 rounded-md bg-primary/30" />
                    <span className="block h-2 w-full rounded-full bg-ink/10" />
                    <span className="block h-2 w-2/3 rounded-full bg-ink/5" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating card: responsive */}
          <div className="animate-float-slow absolute -bottom-6 -left-8 flex items-center gap-3 rounded-xl border border-ink/5 bg-white p-3 pr-4 shadow-xl shadow-ink/10">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Smartphone className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-bold text-ink">100% responsive</p>
              <p className="text-[11px] text-ink/55">Mobile · Tablette · Desktop</p>
            </div>
          </div>

          {/* Floating card: performance */}
          <div className="animate-float absolute -right-6 top-10 flex items-center gap-3 rounded-xl border border-ink/5 bg-white p-3 pr-4 shadow-xl shadow-ink/10">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <TrendingUp className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-bold text-ink">Performant</p>
              <p className="text-[11px] text-ink/55">Rapide &amp; optimisé SEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
