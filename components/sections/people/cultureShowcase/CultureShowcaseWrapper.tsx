import CultureHeading from './CultureHeading';
import CultureImageGrid from './CultureImageGrid';
import { FC } from 'react';
import { BlockData, HeadingProps } from '../../home/types';

export interface CultureShowcaseData extends HeadingProps {
  feature_image_one: string;
  feature_image_two: string;
  feature_image_three: string;
  title_one: string;
  title_two: string;
}

export type CultureShowcaseWrapperProps = BlockData<CultureShowcaseData>;

const CultureShowcaseWrapper: FC<CultureShowcaseWrapperProps> = ({ data }) => {
  const content = data?.data;
  if (!content) return null;

  const {
    feature_image_one = '',
    feature_image_two = '',
    feature_image_three = '',
    short_description = '',
    title_one = '',
    title_two = '',
  } = content;

  const images = [
    { src: feature_image_one, alt: title_one },
    { src: feature_image_two, alt: title_two },
    { src: feature_image_three, alt: '' },
  ].filter((img) => img.src);

  return (
    <section>
      <div className="container-custom">
        <div className="flex flex-col py-32 w-full gap-16">
          <CultureHeading
            description={short_description}
            subtitle={title_two}
            title={title_one}
          />
          <CultureImageGrid images={images} />
        </div>
      </div>
    </section>
  );
};

export default CultureShowcaseWrapper;
