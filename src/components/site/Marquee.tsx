import { Snowflake } from "lucide-react";

const ITEMS = [
  "Lignées cellulaires",
  "Cuves d'azote −196 °C",
  "Congélateurs −80 °C",
  "Échantillons biologiques",
  "Réactifs",
  "Stocks et consommables",
  "Équipements",
  "Données scientifiques",
  "Traçabilité",
];

/** Bande défilante des domaines couverts par la gamme CYTOVEX. */
export function Marquee() {
  return (
    <div className="mask-edges overflow-hidden border-y border-line bg-white py-4" aria-hidden="true">
      <div className="marquee flex w-max gap-10">
        {[...ITEMS, ...ITEMS].map((t, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-[15px] font-medium text-slate">
            {t}
            <Snowflake className="h-3.5 w-3.5 text-teal" />
          </span>
        ))}
      </div>
    </div>
  );
}
