import { getPageData } from '@/graphql/components/get-page-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { notFound } from 'next/navigation';

export default async function PeoplePage() {
  const peopleData = await getPageData('people');

  if (!peopleData) {
    notFound();
  }

  return (
    <div className="overflow-hidden">
      <RenderBlocksHelper blocks={peopleData} />
    </div>
  );
}
