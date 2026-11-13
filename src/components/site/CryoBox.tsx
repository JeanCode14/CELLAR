import { useEffect, useMemo, useState } from "react";
import { ChevronRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";

type Kind = "cell" | "sample" | "reagent";

interface Slot {
  id: string;
  kind: Kind | null;
  label?: string;
  date?: string;
}

const ROWS = "ABCDEFGHI".split("");
const NAMES: Record<Kind, string[]> = {
  cell: ["HeLa P12", "HEK293T P8", "Fibroblastes P4", "CHO-K1 P15", "Jurkat P6", "iPSC clone 3", "MCF-7 P10"],
  sample: ["Plasma #041", "ARN extrait #22", "Biopsie T-118", "Lysat L7", "Sérum #305"],
  reagent: ["Anticorps anti-CD3", "Trypsine 0,25 %", "DMSO stérile", "Taq polymérase", "SVF lot 2207"],
};
const KIND_LABEL: Record<Kind, string> = { cell: "Cellules", sample: "Échantillon", reagent: "Réactif" };
const KIND_CLASS: Record<Kind, string> = {
  cell: "bg-primary",
  sample: "bg-accent",
  reagent: "bg-reagent",
};

function buildSlots(): Slot[] {
  let s = 2024;
  const rand = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const kinds: Kind[] = ["cell", "cell", "sample", "reagent"];
  return ROWS.flatMap((r): Slot[] =>
    Array.from({ length: 9 }, (_, c): Slot => {
      const id = `${r}${c + 1}`;
      if (rand() > 0.64) return { id, kind: null } satisfies Slot;
      const kind: Kind = kinds[Math.floor(rand() * kinds.length)] ?? "cell";
      const list = NAMES[kind];
      const day = String(1 + Math.floor(rand() * 27)).padStart(2, "0");
      const month = String(1 + Math.floor(rand() * 10)).padStart(2, "0");
      return { id, kind, label: list[Math.floor(rand() * list.length)] ?? list[0] ?? "", date: `${day}/${month}/2026` };
    }),
  );
}

export function CryoBox() {
  const slots = useMemo(buildSlots, []);
  const filled = useMemo(() => slots.map((s, i) => (s.kind ? i : -1)).filter((i) => i >= 0), [slots]);
  const [selected, setSelected] = useState(filled[3] ?? 0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const t = window.setInterval(() => {
      setSelected((cur) => {
        const pos = filled.indexOf(cur);
        return filled[(pos + 7) % filled.length] ?? cur;
      });
    }, 2600);
    return () => window.clearInterval(t);
  }, [auto, filled]);

  const current = slots[selected] ?? slots[0]!;
  const count = (k: Kind) => slots.filter((s) => s.kind === k).length;

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr]">
      <div className="glass shadow-card mx-auto rounded-3xl p-5 sm:p-7">
        <div className="mb-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <span>Boîte 07 · 9×9</span>
          <span>−196 °C</span>
        </div>
        <div className="grid grid-cols-[auto_repeat(9,minmax(0,1fr))] gap-1.5 sm:gap-2">
          <span />
          {Array.from({ length: 9 }, (_, c) => (
            <span key={c} className="text-center font-mono text-[10px] text-muted-foreground">
              {c + 1}
            </span>
          ))}
          {ROWS.map((r, ri) => (
            <div key={r} className="contents">
              <span className="flex items-center pr-1 font-mono text-[10px] text-muted-foreground">{r}</span>
              {slots.slice(ri * 9, ri * 9 + 9).map((slot, ci) => {
                const idx = ri * 9 + ci;
                const isSel = idx === selected;
                return (
                  <button
                    key={slot.id}
                    type="button"
                    disabled={!slot.kind}
                    aria-label={slot.kind ? `${slot.id} – ${slot.label}` : `${slot.id} – vide`}
                    onClick={() => {
                      setAuto(false);
                      setSelected(idx);
                    }}
                    className={cn(
                      "aspect-square w-6 rounded-full transition-all duration-500 sm:w-8",
                      slot.kind
                        ? cn(KIND_CLASS[slot.kind], "cursor-pointer opacity-70 hover:scale-110 hover:opacity-100")
                        : "border border-dashed border-border bg-muted/40",
                      isSel && "scale-125 animate-pulse-ring opacity-100 ring-2 ring-frost",
                    )}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-4 text-xs text-muted-foreground">
          {(Object.keys(KIND_LABEL) as Kind[]).map((k) => (
            <span key={k} className="flex items-center gap-2">
              <span className={cn("h-2.5 w-2.5 rounded-full", KIND_CLASS[k])} />
              {KIND_LABEL[k]} ({count(k)})
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="glass flex items-center gap-3 rounded-full px-5 py-3">
          <Search className="h-4 w-4 text-primary" />
          <span key={current.id} className="animate-in fade-in font-mono text-sm">
            {current.label}
          </span>
          <span className="ml-auto h-4 w-px animate-pulse bg-primary" />
        </div>
        <div key={`card-${current.id}`} className="animate-in fade-in slide-in-from-bottom-3 bg-card-gradient shadow-card rounded-3xl border border-border p-6 duration-500">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Localisé</span>
            {current.kind && (
              <span className={cn("rounded-full px-3 py-1 text-xs font-semibold text-primary-foreground", KIND_CLASS[current.kind])}>
                {KIND_LABEL[current.kind]}
              </span>
            )}
          </div>
          <p className="mt-4 font-display text-3xl font-semibold">{current.label}</p>
          <div className="mt-5 flex flex-wrap items-center gap-1.5 font-mono text-xs text-muted-foreground">
            {["Cuve N°2", "Canister 3", "Boîte 07"].map((step) => (
              <span key={step} className="flex items-center gap-1.5">
                <span className="rounded-md bg-secondary px-2 py-1 text-foreground">{step}</span>
                <ChevronRight className="h-3 w-3" />
              </span>
            ))}
            <span className="rounded-md bg-ice px-2 py-1 font-semibold text-primary-foreground">Position {current.id}</span>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">Congelé le {current.date}</p>
        </div>
        <p className="text-sm text-muted-foreground">
          {auto ? "Démonstration automatique — " : ""}Cliquez sur un tube pour le localiser.
        </p>
      </div>
    </div>
  );
}
