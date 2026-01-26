import MobileNavDrawer from "@/components/sections/insights/MobileNavDrawer";
import Sidebar from "@/components/sections/insights/sidebar/Sidebar";
import TopInsightcard from "@/components/sections/insights/TopInsightcard";
import BlogsContent from "@/components/sections/insights/BlogsContent";
import { getInsightBySlug } from "@/graphql/components/get-insights-data";
import { getCategoriesData } from "@/graphql/components/get-category-data";
import { mapWpPostToInsight, extractTableOfContents, getCategoryNavigation, WpPost, WpCategory } from "@/utils/insight-utils";
import { notFound } from "next/navigation";

export default async function InsightsPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;

  const [categoriesData, post] = await Promise.all([
    getCategoriesData() as Promise<WpCategory[]>,
    getInsightBySlug(slug)
  ]);

  if (!post) {
     notFound();
  }

  const insight = mapWpPostToInsight(post);
  const tocLinks = extractTableOfContents(post.blocks || []);

  // Use centralized category navigation logic
  const activeCategories = post.categories?.edges?.map((edge: any) => edge.node.slug) || [];
  const { exploreLinks, topicLinks } = getCategoryNavigation(
    categoriesData,
    {}, // No search params on detail page
    activeCategories
  );

  return (
    <main className="bg-white">
      <div className="container-custom max-w-[1256px]">
        <div className="flex flex-col w-full">
          <div className="flex pt-[124px] md:pt-[130px] lg:pt-[168px] w-full">
            <TopInsightcard 
              version="v2"
              insight={insight}
            />
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
                <BlogsContent blocks={post.blocks} />
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

