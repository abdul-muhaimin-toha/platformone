'use client';

import TopInsightsHeader from './TopInsightHeader';
import TopInsightsSlider from './TopInsightsSlider';
import { Insight as InsightType } from './InsightCard';

interface TopInsightsWrapperProps {
  insights: InsightType[];
  title: string;
  subtitle: string;
  viewAllHref: string;
}

export default function TopInsightsWrapper({
  insights,
  title,
  subtitle,
  viewAllHref,
}: TopInsightsWrapperProps) {
  return (
    <section
      style={{
        background: 'linear-gradient(97deg, #571B39 0%, #2F0730 100%)',
      }}
    >
      <div className="w-full flex flex-col gap-14 py-20 bg-white rounded-tl-[80px] lg:rounded-tl-[120px]">
        <div className="container-custom">
          <TopInsightsHeader
            title={title}
            subtitle={subtitle}
            viewAllHref={viewAllHref}
          />
        </div>

        <TopInsightsSlider insights={insights} />
      </div>
    </section>
  );
}
