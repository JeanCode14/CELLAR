import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Archive, ClipboardPlus, MapPin, Plus, ScrollText, Snowflake } from "lucide-react";
import cellarIconUrl from "@/assets/cellar_icon.png";
import { Button } from "@/components/ui/button";
import { FrostParticles, VaporBlobs } from "@/components/site/FrostParticles";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CryoBox } from "@/components/site/CryoBox";
import { suiteApps, statusLabel } from "@/data/apps";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CELLAR — Chaque échantillon, retrouvé en quelques secondes" },
      {
        name: "description",
        content:
          "CELLAR localise vos cellules, échantillons et réactifs cryoconservés en cuves d'azote liquide et congélateurs, à la position près.",
      },
      { property: "og:title", content: "CELLAR — Chaque échantillon, retrouvé en quelques secondes" },
      {
        property: "og:description",
        content: "Le registre numérique de la cryoconservation en laboratoire de biologie.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const STORAGES = [
  "Cuves d'azote liquide −196 °C",
  "Congélateurs −80 °C",
  "Congélateurs −20 °C",
  "Lignées cellulaires",
  "Échantillons biologiques",
  "Réactifs",
  "Racks & canisters",
  "Boîtes 9×9 / 10×10",
];

const PILLARS = [
  { letter: "E", word: "Entry", icon: ClipboardPlus, title: "Enregistrez", text: "Chaque tube entre dans le registre avec son contenu, sa date et son responsable." },
  { letter: "L", word: "Location", icon: MapPin, title: "Localisez", text: "Cuve, rack, boîte, position : retrouvez l'emplacement exact sans ouvrir trois congélateurs." },
  { letter: "A", word: "Archive", icon: Archive, title: "Archivez", text: "Les sorties et décongélations sont conservées : rien ne disparaît de l'historique." },
  { letter: "R", word: "Register", icon: ScrollText, title: "Centralisez", text: "Un registre unique, partagé par toute l'équipe, à la place des cahiers et tableurs." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="bg-deep relative overflow-hidden pt-32 pb-24 md:pt-40">
        <div className="frost-grid absolute inset-0" />
        <VaporBlobs />
        <FrostParticles />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="animate-in fade-in slide-in-from-bottom-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-primary-glow duration-700">
              <Snowflake className="h-3.5 w-3.5" /> Cryogenic Cell Storage
            </p>
            <h1 className="animate-in fade-in slide-in-from-bottom-6 mt-6 text-5xl font-semibold leading-[1.05] duration-1000 md:text-7xl">
              Chaque échantillon, <span className="text-ice animate-shimmer">retrouvé</span> en quelques secondes.
            </h1>
            <p className="animate-in fade-in slide-in-from-bottom-6 mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground delay-150 duration-1000 fill-mode-both">
              CELLAR est le registre numérique de vos cuves d'azote et congélateurs : cellules, échantillons et
              réactifs localisés à la position près.
            </p>
            <div className="animate-in fade-in slide-in-from-bottom-6 mt-9 flex flex-wrap gap-3 delay-300 duration-1000 fill-mode-both">
              <Button asChild variant="ice" size="xl">
                <Link to="/presentation">
                  Découvrir CELLAR <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="frost" size="xl">
                <Link to="/atouts">Ses points forts</Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-4 animate-spin-slow rounded-full border border-dashed border-primary/30" />
            <div className="absolute inset-12 animate-spin-reverse rounded-full border border-primary-glow/20" />
            <div className="absolute inset-20 rounded-full bg-primary/25 blur-3xl" />
            <img
              src={cellarIconUrl}
              alt="Icône de l'application CELLAR"
              className="animate-float absolute inset-16 h-[calc(100%-8rem)] w-[calc(100%-8rem)] object-contain drop-shadow-2xl"
            />
            <div className="glass animate-float absolute left-0 top-10 rounded-2xl px-4 py-3" style={{ animationDelay: "-2s" }}>
              <p className="font-mono text-xl font-medium text-primary-glow">−196 °C</p>
              <p className="text-xs text-muted-foreground">Azote liquide</p>
            </div>
            <div className="glass animate-float absolute bottom-12 right-0 rounded-2xl px-4 py-3" style={{ animationDelay: "-4s" }}>
              <p className="font-mono text-xl font-medium text-primary-glow">−80 °C</p>
              <p className="text-xs text-muted-foreground">Congélateur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="mask-edges overflow-hidden border-y border-border py-5">
        <div className="flex w-max animate-marquee gap-10">
          {[...STORAGES, ...STORAGES].map((s, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap font-mono text-sm uppercase tracking-widest text-muted-foreground">
              {s}
              <Snowflake className="h-3.5 w-3.5 text-primary" />
            </span>
          ))}
        </div>
      </section>

      {/* Demo */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <SectionHeading eyebrow="Localisation" title={<>Fini la chasse au tube <span className="text-ice">à −196 °C</span>.</>}>
          Moins de temps porte ouverte, moins de risques pour vos échantillons. CELLAR vous indique exactement où
          se trouve chaque cryotube.
        </SectionHeading>
        <Reveal className="mt-14" delay={150}>
          <CryoBox />
        </Reveal>
      </section>

      {/* Pillars */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="frost-grid absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow="C·E·L·A·R" title="Cell Entry, Location and Archive Register" center>
            Le nom résume la promesse : chaque cellule a une entrée, un emplacement et une archive.
          </SectionHeading>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.word} delay={i * 120}>
                <article className="group bg-card-gradient shadow-card relative h-full overflow-hidden rounded-3xl border border-border p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50">
                  <span className="absolute -right-3 -top-8 font-display text-[9rem] font-bold leading-none text-primary/10 transition-colors duration-500 group-hover:text-primary/20">
                    {p.letter}
                  </span>
                  <p.icon className="relative h-7 w-7 text-primary" />
                  <h3 className="relative mt-6 text-xl font-semibold">{p.title}</h3>
                  <p className="relative mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">{p.word}</p>
                  <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Suite */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <SectionHeading eyebrow="La suite" title="Une première application, d'autres à venir.">
          CELLAR ouvre la voie. De nouveaux outils pour le laboratoire rejoindront cette suite au fil de leur
          développement.
        </SectionHeading>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {suiteApps.map((app, i) => (
            <Reveal key={app.id} delay={i * 120}>
              <Link
                to={app.to}
                className="group bg-card-gradient shadow-card flex h-full items-center gap-6 rounded-3xl border border-border p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
              >
                <img src={app.icon} alt="" className="h-20 w-20 shrink-0 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110" />
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-semibold">{app.name}</h3>
                    <span className="rounded-full border border-accent/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent">
                      {statusLabel[app.status]}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-xs text-primary-glow">{app.fullName}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{app.tagline}</p>
                </div>
                <ArrowRight className="ml-auto hidden h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1 sm:block" />
              </Link>
            </Reveal>
          ))}
          <Reveal delay={suiteApps.length * 120}>
            <div className="flex h-full min-h-44 flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-border p-7 text-center text-muted-foreground">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-dashed border-border">
                <Plus className="h-5 w-5" />
              </span>
              <p className="font-display text-lg">Prochaine application</p>
              <p className="text-sm">En préparation</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24">
        <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-border bg-deep px-8 py-16 text-center md:py-20">
          <FrostParticles />
          <p className="relative font-mono text-xs uppercase tracking-[0.3em] text-accent">Phase test en cours</p>
          <h2 className="relative mx-auto mt-4 max-w-2xl text-3xl font-semibold md:text-5xl">
            CELLAR se prépare à rejoindre vos laboratoires.
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-muted-foreground">
            L'application est actuellement testée en conditions réelles avant une commercialisation.
          </p>
          <div className="relative mt-9 flex justify-center">
            <Button asChild variant="ice" size="xl">
              <Link to="/atouts">
                Voir tous les atouts <ArrowRight />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
