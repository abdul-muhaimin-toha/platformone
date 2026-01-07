import Button from '@/components/globals/Button';

export interface OpenRoleCtaProps {
  title: string;
  highlight: string;
  title2: string;
  button: {
    label: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'tertiary';
  };
}

function OpenRoleCta({ title, highlight, title2, button }: OpenRoleCtaProps) {
  return (
    <section>
      <div className="container-custom">
        <div className="w-full flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between pt-[88px] pb-32">
          <h2 className="text-[36px] md:text-[44px] xl:text-[56px] w-full font-bold leading-[1.28] text-black max-w-[780px]">
            {title} <span className="text-pulse-pink-600">{highlight}</span>{' '}
            {title2}
          </h2>
          <Button href={button.href} variant={button.variant ?? 'secondary'}>
            {button.label}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default OpenRoleCta;
