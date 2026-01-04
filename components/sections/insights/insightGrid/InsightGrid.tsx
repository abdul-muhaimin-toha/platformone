import InsightCard, { Insight } from './InsightCard';
import PaginationCustom from './PaginationCustom';

function InsightGrid({ insights }: { insights: Insight[] }) {
  return (
    <div className="flex flex-col w-full gap-10 xl:gap-20">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-3 xl:gap-6 gap-y-7 xl:gap-y-14">
        {insights.map((insight, index) => (
          <InsightCard key={index} insight={insight} />
        ))}
      </div>
      <PaginationCustom />
    </div>
  );
}

export default InsightGrid;
