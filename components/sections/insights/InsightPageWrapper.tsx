import Sidebar, { LinkItem } from './sidebar/Sidebar';
import TopInsightcard from './TopInsightcard';
import InsightGrid from './insightGrid/InsightGrid';
import MobileNavDrawer from './MobileNavDrawer';
import { Insight } from './insightGrid/InsightCard';

interface InsightPageWrapperProps {
  topInsight: Insight;
  gridInsights: Insight[];
  exploreLinks: LinkItem[];
  topicLinks: LinkItem[];
}

function InsightPageWrapper({
  topInsight,
  gridInsights,
  exploreLinks,
  topicLinks,
}: InsightPageWrapperProps) {
  return (
    <main className="bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-6 pt-[124px] md:pt-[130px] lg:pt-[168px] pb-32">
          <Sidebar
            version="v1"
            exploreLinks={exploreLinks}
            topicLinks={topicLinks}
          />
          <div className="flex-1 flex flex-col gap-14 md:gap-10 xl:gap-20">
            <TopInsightcard insight={topInsight} />
            <Sidebar
              version="v2"
              exploreLinks={exploreLinks}
              topicLinks={topicLinks}
            />
            <InsightGrid insights={gridInsights} />
          </div>
          <MobileNavDrawer
            exploreLinks={exploreLinks}
            topicLinks={topicLinks}
          />
        </div>
      </div>
    </main>
  );
}

export default InsightPageWrapper;
