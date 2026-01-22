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
/**
 * Formats a date string into "Last Updated 14 August 2025" format.
 */
export function formatDate(dateString?: string): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;

  const day = date.getDate();
  const month = date.toLocaleString('en-GB', { month: 'long' });
  const year = date.getFullYear();

  return `Last Updated ${day} ${month} ${year}`;
}
