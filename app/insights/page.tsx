import InsightGrid from '@/components/sections/insights/insightGrid/InsightGrid';
import MobileNavDrawer from '@/components/sections/insights/MobileNavDrawer';
import Sidebar from '@/components/sections/insights/sidebar/Sidebar';
import TopInsightcard from '@/components/sections/insights/TopInsightcard';

export default function InsightsPage() {
  return (
    <main className="bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-6 pt-[124px] md:pt-[130px] lg:pt-[168px] pb-32">
          <Sidebar version="v1" />
          <div className="flex-1 flex flex-col gap-14 md:gap-10 xl:gap-20">
            <TopInsightcard />
            <Sidebar version="v2" />
            <InsightGrid />
          </div>
          <MobileNavDrawer />
        </div>
      </div>
    </main>
  );
}
