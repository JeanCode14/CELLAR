import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CONTACT_EMAIL } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CYTOVEX" },
      { name: "description", content: "Contactez CYTOVEX : démonstration de CELLAR, participation aux essais, assistance." },
    ],
  }),
  component: Contact,
});

const SUBJECTS = ["Découvrir CELLAR", "Participer aux essais", "Assistance", "Partenariat", "Autre demande"];

function Contact() {
  const [state, setState] = useState<"idle" | "opened" | "inactive">("idle");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!CONTACT_EMAIL) {
      setState("inactive");
      return;
    }
    const d = new FormData(e.currentTarget);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    const body = [
      `Nom : ${get("name")}`,
      `Laboratoire / organisme : ${get("org")}`,
      `E-mail : ${get("email")}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`[Site] ${get("subject")}`)}&body=${encodeURIComponent(body)}`;
    setState("opened");
  }

  return (
    <>
      <PageHero kicker="Contact" title="Parlons de votre laboratoire.">
        Une démonstration de CELLAR, une participation aux essais ou une question : écrivez-nous.
      </PageHero>

      <section className="wrap grid gap-14 py-20 md:py-24 lg:grid-cols-[1fr_1.6fr]">
        <div className="space-y-6 text-slate">
          <p className="text-lg leading-relaxed">
            Dites-nous qui vous êtes et ce que vous stockez : cuves, congélateurs, nombre d'utilisateurs. Nous vous
            répondons avec une proposition adaptée.
          </p>
          {CONTACT_EMAIL && (
            <p>
              Par e-mail :{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-science hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
          )}
        </div>

        <form onSubmit={submit} className="grid gap-5 rounded-[10px] border border-line bg-white p-7 md:grid-cols-2 md:p-9">
          <label className="grid gap-2 text-sm font-medium">
            Nom et prénom
            <input name="name" required autoComplete="name" className="field" />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Laboratoire ou organisme
            <input name="org" autoComplete="organization" className="field" />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            E-mail professionnel
            <input name="email" type="email" required autoComplete="email" className="field" />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Objet
            <select name="subject" className="field">
              {SUBJECTS.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium md:col-span-2">
            Message
            <textarea name="message" required rows={6} className="field resize-y" />
          </label>
          <div className="flex flex-wrap items-center gap-4 md:col-span-2">
            <button type="submit" className="btn-primary">
              Envoyer le message
            </button>
            {state === "opened" && (
              <p className="text-sm text-teal" role="status">
                Votre messagerie s'ouvre avec le message prêt à envoyer.
              </p>
            )}
            {state === "inactive" && (
              <p className="text-sm text-alert" role="status">
                Le formulaire n'est pas encore relié à une adresse de réception.
              </p>
            )}
          </div>
        </form>
      </section>
    </>
  );
}
