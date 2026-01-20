import { FC } from 'react';
import TextRevealDescription from '../home/whatWeDo/TextRevealDescription';
import { BlockData, HeadingProps } from '../home/types';

export interface ReimagineAServiceData extends HeadingProps {
  description?: string;
}

export type ReimagineAServiceProps = BlockData<ReimagineAServiceData>;

const ReimagineAService: FC<ReimagineAServiceProps> = ({ data }) => {
  const content = data?.data;
  if (!content) return null;

  const { short_description = '' } = content;

  return (
    <section>
      <div className="container-custom">
        <div className="w-full flex flex-col py-14 pb-32 items-start">
          <div className="w-full flex flex-col max-w-[480px] md:max-w-max">
            <TextRevealDescription
              className="text-xl z-20 lg:text-2xl font-normal leading-[1.33] text-black max-w-[854px]"
              text={short_description}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReimagineAService;
