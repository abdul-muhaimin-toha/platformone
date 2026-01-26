import InsightCard, { Insight } from './InsightCard';
import PaginationCustom from './PaginationCustom';

interface InsightGridProps {
  insights: Insight[];
  pagination?: {
    currentPage: number;
    totalPages: number;
    baseUrl: string;
  };
}

function InsightGrid({ insights, pagination }: InsightGridProps) {
  return (
    <div className="flex flex-col w-full gap-10 xl:gap-20">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-3 xl:gap-6 gap-y-7 xl:gap-y-14">
        {insights.length > 0 ? (
          insights.map((insight, index) => (
            <InsightCard key={index} insight={insight} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <p className="text-xl text-gray-500 font-medium">No insights found matching your criteria.</p>
          </div>
        )}
      </div>
      {pagination && pagination.totalPages > 1 && (
        <PaginationCustom
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          baseUrl={pagination.baseUrl}
        />
      )}
    </div>
  );
}

export default InsightGrid;
