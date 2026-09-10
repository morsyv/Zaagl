import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import { Arrow, Check } from '@/components/Icons';
import { KnowledgeVisual, ScriptVisual, AnalyticsVisual } from './FeatureVisuals';
import type { Dictionary } from '@/i18n/dictionaries';

const visuals = { knowledge: KnowledgeVisual, script: ScriptVisual, analytics: AnalyticsVisual } as const;
const anchors = ['knowledge', 'setup', 'dashboard'];

/** Z-pattern: text and visual swap sides row to row. */
export function FeatureRows({ d, locale }: { d: Dictionary; locale: string }) {
  return (
    <section className="relative overflow-hidden py-8 md:py-12">
      <div className="shell space-y-20 md:space-y-24">
        {d.features.map((f, i) => {
          const Visual = visuals[f.visual as keyof typeof visuals];
          const flip = i % 2 === 1;

          return (
            <div
              key={f.title}
              id={anchors[i]}
              className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <Reveal className={flip ? 'lg:order-2' : ''}>
                <span className="tag text-brand">{f.tag}</span>
                <h2 className="mt-5 text-h2 text-balance">{f.title}</h2>
                <p className="mt-4 text-lead text-pretty text-muted">{f.body}</p>

                <ul className="mt-7 space-y-3">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                        <Check className="h-3 w-3" strokeWidth={2.6} />
                      </span>
                      <span className="text-[15px] leading-relaxed text-ink-2">{p}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#"
                  className="group mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-brand
                             transition-colors hover:text-brand-hover"
                >
                  {f.link}
                  <Arrow className="flip-rtl h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Reveal>

              <Reveal delay={0.08} y={26} className={`relative ${flip ? 'lg:order-1' : ''}`}>
                <div
                  className="pointer-events-none absolute -inset-6 -z-10 rounded-[36px] opacity-40 blur-2xl"
                  style={{ background: 'radial-gradient(55% 50% at 50% 45%, var(--brand-glow), transparent 72%)' }}
                />
                <Visual d={d} locale={locale} />
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
