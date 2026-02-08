import { getFullPageData } from '@/graphql/components/get-page-data';
import { getSeoData } from '@/graphql/components/get-seo-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { generateMetadataFromSeo } from '@/utils/generate-metadata';
import { notFound } from 'next/navigation';

export async function generateMetadata() {
  const pageData = await getFullPageData('auto-survey-winners');
  return generateMetadataFromSeo(pageData);
}

export default async function AutoSurveyPage() {
  const autoSurveyPageData = await getFullPageData('auto-survey-winners');

  if (!autoSurveyPageData) {
    notFound();
  }

  return <RenderBlocksHelper blocks={autoSurveyPageData.blocks} />;
}
