import LocationCard, { LocationCardProps } from './LocationCard';

interface LocationCardGridProps {
  locations: LocationCardProps[];
}

function LocationCardGrid({ locations }: LocationCardGridProps) {
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
}

export default LocationCardGrid;
