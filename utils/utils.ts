import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractBottomText(text?: string) {
  if (!text) return { description: '', highlight: '' };

  const match = text.match(/<highlight>(.*?)<\/highlight>/);

  return {
    description: text.replace(/<highlight>.*?<\/highlight>/, '').trim(),
    highlight: match?.[1]?.trim() ?? '',
  };
}
