import PoliciesCard, { PolicyCard } from './PoliciesCard';

interface PoliciesWrapperProps {
  policies: PolicyCard[];
}

function PoliciesWrapper({ policies }: PoliciesWrapperProps) {
  return (
    <section>
      <div className="container-custom max-w-[1114px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 md:gap-6 py-20 pt-[148px] md:py-[168px] w-full">
          {policies.map((policy, index) => (
            <PoliciesCard
              key={index}
              title={policy.title}
              date={policy.date}
              buttonText={policy.buttonText}
              className={policy.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PoliciesWrapper;
