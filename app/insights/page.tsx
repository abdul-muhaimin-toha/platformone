import { getPageData } from '@/graphql/components/get-page-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { notFound } from 'next/navigation';
import InsightPageWrapper from '@/components/sections/insights/InsightPageWrapper';
import {
  getInsightsData,
  getAllInsights,
  getFilteredInsights,
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

  const pageBlocks = await getPageData('insights');

  if (!pageBlocks) {
    notFound();
  }

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
      topInsight = mapWpPostToInsight(stickyPostArr[0]);
    }
  }
  
  if (!topInsight && latestPostResponse?.edges?.length > 0) {
    topInsight = mapWpPostToInsight(latestPostResponse.edges[0].node as WpPost);
  }

  const isSearching = !!currentSearch;

  if (!topInsight) {
    return (
      <main className="bg-white min-h-screen flex items-center justify-center p-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-black">No content available</h2>
          <p className="text-gray-500">Check your WordPress connection or publish some posts.</p>
        </div>
      </main>
    );
  }

  // Grid Mapping
  const allResults = gridPostsResponse.edges || [];
  
  // Apply Strict Title Filter for search
  const query = (currentSearch || '').toLowerCase();
  const filteredResults = isSearching 
    ? allResults.filter((edge: WPEdge<WpPost>) => edge.node.title?.toLowerCase().includes(query))
    : allResults;

  const gridInsights = (filteredResults || []).map((edge: WPEdge<WpPost>) => mapWpPostToInsight(edge.node));
  
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

