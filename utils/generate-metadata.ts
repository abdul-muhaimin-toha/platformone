import { Metadata } from 'next';

export const DEFAULT_SEO = {
  title: 'Platformone',
  description: 'Know Whats your customers want',
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
  featuredImage?: {
    node: {
      mediaItemUrl: string;
    }
  } | string | null;
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
  const description = data?.seo?.metaDesc || DEFAULT_SEO.description;
  const canonical = data?.seo?.canonical || '';
  const keywords = data?.seo?.metaKeywords || '';
  
  const featuredImageUrl = typeof data?.featuredImage === 'string' 
    ? data.featuredImage 
    : data?.featuredImage?.node?.mediaItemUrl;

  const ogImage = data?.seo?.opengraphImage?.mediaItemUrl || featuredImageUrl || '';

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
