import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { LANGS, useI18n, type Lang } from "@/i18n";
import { FLAGS } from "@/i18n/flags";
import { cn } from "@/lib/utils";

/** Menu déroulant de choix de la langue, avec drapeaux. */
export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const current = LANGS.find((l) => l.code === lang)!;
  const Flag = FLAGS[lang]!;

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const choose = (l: Lang) => {
    setLang(l);
    setOpen(false);
  };

  return (
    <div ref={root} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t.nav.language} : ${current.name}`}
        onClick={() => setOpen((o) => !o)}
        className="flex h-10 items-center gap-2 rounded-full border border-white/15 px-3 text-sm font-semibold text-white/85 transition-colors hover:border-white/40 hover:text-white"
      >
        <Flag />
        <span>{lang.toUpperCase()}</span>
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-180")} />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t.nav.language}
          className="animate-in fade-in slide-in-from-top-2 absolute right-0 top-12 z-50 w-48 overflow-hidden rounded-xl border border-white/10 bg-night p-1.5 shadow-[0_24px_50px_-20px_rgba(0,0,0,.6)] duration-200"
        >
          {LANGS.map((l) => {
            const F = FLAGS[l.code]!;
            const on = l.code === lang;
            return (
              <li key={l.code} role="option" aria-selected={on}>
                <button
                  type="button"
                  lang={l.code}
                  onClick={() => choose(l.code)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                    on ? "bg-white/10 text-white" : "text-white/75 hover:bg-white/5 hover:text-white",
                  )}
                >
                  <F />
                  <span className="flex-1">{l.name}</span>
                  {on && <Check className="h-4 w-4 text-teal" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
