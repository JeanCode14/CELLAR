import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookX,
  Box,
  Check,
  Clock,
  Container,
  Crosshair,
  Grid3x3,
  History,
  Layers,
  MousePointerClick,
  Search,
  SearchX,
  ShieldCheck,
  TestTubeDiagonal,
  X,
} from "lucide-react";
import logo from "@/assets/cellar_logo.jpg";
import { ClipTour } from "@/components/site/ClipTour";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/cellar")({
  head: () => ({
    meta: [
      { title: "CELLAR — Cryoconservation et lignées cellulaires | CYTOVEX" },
      {
        name: "description",
        content:
          "CELLAR (Cell Entry, Location and Archive Register) localise cellules, échantillons et réactifs en cuves d'azote et congélateurs, à la position près.",
      },
    ],
  }),
  component: Cellar,
});

const base = import.meta.env.BASE_URL;

const PROBLEMS = [
  { icon: BookX, title: "Des cahiers qui s'égarent", text: "Inventaires papier, étiquettes effacées par le froid, tableurs jamais à jour." },
  { icon: SearchX, title: "Des tubes introuvables", text: "Plusieurs boîtes à fouiller pour un seul cryotube, parfois sans succès." },
  { icon: Clock, title: "Du froid qui s'échappe", text: "Chaque minute porte ouverte expose les échantillons et l'utilisateur." },
];

const LEVELS = [
  { icon: Container, title: "Stockage", text: "Cuve d'azote, congélateur −80 °C ou −20 °C" },
  { icon: Layers, title: "Rack", text: "Les étages et canisters de chaque équipement" },
  { icon: Box, title: "Boîte", text: "Boîtes 9×9 ou 10×10, numérotées" },
  { icon: Grid3x3, title: "Position", text: "La case exacte du tube" },
  { icon: TestTubeDiagonal, title: "Échantillon", text: "Contenu, passage, date, responsable" },
];

const FEATURES = [
  { icon: Crosshair, title: "Localisation à la position près", text: "Stockage, rack, boîte et case : l'emplacement exact de chaque tube." },
  { icon: Layers, title: "Tous vos froids réunis", text: "Cuves d'azote et congélateurs dans un même registre, organisés comme dans la réalité." },
  { icon: History, title: "Traçabilité complète", text: "Entrées, sorties et décongélations restent archivées." },
  { icon: Search, title: "Recherche instantanée", text: "Un nom de lignée, un réactif, une date : le résultat apparaît avec sa localisation." },
  { icon: ShieldCheck, title: "Échantillons mieux protégés", text: "Savoir où chercher avant d'ouvrir, c'est moins d'exposition au réchauffement." },
  { icon: MousePointerClick, title: "Pensé pour la paillasse", text: "Une interface visuelle qui reproduit les boîtes que vous manipulez." },
];

const COMPARISON = [
  "Emplacement exact de chaque tube",
  "Recherche en quelques secondes",
  "Historique des entrées et sorties",
  "Vue visuelle des boîtes",
  "Registre partagé par l'équipe",
];

const ROADMAP = [
  { title: "Conception", state: "done" },
  { title: "Développement", state: "done" },
  { title: "Phase de test en laboratoire", state: "current" },
  { title: "Commercialisation", state: "next" },
] as const;

const STATE_LABEL = { done: "Terminé", current: "En cours", next: "À venir" } as const;

