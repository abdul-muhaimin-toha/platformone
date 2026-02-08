import { getFullPageData } from '@/graphql/components/get-page-data';
import { getSeoData } from '@/graphql/components/get-seo-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { generateMetadataFromSeo } from '@/utils/generate-metadata';
import { notFound } from 'next/navigation';

export async function generateMetadata() {
  const pageData = await getFullPageData('insights');
  return generateMetadataFromSeo(pageData);
}
import InsightPageWrapper from '@/components/sections/insights/InsightPageWrapper';
import {
  getInsightsData,
  getAllInsights,
  getFilteredInsights,
  getAuthorById,
} from '@/graphql/components/get-insights-data';
import { getCategoriesData } from '@/graphql/components/get-category-data';
import { 
  mapWpPostToInsight, 
  getCategoryNavigation, 
  WpPost, 
  WpCategory,
  parseAttributes,
  getStickyBlogId 
} from '@/utils/insight-utils';
import { PageBlock, WPEdge } from '@/graphql/types';

export default async function InsightsPage(props: {
  searchParams: Promise<{ category?: string; topic?: string; page?: string; search?: string }>;
}) {
  const searchParams = await props.searchParams;
  const { 
    category: currentCategory, 
    topic: currentTopic, 
    search: currentSearch, 
    page: pageParam 
  } = searchParams;
  
  const currentPage = parseInt(pageParam || '1');
  const postsPerPage = 21;

  const pageNode = await getFullPageData('insights');

  if (!pageNode) {
    notFound();
  }

  const pageBlocks = pageNode.blocks;

  // Find the specific blocks to identify where to inject our custom logic
  const stickyBlock = pageBlocks.find((b: PageBlock) => b.name === 'carbon-fields/block-sticky-post');
  const allPostsBlock = pageBlocks.find((b: PageBlock) => b.name === 'carbon-fields/all-blog-posts');

  // If we don't find the expected blocks, just render normally to avoid breaking design
  if (!stickyBlock && !allPostsBlock) {
    return <RenderBlocksHelper blocks={pageBlocks} />;
  }

  const stickyData = parseAttributes(stickyBlock?.attributesJSON);
  
  // Fetch data in parallel
  const activeFilterSlug = currentTopic || currentCategory;

  const [categoriesData, latestPostResponse, gridPostsResponse] = await Promise.all([
    getCategoriesData() as Promise<WpCategory[]>,
    getAllInsights(1),
    activeFilterSlug
      ? getFilteredInsights(activeFilterSlug, postsPerPage, currentSearch)
      : getAllInsights(postsPerPage, currentSearch)
  ]);

  // Use centralized category navigation logic
  const { exploreLinks, topicLinks } = getCategoryNavigation(
    categoriesData,
    { category: currentCategory, topic: currentTopic }
  );

  // Logic for Top Insight (Hero)
  let topInsight = null;
  const stickyId = getStickyBlogId(stickyData);

  if (stickyId) {
    const stickyPostArr = await getInsightsData([stickyId]);
    if (stickyPostArr && stickyPostArr.length > 0) {
      const postNode = stickyPostArr[0] as WpPost;
      let customAuthor = null;
      if (postNode.selectAuthor?.id) {
        customAuthor = await getAuthorById(Number(postNode.selectAuthor.id));
      }
      topInsight = mapWpPostToInsight(postNode, customAuthor);
    }
  }
  
  if (!topInsight && latestPostResponse?.edges?.length > 0) {
    const postNode = latestPostResponse.edges[0].node as WpPost;
    let customAuthor = null;
    if (postNode.selectAuthor?.id) {
      customAuthor = await getAuthorById(Number(postNode.selectAuthor.id));
    }
    topInsight = mapWpPostToInsight(postNode, customAuthor);
  }

  const isSearching = !!currentSearch;
  const allResults = gridPostsResponse.edges || [];
  
  const query = (currentSearch || '').toLowerCase();
  const filteredResults = isSearching 
    ? allResults.filter((edge: WPEdge<WpPost>) => edge.node.title?.toLowerCase().includes(query))
    : allResults;

  // Fetch all grid authors in parallel
  const gridInsights = await Promise.all(
    (filteredResults || []).map(async (edge: WPEdge<WpPost>) => {
      const node = edge.node;
      let customAuthor = null;
      if (node.selectAuthor?.id) {
        customAuthor = await getAuthorById(Number(node.selectAuthor.id));
      }
      return mapWpPostToInsight(node, customAuthor);
    })
  );
  
  // Deterministic pagination using hasNextPage
  const totalPages = gridPostsResponse.hasNextPage ? currentPage + 1 : currentPage;

  // Build a clean pagination URL
  const p = new URLSearchParams();
  if (currentCategory) p.set('category', String(currentCategory));
  if (currentTopic) p.set('topic', String(currentTopic));
  if (currentSearch) p.set('search', String(currentSearch));
  const paginationBaseUrl = `/insights?${p.toString()}${p.toString() ? '&' : ''}`;

  // Render logic: Split blocks to keep structure intact
  const insightBlockNames = ['carbon-fields/block-sticky-post', 'carbon-fields/all-blog-posts'];
  const firstInsightIndex = pageBlocks.findIndex(b => insightBlockNames.includes(b.name || ''));
  
  const beforeBlocks = pageBlocks.slice(0, firstInsightIndex);
  const afterBlocks = pageBlocks.slice(firstInsightIndex).filter(b => !insightBlockNames.includes(b.name || ''));

  return (
    <>
      {beforeBlocks.length > 0 && <RenderBlocksHelper blocks={beforeBlocks} />}
      <InsightPageWrapper
        topInsight={topInsight}
        gridInsights={gridInsights}
        exploreLinks={exploreLinks}
        topicLinks={topicLinks}
        isFirstSection={beforeBlocks.length === 0}
        pagination={{
            currentPage,
            totalPages,
            baseUrl: paginationBaseUrl
        }}
      />
      {afterBlocks.length > 0 && <RenderBlocksHelper blocks={afterBlocks} />}
    </>
  );
}

