"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const budgets = [
  "500 € — 600 €",
  "600 € — 750 €",
  "750 € — 900 €",
  "Je ne sais pas encore",
];

const projectTypes = [
  "Site vitrine",
  "Landing page",
  "Mini e-commerce",
  "Autre / à définir",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: brancher à un service d'envoi (Resend, Formspree, route API…).
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center">
        <CheckCircle2 className="h-14 w-14 text-primary" />
        <h2 className="mt-4 text-2xl font-bold text-ink">Message envoyé&nbsp;!</h2>
        <p className="mt-2 max-w-md text-ink/70">
          Merci pour votre message. Je reviens vers vous très rapidement pour
          échanger sur votre projet.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-primary focus:ring-2 focus:ring-primary/20";
  const labelClass = "mb-1.5 block text-sm font-medium text-ink";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nom complet
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jean Dupont"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="vous@exemple.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="type" className={labelClass}>
            Type de projet
          </label>
          <select id="type" name="type" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Sélectionnez…
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget estimé
          </label>
          <select id="budget" name="budget" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Sélectionnez…
            </option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Votre projet
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Décrivez votre activité et ce que vous souhaitez…"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-primary/30 transition-all hover:bg-primary-dark hover:shadow-md"
      >
        Envoyer ma demande
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>

      <p className="text-center text-xs text-ink/50">
        Réponse sous 24&nbsp;h ouvrées. Aucune donnée n&apos;est partagée à des tiers.
      </p>
    </form>
  );
}
