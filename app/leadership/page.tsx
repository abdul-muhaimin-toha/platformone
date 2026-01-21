import { getPageData } from '@/graphql/components/get-page-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { notFound } from 'next/navigation';

export default async function LeadershipPage() {
  const pageData = await getPageData('leadership');

  if (!pageData) {
    notFound();
  }

  return <RenderBlocksHelper blocks={pageData} />;
}
