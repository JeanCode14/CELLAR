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
import { CryoBox } from "@/components/site/CryoBox";
import { NetworkField } from "@/components/site/NetworkField";
import { cn } from "@/lib/utils";
import { useT } from "@/i18n";

export const Route = createFileRoute("/cellar")({
  component: Cellar,
});

const base = import.meta.env.BASE_URL;

const PROBLEM_ICONS = [BookX, SearchX, Clock];

const LEVEL_ICONS = [Container, Layers, Box, Grid3x3, TestTubeDiagonal];

const FEATURE_ICONS = [Crosshair, Layers, History, Search, ShieldCheck, MousePointerClick];

const ROADMAP_STATES = ["done", "done", "current", "next"] as const;


function Cellar() {
  const t = useT();
  const c = t.cellar;
  const PROBLEMS = c.problems.map((x, i) => ({ ...x, icon: PROBLEM_ICONS[i]! }));
  const LEVELS = c.levels.map((x, i) => ({ ...x, icon: LEVEL_ICONS[i]! }));
  const FEATURES = c.features.map((x, i) => ({ ...x, icon: FEATURE_ICONS[i]! }));
  const ROADMAP = c.roadmap.map((title, i) => ({ title, state: ROADMAP_STATES[i]! }));
  return (
    <>
      {/* Hero, aux couleurs de CELLAR */}
      <section data-hero className="relative overflow-hidden bg-[radial-gradient(ellipse_at_70%_40%,#22406a_0%,#142a47_55%,#0d1c31_100%)]">
        <NetworkField tone="frost" density={0.9} />
        <div className="wrap relative grid items-center gap-8 pb-14 pt-32 md:pb-20 md:pt-36 lg:grid-cols-[1fr_1fr]">
          <div className="hero-in">
            <p className="text-sm font-semibold text-cellar">{c.kicker}</p>
            <h1 className="mt-4 text-[2.5rem] font-semibold leading-[1.06] text-white md:text-[3.5rem]">
              {c.title1}
              <span className="bg-gradient-to-r from-[#e0f2fe] via-cellar to-[#e0f2fe] bg-[length:220%_auto] bg-clip-text text-transparent [animation:sheen_6s_linear_infinite]">{c.titleAccent}</span>
              {c.title2}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              {c.lead}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="btn-primary glow-btn rounded-full"
                onClick={() => document.getElementById("visite")?.scrollIntoView({ behavior: "smooth" })}
              >
                {c.seeApp}
              </button>
              <span className="rounded-full border border-alert/60 px-3 py-1 text-xs font-semibold text-alert">
                {t.status.test}
              </span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[520px] animate-in fade-in zoom-in-95 duration-1000">
            <img
              src={logo}
              alt={c.logoAlt}
              className="float w-full [mask-image:radial-gradient(ellipse_at_center,#000_55%,transparent_75%)]"
            />
            <div className="glass-dark float absolute left-0 top-[12%] rounded-2xl border border-white/10 px-4 py-3 [animation-delay:-2s]">
              <p className="font-mono text-lg font-medium text-cellar">−196 °C</p>
              <p className="text-xs text-white/60">{c.liquidNitrogen}</p>
            </div>
            <div className="glass-dark float absolute bottom-[18%] right-0 rounded-2xl border border-white/10 px-4 py-3 [animation-delay:-4s]">
              <p className="font-mono text-lg font-medium text-cellar">−80 °C</p>
              <p className="text-xs text-white/60">{c.freezer}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visite en vidéo */}
      <section id="visite" className="scroll-mt-16 bg-mist py-20 md:py-24">
        <div className="wrap">
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-[2.4rem]">{c.actionTitle}</h2>
          <p className="lead mt-4 max-w-2xl">{c.actionLead}</p>
          <div data-reveal className="mt-12">
            <ClipTour />
          </div>
        </div>
      </section>

      {/* Constat */}
      <section className="wrap grid gap-12 py-20 md:py-24 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="text-3xl font-semibold leading-tight md:text-[2.4rem]">{c.problemTitle}</h2>
          <p className="lead mt-5">{c.problemLead}</p>
        </div>
        <ul data-stagger className="space-y-8">
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
            {c.levelsTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/65">
            {c.levelsLead}
          </p>
          <ol data-stagger className="mt-14 grid gap-8 md:grid-cols-5 md:gap-4">
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

      {/* Démo interactive */}
      <section className="wrap py-20 md:py-24">
        <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-[2.4rem]">{c.demoTitle}</h2>
        <p className="lead mt-4 max-w-2xl">
          {c.demoLead}
        </p>
        <div data-reveal className="mt-12">
          <CryoBox />
        </div>
      </section>

      {/* Atouts */}
      <section className="border-t border-line bg-mist py-20 md:py-24">
        <div className="wrap">
        <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-[2.4rem]">{c.featuresTitle}</h2>
        <div data-stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="lift group rounded-2xl border border-line bg-white p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-science/10 text-science transition-transform duration-500 group-hover:rotate-12">
                <f.icon className="h-5 w-5" strokeWidth={1.9} />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 leading-relaxed text-slate">{f.text}</p>
            </div>
          ))}
        </div>

        <div data-reveal className="mt-16 overflow-hidden rounded-2xl border border-line bg-white">
          <table className="w-full text-left">
            <caption className="sr-only">{c.compareCaption}</caption>
            <thead className="bg-mist text-sm">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">{c.compareNeed}</th>
                <th scope="col" className="w-28 px-4 py-4 text-center font-semibold text-slate md:w-40">{c.comparePaper}</th>
                <th scope="col" className="w-28 px-4 py-4 text-center font-semibold text-science md:w-40">CELLAR</th>
              </tr>
            </thead>
            <tbody>
              {c.compareRows.map((row) => (
                <tr key={row} className="border-t border-line">
                  <th scope="row" className="px-6 py-4 font-normal">{row}</th>
                  <td className="px-4 py-4 text-center">
                    <X className="mx-auto h-5 w-5 text-slate/50" aria-label={c.no} />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <Check className="mx-auto h-5 w-5 text-teal" aria-label={c.yes} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </section>

      {/* Écran de démarrage */}
      <section className="py-20 md:py-24">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="text-3xl font-semibold leading-tight md:text-[2.4rem]">{c.loaderTitle}</h2>
            <p className="lead mt-5">{c.loaderLead}</p>
            <p className="mt-4 text-sm text-slate">{c.loaderHint}</p>
          </div>
          <div data-reveal className="overflow-hidden rounded-2xl bg-night shadow-[0_30px_60px_-30px_rgba(16,36,58,.55)]">
            <iframe
              src={`${base}cellar-loader.html`}
              title={c.loaderFrame}
              className="block aspect-[4/3] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Feuille de route */}
      <section className="wrap grid gap-12 border-t border-line py-20 md:py-24 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="text-3xl font-semibold leading-tight md:text-[2.4rem]">{c.roadmapTitle}</h2>
          <p className="lead mt-5">{c.roadmapLead}</p>
          <Link to="/contact" className="btn-primary glow-btn mt-8 rounded-full">
            {c.roadmapCta}
          </Link>
        </div>
        <ol data-stagger className="border-l-2 border-line pl-8">
          {ROADMAP.map((s, i) => (
            <li key={s.title} className={cn("relative", i < ROADMAP.length - 1 && "pb-9")}>
              <span
                className={cn(
                  "absolute -left-[2.6rem] top-0.5 flex h-5 w-5 items-center justify-center rounded-full border-2",
                  s.state === "done" && "border-teal bg-teal text-white",
                  s.state === "current" && "border-alert bg-white shadow-[0_0_0_6px_rgba(224,138,46,.15)]",
                  s.state === "next" && "border-line bg-white",
                )}
              >
                {s.state === "done" && <Check className="h-3 w-3" strokeWidth={3} />}
                {s.state === "current" && <span className="h-2 w-2 animate-pulse rounded-full bg-alert" />}
              </span>
              <p className={cn("font-display text-xl font-semibold", s.state === "next" && "text-slate")}>{s.title}</p>
              <p className="mt-1 text-sm text-slate">{c.roadmapState[s.state]}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
