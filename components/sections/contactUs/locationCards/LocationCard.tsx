export interface LocationCardProps {
  title: string;
  address: string;
}

function LocationCard({ title, address }: LocationCardProps) {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col w-full gap-1 p-6 bg-white rounded-2xl border border-border"
    >
      <h3 className="text-2xl font-semibold leading-[1.33] text-black">
        {title}
      </h3>
      <p className="text-[#737373] text-xl leading-[1.30] font-normal">
        {address}
      </p>
    </div>
  );
}

export default LocationCard;
