import MobileNavDrawer from '@/components/sections/insights/MobileNavDrawer';
import Sidebar from '@/components/sections/insights/sidebar/Sidebar';
import TopInsightcard from '@/components/sections/insights/TopInsightcard';
import BlogsContent from '@/components/sections/insights/BlogsContent';
import {
  getCachedInsightBySlug,
  getAuthorById,
} from '@/graphql/components/get-insights-data';
import { getSeoInsightData } from '@/graphql/components/get-seo-data';
import { getCategoriesData } from '@/graphql/components/get-category-data';
import {
  mapWpPostToInsight,
  extractTableOfContents,
  getCategoryNavigation,
  WpPost,
  WpCategory,
} from '@/utils/insight-utils';
import { generateMetadataFromSeo } from '@/utils/generate-metadata';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const pageData = await getCachedInsightBySlug(slug);
  return generateMetadataFromSeo(pageData);
}

export default async function InsightsPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const cookieStore = await cookies();
  const isUnlocked = cookieStore.get('platformone_unlocked')?.value === 'true';

  const [categoriesData, post] = await Promise.all([
    getCategoriesData() as Promise<WpCategory[]>,
    getCachedInsightBySlug(slug),
  ]);

  if (!post) {
    notFound();
  }

  console.log('gatedPostContent', post.gatedPostContent);

  let customAuthor = null;
  const postNode = post as WpPost;
  if (postNode.selectAuthor?.id) {
    customAuthor = await getAuthorById(Number(postNode.selectAuthor.id));
  }

  const insight = mapWpPostToInsight(postNode, customAuthor);
  const tocLinks = extractTableOfContents(post.blocks || []);

  // Use centralized category navigation logic
  const activeCategories =
    post.categories?.edges?.map((edge: any) => edge.node.slug) || [];
  const { exploreLinks, topicLinks } = getCategoryNavigation(
    categoriesData,
    {}, // No search params on detail page
    activeCategories,
  );

  return (
    <main className="bg-white">
      <div className="container-custom max-w-[1256px]">
        <div className="flex flex-col w-full">
          <div className="flex pt-[124px] md:pt-[130px] lg:pt-[168px] w-full">
            <TopInsightcard version="v2" insight={insight} />
          </div>
          <div className="flex flex-col lg:flex-row gap-6 py-32 pt-20 lg:py-20 lg:pb-32">
            <Sidebar
              version="v1"
              page="details"
              exploreLinks={[]}
              topicLinks={[]}
              tocLinks={tocLinks}
            />
            <div className="flex-1 flex flex-col gap-14 md:gap-10 xl:gap-20">
              <Sidebar
                version="v2"
                page="details"
                exploreLinks={[]}
                topicLinks={[]}
                tocLinks={tocLinks}
              />
              <div className="flex flex-col w-full gap-10 xl:gap-20">
                <BlogsContent blocks={post.blocks} isGated={!isUnlocked && !!post.gatedPostContent} postId={post.databaseId} />
              </div>
            </div>
            <MobileNavDrawer
              page="details"
              exploreLinks={[]}
              topicLinks={[]}
              tocLinks={tocLinks}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
