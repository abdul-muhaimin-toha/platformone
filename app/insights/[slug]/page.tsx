import MobileNavDrawer from "@/components/sections/insights/MobileNavDrawer";
import Sidebar from "@/components/sections/insights/sidebar/Sidebar";
import TopInsightcard from "@/components/sections/insights/TopInsightcard";

import BlogsContent from "@/components/sections/insights/BlogsContent";

export default function InsightsPage() {
  return (
    <main className="bg-white">
      <div className="container-custom max-w-[1256px]">
        <div className="flex flex-col w-full">
          <div className="flex pt-[124px] md:pt-[130px] lg:pt-[168px] w-full">
            <TopInsightcard
              version="v2"
              insight={{
                title:
                  "From Feedback to Action: How to Turn Insights Into Measurable Growth",
                image: "/insights/top-card.png",
                category: { label: "Blog", href: "/" },
                secondaryCategory: "Insight Communities",
                author: "Andrew Dye",
                authorImage: "/home/work-with-us/avatar.png",
                date: "August 13, 2025",
              }}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-6 py-32 pt-[120px] lg:py-20 lg:pb-32">
            <Sidebar
              version="v1"
              page="details"
              exploreLinks={[
                { label: "All", href: "/", isActive: true },
                { label: "Blogs", href: "/" },
                { label: "Press Releases", href: "/" },
                { label: "Podcasts", href: "/" },
                { label: "Whitepapers", href: "/" },
              ]}
              topicLinks={[
                { label: "All", href: "/", isActive: true },
                { label: "Customer Experience", href: "/" },
                { label: "Employee Experience", href: "/" },
                { label: "Insight Communities", href: "/" },
                { label: "Data Visualisation", href: "/" },
                { label: "Data Visualisation", href: "/" },
              ]}
            />
            <div className="flex-1 flex flex-col gap-14 md:gap-10 xl:gap-20">
              <Sidebar
                version="v2"
                page="details"
                exploreLinks={[
                  { label: "All", href: "/", isActive: true },
                  { label: "Blogs", href: "/" },
                  { label: "Press Releases", href: "/" },
                  { label: "Podcasts", href: "/" },
                  { label: "Whitepapers", href: "/" },
                ]}
                topicLinks={[
                  { label: "All", href: "/", isActive: true },
                  { label: "Customer Experience", href: "/" },
                  { label: "Employee Experience", href: "/" },
                  { label: "Insight Communities", href: "/" },
                  { label: "Data Visualisation", href: "/" },
                  { label: "Data Visualisation", href: "/" },
                ]}
              />
              <div className="flex flex-col w-full gap-10 xl:gap-20">
                <BlogsContent />
              </div>
            </div>
            <MobileNavDrawer
              page="details"
              exploreLinks={[
                { label: "All", href: "/", isActive: true },
                { label: "Blogs", href: "/" },
                { label: "Press Releases", href: "/" },
                { label: "Podcasts", href: "/" },
                { label: "Whitepapers", href: "/" },
              ]}
              topicLinks={[
                { label: "All", href: "/", isActive: true },
                { label: "Blogs", href: "/" },
                { label: "Press Releases", href: "/" },
                { label: "Podcasts", href: "/" },
                { label: "Whitepapers", href: "/" },
              ]}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
