export interface LeadershipHeadingProps {
  title: string;
  subtitle: string;
}

function LeadershipSectionHeading({ title, subtitle }: LeadershipHeadingProps) {
  return (
    <div
      data-aos="fade-up"
      className="w-full flex flex-col items-center justify-center gap-2"
    >
      <h2 className="w-full text-3xl md:text-4xl xl:text-[56px] font-bold leading-[1.28] text-black">
        {title}
      </h2>

      <p className="w-full text-2xl md:text-3xl lg:text-4xl xl:text-[38px] font-bold leading-[1.26] text-pulse-pink-600">
        {subtitle}
      </p>
    </div>
  );
}

export default LeadershipSectionHeading;
