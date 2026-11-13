import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useT } from "@/i18n";

const KEY = "cytovex-theme";

/** Bascule mode clair / mode sombre. Le choix est mémorisé ; sinon le réglage du système est suivi. */
export function ThemeToggle() {
  const t = useT();
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    // Suit le système tant que le visiteur n'a pas choisi lui-même.
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem(KEY);
      } catch {
        /* stockage indisponible */
      }
      if (!saved) apply(e.matches, false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  function apply(next: boolean, save = true) {
    const root = document.documentElement;
    root.classList.add("theme-anim");
    root.classList.toggle("dark", next);
    window.setTimeout(() => root.classList.remove("theme-anim"), 450);
    setDark(next);
    if (save) {
      try {
        localStorage.setItem(KEY, next ? "dark" : "light");
      } catch {
        /* stockage indisponible */
      }
    }
  }

  const label = dark ? t.nav.themeLight : t.nav.themeDark;
  return (
    <button
      type="button"
      onClick={() => apply(!dark)}
      aria-label={label}
      title={label}
      className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/15 text-white/85 transition-colors hover:border-white/40 hover:text-white"
    >
      <Sun className={`absolute h-[18px] w-[18px] transition-all duration-500 ${dark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"}`} />
      <Moon className={`absolute h-[18px] w-[18px] transition-all duration-500 ${dark ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"}`} />
    </button>
  );
}
