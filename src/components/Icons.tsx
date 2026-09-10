import type { SVGProps } from 'react';

type P = SVGProps<SVGSVGElement>;

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
  'aria-hidden': true,
};

export const Arrow = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const Check = (p: P) => (
  <svg {...base} {...p}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
export const Sun = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);
export const Moon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
  </svg>
);
export const Globe = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
  </svg>
);
export const Menu = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
export const Close = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
export const Search = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);
export const Package = (p: P) => (
  <svg {...base} {...p}>
    <path d="m12 2 9 5v10l-9 5-9-5V7l9-5Z" />
    <path d="m3 7 9 5 9-5M12 12v10" />
  </svg>
);
export const Truck = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 16V6h11v10M14 9h4l3 3v4h-3" />
    <circle cx="7.5" cy="17.5" r="2" />
    <circle cx="17.5" cy="17.5" r="2" />
  </svg>
);
export const Wallet = (p: P) => (
  <svg {...base} {...p}>
    <path d="M20 8H6a2 2 0 0 1 0-4h11v4" />
    <path d="M3 6v12a2 2 0 0 0 2 2h15V8H5" />
    <circle cx="16.5" cy="14" r="1.2" />
  </svg>
);
export const Undo = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 8v6h6" />
    <path d="M3.5 14a9 9 0 1 0 2.2-9.3L3 8" />
  </svg>
);
export const Shield = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
export const Bolt = (p: P) => (
  <svg {...base} {...p}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  </svg>
);
export const Store = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 9h16v11H4zM3 9l1.5-5h15L21 9M9 20v-6h6v6" />
  </svg>
);
export const Users = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M2.5 20a6.5 6.5 0 0 1 13 0M17 5.2a3.2 3.2 0 0 1 0 6M18 14.2a6.5 6.5 0 0 1 3.5 5.8" />
  </svg>
);
export const Plug = (p: P) => (
  <svg {...base} {...p}>
    <path d="M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-12 0V8ZM12 17v5" />
  </svg>
);
export const Chart = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 20V4M4 20h16M8 16V11M12.5 16V7M17 16v-3" />
  </svg>
);
export const Code = (p: P) => (
  <svg {...base} {...p}>
    <path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" />
  </svg>
);
export const Pin = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
export const Quote = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M9.6 5.5 8 8.4c-1.8.5-2.8 1.8-2.8 3.4h2.6V19H3V13c0-3.8 2.2-6.6 6.6-7.5Zm10.4 0-1.6 2.9c-1.8.5-2.8 1.8-2.8 3.4h2.6V19h-4.8V13c0-3.8 2.2-6.6 6.6-7.5Z" />
  </svg>
);
export const Zaagl = (p: P) => (
  /* The Zaagl mark, traced from the brand asset. Inherits currentColor. */
  <svg viewBox="0 0 300 300" fill="currentColor" aria-hidden {...p}>
    <g transform="translate(0,300) scale(0.1,-0.1)">
      <path d="M553 2013 c-60 -65 -113 -124 -117 -130 -6 -10 94 -13 484 -13 l492
0 -55 58 c-30 31 -83 90 -117 130 l-63 72 -257 0 -257 0 -110 -117z M1369
2113 c5 -10 54 -67 108 -128 l99 -110 211 -3 211 -2 7 -188 c11 -261 -11 -427
-63 -485 -45 -51 -91 -60 -352 -67 -135 -3 -246 -5 -247 -5 -2 1 133 143 298
316 l301 314 -174 3 -174 2 -136 -137 c-74 -76 -206 -214 -294 -308 -87 -93
-217 -230 -287 -305 l-128 -135 538 -3 c592 -3 643 1 735 50 175 93 222 213
223 560 l0 218 164 2 165 3 -153 169 c-84 94 -169 189 -189 213 l-36 43 -418
0 c-396 0 -418 -1 -409 -17z" />
    </g>
  </svg>
);
