/* Drapeaux en SVG : identiques sur tous les systèmes (les émojis drapeaux ne s'affichent pas sous Windows). */
import type { ReactElement } from "react";

const box = { viewBox: "0 0 30 20", width: 22, height: 15, className: "rounded-[3px] shadow-[0_0_0_1px_rgba(0,0,0,.12)]" };

export const FLAGS: Record<string, () => ReactElement> = {
  fr: () => (
    <svg {...box} aria-hidden="true">
      <rect width="10" height="20" fill="#002654" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#ce1126" />
    </svg>
  ),
  en: () => (
    <svg {...box} aria-hidden="true">
      <clipPath id="gb-c">
        <rect width="30" height="20" />
      </clipPath>
      <g clipPath="url(#gb-c)">
        <rect width="30" height="20" fill="#012169" />
        <path d="M0 0 30 20M30 0 0 20" stroke="#fff" strokeWidth="4" />
        <path d="M0 0 30 20M30 0 0 20" stroke="#c8102e" strokeWidth="1.6" />
        <path d="M15 0v20M0 10h30" stroke="#fff" strokeWidth="6" />
        <path d="M15 0v20M0 10h30" stroke="#c8102e" strokeWidth="3.4" />
      </g>
    </svg>
  ),
  de: () => (
    <svg {...box} aria-hidden="true">
      <rect width="30" height="6.67" fill="#000" />
      <rect y="6.67" width="30" height="6.67" fill="#dd0000" />
      <rect y="13.33" width="30" height="6.67" fill="#ffce00" />
    </svg>
  ),
  es: () => (
    <svg {...box} aria-hidden="true">
      <rect width="30" height="20" fill="#aa151b" />
      <rect y="5" width="30" height="10" fill="#f1bf00" />
    </svg>
  ),
  it: () => (
    <svg {...box} aria-hidden="true">
      <rect width="10" height="20" fill="#009246" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#ce2b37" />
    </svg>
  ),
};
