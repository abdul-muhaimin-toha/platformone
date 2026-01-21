import { parseHighlights } from '@/utils/utils';

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
      {title && (
        <h2
          className="w-full text-left text-3xl md:text-4xl xl:text-[56px] font-bold leading-[1.28] text-black"
          dangerouslySetInnerHTML={{ __html: parseHighlights(title) }}
        />
      )}

      {subtitle && (
        <p
          className="w-full text-left text-2xl md:text-3xl lg:text-4xl xl:text-[38px] font-bold leading-[1.26] text-pulse-pink-600"
          dangerouslySetInnerHTML={{ __html: parseHighlights(subtitle) }}
        />
      )}
    </div>
  );
}

export default LeadershipSectionHeading;
