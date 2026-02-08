import { getFullServiceData } from '@/graphql/components/get-service-data';
import { getSeoServiceData } from '@/graphql/components/get-seo-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { generateMetadataFromSeo } from '@/utils/generate-metadata';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: ServicesPageProps) {
  const { slug } = await params;
  const pageData = await getFullServiceData(slug);
  return generateMetadataFromSeo(pageData);
}

interface ServicesPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { slug } = await params;

  const pageData = await getFullServiceData(slug);

  if (!pageData) {
    notFound();
  }

  return (
    <div className="w-full overflow-hidden">
      <RenderBlocksHelper blocks={pageData.blocks} />
    </div>
  );
}
