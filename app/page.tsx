import { getPageData } from '@/graphql/components/get-page-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { notFound } from 'next/navigation';

export default async function HomePage() {
  const homePageData = await getPageData('home');

  if (!homePageData) {
    notFound();
  }

  return <RenderBlocksHelper blocks={homePageData} />;
}
