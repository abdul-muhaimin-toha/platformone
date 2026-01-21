import { FC } from 'react';
import { BlockData } from '../../home/types';
import LocationCardGrid from './LocationCardGrid';
import { LocationCardProps } from './LocationCard';
import LocationHeader from './LocationHeader';

export interface LocationCardSectionData {
  title?: string;
  shor?: string; // Potential CMS field name
  short_description?: string;
  location?: LocationCardProps[];
}

export type LocationCardWrapperProps = BlockData<LocationCardSectionData>;

const LocationCardWrapper: FC<LocationCardWrapperProps> = ({ data }) => {
  const content = data?.data;
  if (!content) return null;

  const {
    title = '',
    shor = '',
    short_description = '',
    location = [],
  } = content;


  return (
    <section className="z-10">
      <div className="container-custom max-w-[1176px]">
        <div className="w-full flex flex-col pt-20 pb-40 gap-10 md:gap-14">
          <LocationHeader title={title} description={short_description} />
          <LocationCardGrid locations={location} />
        </div>
      </div>
    </section>
  );
};

export default LocationCardWrapper;
