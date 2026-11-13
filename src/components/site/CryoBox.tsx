import { useEffect, useMemo, useState } from "react";
import { ArrowRightLeft, Copy, Minus, Pencil, Plus, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useT } from "@/i18n";

/*
 * Réplique de la vue « Boîte » de CELLAR en mode sombre : une boîte 10×10 d'une cuve d'azote,
 * uniquement des ampoules de lignées cellulaires. Démonstration automatique, puis libre au clic.
 */

interface Ampoule {
  ligne: string;
  passage: number;
  date: string;
  responsable: string;
  milieu: string;
  projet: number;
}

const LIGNEES: Array<[string, string]> = [
  ["HeLa", "RPMI + 10 % SVF + 10 % DMSO"],
  ["HEK293T", "DMEM + 10 % SVF + 10 % DMSO"],
  ["CHO-K1", "SVF + 10 % DMSO"],
  ["Jurkat", "RPMI + 20 % SVF + 10 % DMSO"],
  ["MCF-7", "DMEM + 10 % SVF + 10 % DMSO"],
  ["A549", "SVF + 10 % DMSO"],
  ["@fibro", "DMEM + 20 % SVF + 10 % DMSO"],
  ["iPSC clone 3", "CryoStor CS10"],
  ["Vero", "SVF + 10 % DMSO"],
  ["THP-1", "RPMI + 20 % SVF + 10 % DMSO"],
  ["SH-SY5Y", "DMEM/F12 + 10 % SVF + 10 % DMSO"],
  ["U2OS", "SVF + 10 % DMSO"],
];
const PERSONNES = ["Camille Martin", "Julien Moreau", "Sophie Bernard"];

function buildBox(): Array<Ampoule | null> {
  let s = 2026;
  const rand = () => (s = (s * 16807) % 2147483647) / 2147483647;
  return Array.from({ length: 100 }, (_, i) => {
    // Les premières positions sont remplies, comme une boîte en cours d'utilisation.
    const filled = i < 13 || (i < 46 && rand() > 0.55) || rand() > 0.9;
    if (!filled) return null;
    const [ligne, milieu] = LIGNEES[Math.floor(rand() * LIGNEES.length)]!;
    const m = 1 + Math.floor(rand() * 10);
    const d = 1 + Math.floor(rand() * 27);
    return {
      ligne,
      milieu,
      passage: 3 + Math.floor(rand() * 18),
      date: `2026-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`,
      responsable: PERSONNES[Math.floor(rand() * PERSONNES.length)]!,
      projet: Math.floor(rand() * 5),
    };
  });
}

const TOOLBAR = [
  { icon: Plus },
  { icon: Minus, danger: true },
  { icon: ArrowRightLeft },
  { icon: Pencil },
  { icon: Copy },
];

