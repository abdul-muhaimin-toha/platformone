import { getFullPageData } from '@/graphql/components/get-page-data';
import { generateMetadataFromSeo } from '@/utils/generate-metadata';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { notFound } from 'next/navigation';

export async function generateMetadata() {
  const pageData = await getFullPageData('our-purpose');
  return generateMetadataFromSeo(pageData);
}

export default async function OurPurposePage() {
  const OurPurposeData = await getFullPageData('our-purpose');

  if (!OurPurposeData) {
    notFound();
  }

  return <RenderBlocksHelper blocks={OurPurposeData.blocks} />;
}
