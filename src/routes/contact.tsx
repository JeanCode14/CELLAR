import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CONTACT_EMAIL } from "@/data/site";
import { useT } from "@/i18n";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  const t = useT().contact;
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
      `${t.mailName} : ${get("name")}`,
      `${t.mailOrg} : ${get("org")}`,
      `${t.mailEmail} : ${get("email")}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`[Site] ${get("subject")}`)}&body=${encodeURIComponent(body)}`;
    setState("opened");
  }

  return (
    <>
      <PageHero kicker={t.kicker} title={t.title}>
        {t.lead}
      </PageHero>

      <section className="wrap grid gap-14 py-20 md:py-24 lg:grid-cols-[1fr_1.6fr]">
        <div data-reveal className="space-y-6 text-slate">
          <p className="text-lg leading-relaxed">{t.intro}</p>
          {CONTACT_EMAIL && (
            <p>
              {t.byEmail}{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-science hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
          )}
        </div>

        <form data-reveal onSubmit={submit} className="grid gap-5 rounded-2xl border border-line bg-surface p-7 shadow-[0_30px_60px_-35px_rgba(16,36,58,.35)] md:grid-cols-2 md:p-9">
          <label className="grid gap-2 text-sm font-medium">
            {t.name}
            <input name="name" required autoComplete="name" className="field" />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            {t.org}
            <input name="org" autoComplete="organization" className="field" />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            {t.email}
            <input name="email" type="email" required autoComplete="email" className="field" />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            {t.subject}
            <select name="subject" className="field">
              {t.subjects.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium md:col-span-2">
            {t.message}
            <textarea name="message" required rows={6} className="field resize-y" />
          </label>
          <div className="flex flex-wrap items-center gap-4 md:col-span-2">
            <button type="submit" className="btn-primary glow-btn rounded-full">
              {t.send}
            </button>
            {state === "opened" && (
              <p className="text-sm text-teal" role="status">
                {t.opened}
              </p>
            )}
            {state === "inactive" && (
              <p className="text-sm text-alert" role="status">
                {t.inactive}
              </p>
            )}
          </div>
        </form>
      </section>
    </>
  );
}
