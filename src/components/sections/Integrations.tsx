import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import { Arrow, Users, Store, Truck, Wallet, Chart, Code, Zaagl } from '@/components/Icons';
import type { Dictionary } from '@/i18n/dictionaries';

const nodeIcons = [Users, Store, Truck, Wallet, Chart, Code];

export function Integrations({ d }: { d: Dictionary }) {
  const R = 158; // orbit radius in px

  return (
    <section className="pb-20 pt-10 md:pb-24 md:pt-14">
      <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <span className="tag text-brand">{d.integrations.tag}</span>
          <h2 className="mt-5 text-h2 text-balance">{d.integrations.title}</h2>
          <p className="mt-4 text-lead text-pretty text-muted">{d.integrations.body}</p>
          <Link
            href="#"
            className="group mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-brand
                       transition-colors hover:text-brand-hover"
          >
            {d.integrations.link}
            <Arrow className="flip-rtl h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          {/* mobile / tablet: plain chips, no orbit */}
          <div className="mt-9 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:hidden">
            {d.integrations.nodes.map((n, i) => {
              const Icon = nodeIcons[i];
              return (
                <span
                  key={n}
                  className="flex items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2.5
                             text-[12.5px] font-medium text-ink-2"
                >
                  <Icon className="h-4 w-4 shrink-0 text-brand" />
                  <span className="truncate">{n}</span>
                </span>
              );
            })}
          </div>
        </Reveal>

        {/* desktop: hub and spoke */}
        <Reveal delay={0.08} className="hidden lg:block">
          <div className="relative mx-auto grid h-[460px] w-[460px] place-items-center">
            {/* orbit rings */}
            {[R, R * 1.5].map((r, i) => (
              <span
                key={r}
                className="absolute rounded-full border border-line"
                style={{ height: r * 2, width: r * 2, opacity: i ? 0.45 : 0.8 }}
              />
            ))}
            <span
              className="ambient h-64 w-64 opacity-70"
              style={{ background: 'radial-gradient(circle, var(--brand-glow), transparent 70%)' }}
            />

            {/* centre */}
            <div className="relative z-10 grid h-[104px] w-[104px] place-items-center rounded-3xl border border-line bg-surface shadow-lift">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand text-[var(--brand-ink)]">
                <Zaagl className="w-7 h-auto" />
              </span>
              <span className="mt-1.5 text-[12px] font-bold">{d.integrations.center}</span>
            </div>

            {/* spokes */}
            {d.integrations.nodes.map((n, i) => {
              const angle = (i / d.integrations.nodes.length) * Math.PI * 2 - Math.PI / 2;
              const x = Math.round(Math.cos(angle) * R);
              const y = Math.round(Math.sin(angle) * R);
              const Icon = nodeIcons[i];

              return (
                <div
                  key={n}
                  className="absolute left-1/2 top-1/2 z-10"
                  style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                >
                  <div
                    className="flex w-[116px] flex-col items-center gap-1.5 rounded-2xl border border-line
                               bg-surface px-2.5 py-3 shadow-card transition-all duration-200 ease-spring
                               hover:-translate-y-1 hover:border-line-strong hover:shadow-lift"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-soft text-brand">
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <span className="text-center text-[11.5px] font-medium leading-tight text-ink-2">
                      {n}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
