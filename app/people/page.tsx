import { getFullPageData } from '@/graphql/components/get-page-data';
import { getSeoData } from '@/graphql/components/get-seo-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { generateMetadataFromSeo } from '@/utils/generate-metadata';
import { notFound } from 'next/navigation';

export async function generateMetadata() {
  const pageData = await getFullPageData('people');
  return generateMetadataFromSeo(pageData);
}

export default async function PeoplePage() {
  const pageData = await getFullPageData('people');

  if (!pageData) {
    notFound();
  }

  return (
    <div className="w-full overflow-hidden">
      <RenderBlocksHelper blocks={pageData.blocks} />
    </div>
  );
}
