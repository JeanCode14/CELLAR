import { cn } from "@/lib/utils";

// Deterministic pseudo-random so server and client render identical particles.
function seeded(seed: number) {
  let s = seed;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

function makeParticles(count: number, seed: number) {
  const rand = seeded(seed);
  return Array.from({ length: count }, () => ({
    left: rand() * 100,
    top: 60 + rand() * 50,
    size: 2 + rand() * 4,
    duration: 10 + rand() * 14,
    delay: -rand() * 20,
    opacity: 0.25 + rand() * 0.55,
  }));
}

const PARTICLES = makeParticles(34, 1337);

export function FrostParticles({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute animate-drift rounded-full bg-frost blur-[0.5px]"
          style={
            {
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              "--p-opacity": p.opacity,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

export function VaporBlobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-32 top-10 h-[28rem] w-[28rem] animate-vapor rounded-full bg-primary/20 blur-3xl" />
      <div
        className="absolute -right-40 top-40 h-[32rem] w-[32rem] animate-vapor rounded-full bg-primary-glow/10 blur-3xl"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-72 w-72 animate-vapor rounded-full bg-accent/10 blur-3xl"
        style={{ animationDelay: "-11s" }}
      />
    </div>
  );
}
