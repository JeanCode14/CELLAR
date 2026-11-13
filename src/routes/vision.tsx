import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BookX, FlaskConical, Layers, Lightbulb, Lock, Microscope, Ruler, ShieldCheck, Sparkles } from "lucide-react";
import { NetworkField } from "@/components/site/NetworkField";
import symbol from "@/assets/cytovex_symbol.svg";
import cellarIcon from "@/assets/cellar_icon.png";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Notre vision — CYTOVEX" },
      {
        name: "description",
        content: "Mission, ambition et engagements de CYTOVEX, éditeur de logiciels pour les sciences du vivant.",
      },
    ],
  }),
  component: Vision,
});

const VALUES = [
  {
    icon: Microscope,
    name: "Rigueur scientifique",
    short: "Partir de la paillasse.",
    text: "Nos logiciels partent des pratiques réelles des laboratoires : leur vocabulaire, leurs équipements, leurs contraintes. Une cuve d'azote se range en racks, en boîtes et en positions, pas en lignes de tableur.",
  },
  {
    icon: ShieldCheck,
    name: "Fiabilité",
    short: "Une donnée juste, des années plus tard.",
    text: "Une information enregistrée doit rester exacte, datée et retrouvable. Chaque entrée, chaque sortie, chaque modification est conservée dans l'historique.",
  },
  {
    icon: Ruler,
    name: "Simplicité",
    short: "Un outil qu'on adopte.",
    text: "Un logiciel utile est un logiciel qu'on utilise. L'interface doit se comprendre d'elle-même, sans formation de plusieurs jours.",
  },
  {
    icon: Lightbulb,
    name: "Innovation",
    short: "Le numérique là où il compte.",
    text: "Nous utilisons la technologie là où elle fait gagner du temps ou de la sécurité aux équipes, sans promesses exagérées.",
  },
  {
    icon: Lock,
    name: "Sécurité",
    short: "Des droits clairs, des données protégées.",
    text: "Chaque utilisateur a ses droits, définis par un administrateur, et chaque action est tracée dans l'historique.",
  },
];

const JOURNEY = [
  {
    icon: BookX,
    when: "Hier",
    title: "Cahiers et tableurs",
    text: "Les informations se dispersent, les étiquettes s'effacent, la traçabilité dépend de la mémoire de l'équipe.",
    state: "past",
  },
  {
    icon: Sparkles,
    when: "Aujourd'hui",
    title: "CELLAR",
    text: "Un premier logiciel pour la cryoconservation : chaque ampoule a une entrée, un emplacement et une archive.",
    state: "now",
  },
  {
    icon: Layers,
    when: "Demain",
    title: "La gamme CYTOVEX",
    text: "Stocks, équipements, données : des logiciels qui partagent la même ergonomie et les mêmes droits.",
    state: "next",
  },
] as const;

const TONE = [
  ["Professionnels", "sans être froids"],
  ["Scientifiques", "sans être inutilement complexes"],
  ["Innovants", "sans promesses exagérées"],
  ["Accessibles", "aux chercheurs, techniciens et responsables"],
];

const RULES = [
  "Une identité commune sur les sites, les applications, les documents et les présentations.",
  "Une icône et une couleur propres à chaque logiciel, dans le même langage graphique.",
  "Des versions claire et sombre pour chaque interface.",
  "Une navigation identique : qui connaît CELLAR retrouve ses repères partout.",
];

