import { Reveal } from '@/components/ui/Reveal';
import { Agents, Knowledge, Script, Gauge } from '@/components/Icons2';
import type { Dictionary } from '@/i18n/dictionaries';

type IconComp = React.ComponentType<React.SVGProps<SVGSVGElement>>;
const icons: Record<string, IconComp> = {
  agents: Agents,
  knowledge: Knowledge,
  script: Script,
  dashboard: Gauge,
};

export function Capabilities({ d }: { d: Dictionary }) {
  return (
    <section id="features" className="relative scroll-mt-24 overflow-hidden pb-20 pt-14 md:pb-24 md:pt-20">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="tag text-brand">{d.capabilities.tag}</span>
          <h2 className="mt-5 text-h2 text-balance">{d.capabilities.title}</h2>
          <p className="mt-4 text-lead text-pretty text-muted">{d.capabilities.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {d.capabilities.items.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={i * 0.07}>
                <article
                  className="card card-sheen group relative h-full overflow-hidden p-7
                             transition-all duration-200 ease-spring
                             hover:-translate-y-1.5 hover:border-line-strong hover:shadow-lift"
                >
                  <span
                    className="pointer-events-none absolute -end-10 -top-10 h-32 w-32 rounded-full opacity-0
                               blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: 'radial-gradient(circle, var(--brand-glow), transparent 70%)' }}
                  />
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-surface-2 text-brand">
                    <Icon className="h-[22px] w-[22px]" />
                  </span>
                  <h3 className="mt-5 text-h3">{item.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{item.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
