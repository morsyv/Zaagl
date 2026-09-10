'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { ChevronDown } from '@/components/Icons2';
import type { Dictionary } from '@/i18n/dictionaries';

export function Faq({ d }: { d: Dictionary }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduced = useReducedMotion();

  return (
    <section id="faq" className="scroll-mt-24 border-y border-line bg-canvas-2 py-20 md:py-24">
      <div className="shell grid gap-12 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <Reveal>
          <span className="tag text-brand">{d.faq.tag}</span>
          <h2 className="mt-5 text-h2 text-balance">{d.faq.title}</h2>
          <p className="mt-4 text-lead text-pretty text-muted">{d.faq.subtitle}</p>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="divide-y divide-[var(--line)] overflow-hidden rounded-xl3 border border-line bg-surface">
            {d.faq.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 px-5 py-5 text-start transition-colors
                               duration-150 hover:bg-surface-2 md:px-7"
                  >
                    <span className="flex-1 text-[15.5px] font-semibold leading-snug">{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={
                        reduced ? { duration: 0.12 } : { type: 'spring', bounce: 0, duration: 0.32 }
                      }
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg border transition-colors
                                  ${isOpen ? 'border-transparent bg-brand text-[var(--brand-ink)]' : 'border-line bg-surface-2 text-muted'}`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={
                          reduced
                            ? { duration: 0.15 }
                            : { height: { type: 'spring', bounce: 0, duration: 0.4 }, opacity: { duration: 0.2 } }
                        }
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-[14.5px] leading-relaxed text-muted md:px-7">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
