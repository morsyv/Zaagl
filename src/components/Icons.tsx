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
  /* The Zaagl logomark (carrier pigeon). Inherits currentColor; 1548x910 is the
     asset's true aspect ratio, so size it by height and let width follow. */
  <svg viewBox="0 0 1548 910" fill="currentColor" aria-hidden {...p}>
    <path d="M 130.9 44.3C 74.4 103.3,73.3 104.5,58.9 120C 38.2 142.4,29.6 152.1,14.5 169.7L 0.1 186.5 308.3 186.8C 477.8 187,636.9 186.8,661.8 186.4L 707.1 185.8 695.3 173.6C 669.8 147.3,634.4 108,575 39.8L 541.5 1.3 499 0.7C 475.6 0.3,392.8 0,314.8 0L 173.2 0 130.9 44.3M 668 0.7C 668 1.1,729.1 71.8,753.5 99.5C 776.7 126,796.5 148.1,819.4 172.8L 834.5 189.1 844.5 188.6C 876.3 186.8,946.5 185.9,1034 186.2L 1133.5 186.5 1134.2 226.5C 1134.5 248.5,1135.3 278.2,1135.9 292.5C 1136.5 306.8,1137.5 344.9,1138.2 377.2C 1140.5 489.7,1136.4 556.1,1124 604.5C 1115.7 636.8,1104.5 658.7,1087.5 675.5C 1063 699.8,1028.6 712,969 717.4C 941.8 719.9,905.4 721,806 722C 754 722.6,700 723.5,686 724C 672 724.5,660.4 724.7,660.1 724.5C 659.9 724.2,664.2 719.2,669.6 713.3C 732.2 645.5,761.8 614.3,879 493C 970 398.8,1001.8 365.5,1039 325.5C 1074.1 287.8,1091.3 268.9,1090.9 268.6C 1089.9 267.6,922.4 265.8,882.8 266.3L 838.2 266.9 812.8 292.7C 726.4 380.6,617.2 495.4,507 614C 382.7 747.8,321.6 812.6,262.1 873.8L 229.8 907 245.1 907.1C 418.8 907.9,859.6 909.4,903.5 909.4C 1022 909.3,1075.4 902.9,1123.7 883.1C 1162 867.3,1190.8 848.9,1217.4 823.1C 1273 769,1301 697.3,1310.7 584C 1312.7 559.8,1313.1 471.3,1311.6 369.8L 1310.7 309 1391.1 308.9C 1435.3 308.8,1488.6 308.4,1509.4 308.1L 1547.4 307.5 1458.6 209C 1409.7 154.8,1357.6 96.3,1342.6 79C 1310.9 42.2,1286.6 14.8,1278.3 6.8L 1272.5 1.1 970.3 0.8C 804 0.6,668 0.6,668 0.7" />
  </svg>
);
