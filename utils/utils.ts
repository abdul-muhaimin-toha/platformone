import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractBottomText(text?: string) {
  if (!text) return { description: '', highlight: '' };

  const match = text.match(/<(?:high|hight)light>(.*?)<\/(?:high|hight)light>/i);

  return {
    description: text
      .replace(/<(?:high|hight)light>.*?<\/(?:high|hight)light>/gi, '')
      .trim(),
    highlight: match?.[1]?.trim() ?? '',
  };
}

/**
 * Parses custom highlight tags and transforms them into styled spans.
 * Supports both <highlight> and <hightlight> (common typo).
 */
export function parseHighlights(text: string): string {
  if (!text) return '';
  return text
    .replace(
      /<hightlight>(.*?)<\/hightlight>/gi,
      '<span class="text-pulse-pink-600">$1</span>',
    )
    .replace(
      /<highlight>(.*?)<\/highlight>/gi,
      '<span class="text-pulse-pink-600">$1</span>',
    );
}
