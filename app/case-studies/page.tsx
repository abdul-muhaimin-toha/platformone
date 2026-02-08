import { getFullPageData } from '@/graphql/components/get-page-data';
import { getSeoData } from '@/graphql/components/get-seo-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { generateMetadataFromSeo } from '@/utils/generate-metadata';
import { notFound } from 'next/navigation';

export async function generateMetadata() {
  const pageData = await getFullPageData('case-studies');
  return generateMetadataFromSeo(pageData);
}

export default async function CaseStudiesPage() {
  const pageNode = await getFullPageData('case-studies');

  if (!pageNode) {
    notFound();
  }

  return <RenderBlocksHelper blocks={pageNode.blocks} />;
}
