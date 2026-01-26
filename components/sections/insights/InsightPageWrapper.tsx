import Sidebar, { LinkItem } from './sidebar/Sidebar';
import TopInsightcard from './TopInsightcard';
import InsightGrid from './insightGrid/InsightGrid';
import MobileNavDrawer from './MobileNavDrawer';
import { Insight } from './insightGrid/InsightCard';
import { cn } from '@/utils/utils';
import Link from 'next/link';

interface InsightPageWrapperProps {
  topInsight?: Insight | null;
  gridInsights: Insight[];
  exploreLinks: LinkItem[];
  topicLinks: LinkItem[];
  isFirstSection?: boolean;
  pagination?: {
    currentPage: number;
    totalPages: number;
    baseUrl: string;
  };
}

function InsightPageWrapper({
  topInsight,
  gridInsights,
  exploreLinks,
  topicLinks,
  isFirstSection = true,
  pagination,
}: InsightPageWrapperProps) {
  return (
    <section className="bg-white">
      <div className="container-custom">
        <div className={cn(
          "flex flex-col  w-full lg:flex-row gap-6 pb-32",
          isFirstSection ? "pt-[124px] md:pt-[130px] lg:pt-[168px]" : "pt-10"
        )}>
          <Sidebar
            version="v1"
            exploreLinks={exploreLinks}
            topicLinks={topicLinks}
          />
          <div className="flex-1 flex flex-col gap-14 md:gap-10 xl:gap-20">
            {topInsight ? (
              <>
                <TopInsightcard insight={topInsight} />
                <Sidebar
                  version="v2"
                  exploreLinks={exploreLinks}
                  topicLinks={topicLinks}
                />
                <InsightGrid insights={gridInsights} pagination={pagination} />
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <h2 className="text-2xl font-bold text-black">No insights found</h2>
                <p className="text-gray-500 mt-2">Try adjusting your filters or search terms.</p>
                <Link 
                  href="/insights" 
                  className="mt-6 text-pulse-pink-600 font-semibold hover:underline"
                >
                  Clear all filters
                </Link>
              </div>
            )}
          </div>
          <MobileNavDrawer
            exploreLinks={exploreLinks}
            topicLinks={topicLinks}
          />
        </div>
      </div>
    </section>
  );
}

export default InsightPageWrapper;
