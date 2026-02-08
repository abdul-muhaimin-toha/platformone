import { getCachedCaseStudyBySlug } from '@/graphql/components/get-case-study-data';
import { getSeoCaseStudyData } from '@/graphql/components/get-seo-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { generateMetadataFromSeo } from '@/utils/generate-metadata';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: CaseStudyDetailsPageProps) {
  const { slug } = await params;
  const pageData = await getCachedCaseStudyBySlug(slug);
  return generateMetadataFromSeo(pageData);
}

interface CaseStudyDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudiesDetailsPage({
  params,
}: CaseStudyDetailsPageProps) {
  const { slug } = await params;

  const pageData = await getCachedCaseStudyBySlug(slug);

  if (!pageData) {
    notFound();
  }

  return <RenderBlocksHelper blocks={pageData.blocks || []} />;
}
