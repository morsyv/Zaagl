import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import { Check } from '@/components/Icons';
import { Sparkle } from '@/components/Icons2';
import type { Dictionary } from '@/i18n/dictionaries';

export function Pricing({ d }: { d: Dictionary }) {
  return (
    <section id="pricing" className="relative scroll-mt-24 overflow-hidden py-20 md:py-24">
      <div
        className="ambient left-1/2 top-0 h-[320px] w-[620px] -translate-x-1/2 opacity-50"
        style={{ background: 'radial-gradient(circle, var(--brand-glow), transparent 70%)' }}
      />

      <div className="shell relative">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="tag text-brand">{d.pricing.tag}</span>
          <h2 className="mt-5 text-h2 text-balance">{d.pricing.title}</h2>
          <p className="mt-4 text-lead text-muted">{d.pricing.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid items-start gap-5 lg:grid-cols-3">
          {d.pricing.plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.07}>
              <article
                className={`card card-sheen relative flex h-full flex-col p-7 transition-all duration-200
                            ease-spring hover:-translate-y-1.5 hover:shadow-lift md:p-8 ${
                              plan.popular
                                ? 'border-[var(--brand-ring)] shadow-glow lg:-mt-4 lg:pb-12'
                                : 'hover:border-line-strong'
                            }`}
              >
                {plan.popular && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full
                               bg-brand px-3 py-1 text-[11px] font-bold text-[var(--brand-ink)]
                               shadow-[0_8px_24px_-8px_var(--brand-glow)]"
                  >
                    <Sparkle className="me-1 inline h-3 w-3 align-[-2px]" />
                    {d.pricing.popular}
                  </span>
                )}

                <h3 className="text-h3">{plan.name}</h3>
                <p className="mt-2.5 min-h-[63px] text-[13.5px] leading-relaxed text-muted">
                  {plan.body}
                </p>

                <p className="mt-5 flex items-baseline gap-1.5 border-t border-line pt-5">
                  <span dir="ltr" className="text-[2.5rem] font-bold leading-none tracking-tight">
                    ${plan.price}
                  </span>
                  <span className="text-[13px] text-muted">{d.pricing.perMonth}</span>
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                        <Check className="h-3 w-3" strokeWidth={2.6} />
                      </span>
                      <span dir="auto" className="text-[13.5px] leading-relaxed text-ink-2">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="https://zaagl.com/signup"
                  className={`mt-7 inline-flex h-12 select-none items-center justify-center rounded-xl2
                              text-[15px] font-semibold transition-all duration-200 ease-spring
                              hover:-translate-y-px active:translate-y-0 active:scale-[.98] ${
                                plan.popular
                                  ? 'bg-brand text-[var(--brand-ink)] shadow-[0_12px_32px_-12px_var(--brand-glow)] hover:bg-brand-hover'
                                  : 'border border-line bg-surface-2 text-ink hover:border-line-strong hover:bg-surface-3'
                              }`}
                >
                  {d.pricing.cta}
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
