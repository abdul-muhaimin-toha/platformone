import { getFullPageData } from '@/graphql/components/get-page-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { generateMetadataFromSeo } from '@/utils/generate-metadata';
import { notFound } from 'next/navigation';

export async function generateMetadata() {
  const pageData = await getFullPageData('home');
  return generateMetadataFromSeo(pageData);
}

export default async function HomePage() {
  const homePageData = await getFullPageData('home');

  if (!homePageData) {
    notFound();
  }

  return <RenderBlocksHelper blocks={homePageData.blocks} />;
}
