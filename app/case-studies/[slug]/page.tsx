import { getCaseStudyBySlug } from '@/graphql/components/get-case-study-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { notFound } from 'next/navigation';

interface CaseStudyDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudiesDetailsPage({
  params,
}: CaseStudyDetailsPageProps) {
  const { slug } = await params;

  const pageData = await getCaseStudyBySlug(slug);

  if (!pageData) {
    notFound();
  }

  return <RenderBlocksHelper blocks={pageData} />;
}
