interface AutoSurveyHeroData {
  title: string;
  short_description: string;
  right_description: string;
}

interface AutoSurveyHeroProps {
  data: {
    data: AutoSurveyHeroData;
  };
}

function AutoSurveyHero({ data }: AutoSurveyHeroProps) {
  const content = data?.data;
  if (!content) return null;

  const {
    title = '',
    short_description = '',
    right_description = '',
  } = content;

  return (
    <section className="bg-white">
      <div className="bg-[#3E122F] rounded-bl-[64px] overflow-hidden">
        <div
          className="w-full relative bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('/home/hero/bg.svg')` }}
        >
          <div className="container-custom">
            <div
              data-aos="fade-up"
              className="w-full flex flex-col z-50 gap-10 items-start justify-center pt-[182px] pb-[114px] [@media(min-width:850)]:justify-between [@media(min-width:850)]:flex-row [@media(min-width:850)]:items-center [@media(min-width:850)]:gap-5 [@media(min-width:950)]:gap-14 lg:pb-[97px] lg:pt-[170px]"
            >
              {/* Text Content */}
              <div className="w-full flex flex-col items-center justify-center shrink-0 gap-[34px] max-w-[520px] [@media(min-width:850)]:max-w-1/2 lg:max-w-[520px]!">
                <h1 className="font-bold leading-[1.26] text-white text-[38px] w-full">
                  {title}
                </h1>
                <p className="text-base font-normal text-white w-full">
                  {short_description}
                </p>
              </div>

              {/* Image + SVG */}
              <div className="rounded-2xl w-full max-w-[424px] bg-pulse-pink-50 flex items-center justify-center px-6 py-10 [@media(min-width:850)]:max-w-1/2 lg:max-w-[424px]!">
                <p className="text-black w-full font-normal text-xl">
                  {right_description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AutoSurveyHero;
