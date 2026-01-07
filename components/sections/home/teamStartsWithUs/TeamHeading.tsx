export default function TeamHeading({
  heading,
  subheading,
  description,
}: {
  heading: string;
  subheading: string;
  description: string;
}) {
  return (
    <div
      data-aos="fade-up"
      className="flex items-left flex-col justify-center lg:flex-row text-left gap-10 md:max-w-[600px] xl:gap-36 lg:max-w-max lg:items-center lg:justify-between"
    >
      <div className="flex flex-col lg:w-[632px] gap-2">
        <h2 className="text-[56px] xl:text-[56px] xl:leading-[1.28] w-full font-bold leading-[1.28] text-white">
          {heading}
        </h2>
        <h3 className="text-2xl font-semibold leading-[1.33] text-pulse-pink-600">
          {subheading}
        </h3>
      </div>

      <p className="text-xl font-normal leading-[100%] lg:max-w-xl lg:w-1/2 text-pulse-pink-200">
        {description}
      </p>
    </div>
  );
}
