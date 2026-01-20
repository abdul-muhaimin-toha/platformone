import { getServiceData } from '@/graphql/components/get-service-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { notFound } from 'next/navigation';

interface ServicesPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { slug } = await params;

  const serviceData = await getServiceData(slug);

  if (!serviceData) {
    notFound();
  }

  return (
    <div className="overflow-hidden">
      <RenderBlocksHelper blocks={serviceData} />
    </div>
  );
}
