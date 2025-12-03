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
                <Link key={i} href={link.href} className="py-2">
                  {link.label}
                </Link>
              ))}
            </div>

            <Link
              href={cta.href}
              className="h-14 bg-pulse-pink-600 hover:bg-pulse-pink-700 duration-800 py-2 px-6 inline-flex justify-center items-center rounded-full text-white font-semibold"
            >
              {cta.label}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
