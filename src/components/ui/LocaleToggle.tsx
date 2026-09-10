'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe } from '@/components/Icons';
import { locales, LOCALE_COOKIE, type Locale } from '@/i18n/config';

export function LocaleToggle({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname() || `/${locale}`;
  const next = locales.find((l) => l !== locale) as Locale;

  const segments = pathname.split('/');
  segments[1] = next;
  const href = segments.join('/') || `/${next}`;

  const remember = () => {
    document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=31536000;samesite=lax`;
  };

  return (
    <Link
      href={href}
      onClick={remember}
      hrefLang={next}
      aria-label={label}
      className="inline-flex h-10 items-center gap-2 rounded-xl border border-line bg-surface-2 px-3
                 text-sm font-medium text-ink-2 transition-colors duration-200
                 hover:border-line-strong hover:text-ink active:scale-95"
    >
      <Globe className="h-[17px] w-[17px]" />
      <span>{label}</span>
    </Link>
  );
}
