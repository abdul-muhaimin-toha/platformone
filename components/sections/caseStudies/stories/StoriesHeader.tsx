interface StoriesHeaderProps {
  title: string;
  highlightedTitle: string;
  description: string;
}

function StoriesHeader({
  title,
  highlightedTitle,
  description,
}: StoriesHeaderProps) {
  return (
    <div
      data-aos="fade-up"
      className="flex items-left flex-col justify-center lg:flex-row text-left gap-10 md:max-w-[600px] xl:gap-36 lg:max-w-max lg:items-center"
    >
      <h2 className="text-[38px] xl:text-[56px] xl:leading-[1.28] lg:w-1/2 font-bold leading-[1.26] text-black">
        {title} <span className="text-pulse-pink-600">{highlightedTitle}</span>
      </h2>

      <p className="text-xl font-normal leading-[1.33] xl:leading-normal lg:w-1/2 text-black">
        {description}
      </p>
    </div>
  );
}

export default StoriesHeader;
