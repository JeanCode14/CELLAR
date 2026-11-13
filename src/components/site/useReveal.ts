import { useEffect } from "react";

/*
 * Apparitions au défilement, appliquées automatiquement à toute la page :
 * titres de section, paragraphes d'introduction, éléments marqués [data-reveal]
 * et enfants des conteneurs marqués [data-stagger] (apparition en cascade).
 * Les bandeaux d'en-tête [data-hero] ont leur propre animation.
 */
const SELECTOR = [
  "main section:not([data-hero]) h2",
  "main section:not([data-hero]) .lead",
  "main [data-reveal]",
  "main [data-stagger] > *",
].join(",");

export function useReveal(key: string) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let io: IntersectionObserver | undefined;
    const raf = requestAnimationFrame(() => {
      const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR)).filter(
        (el) => !el.closest("[data-hero]"),
      );
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            e.target.classList.add("rv-in");
            io?.unobserve(e.target);
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      );
      for (const el of els) {
        const parent = el.parentElement;
        if (parent?.hasAttribute("data-stagger")) {
          const i = Array.from(parent.children).indexOf(el);
          el.style.transitionDelay = `${Math.min(i, 6) * 110}ms`;
        }
        el.setAttribute("data-rv", "");
        io.observe(el);
      }
    });
    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, [key]);
}
