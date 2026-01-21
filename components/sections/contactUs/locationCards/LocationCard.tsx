import { FC } from 'react';
import { parseHighlights } from '@/utils/utils';

export interface LocationCardProps {
  title: string;
  address: string;
}

const LocationCard: FC<LocationCardProps> = ({ title, address }) => {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col w-full gap-1 p-6 bg-white rounded-2xl border border-border"
    >
      <h3
        className="text-2xl font-semibold leading-[1.33] text-black"
        dangerouslySetInnerHTML={{ __html: parseHighlights(title) }}
      />
      <div
        className="text-[#737373] text-xl leading-[1.30] font-normal"
        dangerouslySetInnerHTML={{ __html: parseHighlights(address) }}
      />
    </div>
  );
};

export default LocationCard;
