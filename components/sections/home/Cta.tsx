import Button from '@/components/globals/Button';
import { cn } from '@/utils/utils';

interface CtaProps {
  version?: 'v1' | 'v2';
  headingPrimary: string;
  headingSecondary: string;
  buttonText: string;
  buttonHref: string;
}

const Cta: React.FC<CtaProps> = ({
  version = 'v1',
  headingPrimary,
  headingSecondary,
  buttonText,
  buttonHref,
}) => {
  return (
    <section className="bg-linear-90 from-[#E9C4DD00]/0 to-[#E9C4DD99]/60">
      <div className="container-custom">
        <div
          data-aos="fade-up"
          className="w-full flex flex-col gap-10 py-24 md:flex-row md:items-center md:justify-between"
        >
          <h2
            className={cn(
              'text-[56px] flex w-full flex-col font-bold leading-[1.33]',
              version == 'v1' ? 'text-[56px]' : 'text-4xl sm:text-[56px]'
            )}
          >
            <span className="text-[#4D2B42]">{headingPrimary}</span>
            <span className="text-pulse-pink-600">{headingSecondary}</span>
          </h2>
          <Button href={buttonHref} variant="primary-arrow">
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
