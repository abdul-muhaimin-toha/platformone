import { getFullPageData } from '@/graphql/components/get-page-data';
import { getSeoData } from '@/graphql/components/get-seo-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { generateMetadataFromSeo } from '@/utils/generate-metadata';
import { notFound } from 'next/navigation';

export async function generateMetadata() {
  const pageData = await getFullPageData('leadership');
  return generateMetadataFromSeo(pageData);
}

export default async function LeadershipPage() {
  const pageData = await getFullPageData('leadership');

  if (!pageData) {
    notFound();
  }

  return <RenderBlocksHelper blocks={pageData.blocks} />;
}
