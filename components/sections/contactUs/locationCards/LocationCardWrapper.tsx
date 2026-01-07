import LocationCardGrid from './LocationCardGrid';
import LocationHeader from './LocationHeader';

export type Location = {
  title: string;
  address: string;
};

interface LocationCardWrapperProps {
  locations: Location[];
}

function LocationCardWrapper({ locations }: LocationCardWrapperProps) {
  return (
    <section className="z-10">
      <div className="container-custom max-w-[1176px]">
        <div className="w-full flex flex-col pt-20 pb-40 gap-10 md:gap-14">
          <LocationHeader />
          <LocationCardGrid locations={locations} />
        </div>
      </div>
    </section>
  );
}

export default LocationCardWrapper;
