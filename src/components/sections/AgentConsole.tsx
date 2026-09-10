'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Upload, LinkIcon, Drive, Send, Sparkle, File } from '@/components/Icons2';
import { Check, Zaagl } from '@/components/Icons';
import type { Dictionary } from '@/i18n/dictionaries';

const sourceIcons = [Upload, LinkIcon, Drive];

/**
 * The hero visual: a real DOM console, not a screenshot — so it mirrors with `dir`,
 * re-themes with the site, and stays sharp anywhere. The conversation plays in once
 * on entry, then rests.
 */
export function AgentConsole({ d }: { d: Dictionary }) {
  const c = d.hero.console;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(reduced ? c.messages.length : 0);

  useEffect(() => {
    if (!inView || reduced) {
      if (reduced) setShown(c.messages.length);
      return;
    }
    const timers = c.messages.map((_, i) =>
      setTimeout(() => setShown(i + 1), 500 + i * 900),
    );
    return () => timers.forEach(clearTimeout);
  }, [inView, reduced, c.messages]);

  return (
    <div
      ref={ref}
      className="card card-sheen relative overflow-hidden shadow-lift"
      style={{ background: 'var(--surface)' }}
      aria-hidden
    >
      {/* browser chrome */}
      <div dir="ltr" className="flex items-center gap-3 border-b border-line px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex h-7 w-full max-w-[240px] items-center justify-center rounded-lg border border-line bg-surface-2 px-2.5">
          <span dir="ltr" className="tnum truncate text-[11px] text-muted">
            {c.url}
          </span>
        </div>
      </div>

      <div className="grid gap-4 p-4 sm:grid-cols-[minmax(0,.85fr)_minmax(0,1fr)] sm:p-5">
        {/* knowledge sources */}
        <div className="rounded-xl border border-line bg-surface-2 p-3.5">
          <p className="mb-3 text-[11px] font-semibold text-muted">{c.sourcesTitle}</p>
          <div className="space-y-2">
            {c.sources.map((s, i) => {
              const Icon = sourceIcons[i];
              return (
                <div
                  key={s}
                  className="flex items-center gap-2.5 rounded-lg border border-line bg-surface px-2.5 py-2"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-brand-soft text-brand">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="min-w-0 flex-1 truncate text-[11.5px] text-ink-2">{s}</span>
                  <Check className="h-3.5 w-3.5 shrink-0 text-ok" strokeWidth={2.4} />
                </div>
              );
            })}
          </div>

          <div className="mt-3 flex items-center gap-2 rounded-lg bg-[color-mix(in_srgb,var(--ok)_11%,transparent)] px-2.5 py-2">
            <Sparkle className="h-3.5 w-3.5 shrink-0 text-ok" />
            <span className="text-[10.5px] font-medium text-ok">{c.indexed}</span>
          </div>
        </div>

        {/* chat */}
        <div className="flex flex-col rounded-xl border border-line bg-surface-2">
          <div className="flex items-center gap-2.5 border-b border-line px-3 py-2.5">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand text-[var(--brand-ink)]">
              <Zaagl className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-[12px] font-semibold">{c.agentName}</p>
              <p className="flex items-center gap-1 text-[10px] text-ok">
                <span className="h-1.5 w-1.5 rounded-full bg-ok" />
                {c.agentStatus}
              </p>
            </div>
          </div>

          <div className="flex min-h-[168px] flex-1 flex-col gap-2 p-3">
            {c.messages.slice(0, shown).map((m, i) => (
              <motion.div
                key={i}
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={
                  reduced ? { duration: 0.2 } : { type: 'spring', bounce: 0.2, duration: 0.4 }
                }
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-[11.5px] leading-relaxed ${
                  m.from === 'user'
                    ? 'self-end rounded-ee-md bg-brand text-[var(--brand-ink)]'
                    : 'self-start rounded-es-md border border-line bg-surface text-ink-2'
                }`}
              >
                {m.text}
                {m.from === 'agent' && i === 2 && (
                  <span className="mt-1.5 flex items-center gap-1 text-[9.5px] text-muted">
                    <File className="h-2.5 w-2.5" />
                    {c.citedFrom}
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-2 border-t border-line px-3 py-2.5">
            <span className="flex-1 truncate text-[11px] text-muted">{c.inputPlaceholder}</span>
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-brand text-[var(--brand-ink)]">
              <Send className="flip-rtl h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
