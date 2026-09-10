import { Reveal } from '@/components/ui/Reveal';
import { Quote } from '@/components/Icons';
import { Star } from '@/components/Icons2';
import type { Dictionary } from '@/i18n/dictionaries';

export function Testimonials({ d }: { d: Dictionary }) {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="tag text-brand">{d.testimonials.tag}</span>
          <h2 className="mt-5 text-h2 text-balance">{d.testimonials.title}</h2>
          <p className="mt-4 text-lead text-pretty text-muted">{d.testimonials.subtitle}</p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
          {d.testimonials.items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure
                className="card card-sheen flex h-full flex-col p-7 transition-all duration-200 ease-spring
                           hover:-translate-y-1.5 hover:border-line-strong hover:shadow-lift md:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5 text-brand">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4" />
                    ))}
                  </div>
                  <span className="rounded-lg bg-[color-mix(in_srgb,var(--ok)_12%,transparent)] px-2 py-1 text-[10.5px] font-semibold text-ok">
                    {d.testimonials.verified}
                  </span>
                </div>

                <Quote className="mt-5 h-6 w-6 text-brand opacity-25" />
                <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-2">
                  {t.quote}
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-surface-2 text-[14px] font-bold text-brand">
                    {t.name.slice(0, 1)}
                  </span>
                  <div className="leading-tight">
                    <p className="text-[14px] font-semibold">{t.name}</p>
                    <p className="mt-0.5 text-[12px] text-muted">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
