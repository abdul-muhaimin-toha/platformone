import { getPageData } from '@/graphql/components/get-page-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { notFound } from 'next/navigation';

export default async function AutoSurveyPage() {
  const autoSurveyPageData = await getPageData('auto-survey');

  if (!autoSurveyPageData) {
    notFound();
  }

  return <RenderBlocksHelper blocks={autoSurveyPageData} />;
}
