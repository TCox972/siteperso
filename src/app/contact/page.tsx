import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail, Clock, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Parlons de votre projet web. Devis gratuit et sans engagement pour votre site vitrine, landing page ou boutique e-commerce.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact — SynerJ",
    description:
      "Parlons de votre projet web. Devis gratuit et sans engagement.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-secondary/40">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink/60 transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour à l&apos;accueil
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Left: intro & infos */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center"
              aria-label="SynerJ — accueil"
            >
              <Image
                src="/synerj.png"
                alt="SynerJ"
                width={1060}
                height={360}
                className="h-10 w-auto"
              />
            </Link>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Discutons de votre projet
            </h1>
            <p className="mt-4 text-ink/70">
              Décrivez-moi votre activité et vos besoins. Je vous recontacte
              rapidement avec des conseils et un devis gratuit, sans engagement.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Email</p>
                  <a
                    href="mailto:contact@synerjdigital.com"
                    className="text-sm text-ink/65 hover:text-primary"
                  >
                    contact@synerjdigital.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Disponibilité</p>
                  <p className="text-sm text-ink/65">
                    Réponse sous 24&nbsp;h ouvrées
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Zone</p>
                  <p className="text-sm text-ink/65">
                    France entière — 100&nbsp;% à distance
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
