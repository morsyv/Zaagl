import type { ReactNode } from 'react';

/* The real <html>/<body> live in [locale]/layout.tsx, where lang + dir are known. */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
