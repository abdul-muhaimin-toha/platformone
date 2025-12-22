import { FC } from 'react';
import TextRevealDescription from '../home/whatWeDo/TextRevealDescription';

interface ReimagineAServiceProps {
  description: string;
}

const ReimagineAService: FC<ReimagineAServiceProps> = ({ description }) => {
  return (
    <section>
      <div className="container-custom">
        <div className="w-full flex flex-col py-14 pb-32 items-start">
          <div className="w-full flex flex-col max-w-[480px] md:max-w-max">
            <TextRevealDescription
              className="text-xl z-20 lg:text-2xl font-normal leading-[1.33] text-black max-w-[848px]"
              text={description}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReimagineAService;
