import { ar } from './ar';
import { en } from './en';
import type { Locale } from './config';

export type Dictionary = typeof ar;

const map = { ar, en } as const;

export const getDictionary = (locale: Locale): Dictionary => map[locale] as Dictionary;
