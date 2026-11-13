import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import fr, { type Messages } from "./fr";
import en from "./en";
import de from "./de";
import es from "./es";
import it from "./it";

export const LANGS = [
  { code: "fr", name: "Français" },
  { code: "en", name: "English" },
  { code: "de", name: "Deutsch" },
  { code: "es", name: "Español" },
  { code: "it", name: "Italiano" },
] as const;
export type Lang = (typeof LANGS)[number]["code"];

const MESSAGES: Record<Lang, Messages> = { fr, en, de, es, it };
const KEY = "cytovex-lang";

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(KEY) as Lang | null;
    if (saved && saved in MESSAGES) return saved;
  } catch {
    /* stockage indisponible */
  }
  const nav = (navigator.language || "fr").slice(0, 2).toLowerCase();
  return (nav in MESSAGES ? nav : "fr") as Lang;
}

const Ctx = createContext<{ lang: Lang; t: Messages; setLang: (l: Lang) => void }>({
  lang: "fr",
  t: fr,
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute("content", MESSAGES[lang].meta.description);
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(KEY, l);
    } catch {
      /* stockage indisponible */
    }
  };

  return <Ctx.Provider value={{ lang, t: MESSAGES[lang], setLang }}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);
export const useT = () => useContext(Ctx).t;
