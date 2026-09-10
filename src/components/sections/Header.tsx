'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Zaagl, Menu, Close, Arrow } from '@/components/Icons';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LocaleToggle } from '@/components/ui/LocaleToggle';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries';

export function Header({ d, locale }: { d: Dictionary; locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const links = [
    { label: d.nav.features, href: '#features' },
    { label: d.nav.pricing, href: '#pricing' },
    { label: d.nav.faq, href: '#faq' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Scroll edge effect, not a hard 1px rule (apple-design §12) */}
      <div
        className={`glass transition-[box-shadow,background-color] duration-300 ${
          scrolled ? 'shadow-[0_1px_0_var(--line),0_10px_30px_-24px_var(--shadow-strong)]' : ''
        }`}
      >
        <div className="shell flex h-16 items-center justify-between gap-4 md:h-20">
          <Link href={`/${locale}`} className="flex shrink-0 items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-[var(--brand-ink)]">
              <Zaagl className="w-6 h-auto" />
            </span>
            <span className="text-[19px] font-bold tracking-tight">
              {locale === 'ar' ? 'زاجل' : 'Zaagl'}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-3.5 py-2 text-[15px] text-ink-2 transition-colors duration-150
                           hover:bg-surface-2 hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 md:flex">
              <LocaleToggle locale={locale} label={d.common.langLabel} />
              <ThemeToggle labels={{ toLight: d.common.themeToLight, toDark: d.common.themeToDark }} />
            </div>
            <Link
              href="https://zaagl.com/request-demo"
              className="hidden h-10 items-center rounded-xl px-3 text-sm font-medium text-ink-2
                         transition-colors hover:text-ink lg:inline-flex"
            >
              {d.nav.demo}
            </Link>
            <Link
              href="https://zaagl.com/signup"
              className="hidden h-10 items-center rounded-xl bg-brand px-4 text-sm font-semibold
                         text-[var(--brand-ink)] shadow-[0_8px_24px_-10px_var(--brand-glow)]
                         transition-all duration-200 ease-spring hover:-translate-y-px hover:bg-brand-hover
                         active:translate-y-0 active:scale-95 sm:inline-flex"
            >
              {d.nav.cta}
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? d.common.closeMenu : d.common.openMenu}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface-2
                         text-ink transition-colors hover:border-line-strong active:scale-95 lg:hidden"
            >
              {open ? <Close className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            /* Enters and exits along the same path (apple-design §7) */
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={reduced ? { duration: 0.15 } : { type: 'spring', bounce: 0, duration: 0.35 }}
            className="glass border-t border-line lg:hidden"
          >
            <div className="shell flex flex-col gap-1 py-5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-[15px]
                             text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
                >
                  {l.label}
                  <Arrow className="flip-rtl h-4 w-4 opacity-40" />
                </Link>
              ))}

              <div className="mt-3 flex items-center gap-2 border-t border-line pt-4">
                <LocaleToggle locale={locale} label={d.common.langLabel} />
                <ThemeToggle labels={{ toLight: d.common.themeToLight, toDark: d.common.themeToDark }} />
                <Link
                  href="https://zaagl.com/signup"
                  onClick={() => setOpen(false)}
                  className="ms-auto inline-flex h-10 items-center rounded-xl bg-brand px-4 text-sm
                             font-semibold text-[var(--brand-ink)]"
                >
                  {d.nav.cta}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
