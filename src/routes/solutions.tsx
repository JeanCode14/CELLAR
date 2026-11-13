import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, KeyRound, MoonStar, Palette } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { suiteApps } from "@/data/apps";
import { useT } from "@/i18n";

export const Route = createFileRoute("/solutions")({
  component: Solutions,
});

const COMMON_ICONS = [Compass, KeyRound, Palette, MoonStar];

function Solutions() {
  const t = useT();
  return (
    <>
      <PageHero kicker={t.solutions.kicker} title={t.solutions.title}>
        {t.solutions.lead}
      </PageHero>

      <section className="wrap py-20 md:py-24">
        <ul data-stagger className="divide-y divide-line border-y border-line">
          {suiteApps.map((app) => {
            const live = app.status !== "preparation";
            return (
              <li key={app.id} className="group grid gap-6 py-10 md:grid-cols-[10rem_1fr_auto] md:items-center">
                <div className="flex items-center gap-4 md:block">
                  {app.icon ? (
                    <img src={app.icon} alt="" className="h-20 w-20 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110" />
                  ) : (
                    <span
                      className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed font-display text-2xl font-bold transition-transform duration-700 group-hover:rotate-45"
                      style={{ borderColor: app.color, color: app.color }}
                      aria-hidden="true"
                    >
                      {app.name[0]}
                    </span>
                  )}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-bold tracking-[0.06em]">{app.name}</h2>
                    <span
                      className={
                        live
                          ? "rounded-full border border-alert/60 px-3 py-0.5 text-xs font-semibold text-alert"
                          : "rounded-full bg-mist px-3 py-0.5 text-xs font-medium text-slate"
                      }
                    >
                      {t.status[app.status]}
                    </span>
                  </div>
                  <p className="mt-1 font-medium" style={{ color: live ? "#287bc1" : app.color }}>
                    {t.apps[app.id].domain}
                  </p>
                  <p className="mt-3 max-w-2xl leading-relaxed text-slate">{t.apps[app.id].description}</p>
                </div>
                {live && (
                  <Link to="/cellar" className="btn-primary glow-btn rounded-full">
                    {t.solutions.discoverCellar}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        <p className="mt-5 text-sm text-slate">{t.solutions.workingNames}</p>
      </section>

      <section className="border-t border-line bg-mist py-20 md:py-24">
        <div className="wrap">
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-[2.4rem]">{t.solutions.commonTitle}</h2>
          <div data-stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.solutions.common.map((c, i) => ({ ...c, icon: COMMON_ICONS[i]! })).map((c) => (
              <div key={c.title} className="lift group rounded-2xl border border-line bg-surface p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-science/10 text-science transition-transform duration-500 group-hover:rotate-12">
                  <c.icon className="h-5 w-5" strokeWidth={1.9} />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
