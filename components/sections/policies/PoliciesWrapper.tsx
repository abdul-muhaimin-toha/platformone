import { FC } from 'react';
import PoliciesCard, { PolicyCard } from './PoliciesCard';
import { BlockData } from '../home/types';

export interface PoliciesData {
  policies?: PolicyCard[];
}

export type PoliciesWrapperProps = BlockData<PoliciesData>;

const PoliciesWrapper: FC<PoliciesWrapperProps> = ({ data }) => {
  const content = data?.data;
  if (!content) return null;

  const { policies = [] } = content;

  return (
    <section>
      <div className="container-custom max-w-[1114px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 md:gap-6 py-20 pt-[148px] md:py-[168px] w-full">
          {policies.map((policy, index) => (
            <PoliciesCard key={index} {...policy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoliciesWrapper;
