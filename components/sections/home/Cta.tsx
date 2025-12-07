import Button from '@/components/globals/Button';

interface CtaProps {
  headingPrimary: string;
  headingSecondary: string;
  buttonText: string;
  buttonHref: string;
}

const Cta: React.FC<CtaProps> = ({
  headingPrimary,
  headingSecondary,
  buttonText,
  buttonHref,
}) => {
  return (
    <section className="bg-linear-[90deg] from-[#E9C4DD00]/0 to-[#E9C4DD99]/60">
      <div className="container-custom">
        <div
          data-aos="fade-up"
          className="w-full flex flex-col gap-10 py-24 md:flex-row md:items-center md:justify-between"
        >
          <h2 className="text-[56px] flex w-full flex-col font-bold leading-[1.33]">
            <span className="text-black">{headingPrimary}</span>
            <span className="text-pulse-pink-600">{headingSecondary}</span>
          </h2>
          <Button href={buttonHref} variant="primary">
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
