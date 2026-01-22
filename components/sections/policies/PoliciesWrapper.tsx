import { getPoliciesData } from '@/graphql/components/get-policies-data';
import PoliciesCard from './PoliciesCard';
import { BlockData } from '../home/types';
import { PolicyNode } from '@/graphql/types';

export interface PoliciesData {
  policies?: PolicyNode[];
}

export type PoliciesWrapperProps = BlockData<PoliciesData>;

const PoliciesWrapper = async ({ data }: PoliciesWrapperProps) => {
  const content = data?.data;
  if (!content) return null;

  const policies = await getPoliciesData();

  if (!policies || policies.length === 0) return null;

  return (
    <section>
      <div className="container-custom max-w-[1114px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 md:gap-6 py-20 pt-[148px] md:py-[168px] w-full">
          {policies.map((policy, index) => (
            <PoliciesCard
              key={policy.id || index}
              title={policy.title || ''}
              link={`/policies/${policy.slug}`}
              date={policy.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoliciesWrapper;
