import symbolDark from "@/assets/cytovex_symbol.svg";
import symbolLight from "@/assets/cytovex_symbol_onlight.svg";
import { cn } from "@/lib/utils";

/** Symbole + nom CYTOVEX. `tone="dark"` pour un fond bleu nuit. */
export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <img src={tone === "dark" ? symbolDark : symbolLight} alt="" className="h-8 w-8 sm:h-9 sm:w-9" />
      <span
        className={cn(
          "font-display text-[17px] font-bold tracking-[0.06em] sm:text-[19px] sm:tracking-[0.08em]",
          tone === "dark" ? "text-white" : "text-night",
        )}
      >
        CYTOVEX
      </span>
    </span>
  );
}