function Vision() {
  const [active, setActive] = useState(0);
  const v = VALUES[active]!;

  return (
    <>
      {/* En-tête : la promesse */}
      <section data-hero className="relative overflow-hidden bg-night">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-science/25 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 h-[26rem] w-[26rem] rounded-full bg-teal/15 blur-3xl" aria-hidden="true" />
        <NetworkField density={0.8} />
        <div className="wrap relative grid items-center gap-12 pb-20 pt-36 md:pb-28 md:pt-40 lg:grid-cols-[1.3fr_1fr]">
          <div className="hero-in">
            <p className="text-sm font-semibold text-teal">Notre vision</p>
            <h1 className="mt-4 text-[2.5rem] font-semibold leading-[1.06] text-white md:text-[3.6rem]">
              Les bons outils numériques pour <span className="text-sheen">mieux maîtriser la science</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              CYTOVEX est un éditeur de solutions logicielles dédié aux sciences du vivant. Nous concevons des outils
              modernes, intuitifs et fiables pour accompagner les laboratoires au quotidien.
            </p>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-[22rem]" aria-hidden="true">
            <div className="spin-slow absolute inset-0 rounded-full border border-dashed border-teal/30" />
            <div className="spin-rev absolute inset-10 rounded-full border border-science/30" />
            <div className="absolute inset-20 rounded-full bg-teal/20 blur-3xl" />
            <img src={symbol} alt="" className="float absolute inset-[22%] h-[56%] w-[56%] object-contain" />
          </div>
        </div>
      </section>

      {/* Mission et ambition */}
      <section className="wrap py-20 md:py-28">
        <div data-stagger className="grid gap-6 md:grid-cols-2">
          <article className="lift relative overflow-hidden rounded-2xl border border-line bg-white p-8 md:p-10">
            <span className="absolute -right-6 -top-10 font-display text-[9rem] font-bold leading-none text-science/[0.07]" aria-hidden="true">
              M
            </span>
            <h2 className="relative text-sm font-semibold text-science">Notre mission</h2>
            <p className="relative mt-4 font-display text-2xl font-medium leading-snug md:text-[1.85rem]">
              Rendre les activités scientifiques plus simples, plus fiables et mieux maîtrisées grâce au numérique.
            </p>
          </article>
          <article className="lift relative overflow-hidden rounded-2xl border border-line bg-white p-8 md:p-10">
            <span className="absolute -right-6 -top-10 font-display text-[9rem] font-bold leading-none text-teal/[0.09]" aria-hidden="true">
              V
            </span>
            <h2 className="relative text-sm font-semibold text-teal">Notre ambition</h2>
            <p className="relative mt-4 font-display text-2xl font-medium leading-snug md:text-[1.85rem]">
              Devenir un éditeur de référence pour les outils numériques des laboratoires.
            </p>
          </article>
        </div>
      </section>

      {/* Parcours : hier, aujourd'hui, demain */}
      <section className="relative overflow-hidden bg-night py-20 md:py-28">
        <NetworkField density={0.5} />
        <div className="wrap relative">
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-white md:text-[2.6rem]">
            Du cahier de laboratoire à une gamme complète.
          </h2>
          <ol data-stagger className="relative mt-14 grid gap-6 md:grid-cols-3">
            <span className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-white/10 via-teal/60 to-science/40 md:block" aria-hidden="true" />
            {JOURNEY.map((j) => (
              <li
                key={j.when}
                className={cn(
                  "relative rounded-2xl border p-7 backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1.5",
                  j.state === "now" ? "border-teal/50 bg-white/[0.07]" : "border-white/10 bg-white/[0.03]",
                )}
              >
                <p className={cn("text-sm font-semibold", j.state === "now" ? "text-teal" : "text-white/50")}>{j.when}</p>
                <span
                  className={cn(
                    "mt-4 flex h-12 w-12 items-center justify-center rounded-full border",
                    j.state === "now" ? "border-teal bg-teal/15 text-teal" : "border-white/20 bg-night text-white/60",
                  )}
                >
                  {j.state === "now" ? (
                    <img src={cellarIcon} alt="" className="h-9 w-9" />
                  ) : (
                    <j.icon className="h-5 w-5" />
                  )}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-white">{j.title}</h3>
                <p className="mt-2 leading-relaxed text-white/65">{j.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Valeurs : sélecteur interactif */}
      <section className="wrap py-20 md:py-28">
        <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-[2.6rem]">Cinq engagements, dans chaque logiciel.</h2>
        <div data-reveal className="mt-12 grid gap-6 lg:grid-cols-[22rem_1fr]">
          <div role="tablist" aria-label="Nos engagements" className="flex flex-col gap-1">
            {VALUES.map((val, i) => {
              const on = i === active;
              return (
                <button
                  key={val.name}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  aria-controls="value-panel"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={cn(
                    "group flex items-center gap-4 rounded-xl px-4 py-3.5 text-left transition-all duration-300",
                    on ? "bg-night text-white shadow-[0_18px_40px_-20px_rgba(16,36,58,.7)]" : "hover:bg-mist",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors",
                      on ? "bg-teal/20 text-teal" : "bg-science/10 text-science",
                    )}
                  >
                    <val.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className={cn("block font-display text-lg font-semibold", on ? "text-white" : "text-ink")}>
                      {val.name}
                    </span>
                    <span className={cn("block text-sm", on ? "text-white/60" : "text-slate")}>{val.short}</span>
                  </span>
                </button>
              );
            })}
          </div>
          <div
            id="value-panel"
            role="tabpanel"
            className="relative flex min-h-[18rem] flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br from-science to-[#1b5a92] p-8 text-white md:p-12"
          >
            <NetworkField density={0.5} />
            <v.icon className="absolute right-8 top-8 h-24 w-24 text-white/10 md:h-32 md:w-32" strokeWidth={1.2} aria-hidden="true" />
            <div key={active} className="relative animate-in fade-in slide-in-from-bottom-3 duration-500">
              <p className="text-sm font-semibold text-white/70">
                {active + 1} sur {VALUES.length}
              </p>
              <h3 className="mt-2 text-3xl font-semibold text-white md:text-4xl">{v.name}</h3>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/85">{v.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cohérence et ton */}
      <section className="border-t border-line bg-mist py-20 md:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold leading-tight md:text-[2.4rem]">Une seule identité, plusieurs logiciels.</h2>
            <ul data-stagger className="mt-8 space-y-4">
              {RULES.map((r) => (
                <li key={r} className="flex gap-4 rounded-xl border border-line bg-white p-5 transition-transform duration-500 hover:translate-x-1.5">
                  <FlaskConical className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <span className="leading-relaxed text-slate">{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold leading-tight md:text-[2.4rem]">Notre façon de parler aux laboratoires.</h2>
            <dl data-stagger className="mt-8 grid gap-4 sm:grid-cols-2">
              {TONE.map(([a, b]) => (
                <div key={a} className="lift rounded-xl border border-line bg-white p-5">
                  <dt className="font-display text-xl font-semibold text-science">{a}</dt>
                  <dd className="mt-1 text-slate">{b}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="wrap py-20 md:py-24">
        <div data-reveal className="relative overflow-hidden rounded-2xl bg-night px-8 py-12 text-center md:py-16">
          <NetworkField density={0.6} />
          <p className="relative font-display text-lg font-medium text-teal">Science, engineered digitally.</p>
          <h2 className="relative mx-auto mt-3 max-w-2xl text-3xl font-semibold text-white md:text-4xl">
            Construisons ensemble les outils de votre laboratoire.
          </h2>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-primary glow-btn rounded-full">
              Nous contacter
            </Link>
            <Link to="/solutions" className="btn-ghost-dark rounded-full">
              Voir nos solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
