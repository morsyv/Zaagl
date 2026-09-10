import { NextResponse, type NextRequest } from 'next/server';
import { locales, defaultLocale, LOCALE_COOKIE } from './i18n/config';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return NextResponse.next();

  // Remembered choice wins, then Accept-Language, then Arabic.
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const accepts = request.headers.get('accept-language')?.toLowerCase() ?? '';
  const guessed = accepts.startsWith('en') && !accepts.includes('ar') ? 'en' : defaultLocale;
  const locale = locales.find((l) => l === cookieLocale) ?? guessed;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
