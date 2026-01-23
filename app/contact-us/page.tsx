import { getPageData } from '@/graphql/components/get-page-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { notFound } from 'next/navigation';

export default async function ContactUsPage() {
  const pageData = await getPageData('contact-us');

  if (!pageData) {
    notFound();
  }

  return (
    <div className="relative bg-linear-to-bl from-[#FFEBF5] to-white">
      <RenderBlocksHelper blocks={pageData} />
    </div>
  );
}
