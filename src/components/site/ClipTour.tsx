import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useT } from "@/i18n";

const base = import.meta.env.BASE_URL;

const CLIP_IDS = ["visualiser", "enregistrer", "sortir", "piloter"] as const;

/** Extraits de l'application CELLAR, lus en accéléré et enchaînés automatiquement. */
export function ClipTour() {
  const t = useT();
  const CLIPS = CLIP_IDS.map((id, i) => ({ id, ...t.clips.items[i]! }));
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
      <div role="tablist" aria-label={t.clips.label} className="-mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0 lg:pb-0">
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
                "shrink-0 snap-start rounded-full border px-4 py-2 text-left transition-colors lg:rounded-md lg:border-0 lg:border-l-[3px] lg:py-3.5 lg:pl-5 lg:pr-3",
                on
                  ? "border-science bg-science text-white lg:border-science lg:bg-surface"
                  : "border-line bg-surface hover:bg-surface/60 lg:border-transparent lg:bg-transparent",
              )}
            >
              <span className={cn("block whitespace-nowrap font-display text-sm font-semibold lg:whitespace-normal lg:text-lg", on ? "text-white lg:text-ink" : "text-slate")}>
                {c.title}
              </span>
              <span className={cn("mt-1 hidden text-sm leading-relaxed text-slate lg:block", !on && "lg:opacity-70")}>
                {c.text}
              </span>
            </button>
          );
        })}
        <p className="mt-3 hidden pl-5 text-xs text-slate lg:block">{t.clips.note}</p>
      </div>

      <div id="clip-panel" role="tabpanel" aria-label={clip.title}>
        <div className="overflow-hidden rounded-2xl bg-night p-1.5 shadow-[0_30px_60px_-30px_rgba(16,36,58,.55)]">
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
        <p key={`d-${clip.id}`} className="animate-in fade-in mt-4 text-[15px] leading-relaxed text-slate duration-300 lg:hidden">
          {clip.text}
        </p>
        <p className="mt-2 text-xs text-slate/80 lg:hidden">{t.clips.note}</p>
      </div>
    </div>
  );
}
