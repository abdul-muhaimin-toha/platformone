import { FC } from 'react';
import { parseHighlights } from '@/utils/utils';

interface Props {
  title?: string;
  description?: string;
}

const HeadingBlock: FC<Props> = ({ title, description }) => {
  if (!title && !description) return null;

  return (
    <div className="container-custom">
      <div
        data-aos="fade-up"
        className="flex items-left flex-col justify-center lg:flex-row text-left gap-10 md:max-w-[600px] xl:gap-36 lg:max-w-max lg:items-center"
      >
        {title && (
          <h2
            className="text-[38px] xl:text-[56px] xl:leading-[1.28] lg:w-1/2 font-bold leading-[1.26] text-black"
            dangerouslySetInnerHTML={{ __html: parseHighlights(title) }}
          />
        )}
        {description && (
          <p className="text-xl font-normal leading-[27px] lg:w-1/2 text-black">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default HeadingBlock;