export function CryoBox() {
  const t = useT();
  const name = (l: string) => (l === "@fibro" ? t.box.primaryFibro : l);
  const medium = (m: string) => m.replaceAll("SVF", t.box.fbs);
  const box = useMemo(buildBox, []);
  const filled = useMemo(() => box.map((a, i) => (a ? i : -1)).filter((i) => i >= 0), [box]);
  const [sel, setSel] = useState(filled[5] ?? 0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => {
      setSel((cur) => filled[(filled.indexOf(cur) + 5) % filled.length] ?? cur);
    }, 2600);
    return () => window.clearInterval(t);
  }, [auto, filled]);

  const amp = box[sel];
  const count = filled.length;
  const pos = sel + 1;

  return (
    <div className="overflow-hidden rounded-2xl border border-[#24384f] bg-[#0b1626] text-[#e6eef7] shadow-[0_40px_80px_-35px_rgba(11,22,38,.8)]">
      {/* Barre supérieure de l'application */}
      <div className="flex flex-wrap items-center gap-3 border-b border-[#1c2d44] px-4 py-3 sm:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-[#24384f] bg-[#101e33] px-4 py-2.5">
          <Search className="h-4 w-4 shrink-0 text-[#8ea3bb]" />
          <span key={sel} className="animate-in fade-in truncate text-sm duration-300">
            {amp ? name(amp.ligne) : t.box.search}
          </span>
          <span className="ml-auto h-4 w-px shrink-0 animate-pulse bg-[#6aa8de]" />
        </div>
        <span className="hidden items-center gap-2 rounded-full border border-[#24384f] px-3 py-1.5 text-xs text-[#b8c7d8] sm:flex">
          <span className="h-2 w-2 rounded-full bg-[#34c38f]" /> {t.box.synced}
        </span>
      </div>

      <div className="px-4 pb-6 pt-5 sm:px-6">
        <p className="text-sm text-[#8ea3bb]">{t.box.path}</p>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display text-3xl font-bold text-white">{t.box.box}</h3>
          <span className="rounded-lg border border-[#24384f] px-3 py-1.5 font-mono text-xs text-[#b8c7d8]">−196 °C</span>
        </div>

        <div className="mt-4 hidden flex-wrap gap-2 md:flex" aria-hidden="true">
          {TOOLBAR.map((b, i) => (
            <span
              key={i}
              className={cn(
                "flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm",
                b.danger ? "border-[#e0685a]/60 text-[#f08a7d]" : "border-[#24384f] text-[#c9d6e4]",
              )}
            >
              <b.icon className="h-3.5 w-3.5" /> {t.box.toolbar[i]}
            </span>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.25fr_1fr]">
          {/* Grille de la boîte */}
          <div className="rounded-xl border border-[#24384f] bg-[#101e33] p-4 sm:p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-sm">
                <span className="text-lg font-semibold">{count} %</span>{" "}
                <span className="text-[#8ea3bb]">{t.box.occupied} · {100 - count} {t.box.free}</span>
              </p>
              <span className="flex items-center gap-2 text-xs text-[#8ea3bb]">
                <span className="h-2.5 w-2.5 rounded-sm bg-[#3b78c2]" /> {t.box.cells}
              </span>
            </div>
            <div className="mt-4 grid grid-cols-10 gap-1 sm:gap-1.5">
              {box.map((a, i) => {
                const on = i === sel;
                return (
                  <button
                    key={i}
                    type="button"
                    disabled={!a}
                    onClick={() => {
                      setAuto(false);
                      setSel(i);
                    }}
                    aria-label={a ? `${t.box.position} ${i + 1} : ${name(a.ligne)} P${a.passage}` : `${t.box.position} ${i + 1} : ${t.box.free1}`}
                    className={cn(
                      "flex aspect-square items-center justify-center rounded-md text-[10px] font-semibold transition-all duration-300 sm:text-xs",
                      a
                        ? "cursor-pointer bg-[#3b78c2] text-white hover:bg-[#4b8ad6]"
                        : "border border-[#24384f] text-[#5d7189]",
                      on && "scale-110 bg-[#4b8ad6] ring-2 ring-[#e7b04a] ring-offset-2 ring-offset-[#101e33]",
                    )}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
            <p className="mt-4 text-xs text-[#8ea3bb]">
              {auto ? t.box.auto : ""}{t.box.hint}
            </p>
          </div>

          {/* Détails de l'ampoule */}
          <div key={sel} className="animate-in fade-in slide-in-from-bottom-2 rounded-xl border border-[#24384f] bg-[#101e33] p-5 duration-500">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-[#f08a7d]">{t.box.details}</p>
              <p className="font-semibold text-[#f08a7d]">{t.box.position} {pos}</p>
            </div>
            {amp && (
              <dl className="mt-3 divide-y divide-[#1c2d44] text-sm">
                {[
                  t.box.cells,
                  name(amp.ligne),
                  String(amp.passage),
                  amp.date,
                  amp.responsable,
                  medium(amp.milieu),
                  t.box.projects[amp.projet] ?? "",
                ].map((v, idx) => [t.box.fields[idx], v] as const).map(([k, v]) => (
                  <div key={k} className="py-2.5">
                    <dt className="text-[11px] font-medium tracking-wide text-[#8ea3bb]">{k}</dt>
                    <dd className="mt-0.5 font-medium text-white">{v}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
