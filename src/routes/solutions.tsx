import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, KeyRound, MoonStar, Palette } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { suiteApps, statusLabel } from "@/data/apps";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Nos solutions — CYTOVEX" },
      { name: "description", content: "Les logiciels CYTOVEX pour les laboratoires : CELLAR, puis STOCK, EQUIP et DATA." },
    ],
  }),
  component: Solutions,
});

const COMMON = [
  { icon: Compass, title: "Une navigation commune", text: "Qui sait utiliser CELLAR retrouve ses repères dans les logiciels suivants." },
  { icon: KeyRound, title: "Des droits cohérents", text: "Une authentification et une gestion des droits partagées quand les applications sont réunies." },
  { icon: Palette, title: "Une couleur par logiciel", text: "Chaque logiciel a son icône et sa couleur, dans le même langage graphique." },
  { icon: MoonStar, title: "Versions claire et sombre", text: "Chaque interface existe en mode clair et en mode nuit." },
];

function Solutions() {
  return (
    <>
      <PageHero kicker="Nos solutions" title="Un logiciel par besoin du laboratoire.">
        CYTOVEX est la marque mère. Chaque logiciel a son nom et sa fonction, et tous partagent la même ergonomie.
      </PageHero>

      <section className="wrap py-20 md:py-24">
        <ul className="divide-y divide-line border-y border-line">
          {suiteApps.map((app) => {
            const live = app.status !== "preparation";
            return (
              <li key={app.id} className="grid gap-6 py-10 md:grid-cols-[10rem_1fr_auto] md:items-center">
                <div className="flex items-center gap-4 md:block">
                  {app.icon ? (
                    <img src={app.icon} alt="" className="h-20 w-20" />
                  ) : (
                    <span
                      className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed font-display text-2xl font-bold"
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
                      {statusLabel[app.status]}
                    </span>
                  </div>
                  <p className="mt-1 font-medium" style={{ color: live ? "#287bc1" : app.color }}>
                    {app.domain}
                  </p>
                  <p className="mt-3 max-w-2xl leading-relaxed text-slate">{app.description}</p>
                </div>
                {live && (
                  <Link to="/cellar" className="btn-primary">
                    Découvrir CELLAR
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        <p className="mt-5 text-sm text-slate">STOCK, EQUIP et DATA sont des noms de travail, susceptibles d'évoluer.</p>
      </section>

      <section className="border-t border-line bg-mist py-20 md:py-24">
        <div className="wrap">
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-[2.4rem]">Un socle commun à tous les logiciels.</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {COMMON.map((c) => (
              <div key={c.title}>
                <c.icon className="h-6 w-6 text-science" strokeWidth={1.75} />
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
