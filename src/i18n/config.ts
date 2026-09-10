export const locales = ['ar', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ar';

export const dir = (locale: Locale): 'rtl' | 'ltr' => (locale === 'ar' ? 'rtl' : 'ltr');

export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);

export const LOCALE_COOKIE = 'zaagl_locale';
export const THEME_COOKIE = 'zaagl_theme';
