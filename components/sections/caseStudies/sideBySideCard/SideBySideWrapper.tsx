'use client';

import SideBySideCard, { SideBySideCardProps } from './SideBySideCard';

const SideBySideWrapper: React.FC<SideBySideCardProps> = ({ ...card }) => {
  return (
    <section>
      <div className="container-custom">
        <div className="flex w-full justify-center items-center">
          <div className="flex flex-col w-full py-24 lg:py-[120px]">
            <SideBySideCard {...card} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideBySideWrapper;
