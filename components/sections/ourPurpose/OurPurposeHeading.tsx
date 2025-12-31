interface OurPurposeHeadingProps {
  heading: {
    line1: string;
    line2: string;
  };
  paragraph: string;
}

function OurPurposeHeading({ heading, paragraph }: OurPurposeHeadingProps) {
  return (
    <section>
      <div className="container-custom">
        <div
          data-aos="fade-up"
          className="flex items-left pt-24 lg:pt-32 xl:pb-32 flex-col justify-center lg:flex-row text-left gap-8 md:max-w-[600px] xl:gap-36 lg:max-w-max lg:items-center"
        >
          <h2 className="text-[28px] sm:text-[38px] lg:text-[32px] xl:text-[38px] inline-flex flex-col lg:w-1/2 font-bold leading-[1.26] text-black">
            <span>{heading.line1}</span>
            <span className="text-pulse-pink-600">{heading.line2}</span>
          </h2>

          <p className="text-xl font-normal lg:w-1/2 text-black">{paragraph}</p>
        </div>
      </div>
    </section>
  );
}

export default OurPurposeHeading;
