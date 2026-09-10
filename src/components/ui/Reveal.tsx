'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Scroll reveal. Spring-driven and critically damped (apple-design §4: damping 1.0,
 * response ~0.4) so nothing overshoots — no gesture carried momentum into this.
 * Under prefers-reduced-motion it degrades to a plain cross-fade, never to nothing.
 */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
  as = 'div',
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'span';
}) {
  const reduced = useReducedMotion();
  const M = motion[as] as typeof motion.div;

  return (
    <M
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25, margin: '0px 0px -80px 0px' }}
      transition={
        reduced
          ? { duration: 0.25, delay: delay * 0.5 }
          : { type: 'spring', bounce: 0, duration: 0.55, delay }
      }
    >
      {children}
    </M>
  );
}
