import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CONTACT_EMAIL } from "@/data/site";
import { HOST, LEGAL } from "@/data/legal";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/mentions-legales")({ component: LegalNotice });

function LegalNotice() {
  const { t, lang } = useI18n();
  const l = t.legal;
  const pending = (v: string, fallback = l.pending) => v || <span className="text-slate italic">{fallback}</span>;

  const editor: Array<[string, React.ReactNode]> = [
    [l.name, LEGAL.name],
    [l.form, pending(LEGAL.legalForm)],
    [l.capital, pending(LEGAL.capital)],
    [l.address, pending(LEGAL.address)],
    [l.registration, pending(LEGAL.registration)],
    [l.vat, pending(LEGAL.vat)],
    [
      l.email,
      CONTACT_EMAIL ? (
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-science hover:underline">
          {CONTACT_EMAIL}
        </a>
      ) : (
        <Link to="/contact" className="text-science hover:underline">
          {t.nav.contact}
        </Link>
      ),
    ],
  ];

  return (
    <>
      <PageHero kicker={l.kicker} title={l.title}>
        {l.lead}
      </PageHero>

      <section className="wrap max-w-4xl py-16 md:py-20">
        <div data-stagger className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold">{l.editorTitle}</h2>
            <dl className="mt-5 divide-y divide-line rounded-2xl border border-line bg-surface">
              {editor.map(([k, v]) => (
                <div key={k} className="grid gap-1 px-5 py-4 sm:grid-cols-[14rem_1fr] sm:gap-4">
                  <dt className="text-sm font-medium text-slate">{k}</dt>
                  <dd className="text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">{l.directorTitle}</h2>
            <p className="mt-4 text-ink">{pending(LEGAL.director, l.toCome)}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">{l.hostTitle}</h2>
            <address className="mt-4 not-italic leading-relaxed text-ink">
              {HOST.name}
              <br />
              {HOST.address}
              <br />
              {l.phone} : {HOST.phone}
              <br />
              <a href={HOST.url} className="text-science hover:underline">
                {HOST.url.replace("https://", "")}
              </a>
            </address>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">{l.ipTitle}</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-slate">{l.ipText}</p>
          </div>

          <p className="text-sm text-slate">
            {l.updated} {new Date(LEGAL.updated).toLocaleDateString(lang, { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </section>
    </>
  );
}
