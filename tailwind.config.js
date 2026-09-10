/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: { center: true, padding: { DEFAULT: '1.25rem', md: '2rem', lg: '3rem', xl: '5rem' } },
    extend: {
      colors: {
        canvas: 'var(--canvas)',
        'canvas-2': 'var(--canvas-2)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        'surface-3': 'var(--surface-3)',
        line: 'var(--line)',
        'line-strong': 'var(--line-strong)',
        ink: 'var(--ink)',
        'ink-2': 'var(--ink-2)',
        muted: 'var(--muted)',
        brand: {
          DEFAULT: 'var(--brand)',
          hover: 'var(--brand-hover)',
          soft: 'var(--brand-soft)',
          2: 'var(--brand-2)',
          ink: 'var(--brand-ink)',
        },
        ok: 'var(--ok)',
        warn: 'var(--warn)',
        danger: 'var(--danger)',
        info: 'var(--info)',
      },
      maxWidth: { shell: '1320px' },
      /* 8px spatial scale from docs/design.md §1 */
      spacing: { 18: '4.5rem', 22: '5.5rem', 30: '7.5rem' },
      borderRadius: { xl2: '1rem', xl3: '1.5rem', xl4: '2rem' },
      fontSize: {
        display: ['clamp(2.25rem, 6vw, 4rem)', { lineHeight: '1.08', letterSpacing: '-0.03em', fontWeight: '700' }],
        h2: ['clamp(1.75rem, 4vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        h3: ['clamp(1.15rem, 2vw, 1.5rem)', { lineHeight: '1.35', letterSpacing: '-0.01em', fontWeight: '600' }],
        lead: ['clamp(1rem, 1.4vw, 1.125rem)', { lineHeight: '1.7' }],
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,.04), 0 12px 32px -12px var(--shadow)',
        lift: '0 2px 4px rgba(0,0,0,.05), 0 28px 60px -20px var(--shadow-strong)',
        glow: '0 0 0 1px var(--brand-ring), 0 14px 40px -12px var(--brand-glow)',
      },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        'marquee-rtl': { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(50%)' } },
        pulseRing: { '0%,100%': { opacity: '.35', transform: 'scale(1)' }, '50%': { opacity: '.9', transform: 'scale(1.06)' } },
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'marquee-rtl': 'marquee-rtl 38s linear infinite',
        pulseRing: 'pulseRing 3.6s ease-in-out infinite',
        floaty: 'floaty 6s ease-in-out infinite',
      },
      transitionTimingFunction: { spring: 'cubic-bezier(.22,1,.36,1)' },
    },
  },
  plugins: [],
};
