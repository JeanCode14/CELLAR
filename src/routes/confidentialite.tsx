import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CONTACT_EMAIL } from "@/data/site";
import { LEGAL } from "@/data/legal";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/confidentialite")({ component: Privacy });

function Privacy() {
  const { t, lang } = useI18n();
  const p = t.privacy;

  return (
    <>
      <PageHero kicker={p.kicker} title={p.title}>
        {p.lead}
      </PageHero>

      <section className="wrap max-w-4xl py-16 md:py-20">
        <div data-stagger className="space-y-10">
          {p.sections.map((s, i) => (
            <div key={s.title} className="grid gap-3 md:grid-cols-[3rem_1fr]">
              <span className="font-display text-2xl font-semibold text-teal" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-2xl font-semibold">{s.title}</h2>
                {s.paras.map((para) => (
                  <p key={para} className="mt-3 max-w-3xl leading-relaxed text-slate">
                    {para}
                  </p>
                ))}
                {i === 0 && (
                  <Link to="/mentions-legales" className="mt-3 inline-block text-sm font-semibold text-science hover:underline">
                    {t.footer.legal}
                  </Link>
                )}
                {i === 4 && (
                  <a
                    href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement"
                    className="mt-3 inline-block text-sm font-semibold text-science hover:underline"
                  >
                    {p.githubPolicy}
                  </a>
                )}
              </div>
            </div>
          ))}

          <div className="rounded-2xl border border-line bg-surface p-6 md:p-8">
            <h2 className="text-xl font-semibold">{p.contactTitle}</h2>
            <p className="mt-2 text-slate">
              {CONTACT_EMAIL ? (
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-science hover:underline">
                  {CONTACT_EMAIL}
                </a>
              ) : (
                p.emailPending
              )}
            </p>
          </div>

          <p className="text-sm text-slate">
            {p.updated} {new Date(LEGAL.updated).toLocaleDateString(lang, { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </section>
    </>
  );
}