function Cellar() {
  return (
    <>
      {/* Hero, aux couleurs de CELLAR */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_70%_40%,#22406a_0%,#142a47_55%,#0d1c31_100%)]">
        <div className="wrap relative grid items-center gap-8 py-14 md:py-20 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-semibold text-cellar">Le premier logiciel CYTOVEX</p>
            <h1 className="mt-4 text-[2.5rem] font-semibold leading-[1.06] text-white md:text-[3.5rem]">
              Chaque échantillon congelé, retrouvé en quelques secondes.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              CELLAR (Cell Entry, Location and Archive Register) est le registre numérique de vos cuves d'azote liquide
              et congélateurs : cellules, échantillons et réactifs localisés à la position près.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="btn-primary"
                onClick={() => document.getElementById("visite")?.scrollIntoView({ behavior: "smooth" })}
              >
                Voir l'application
              </button>
              <span className="rounded-full border border-alert/60 px-3 py-1 text-xs font-semibold text-alert">
                En phase de test
              </span>
            </div>
          </div>
          <img
            src={logo}
            alt="Logo CELLAR, Cryogenic Cell Storage"
            className="mx-auto w-full max-w-[520px] [mask-image:radial-gradient(ellipse_at_center,#000_55%,transparent_75%)]"
          />
        </div>
      </section>

      {/* Visite en vidéo */}
      <section id="visite" className="scroll-mt-16 bg-mist py-20 md:py-24">
        <div className="wrap">
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-[2.4rem]">CELLAR en action.</h2>
          <p className="lead mt-4 max-w-2xl">Quatre moments du quotidien, filmés dans l'application.</p>
          <div className="mt-12">
            <ClipTour />
          </div>
        </div>
      </section>

      {/* Constat */}
      <section className="wrap grid gap-12 py-20 md:py-24 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="text-3xl font-semibold leading-tight md:text-[2.4rem]">La cryoconservation mérite mieux qu'un cahier.</h2>
          <p className="lead mt-5">
            Dans beaucoup de laboratoires, retrouver un échantillon congelé repose encore sur la mémoire de l'équipe.
          </p>
        </div>
        <ul className="space-y-8">
          {PROBLEMS.map((p) => (
            <li key={p.title} className="flex gap-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-alert/10 text-alert">
                <p.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 leading-relaxed text-slate">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Organisation */}
      <section className="bg-night py-20 text-white md:py-24">
        <div className="wrap">
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-white md:text-[2.4rem]">
            Du stockage au tube, en cinq niveaux.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/65">
            CELLAR reproduit fidèlement l'organisation physique de vos équipements.
          </p>
          <ol className="mt-14 grid gap-8 md:grid-cols-5 md:gap-4">
            {LEVELS.map((l, i) => (
              <li key={l.title} className="relative">
                {i < LEVELS.length - 1 && (
                  <span className="absolute left-14 right-0 top-6 hidden h-px bg-cellar/40 md:block" aria-hidden="true" />
                )}
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-cellar/50 bg-night-2 text-cellar">
                  <l.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{l.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/60">{l.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Atouts */}
      <section className="wrap py-20 md:py-24">
        <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-[2.4rem]">Pensé par et pour le laboratoire.</h2>
        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title}>
              <f.icon className="h-6 w-6 text-science" strokeWidth={1.75} />
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 leading-relaxed text-slate">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-[10px] border border-line bg-white">
          <table className="w-full text-left">
            <caption className="sr-only">Comparaison entre un cahier ou un tableur et CELLAR</caption>
            <thead className="bg-mist text-sm">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">Ce dont le laboratoire a besoin</th>
                <th scope="col" className="w-28 px-4 py-4 text-center font-semibold text-slate md:w-40">Cahier ou tableur</th>
                <th scope="col" className="w-28 px-4 py-4 text-center font-semibold text-science md:w-40">CELLAR</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row} className="border-t border-line">
                  <th scope="row" className="px-6 py-4 font-normal">{row}</th>
                  <td className="px-4 py-4 text-center">
                    <X className="mx-auto h-5 w-5 text-slate/50" aria-label="Non" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <Check className="mx-auto h-5 w-5 text-teal" aria-label="Oui" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Écran de démarrage */}
      <section className="border-y border-line bg-mist py-20 md:py-24">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="text-3xl font-semibold leading-tight md:text-[2.4rem]">L'écran de démarrage de CELLAR.</h2>
            <p className="lead mt-5">
              Pendant que l'application lit vos cuves et charge vos racks, l'emblème CELLAR se forme dans le givre.
            </p>
            <p className="mt-4 text-sm text-slate">Utilisez « Rejouer » pour revoir l'animation.</p>
          </div>
          <div className="overflow-hidden rounded-[10px] bg-night shadow-[0_30px_60px_-30px_rgba(16,36,58,.55)]">
            <iframe
              src={`${base}cellar-loader.html`}
              title="Écran de démarrage animé de CELLAR"
              className="block aspect-[4/3] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Feuille de route */}
      <section className="wrap grid gap-12 py-20 md:py-24 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="text-3xl font-semibold leading-tight md:text-[2.4rem]">Où en est CELLAR.</h2>
          <p className="lead mt-5">L'application est testée en conditions réelles avant sa commercialisation.</p>
          <Link to="/contact" className="btn-primary mt-8">
            Participer aux essais
          </Link>
        </div>
        <ol className="border-l-2 border-line pl-8">
          {ROADMAP.map((s, i) => (
            <li key={s.title} className={cn("relative", i < ROADMAP.length - 1 && "pb-9")}>
              <span
                className={cn(
                  "absolute -left-[2.6rem] top-0.5 flex h-5 w-5 items-center justify-center rounded-full border-2",
                  s.state === "done" && "border-teal bg-teal text-white",
                  s.state === "current" && "border-alert bg-white",
                  s.state === "next" && "border-line bg-white",
                )}
              >
                {s.state === "done" && <Check className="h-3 w-3" strokeWidth={3} />}
                {s.state === "current" && <span className="h-2 w-2 rounded-full bg-alert" />}
              </span>
              <p className={cn("font-display text-xl font-semibold", s.state === "next" && "text-slate")}>{s.title}</p>
              <p className="mt-1 text-sm text-slate">{STATE_LABEL[s.state]}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
