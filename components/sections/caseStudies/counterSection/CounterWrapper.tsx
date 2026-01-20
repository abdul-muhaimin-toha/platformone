import HeadingBlock from '../../home/whatItLikeToWorkWithUs/HeadingBlock';
import CounterCard from './CounterCard';
import { BlockData, HeadingProps } from '../../home/types';

export interface CounterItem {
  counter_title: string;
  counter_description: string;
  _id?: string;
}

export interface CounterData extends HeadingProps {
  counters?: CounterItem[];
  description?: string; // Explicitly add description if it differs from HeadingProps
}

export type CounterWrapperProps = BlockData<CounterData>;

function CounterWrapper({ data }: CounterWrapperProps) {
  const content = data?.data;
  if (!content) return null;

  const { counters = [], description = '', title = '' } = content;

  return (
    <section>
      <div className="flex flex-col w-full pt-24 lg:pt-[120px] justify-center items-center gap-24 lg:gap-[120px]">
        <HeadingBlock title={title} description={description} />

        {counters.length > 0 && (
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 sm:gap-10 gap-6 lg:gap-10 w-full">
              {counters.map((counter, index) => (
                <CounterCard key={index} counter={counter} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CounterWrapper;
