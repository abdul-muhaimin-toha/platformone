import PoliciesWrapper from '@/components/sections/policies/PoliciesWrapper';
import { getFullPageData } from '@/graphql/components/get-page-data';
import { getSeoData } from '@/graphql/components/get-seo-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { generateMetadataFromSeo } from '@/utils/generate-metadata';

export async function generateMetadata() {
  const pageData = await getFullPageData('policies');
  return generateMetadataFromSeo(pageData);
}

export default async function PoliciesPage() {
  const pageNode = await getFullPageData('policies');

  return <RenderBlocksHelper blocks={pageNode?.blocks || []} />;
}
