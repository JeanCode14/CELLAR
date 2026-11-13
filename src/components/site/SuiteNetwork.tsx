import { useNavigate } from "@tanstack/react-router";
import symbol from "@/assets/cytovex_symbol.svg";
import { suiteApps } from "@/data/apps";
import { useT } from "@/i18n";

/*
 * L'architecture CYTOVEX dessinée comme une molécule : la marque mère au centre,
 * chaque logiciel est un atome relié. CELLAR est actif, les autres sont en pointillés.
 */
const CENTER = { x: 300, y: 250 };
const POS: Record<string, { x: number; y: number; label: "below" | "above" }> = {
  cellar: { x: 492, y: 104, label: "below" },
  stock: { x: 516, y: 372, label: "below" },
  equip: { x: 112, y: 400, label: "below" },
  data: { x: 96, y: 118, label: "below" },
};

export function SuiteNetwork() {
  const navigate = useNavigate();
  const t = useT();

  return (
    <svg viewBox="0 0 600 500" className="h-auto w-full max-w-[560px]" role="img" aria-labelledby="net-title">
      <title id="net-title">{t.network.title}</title>
      <defs>
        <radialGradient id="net-glow">
          <stop offset="0" stopColor="#25b7a5" stopOpacity=".35" />
          <stop offset="1" stopColor="#25b7a5" stopOpacity="0" />
        </radialGradient>
        <clipPath id="net-cellar-clip">
          <circle cx={POS.cellar!.x} cy={POS.cellar!.y} r="40" />
        </clipPath>
      </defs>

      <circle cx={CENTER.x} cy={CENTER.y} r="150" fill="url(#net-glow)" />
      <circle className="spin-slow" cx={CENTER.x} cy={CENTER.y} r="118" fill="none" stroke="rgba(37,183,165,.28)" strokeWidth="1.5" strokeDasharray="3 10" />
      <g className="spin-rev">
        <circle cx={CENTER.x} cy={CENTER.y} r="100" fill="none" stroke="rgba(40,123,193,.22)" strokeWidth="1" />
        <circle cx={CENTER.x} cy={CENTER.y - 100} r="4" fill="#25b7a5" />
      </g>

      {suiteApps.map((app, i) => {
        const p = POS[app.id];
        if (!p) return null;
        const active = app.status !== "preparation";
        return (
          <line
            key={`l-${app.id}`}
            x1={CENTER.x}
            y1={CENTER.y}
            x2={p.x}
            y2={p.y}
            {...(active ? { pathLength: 1 } : {})}
            className={active ? "net-line" : "net-fade"}
            style={{ animationDelay: `${300 + i * 180}ms` }}
            stroke={active ? app.color : "rgba(255,255,255,.3)"}
            strokeWidth={active ? 5 : 2.5}
            strokeLinecap="round"
            strokeDasharray={active ? undefined : "3 9"}
          />
        );
      })}

      {suiteApps.map((app, i) => {
        const p = POS[app.id];
        if (!p) return null;
        const active = app.status !== "preparation";
        const delay = `${900 + i * 180}ms`;
        return (
          <g
            key={app.id}
            className="net-node"
            style={{ animationDelay: delay, cursor: active ? "pointer" : "default" }}
            {...(active && {
              role: "link",
              tabIndex: 0,
              "aria-label": `${t.network.discover} ${app.name}`,
              onClick: () => navigate({ to: "/cellar" }),
              onKeyDown: (e: React.KeyboardEvent) => e.key === "Enter" && navigate({ to: "/cellar" }),
            })}
          >
            {active ? (
              <>
                <circle cx={p.x} cy={p.y} r="48" fill="#10243a" stroke={app.color} strokeWidth="3" />
                {app.icon && (
                  <image
                    href={app.icon}
                    x={p.x - 40}
                    y={p.y - 40}
                    width="80"
                    height="80"
                    clipPath="url(#net-cellar-clip)"
                  />
                )}
              </>
            ) : (
              <circle
                cx={p.x}
                cy={p.y}
                r="30"
                fill="#10243a"
                stroke="rgba(255,255,255,.4)"
                strokeWidth="2"
                strokeDasharray="5 6"
              />
            )}
            <text
              x={p.x}
              y={p.y + (active ? 78 : 58)}
              textAnchor="middle"
              fill="#fff"
              fontFamily="Space Grotesk, sans-serif"
              fontWeight="700"
              className={active ? "text-[26px] sm:text-[20px]" : "text-[21px] sm:text-[16px]"}
              letterSpacing="1.5"
              opacity={active ? 1 : 0.75}
            >
              {app.name}
            </text>
            <text
              x={p.x}
              y={p.y + (active ? 102 : 80)}
              textAnchor="middle"
              fill={active ? app.color : "rgba(255,255,255,.5)"}
              fontFamily="Inter, sans-serif"
              className="text-[17px] sm:text-[13px]"
            >
              {t.status[app.status]}
            </text>
          </g>
        );
      })}

      <g className="net-node" style={{ animationDelay: "100ms" }}>
        <circle cx={CENTER.x} cy={CENTER.y} r="84" fill="#10243a" />
        <image href={symbol} x={CENTER.x - 70} y={CENTER.y - 70} width="140" height="140" />
      </g>
    </svg>
  );
}
