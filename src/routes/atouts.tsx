import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Crosshair, History, Layers, MousePointerClick, Search, ShieldCheck, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FrostParticles, VaporBlobs } from "@/components/site/FrostParticles";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/atouts")({
  head: () => ({
    meta: [
      { title: "Points forts et atouts de CELLAR" },
      {
        name: "description",
        content:
          "Localisation à la position près, traçabilité, recherche instantanée : les atouts de CELLAR pour la cryoconservation en laboratoire.",
      },
      { property: "og:title", content: "Points forts et atouts de CELLAR" },
      {
        property: "og:description",
        content: "Pourquoi CELLAR change la gestion des cuves d'azote et congélateurs de laboratoire.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AtoutsPage,
});

const FEATURES = [
  { icon: Crosshair, title: "Localisation à la position près", text: "Stockage, rack, boîte et case : l'emplacement exact de chaque tube, sans tâtonner." },
  { icon: Layers, title: "Tous vos froids réunis", text: "Cuves d'azote liquide et congélateurs dans un même registre, organisés comme dans la réalité." },
  { icon: History, title: "Traçabilité complète", text: "Entrées, sorties et décongélations restent archivées pour retracer la vie de chaque échantillon." },
  { icon: Search, title: "Recherche instantanée", text: "Un nom de lignée, un réactif, une date : le résultat apparaît avec sa localisation." },
  { icon: ShieldCheck, title: "Échantillons mieux protégés", text: "Savoir où chercher avant d'ouvrir, c'est moins d'exposition au réchauffement." },
  { icon: MousePointerClick, title: "Ergonomie pensée pour la paillasse", text: "Une interface claire et visuelle, qui reproduit les boîtes que vous manipulez." },
];

const COMPARISON = [
  { label: "Emplacement exact de chaque tube", paper: false, cellar: true },
  { label: "Recherche en quelques secondes", paper: false, cellar: true },
  { label: "Historique des entrées et sorties", paper: false, cellar: true },
  { label: "Vue visuelle des boîtes", paper: false, cellar: true },
  { label: "Registre partagé par l'équipe", paper: false, cellar: true },
];

const TEMPS = [
  { t: "−196 °C", label: "Azote liquide (phase liquide)", w: 100 },
  { t: "−150 °C", label: "Azote liquide (phase vapeur)", w: 80 },
  { t: "−80 °C", label: "Congélateurs ultra-basse température", w: 48 },
  { t: "−20 °C", label: "Congélateurs de laboratoire", w: 22 },
];

function AtoutsPage() {
  return (
    <>
      <section className="bg-deep relative overflow-hidden pt-32 pb-20 md:pt-40">
        <VaporBlobs />
        <FrostParticles />
        <div className="relative mx-auto max-w-4xl px-5 text-center">
          <p className="animate-in fade-in font-mono text-xs uppercase tracking-[0.3em] text-primary duration-700">
            Points forts & atouts
          </p>
          <h1 className="animate-in fade-in slide-in-from-bottom-6 mt-6 text-4xl font-semibold leading-tight duration-1000 md:text-7xl">
            Pensé par et pour <span className="text-ice animate-shimmer">le laboratoire</span>.
          </h1>
          <p className="animate-in fade-in slide-in-from-bottom-6 mx-auto mt-6 max-w-2xl text-lg text-muted-foreground delay-200 duration-1000 fill-mode-both">
            CELLAR répond aux vrais problèmes de la cryoconservation : savoir ce qu'on a, où c'est, et ce qu'il s'est passé.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:py-28">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 120}>
              <article className="group bg-card-gradient shadow-card relative h-full overflow-hidden rounded-3xl border border-border p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-glow">
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:bg-primary/20" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-transform duration-500 group-hover:scale-110">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="relative mt-6 text-xl font-semibold">{f.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Temperatures */}
      <section className="relative overflow-hidden border-y border-border py-24 md:py-28">
        <div className="frost-grid absolute inset-0 opacity-60" />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-2">
          <SectionHeading eyebrow="Multi-stockage" title={<>Du plus froid <span className="text-ice">au plus courant</span>.</>}>
            Que vos échantillons dorment dans l'azote ou dans un congélateur, CELLAR les gère de la même façon.
          </SectionHeading>
          <div className="space-y-6">
            {TEMPS.map((t, i) => (
              <Reveal key={t.t} delay={i * 140}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-2xl font-medium text-primary-glow">{t.t}</span>
                  <span className="text-right text-sm text-muted-foreground">{t.label}</span>
                </div>
                <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-muted">
                  <div className="bar-grow bg-ice h-full rounded-full" style={{ width: `${t.w}%` }} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="mx-auto max-w-4xl px-5 py-24 md:py-28">
        <SectionHeading eyebrow="Comparaison" title="Cahier & tableur, ou CELLAR ?" center />
        <Reveal className="glass shadow-card mt-12 overflow-hidden rounded-3xl">
          <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-6 border-b border-border px-6 py-4 font-mono text-xs uppercase tracking-widest text-muted-foreground sm:gap-x-12">
            <span>Fonctionnalité</span>
            <span className="w-20 text-center">Cahier</span>
            <span className="w-20 text-center text-primary">CELLAR</span>
          </div>
          {COMPARISON.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[1fr_auto_auto] items-center gap-x-6 border-b border-border px-6 py-4 transition-colors last:border-0 hover:bg-secondary/50 sm:gap-x-12"
            >
              <span className="text-sm">{row.label}</span>
              <span className="flex w-20 justify-center text-muted-foreground">
                {row.paper ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
              </span>
              <span className="flex w-20 justify-center">
                <span className="bg-ice flex h-6 w-6 items-center justify-center rounded-full text-primary-foreground">
                  <Check className="h-3.5 w-3.5" />
                </span>
              </span>
            </div>
          ))}
        </Reveal>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24">
        <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-border bg-deep px-8 py-16 text-center md:py-20">
          <FrostParticles />
          <Users className="relative mx-auto h-8 w-8 text-primary" />
          <h2 className="relative mx-auto mt-5 max-w-2xl text-3xl font-semibold md:text-5xl">
            Actuellement en phase de test.
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-muted-foreground">
            CELLAR est éprouvé en laboratoire avant sa commercialisation. Restez attentifs : la suite arrive.
          </p>
          <div className="relative mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild variant="ice" size="xl">
              <Link to="/presentation">
                Comprendre CELLAR <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="frost" size="xl">
              <Link to="/">Retour à l'accueil</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
