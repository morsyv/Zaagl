import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import { Arrow } from '@/components/Icons';
import type { Dictionary } from '@/i18n/dictionaries';

export function CtaBanner({ d }: { d: Dictionary }) {
  return (
    <section className="pb-20 md:pb-24">
      <div className="shell">
        <Reveal>
          <div
            className="card-sheen relative overflow-hidden rounded-xl4 border border-line px-6 py-16 text-center
                       md:px-16 md:py-20"
            style={{ background: 'var(--surface)' }}
          >
            <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
            <span
              className="ambient left-1/2 top-[-30%] h-[380px] w-[560px] -translate-x-1/2"
              style={{ background: 'radial-gradient(circle, var(--brand-glow), transparent 68%)' }}
            />

            <div className="relative mx-auto max-w-xl">
              <h2 className="text-h2 text-balance">{d.cta.title}</h2>
              <p className="mt-4 text-lead text-pretty text-muted">{d.cta.body}</p>

              <Link
                href="https://zaagl.com/signup"
                className="group mt-9 inline-flex h-[52px] select-none items-center gap-2 rounded-xl2 bg-brand
                           px-8 text-[15px] font-semibold text-[var(--brand-ink)]
                           shadow-[0_14px_40px_-14px_var(--brand-glow)]
                           transition-all duration-200 ease-spring hover:-translate-y-0.5 hover:bg-brand-hover
                           active:translate-y-0 active:scale-[.98]"
              >
                {d.cta.button}
                <Arrow className="flip-rtl h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <p className="mt-5 text-[12.5px] text-muted">{d.cta.note}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
