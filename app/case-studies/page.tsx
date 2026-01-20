import { getPageData } from '@/graphql/components/get-page-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { notFound } from 'next/navigation';

export default async function CaseStudiesPage() {
  const caseStudiesPageData = await getPageData('case-studies');

  if (!caseStudiesPageData) {
    notFound();
  }

  return <RenderBlocksHelper blocks={caseStudiesPageData} />;
}
