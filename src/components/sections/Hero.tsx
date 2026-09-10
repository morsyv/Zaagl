'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Arrow } from '@/components/Icons';
import { Play } from '@/components/Icons2';
import { AgentConsole } from './AgentConsole';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries';

export function Hero({ d, locale }: { d: Dictionary; locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  /* Spring-smoothed so scroll jitter never reaches the transform */
  const raw = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const y = useSpring(raw, { stiffness: 120, damping: 26, mass: 0.4 });
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);

  const spring = reduced
    ? { duration: 0.3 }
    : ({ type: 'spring', bounce: 0, duration: 0.7 } as const);

  return (
    <section ref={ref} className="relative overflow-hidden pb-10 pt-[104px] md:pb-16 md:pt-[136px]">
      {/* ambient orange glow + technical grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-bg absolute inset-0" />
        <div
          className="ambient -top-40 start-[-10%] h-[520px] w-[520px] animate-pulseRing"
          style={{ background: 'radial-gradient(circle, var(--brand-glow), transparent 68%)' }}
        />
        <div
          className="ambient -top-24 end-[-6%] h-[420px] w-[420px] opacity-70"
          style={{ background: 'radial-gradient(circle, color-mix(in srgb, var(--brand) 34%, transparent), transparent 70%)' }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[var(--canvas)]" />
      </div>

      <div className="shell grid items-center gap-12 lg:grid-cols-[minmax(0,.92fr)_minmax(0,1fr)] lg:gap-14">
        {/* ── text column ─────────────────────────────────────────── */}
        <div className="max-w-2xl">
          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={spring}
          >
            <span className="tag border-[var(--brand-ring)] bg-brand-soft text-brand">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              <span className="text-[13px] font-semibold">{d.hero.badge}</span>
            </span>
          </motion.div>

          <motion.h1
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.07 }}
            className="mt-6 text-display text-balance"
          >
            <span className="block">{d.hero.titleTop}</span>
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(100deg, var(--brand) 0%, var(--brand-2) 100%)',
              }}
            >
              {d.hero.titleBottom}
            </span>
          </motion.h1>

          <motion.p
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.13 }}
            className="mt-6 max-w-xl text-lead text-pretty text-ink-2"
          >
            {d.hero.subtitle}
          </motion.p>

          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.19 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="https://zaagl.com/signup"
              className="group inline-flex h-[52px] select-none items-center gap-2 rounded-xl2 bg-brand px-7
                         text-[15px] font-semibold text-[var(--brand-ink)]
                         shadow-[0_14px_40px_-14px_var(--brand-glow)]
                         transition-all duration-200 ease-spring hover:-translate-y-0.5 hover:bg-brand-hover
                         active:translate-y-0 active:scale-[.98]"
            >
              {d.hero.ctaPrimary}
              <Arrow className="flip-rtl h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="https://zaagl.com/request-demo"
              className="inline-flex h-[52px] select-none items-center gap-2 rounded-xl2 border border-line
                         bg-surface-2 px-6 text-[15px] font-semibold text-ink
                         transition-all duration-200 ease-spring hover:-translate-y-0.5 hover:border-line-strong
                         hover:bg-surface-3 active:translate-y-0 active:scale-[.98]"
            >
              <Play className="h-[18px] w-[18px] opacity-70" />
              {d.hero.ctaSecondary}
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-[13px] leading-relaxed text-muted"
          >
            {d.hero.trust}
          </motion.p>
        </div>

        {/* ── visual column ───────────────────────────────────────── */}
        <motion.div
          style={reduced ? undefined : { y, opacity: fade }}
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 34, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...spring, delay: 0.12 }}
          className="relative"
        >
          <div
            className="pointer-events-none absolute -inset-x-6 -inset-y-8 -z-10 rounded-[40px] opacity-60 blur-2xl"
            style={{ background: 'radial-gradient(60% 55% at 50% 40%, var(--brand-glow), transparent 70%)' }}
          />
          <AgentConsole d={d} />
        </motion.div>
      </div>
    </section>
  );
}
