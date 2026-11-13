import { createFileRoute, Link } from "@tanstack/react-router";
import { SuiteNetwork } from "@/components/site/SuiteNetwork";
import { NetworkField } from "@/components/site/NetworkField";
import { Marquee } from "@/components/site/Marquee";
import { suiteApps, statusLabel } from "@/data/apps";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CYTOVEX — Science, engineered digitally." },
      {
        name: "description",
        content:
          "CYTOVEX conçoit des solutions logicielles pour les sciences du vivant. Premier logiciel : CELLAR, pour la cryoconservation.",
      },
    ],
  }),
  component: Home,
});

const VALUES = [
  { name: "Rigueur scientifique", text: "Des outils construits à partir des pratiques réelles de la paillasse." },
  { name: "Fiabilité", text: "Chaque donnée enregistrée reste exacte, datée et retrouvable." },
  { name: "Simplicité", text: "Une interface que l'on comprend sans formation de plusieurs jours." },
  { name: "Innovation", text: "Le numérique là où il fait gagner du temps, pas ailleurs." },
  { name: "Sécurité", text: "Des droits par utilisateur et un historique de chaque action." },
];

function Home() {
  const cellar = suiteApps[0]!;
  const upcoming = suiteApps.slice(1);

  return (
    <>
      {/* Hero */}
      <section data-hero className="relative overflow-hidden bg-night">
        <div className="pointer-events-none absolute -right-40 -top-32 h-[36rem] w-[36rem] rounded-full bg-science/25 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-48 left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-teal/15 blur-3xl" aria-hidden="true" />
        <NetworkField />
        <div className="wrap relative grid items-center gap-10 pb-16 pt-32 md:pb-24 md:pt-36 lg:grid-cols-[1.05fr_1fr]">
          <div className="hero-in">
            <p className="font-display text-lg font-medium text-teal">Science, engineered digitally.</p>
            <h1 className="mt-4 text-[2.6rem] font-semibold leading-[1.05] text-white md:text-[3.8rem]">
              Des solutions numériques conçues pour <span className="text-sheen">les laboratoires</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              CYTOVEX édite des logiciels pour les sciences du vivant : des outils modernes et fiables pour gérer les
              échantillons, les stocks, les équipements et les données.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/cellar" className="btn-primary glow-btn rounded-full">
                Découvrir CELLAR
              </Link>
              <Link to="/contact" className="btn-ghost-dark rounded-full">
                Nous contacter
              </Link>
            </div>
          </div>
          <div className="float-slow flex justify-center lg:justify-end">
            <SuiteNetwork />
          </div>
        </div>
      </section>

      <Marquee />

      {/* Présentation */}
      <section className="wrap grid gap-10 py-20 md:grid-cols-[1fr_1.4fr] md:py-28">
        <h2 className="text-3xl font-semibold leading-tight md:text-[2.6rem]">
          Mettre la technologie au service de la recherche.
        </h2>
        <div data-stagger className="space-y-5 text-lg leading-relaxed text-slate">
          <p>
            Dans beaucoup de laboratoires, les échantillons, les stocks et les équipements se gèrent encore avec des
            cahiers et des tableurs. Les informations se perdent, la traçabilité dépend de la mémoire de l'équipe.
          </p>
          <p>
            CYTOVEX conçoit des outils qui simplifient ces tâches, renforcent la traçabilité et facilitent le travail
            des chercheurs, des techniciens et des responsables de laboratoire.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="border-y border-line bg-mist py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-xl text-3xl font-semibold leading-tight md:text-[2.6rem]">
              Un premier logiciel, une gamme en construction.
            </h2>
            <Link to="/solutions" className="font-semibold text-science hover:underline">
              Voir toutes les solutions
            </Link>
          </div>

          <Link
            to="/cellar"
            data-reveal
            className="group relative mt-12 grid items-center gap-8 overflow-hidden rounded-2xl bg-night p-7 text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_rgba(40,123,193,.6)] md:grid-cols-[auto_1fr_auto] md:p-10"
          >
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-cellar/20 blur-3xl transition-opacity duration-700 group-hover:opacity-100 md:opacity-60" aria-hidden="true" />
            <img src={cellar.icon} alt="" className="relative h-24 w-24 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110 md:h-28 md:w-28" />
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-3xl font-bold tracking-[0.06em] text-white">{cellar.name}</h3>
                <span className="rounded-full border border-alert/60 px-3 py-0.5 text-xs font-semibold text-alert">
                  {statusLabel[cellar.status]}
                </span>
              </div>
              <p className="mt-1 font-medium" style={{ color: cellar.color }}>
                {cellar.domain}
              </p>
              <p className="mt-3 max-w-2xl leading-relaxed text-white/70">{cellar.description}</p>
            </div>
            <span className="btn-ghost-dark relative rounded-full group-hover:border-white/60">Voir CELLAR</span>
          </Link>

          <ul data-stagger className="mt-5 grid gap-5 md:grid-cols-3">
            {upcoming.map((app) => (
              <li key={app.id} className="lift rounded-2xl border border-dashed border-night/20 bg-white/70 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold tracking-[0.06em]">{app.name}</h3>
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: app.color }} aria-hidden="true" />
                </div>
                <p className="mt-1 text-sm font-medium text-slate">{app.domain}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate">{app.description}</p>
                <p className="mt-4 text-xs text-slate/80">{statusLabel[app.status]}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Valeurs */}
      <section className="wrap py-20 md:py-28">
        <h2 className="max-w-xl text-3xl font-semibold leading-tight md:text-[2.6rem]">Ce qui guide nos logiciels.</h2>
        <dl data-stagger className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {VALUES.map((v) => (
            <div key={v.name} className="border-t-2 border-teal pt-5">
              <dt className="font-display text-lg font-semibold">{v.name}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate">{v.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Appel à l'action */}
      <section className="wrap pb-20 md:pb-28">
        <div data-reveal className="relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl bg-gradient-to-br from-science to-[#1d5f99] px-8 py-10 text-white md:flex-row md:items-center md:px-12">
          <NetworkField density={0.6} />
          <div className="relative">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">CELLAR est testé en conditions réelles.</h2>
            <p className="mt-2 text-white/80">Vous souhaitez l'essayer dans votre laboratoire ? Parlons-en.</p>
          </div>
          <Link to="/contact" className="btn relative rounded-full bg-white text-science transition-transform hover:-translate-y-0.5 hover:bg-mist">
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
