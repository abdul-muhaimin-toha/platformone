import { getServiceData } from '@/graphql/components/get-service-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { notFound } from 'next/navigation';

interface ServicesPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { slug } = await params;

  const pageData = await getServiceData(slug);

  if (!pageData) {
    notFound();
  }

  return (
    <div className="w-full overflow-hidden">
      <RenderBlocksHelper blocks={pageData} />
    </div>
  );
}
