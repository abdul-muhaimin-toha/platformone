interface HeaderProps {
  title: string;
  subtitle: string;
  description: string;
}

function StayUpToDateHeader({ title, subtitle, description }: HeaderProps) {
  return (
    <div
      data-aos="fade-up"
      className="w-full flex items-left flex-col justify-center lg:flex-row text-left gap-10 md:max-w-[600px] xl:gap-36 lg:max-w-full lg:justify-between lg:items-center xl:w-full"
    >
      <div className="flex flex-col gap-2 w-full lg:w-1/2">
        <h2 className="text-[38px] xl:text-[56px] xl:leading-[1.28] font-bold leading-[1.26] text-white">
          {title}
        </h2>
        <p className="text-xl xl:font-2xl font-semibold leading-[1.33] text-pulse-pink-300">
          {subtitle}
        </p>
      </div>
      <p className="text-xl font-normal leading-[100%] lg:w-1/2 xl:max-w-xl text-white">
        {description}
      </p>
    </div>
  );
}

export default StayUpToDateHeader;
