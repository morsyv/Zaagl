import Link from 'next/link';
import { Zaagl } from '@/components/Icons';
import { Facebook, XIcon, LinkedIn, Instagram } from '@/components/Icons2';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries';

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/zaaglcom', Icon: Facebook },
  { label: 'X', href: 'https://x.com/echopus', Icon: XIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/zaagl', Icon: LinkedIn },
  { label: 'Instagram', href: 'https://www.instagram.com/zaagl_com/', Icon: Instagram },
];

export function Footer({ d, locale }: { d: Dictionary; locale: Locale }) {
  const year = new Intl.NumberFormat(locale === 'ar' ? 'ar-EG' : 'en-US', {
    useGrouping: false,
  }).format(new Date().getFullYear());

  return (
    <footer className="border-t border-line bg-canvas-2">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,2fr)]">
          <div className="max-w-sm">
            <Link href={`/${locale}`} className="inline-flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-[var(--brand-ink)]">
                <Zaagl className="w-6 h-auto" />
              </span>
              <span className="text-[19px] font-bold tracking-tight">
                {locale === 'ar' ? 'زاجل' : 'Zaagl'}
              </span>
            </Link>
            <p className="mt-5 text-[14px] leading-relaxed text-muted">{d.footer.about}</p>

            <ul className="mt-6 flex items-center gap-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface
                               text-muted transition-all duration-200 ease-spring
                               hover:-translate-y-0.5 hover:border-line-strong hover:text-brand"
                  >
                    <s.Icon className="h-[18px] w-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:max-w-md sm:justify-self-end">
            {d.footer.columns.map((col) => (
              <nav key={col.title}>
                <h3 className="text-[13px] font-semibold uppercase tracking-wide text-ink">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[14px] text-muted transition-colors duration-150 hover:text-ink"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-7">
          <p className="text-[13px] text-muted">
            © {year} {d.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
