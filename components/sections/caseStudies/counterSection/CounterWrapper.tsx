import HeadingBlock from '../../home/whatItLikeToWorkWithUs/HeadingBlock';
import CounterCard from './CounterCard';

export interface CounterItem {
  counterNumber: number;
  suffix?: string;
  decimal?: number;
  counterDetails: string;
}

interface CounterWrapperProps {
  title: string;
  description: string;
  counters: CounterItem[];
}

function CounterWrapper({ title, description, counters }: CounterWrapperProps) {
  return (
    <section>
      <div className="flex flex-col w-full pt-24 lg:pt-[120px] justify-center items-center gap-24 lg:gap-[120px]">
        <HeadingBlock title={title} description={description} />

        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 sm:gap-10 gap-6 lg:gap-10 w-full">
            {counters.map((counter, index) => (
              <CounterCard key={index} counter={counter} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CounterWrapper;
