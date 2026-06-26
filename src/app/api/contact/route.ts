import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const CONTACT_TO = process.env.CONTACT_TO ?? "jornat.jerome@gmail.com";

/**
 * Rate limiting en mémoire : max 5 envois par IP sur une fenêtre de 10 min.
 * Note : best-effort. En environnement serverless (Vercel), l'état n'est pas
 * partagé entre instances et se réinitialise au redéploiement — c'est une
 * première barrière, complémentaire du honeypot.
 */
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const attempts = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: Request): string {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function checkRateLimit(ip: string): { ok: boolean; retryAfter: number } {
  const now = Date.now();

  // Purge occasionnelle pour éviter une croissance mémoire non bornée.
  if (attempts.size > 10000) {
    for (const [key, value] of attempts) {
      if (now > value.resetAt) attempts.delete(key);
    }
  }

  const entry = attempts.get(ip);
  if (!entry || now > entry.resetAt) {
    attempts.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { ok: true, retryAfter: 0 };
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return { ok: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }
  entry.count += 1;
  return { ok: true, retryAfter: 0 };
}

// Échappe le HTML pour éviter toute injection dans l'email.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Retire les retours à la ligne (anti-injection d'en-têtes mail).
function singleLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(request: Request) {
  // Limitation de débit par IP avant tout traitement.
  const ip = getClientIp(request);
  const rate = checkRateLimit(ip);
  if (!rate.ok) {
    return NextResponse.json(
      { error: "Trop de tentatives. Merci de réessayer dans quelques minutes." },
      { status: 429, headers: { "Retry-After": String(rate.retryAfter) } }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const type = typeof body.type === "string" ? body.type.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  // Champ piège anti-spam : rempli uniquement par les robots.
  const honeypot = typeof body.website === "string" ? body.website : "";

  // On fait semblant de réussir pour ne pas informer le bot.
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { error: "Merci de remplir tous les champs obligatoires." },
      { status: 400 }
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Adresse email invalide." },
      { status: 400 }
    );
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: "Message trop long." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.error("Configuration SMTP manquante (voir .env).");
    return NextResponse.json(
      { error: "Le service d'envoi n'est pas configuré pour le moment." },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const subject = `Nouveau contact SynerJ — ${singleLine(name)}`;
  const text = [
    `Nom : ${name}`,
    `Email : ${email}`,
    `Téléphone : ${phone}`,
    company ? `Entreprise : ${company}` : null,
    type ? `Type de projet : ${type}` : null,
    "",
    "Message :",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#0d0d0d;line-height:1.6">
      <h2 style="color:#40b345;margin:0 0 16px">Nouvelle demande de contact</h2>
      <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
      <p><strong>Email :</strong> ${escapeHtml(email)}</p>
      <p><strong>Téléphone :</strong> ${escapeHtml(phone)}</p>
      ${company ? `<p><strong>Entreprise :</strong> ${escapeHtml(company)}</p>` : ""}
      ${type ? `<p><strong>Type de projet :</strong> ${escapeHtml(type)}</p>` : ""}
      <p style="margin-top:16px"><strong>Message :</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
    </div>`;

  try {
    await transporter.sendMail({
      from: `"SynerJ — Contact" <${SMTP_USER}>`,
      to: CONTACT_TO,
      replyTo: `"${singleLine(name)}" <${email}>`,
      subject,
      text,
      html,
    });
  } catch (err) {
    console.error("Échec de l'envoi du mail :", err);
    return NextResponse.json(
      { error: "L'envoi a échoué. Réessayez ou contactez-nous directement." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
