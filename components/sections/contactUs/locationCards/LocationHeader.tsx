import { FC } from 'react';
import { parseHighlights } from '@/utils/utils';

interface LocationHeaderProps {
  title?: string;
  description?: string;
}

const LocationHeader: FC<LocationHeaderProps> = ({ title, description }) => {
  return (
    <div
      data-aos="fade-up"
      className="flex items-left flex-col justify-center lg:flex-row text-left gap-6 md:max-w-[600px] lg:max-w-max lg:items-center"
    >
      <h2
        className="text-[56px] leading-[1.28] lg:w-1/2 font-bold text-black"
        dangerouslySetInnerHTML={{
          __html: parseHighlights(title || 'Locations'),
        }}
      />
      <p
        className="text-xl font-normal leading-[1.33] lg:w-1/2 text-black"
        dangerouslySetInnerHTML={{
          __html: parseHighlights(
            description ||
              'We operate across key locations worldwide, with client-facing teams and delivery hubs supporting every part of the experience.',
          ),
        }}
      />
    </div>
  );
};

export default LocationHeader;
