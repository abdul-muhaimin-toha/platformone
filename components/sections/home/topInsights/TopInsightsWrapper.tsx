import { getInsightsData } from '@/graphql/components/get-insights-data';
import TopInsightsSlider from './TopInsightsSlider';
import { WPNode } from '@/graphql/types';
import TopInsightsHeader from './TopInsightHeader';
import { BlockData, ButtonProps, HeadingProps } from '../types';

export interface TopInsightsItem {
  id: string | number;
}

export interface TopInsightsData extends ButtonProps, HeadingProps {
  selected_blogs: TopInsightsItem[];
}

export type TopInsightsWrapperProps = BlockData<TopInsightsData>;

export default async function TopInsightsWrapper({
  data,
}: TopInsightsWrapperProps) {
  const content = data?.data;
  if (!content) return null;

  const {
    btn_text = 'View all insights', // Default value if missing
    btn_url = '#',
    open_in_new_tab = false,
    selected_blogs = [],
    subtitle = '',
    title = '',
  } = content;

  // Extract IDs safely and ensure they are valid
  const ids = selected_blogs.map((blog) => blog.id).filter(Boolean);

  let insights: WPNode[] = [];
  if (ids.length > 0) {
    insights = await getInsightsData(ids);
  }
  
  // Cast WPNode to Insight if structure matches, or filter out invalid nodes
  // Here we assume getInsightsData returns valid nodes compatible with Insight aside from optional id
  const validInsights = insights.filter((node) => node.id) as any[]; 

  return (
    <section
      style={{
        background: 'linear-gradient(97deg, #571B39 0%, #2F0730 100%)',
      }}
    >
      <div className="w-full flex flex-col gap-14 py-20 bg-white rounded-tl-[80px] lg:rounded-tl-[120px]">
        <div className="container-custom">
          <TopInsightsHeader
            btn_url={btn_url}
            btn_text={btn_text}
            open_in_new_tab={open_in_new_tab}
            subtitle={subtitle}
            title={title}
          />
        </div>
        <TopInsightsSlider insights={validInsights} />
      </div>
    </section>
  );
}
