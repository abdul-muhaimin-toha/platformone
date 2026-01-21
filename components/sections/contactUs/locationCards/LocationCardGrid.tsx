import { FC } from 'react';
import LocationCard, { LocationCardProps } from './LocationCard';

interface LocationCardGridProps {
  locations?: LocationCardProps[];
}

const LocationCardGrid: FC<LocationCardGridProps> = ({ locations = [] }) => {
  if (!locations || locations.length === 0) return null;

  return (
    <div
      data-aos="fade-up"
      className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2"
    >
      {locations.map((location, index) => (
        <LocationCard key={index} {...location} />
      ))}
    </div>
  );
};

export default LocationCardGrid;
