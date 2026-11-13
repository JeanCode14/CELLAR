import { useEffect, useRef } from "react";

/*
 * Fond animé « réseau moléculaire » : des particules dérivent lentement et se relient
 * quand elles sont proches, comme des données qui circulent. Utilisé sur les bandeaux bleu nuit.
 */
export function NetworkField({ density = 1, tone = "brand" }: { density?: number; tone?: "brand" | "frost" }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    type P = { x: number; y: number; vx: number; vy: number; r: number; c: string };
    let ps: P[] = [];
    const colors = tone === "frost" ? ["#cfe8fb", "#9ccaef", "#ffffff"] : ["#25b7a5", "#287bc1", "#8fe3d6"];

    function size() {
      w = cv!.clientWidth;
      h = cv!.clientHeight;
      cv!.width = w * dpr;
      cv!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(((w * h) / 16000) * density);
      ps = Array.from({ length: Math.min(n, 120) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25 - (tone === "frost" ? 0.12 : 0),
        r: Math.random() * 1.6 + 0.6,
        c: colors[Math.floor(Math.random() * colors.length)]!,
      }));
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h);
      const link = tone === "frost" ? 0 : 120;
      for (let i = 0; i < ps.length; i++) {
        const a = ps[i]!;
        if (link) {
          for (let j = i + 1; j < ps.length; j++) {
            const b = ps[j]!;
            const d = Math.hypot(a.x - b.x, a.y - b.y);
            if (d < link) {
              ctx!.strokeStyle = `rgba(80,190,200,${(1 - d / link) * 0.18})`;
              ctx!.lineWidth = 1;
              ctx!.beginPath();
              ctx!.moveTo(a.x, a.y);
              ctx!.lineTo(b.x, b.y);
              ctx!.stroke();
            }
          }
        }
        ctx!.beginPath();
        ctx!.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx!.fillStyle = a.c;
        ctx!.globalAlpha = 0.75;
        ctx!.fill();
        ctx!.globalAlpha = 1;
      }
    }

    function step() {
      for (const p of ps) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
      }
      draw();
      raf = requestAnimationFrame(step);
    }

    size();
    if (reduced) draw();
    else raf = requestAnimationFrame(step);
    const ro = new ResizeObserver(() => {
      size();
      if (reduced) draw();
    });
    ro.observe(cv);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [density, tone]);

  return <canvas ref={ref} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true" />;
}
