import Button from '@/components/globals/Button';
import Link from 'next/link';

interface HeaderMobileNavProps {
  links: { label: string; href: string }[];
  cta: { label: string; href: string };
  isOpen: boolean;
}

export default function HeaderMobileNav({
  links,
  cta,
  isOpen,
}: HeaderMobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 z-500 left-0  w-full lg:hidden">
      <div className="flex w-full flex-col items-center pt-[72px] md:pt-[74px] lg:pt-24 justify-center bg-white">
        <div className="container-custom">
          <div className="flex flex-col py-5 gap-10 w-full">
            <div className="w-full flex flex-col justify-start text-black gap-6 text-2xl font-semibold leading-[1.33]">
              {links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="py-2 hover:text-pulse-pink-900 duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Button
              href={cta.href}
              variant="primary"
              className="w-full font-semibold! text-xl!"
            >
              {cta.label}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
