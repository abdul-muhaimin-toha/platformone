import { Metadata } from 'next';

export const DEFAULT_SEO = {
  title: 'Platformone',
  description: 'Know what your customers want',
};

interface SeoData {
  seo?: {
    title?: string;
    metaDesc?: string;
    canonical?: string;
    metaKeywords?: string;
    opengraphImage?: {
      mediaItemUrl: string;
    };
  } | null;
  featuredImage?:
    | {
        node: {
          mediaItemUrl: string;
        };
      }
    | string
    | null;
  excerpt?: string;
}

/**
 * Generates Next.js Metadata from WordPress SEO data.
 * Falls back to default constants if data is missing.
 */
export function generateMetadataFromSeo(
  data: SeoData | null,
  fallbackTitle?: string,
): Metadata {
  const title = data?.seo?.title || fallbackTitle || DEFAULT_SEO.title;
  // Use SEO description if available, otherwise fall back to excerpt (stripping HTML tags), then default
  const rawDescription =
    data?.seo?.metaDesc || data?.excerpt || DEFAULT_SEO.description;
  const description = rawDescription.replace(/<[^>]*>?/gm, '');
  const canonical = data?.seo?.canonical || '';
  const keywords = data?.seo?.metaKeywords || '';

  const featuredImageUrl =
    typeof data?.featuredImage === 'string'
      ? data.featuredImage
      : data?.featuredImage?.node?.mediaItemUrl;

  const ogImage =
    data?.seo?.opengraphImage?.mediaItemUrl || featuredImageUrl || '';

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonical || undefined,
    },
    openGraph: {
      title,
      description,
      images: ogImage ? [{ url: ogImage }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : [],
    },
  };
}
