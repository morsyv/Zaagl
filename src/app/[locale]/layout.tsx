import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import { locales, isLocale, dir, THEME_COOKIE, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import '../globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const d = getDictionary(locale);
  return {
    title: d.meta.title,
    description: d.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { ar: '/ar', en: '/en' },
    },
    openGraph: {
      title: d.meta.title,
      description: d.meta.description,
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      type: 'website',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  // Theme is read server-side from the cookie, so there is never a flash of the wrong theme.
  const store = await cookies();
  const theme = store.get(THEME_COOKIE)?.value === 'light' ? 'light' : 'dark';
  const d = getDictionary(locale as Locale);

  return (
    <html
      lang={locale}
      dir={dir(locale as Locale)}
      data-theme={theme}
      suppressHydrationWarning
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          {d.common.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
