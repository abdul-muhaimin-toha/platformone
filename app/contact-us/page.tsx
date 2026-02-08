import { getFullPageData } from '@/graphql/components/get-page-data';
import { getSeoData } from '@/graphql/components/get-seo-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { generateMetadataFromSeo } from '@/utils/generate-metadata';
import { notFound } from 'next/navigation';

export async function generateMetadata() {
  const pageData = await getFullPageData('contact-us');
  return generateMetadataFromSeo(pageData);
}

export default async function ContactUsPage() {
  const pageData = await getFullPageData('contact-us');

  if (!pageData) {
    notFound();
  }

  return (
    <div className="relative bg-linear-to-bl from-[#FFEBF5] to-white">
      <RenderBlocksHelper blocks={pageData.blocks} />
    </div>
  );
}
