import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const base = import.meta.env.BASE_URL;

const CLIPS = [
  {
    id: "visualiser",
    title: "Visualiser ses cuves",
    text: "Occupation, places libres et activité récente de chaque cuve et congélateur.",
  },
  {
    id: "enregistrer",
    title: "Enregistrer une ampoule",
    text: "Lignée, passage, date et responsable : l'ampoule prend sa place dans la boîte.",
  },
  {
    id: "sortir",
    title: "Sortir et tracer",
    text: "Chaque sortie est datée et motivée, puis conservée dans l'historique.",
  },
  {
    id: "piloter",
    title: "Piloter le laboratoire",
    text: "Alertes, niveau d'azote, tableau de bord et droits de chaque utilisateur.",
  },
] as const;

/** Extraits de l'application CELLAR, lus en accéléré et enchaînés automatiquement. */
export function ClipTour() {
  const [active, setActive] = useState(0);
  const [chosen, setChosen] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const reduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const clip = CLIPS[active]!;

  useEffect(() => {
    const v = video.current;
    if (!v || reduced) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  }, [active, reduced]);

  return (
    <div className="grid gap-6 lg:grid-cols-[19rem_1fr] lg:gap-10">
      <div role="tablist" aria-label="Extraits de CELLAR" className="flex flex-col gap-1">
        {CLIPS.map((c, i) => {
          const on = i === active;
          return (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls="clip-panel"
              onClick={() => {
                setActive(i);
                setChosen(true);
              }}
              className={cn(
                "rounded-md border-l-[3px] py-3.5 pl-5 pr-3 text-left transition-colors",
                on ? "border-science bg-white" : "border-transparent hover:bg-white/60",
              )}
            >
              <span className={cn("block font-display text-lg font-semibold", on ? "text-ink" : "text-slate")}>
                {c.title}
              </span>
              <span className={cn("mt-1 text-sm leading-relaxed text-slate", on ? "block" : "hidden lg:block lg:opacity-70")}>
                {c.text}
              </span>
            </button>
          );
        })}
        <p className="mt-3 pl-5 text-xs text-slate">Captures de l'application réelle, en accéléré.</p>
      </div>

      <div id="clip-panel" role="tabpanel" aria-label={clip.title}>
        <div className="overflow-hidden rounded-[10px] bg-night p-1.5 shadow-[0_30px_60px_-30px_rgba(16,36,58,.55)]">
          <div className="flex items-center gap-1.5 px-2.5 pb-1.5 pt-1" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <video
            key={clip.id}
            ref={video}
            className="block aspect-video w-full rounded-[6px] bg-white"
            src={`${base}videos/clip_${clip.id}.mp4`}
            poster={`${base}videos/clip_${clip.id}.jpg`}
            muted
            playsInline
            autoPlay={!reduced}
            controls={reduced}
            loop={chosen}
            onEnded={() => {
              if (!chosen) setActive((i) => (i + 1) % CLIPS.length);
            }}
          />
        </div>
      </div>
    </div>
  );
}
