import { getPageData } from '@/graphql/components/get-page-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { notFound } from 'next/navigation';

export default async function OurPurposePage() {
  const pageData = await getPageData('our-purpose');

  if (!pageData) {
    notFound();
  }

  return <RenderBlocksHelper blocks={pageData} />;
}
