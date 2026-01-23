import { getPageData } from '@/graphql/components/get-page-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { notFound } from 'next/navigation';

export default async function PeoplePage() {
  const pageData = await getPageData('people');

  if (!pageData) {
    notFound();
  }

  return (
    <div className="w-full overflow-hidden">
      <RenderBlocksHelper blocks={pageData} />
    </div>
  );
}
