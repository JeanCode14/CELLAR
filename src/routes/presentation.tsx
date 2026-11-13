import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookX,
  Box,
  Check,
  Clock,
  Container,
  Dna,
  FlaskConical,
  Grid3x3,
  Layers,
  Microscope,
  SearchX,
  TestTubeDiagonal,
} from "lucide-react";
import logoUrl from "@/assets/cellar_logo.png";
import { Button } from "@/components/ui/button";
import { FrostParticles, VaporBlobs } from "@/components/site/FrostParticles";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/presentation")({
  head: () => ({
    meta: [
      { title: "Présentation de CELLAR — Registre de cryoconservation" },
      {
        name: "description",
        content:
          "Découvrez CELLAR : Cell Entry, Location and Archive Register, l'application de gestion de stock des cuves d'azote et congélateurs de laboratoire.",
      },
      { property: "og:title", content: "Présentation de CELLAR" },
      {
        property: "og:description",
        content: "Cell Entry, Location and Archive Register : la cryoconservation enfin organisée.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PresentationPage,
});

const ACRONYM = [
  { l: "C", rest: "ell" },
  { l: "E", rest: "ntry," },
  { l: "L", rest: "ocation and" },
  { l: "A", rest: "rchive" },
  { l: "R", rest: "egister" },
];

const PROBLEMS = [
  { icon: BookX, title: "Des cahiers qui s'égarent", text: "Inventaires papier, étiquettes effacées par le froid, tableurs jamais à jour." },
  { icon: SearchX, title: "Des tubes introuvables", text: "Plusieurs boîtes à fouiller pour un seul cryotube, parfois sans succès." },
  { icon: Clock, title: "Du froid qui s'échappe", text: "Chaque minute porte ouverte expose les échantillons et l'utilisateur." },
];

const HIERARCHY = [
  { icon: Container, title: "Stockage", text: "Cuve d'azote, congélateur −80 °C ou −20 °C" },
  { icon: Layers, title: "Rack / canister", text: "Les étages et supports de chaque équipement" },
  { icon: Box, title: "Boîte", text: "Boîtes de cryoconservation numérotées" },
  { icon: Grid3x3, title: "Position", text: "La case exacte du tube : A1, C4, I9…" },
  { icon: TestTubeDiagonal, title: "Échantillon", text: "Contenu, date, passage, responsable" },
];

const AUDIENCE = [
  { icon: Dna, title: "Lignées cellulaires", text: "Stocks de cellules congelées, passages et clones." },
  { icon: Microscope, title: "Échantillons", text: "Prélèvements, extraits d'ADN/ARN, lysats, sérums." },
  { icon: FlaskConical, title: "Réactifs", text: "Anticorps, enzymes, milieux et lots sensibles." },
];

const ROADMAP = [
  { title: "Conception", state: "done" },
  { title: "Développement", state: "done" },
  { title: "Phase test en laboratoire", state: "current" },
  { title: "Commercialisation", state: "next" },
  { title: "Nouvelles applications", state: "next" },
] as const;

function PresentationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-deep relative overflow-hidden pt-32 pb-20 md:pt-40">
        <VaporBlobs />
        <FrostParticles />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <div>
            <p className="animate-in fade-in font-mono text-xs uppercase tracking-[0.3em] text-primary duration-700">
              Présentation
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
              {ACRONYM.map((a, i) => (
                <span
                  key={a.l}
                  className="animate-in fade-in slide-in-from-left-6 mr-3 inline-block duration-700 fill-mode-both"
                  style={{ animationDelay: `${200 + i * 160}ms` }}
                >
                  <span className="text-ice">{a.l}</span>
                  <span className="text-foreground/80">{a.rest}</span>
                </span>
              ))}
            </h1>
            <p className="animate-in fade-in slide-in-from-bottom-4 mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground delay-1000 duration-1000 fill-mode-both">
              CELLAR est une application de gestion de stock dédiée aux laboratoires de recherche en biologie. Elle
              recense et localise tout ce que vous cryoconservez, des cuves d'azote liquide aux congélateurs.
            </p>
          </div>
          <div className="animate-in fade-in zoom-in-95 relative duration-1000">
            <div className="absolute inset-10 rounded-full bg-primary/30 blur-3xl" />
            <img src={logoUrl} alt="Logo CELLAR — Cryogenic Cell Storage" className="mask-fade animate-float relative w-full" />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:py-28">
        <SectionHeading eyebrow="Le constat" title="La cryoconservation mérite mieux qu'un cahier.">
          Dans beaucoup de laboratoires, retrouver un échantillon congelé repose encore sur la mémoire de l'équipe.
        </SectionHeading>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article className="h-full rounded-3xl border border-border bg-card/50 p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="relative overflow-hidden border-y border-border py-24 md:py-28">
        <div className="frost-grid absolute inset-0 opacity-70" />
        <div className="relative mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow="Comment ça marche" title={<>Du stockage <span className="text-ice">au tube</span>, en cinq niveaux.</>} center>
            CELLAR reproduit fidèlement l'organisation physique de vos équipements.
          </SectionHeading>
          <div className="relative mt-16 grid gap-6 md:grid-cols-5">
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent md:block" />
            {HIERARCHY.map((h, i) => (
              <Reveal key={h.title} delay={i * 150} className="relative text-center">
                <span className="bg-ice shadow-glow relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-primary-foreground">
                  <h.icon className="h-7 w-7" />
                </span>
                <p className="mt-2 font-mono text-[10px] text-muted-foreground">0{i + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{h.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading eyebrow="Pour qui" title="Les laboratoires de recherche en biologie.">
            Une première version centrée sur la paillasse : ce que vous congelez, où, et depuis quand.
          </SectionHeading>
          <div className="space-y-4">
            {AUDIENCE.map((a, i) => (
              <Reveal key={a.title} delay={i * 120}>
                <div className="group flex items-start gap-5 rounded-3xl border border-border bg-card/40 p-6 transition-all duration-500 hover:translate-x-2 hover:border-primary/50">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-transform duration-500 group-hover:rotate-12">
                    <a.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{a.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{a.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="mx-auto max-w-6xl px-5 pb-24 md:pb-32">
        <SectionHeading eyebrow="Où en est CELLAR" title="Une application en phase de test." />
        <ol className="relative mt-14 space-y-0 border-l border-border pl-8 md:ml-4">
          {ROADMAP.map((step, i) => (
            <Reveal key={step.title} delay={i * 120}>
              <li className={cn("relative", i < ROADMAP.length - 1 && "pb-10")}>
                <span
                  className={cn(
                    "absolute -left-[2.6rem] top-0.5 flex h-5 w-5 items-center justify-center rounded-full border",
                    step.state === "done" && "border-primary bg-primary text-primary-foreground",
                    step.state === "current" && "animate-pulse-ring border-accent bg-accent",
                    step.state === "next" && "border-border bg-background",
                  )}
                >
                  {step.state === "done" && <Check className="h-3 w-3" />}
                </span>
                <p className={cn("font-display text-xl font-semibold", step.state === "next" && "text-muted-foreground")}>
                  {step.title}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {step.state === "done" ? "Terminé" : step.state === "current" ? "En cours" : "À venir"}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-16">
          <Button asChild variant="ice" size="xl">
            <Link to="/atouts">
              Découvrir ses atouts <ArrowRight />
            </Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}
