import PoliciesWrapper from '@/components/sections/policies/PoliciesWrapper';
import { getPageData } from '@/graphql/components/get-page-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';

export default async function PoliciesPage() {
  const homePageData = await getPageData('policies');

  return <RenderBlocksHelper blocks={homePageData} />;
}
