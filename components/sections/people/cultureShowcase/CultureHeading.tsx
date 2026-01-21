import { parseHighlights } from '@/utils/utils';

interface CultureHeadingProps {
  title: string;
  subtitle: string;
  description: string;
}

function CultureHeading({ title, subtitle, description }: CultureHeadingProps) {
  return (
    <div className="flex items-left flex-col justify-center lg:flex-row text-left gap-16 md:max-w-[600px] xl:gap-36 lg:max-w-max lg:items-center">
      <div className="lg:w-1/2 flex flex-col gap-2">
        <h2
          className="text-[38px] sm:text-[44px] xl:text-[56px] xl:leading-[1.28] w-full font-bold leading-[1.26] text-black"
          dangerouslySetInnerHTML={{ __html: parseHighlights(title) }}
        />
        <p
          className="text-[32px] sm:text-[36px] xl:text-[38px] font-semibold leading-tight text-pulse-pink-600"
          dangerouslySetInnerHTML={{ __html: parseHighlights(subtitle) }}
        />
      </div>

      <p className="text-xl font-normal leading-[1.33] xl:leading-normal lg:w-1/2 text-black xl:max-w-xl">
        {description}
      </p>
    </div>
  );
}

export default CultureHeading;
