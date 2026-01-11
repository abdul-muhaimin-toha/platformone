import Button from '@/components/globals/Button';
import Link from 'next/link';

interface HeaderMobileNavProps {
  links: { label: string; href: string }[];
  cta: { label: string; href: string };
  isOpen: boolean;
  setOpen: (state: boolean) => void;
}

export default function HeaderMobileNav({
  links,
  cta,
  isOpen,
  setOpen,
}: HeaderMobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 z-500 left-0  w-full lg:hidden">
      <div className="flex w-full flex-col items-center pt-[72px] md:pt-[74px] lg:pt-24 justify-center bg-white border-b-2">
        <div className="container-custom">
          <div className="flex flex-col py-5 gap-10 w-full">
            <div className="w-full flex flex-col justify-start text-black gap-6 text-2xl font-semibold leading-[1.33]">
              {links.map((link, i) => (
                <Link
                  onClick={() => setOpen(false)}
                  key={i}
                  href={link.href}
                  className="py-2 hover:text-pulse-pink-900 duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link href={cta.href}>
              <Button
                onClick={() => setOpen(false)}
                variant="primary"
                className="w-full font-semibold! text-xl! leading-[26px]!"
              >
                {cta.label}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
