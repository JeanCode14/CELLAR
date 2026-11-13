import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, LifeBuoy, MessageSquare } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { useT } from "@/i18n";

export const Route = createFileRoute("/support")({
  component: Support,
});

function Support() {
  const t = useT().support;
  return (
    <>
      <PageHero kicker={t.kicker} title={t.title}>
        {t.lead}
      </PageHero>

      <section data-stagger className="wrap grid gap-6 py-20 md:grid-cols-3 md:py-24">
        <div className="lift group rounded-2xl border border-line bg-surface p-7">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-science/10 text-science transition-transform duration-500 group-hover:rotate-12"><BookOpen className="h-5 w-5" /></span>
          <h2 className="mt-4 text-xl font-semibold">{t.docTitle}</h2>
          <p className="mt-2 leading-relaxed text-slate">{t.docText}</p>
          <p className="mt-4 text-sm font-medium text-slate">{t.docStatus}</p>
        </div>
        <div className="lift group rounded-2xl border border-line bg-surface p-7">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-science/10 text-science transition-transform duration-500 group-hover:rotate-12"><LifeBuoy className="h-5 w-5" /></span>
          <h2 className="mt-4 text-xl font-semibold">{t.helpTitle}</h2>
          <p className="mt-2 leading-relaxed text-slate">{t.helpText}</p>
          <Link to="/contact" className="mt-4 inline-block font-semibold text-science hover:underline">
            {t.helpCta}
          </Link>
        </div>
        <div className="lift group rounded-2xl border border-line bg-surface p-7">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-science/10 text-science transition-transform duration-500 group-hover:rotate-12"><MessageSquare className="h-5 w-5" /></span>
          <h2 className="mt-4 text-xl font-semibold">{t.ideaTitle}</h2>
          <p className="mt-2 leading-relaxed text-slate">{t.ideaText}</p>
          <Link to="/contact" className="mt-4 inline-block font-semibold text-science hover:underline">
            {t.ideaCta}
          </Link>
        </div>
      </section>

      <section id="faq" className="border-t border-line bg-mist py-20 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <h2 className="text-3xl font-semibold leading-tight md:text-[2.4rem]">{t.faqTitle}</h2>
          <div data-stagger className="divide-y divide-line border-y border-line">
            {t.faq.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-semibold">
                  {f.q}
                  <span className="text-2xl font-normal text-science transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl leading-relaxed text-slate animate-in fade-in slide-in-from-top-1 duration-300">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
