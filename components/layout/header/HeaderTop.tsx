import Image from 'next/image';
import Link from 'next/link';
import HamburgerIcon from '@/components/icons/HamburgerIcon';

interface HeaderTopProps {
  logoSrc: string;
  desktopLinks: { label: string; href: string }[];
  cta: { label: string; href: string };
  onMenuClick?: () => void;
}

export default function HeaderTop({
  logoSrc,
  desktopLinks,
  cta,
  onMenuClick,
}: HeaderTopProps) {
  return (
    <div className="fixed top-0 left-0 z-501 w-full">
      <div className="flex w-full flex-row items-center justify-between bg-white shadow">
        <div className="container-custom">
          <div className="flex flex-row w-full py-5 items-center justify-between">
            <Image
              src={logoSrc}
              width={208}
              height={34}
              className="aspect-208/34 max-w-[168px] md:max-w-max"
              alt="Platformone logo"
            />

            <div className="flex flex-row items-center gap-12 text-xl font-medium leading-[1.30] justify-end">
              {/* Desktop links */}
              <div className="lg:flex hidden flex-row items-center justify-end gap-12">
                {desktopLinks.map((link, i) => (
                  <Link key={i} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={cta.href}
                className="h-14 hidden bg-pulse-pink-600 hover:bg-pulse-pink-700 duration-800 py-2 px-6 lg:inline-flex justify-center items-center rounded-full text-white font-semibold"
              >
                {cta.label}
              </Link>

              {/* Mobile trigger */}
              <button
                onClick={onMenuClick}
                className="text-mulberry-900 hover:text-mulberry-950 duration-300 p-2 lg:hidden"
              >
                <HamburgerIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
