import Button from "@/components/globals/Button";
import BlogsContent from "@/components/sections/insights/BlogsContent";
import MobileNavDrawer from "@/components/sections/insights/MobileNavDrawer";
import Sidebar from "@/components/sections/insights/sidebar/Sidebar";
import { getCachedPolicyBySlug } from "@/graphql/components/get-policies-data";
import { getSeoPolicyData } from "@/graphql/components/get-seo-data";
import { generateMetadataFromSeo } from "@/utils/generate-metadata";
import { extractTableOfContents } from "@/utils/insight-utils";
import { notFound } from "next/navigation";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const pageData = await getCachedPolicyBySlug(slug);
  return generateMetadataFromSeo(pageData);
}

export default async function PoliciesPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const policy = await getCachedPolicyBySlug(slug);

  if (!policy) {
    notFound();
  }

  const tocLinks = extractTableOfContents(policy.blocks || []);

  const formattedDate = policy.date ? new Date(policy.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }) : '';

  return (
    <main className="bg-white">
      <div className="container-custom max-w-[1256px]">
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:flex lg:flex-row  pt-[124px] md:pt-[130px] lg:pt-[168px] w-full  group md:flex-row gap-6 pb-10  border-b border-b-border">
            <div className="w-full flex flex-col md:col-span-2 lg:max-w-[211px] border-r border-transparent md:pr-2 xl:max-w-[248px] xl:pr-6">
              <Button variant="back" href="/policies">Back</Button>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-[32px] leading-tight text-black font-semibold">
                {policy.title}
              </h1>
              {formattedDate && (
                <p className="text-base font-normal leading-[1.37] text-black opacity-50">
                  Last updated: {formattedDate}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 py-32 pt-20 lg:py-20 lg:pt-20 lg:pb-32">
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
                <BlogsContent blocks={policy.blocks} />
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
