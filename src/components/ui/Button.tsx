import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'lg' | 'md' | 'sm';

const variants: Record<Variant, string> = {
  primary:
    'bg-brand text-[var(--brand-ink)] hover:bg-brand-hover shadow-[0_10px_30px_-10px_var(--brand-glow)]',
  secondary:
    'bg-surface-2 text-ink border border-line hover:border-line-strong hover:bg-surface-3',
  ghost: 'text-ink-2 hover:text-ink hover:bg-surface-2',
};

const sizes: Record<Size, string> = {
  lg: 'h-[52px] px-7 text-[15px] rounded-xl2',
  md: 'h-11 px-5 text-sm rounded-xl',
  sm: 'h-9 px-3.5 text-sm rounded-lg',
};

export function Button({
  href = '#',
  variant = 'primary',
  size = 'md',
  children,
  className = '',
}: {
  href?: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      /* Feedback on press, not on release (apple-design §1) */
      className={`group inline-flex select-none items-center justify-center gap-2 font-semibold
        transition-[transform,background-color,border-color,box-shadow] duration-200 ease-spring
        hover:-translate-y-[1px] active:translate-y-0 active:scale-[.98]
        ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
