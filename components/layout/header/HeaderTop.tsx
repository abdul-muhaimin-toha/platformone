import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/globals/Button';
import { cn } from '@/utils/utils';
import HeaderHamBurgerButton from './HeaderHamBurgerButton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

import { NavLink } from './types';

interface HeaderTopProps {
  logoSrc: string;
  logoLightSrc: string;
  desktopLinks: NavLink[];
  cta: { label: string; href: string };
  onMenuClick?: () => void;
  scrolled: boolean;
  open: boolean;
}

export default function HeaderTop({
  logoSrc,
  logoLightSrc,
  desktopLinks,
  cta,
  onMenuClick,
  scrolled,
  open,
}: HeaderTopProps) {
  return (
    <div className="fixed top-0 left-0 z-501 w-full">
      <div
        className={cn(
          'flex w-full flex-row items-center justify-between',
          'transition-[background-color,backdrop-filter] duration-700 ease-out',
          scrolled || open
            ? 'bg-white backdrop-blur-none'
            : 'bg-black/8 backdrop-blur-xl',
          !open && 'shadow-[0_4px_16px_0_rgba(0,0,0,0.08)]',
        )}
      >
        <div className="container-custom">
          <div className="flex flex-row w-full py-5 items-center justify-between">
            <Link href="/">
              <Image
                src={logoSrc}
                width={208}
                height={34}
                className={cn(
                  'aspect-208/34 max-w-[168px] md:max-w-max',
                  scrolled || open ? 'block' : 'hidden',
                )}
                alt="Platformone logo"
              />
              <Image
                src={logoLightSrc}
                width={208}
                height={34}
                className={cn(
                  'aspect-208/34 max-w-[168px] md:max-w-max',
                  scrolled || open ? 'hidden' : 'block',
                )}
                alt="Platformone logo"
              />
            </Link>

            <div className="flex flex-row items-center gap-12 text-xl font-medium leading-[1.30] justify-end">
              {/* Desktop links */}
              <div
                className={cn(
                  'lg:flex hidden flex-row  items-center justify-end gap-12',
                  scrolled || open ? 'text-black' : 'text-white',
                )}
              >
                {desktopLinks.map((link, i) => {
                  if (link.child) {
                    return (
                      <DropdownMenu key={i} modal={false}>
                        <DropdownMenuTrigger
                          className={cn(
                            'flex items-center gap-2 cursor-pointer outline-none duration-300',
                            scrolled || open
                              ? 'hover:text-pulse-pink-900 data-[state=open]:text-pulse-pink-900'
                              : 'hover:text-pulse-pink-100 data-[state=open]:text-pulse-pink-100',
                          )}
                        >
                          {link.label}
                          <ChevronDown className="size-6" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-white z-9999 hidden lg:block p-2.5 py-3 rounded-sm border border-border mt-6 shadow-xs w-[270px]">
                          {link.child.map((childLink, j) => (
                            <DropdownMenuItem key={j} asChild>
                              <Link
                                href={childLink.href}
                                className="w-full bg-gray-100 my-1 cursor-pointer rounded-sm px-4 py-3 hover:bg-pulse-pink-100 hover:text-black focus:bg-pulse-pink-100 capitalize focus:text-black text-[18px] font-medium"
                              >
                                {childLink.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    );
                  }

                  return (
                    <Link
                      key={i}
                      href={link.href || '#'}
                      className={cn(
                        'duration-300',
                        scrolled || open
                          ? 'hover:text-pulse-pink-900'
                          : 'hover:text-pulse-pink-100',
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* CTA */}
              <Button
                href={cta.href}
                variant="primary"
                className="hidden! lg:inline-flex!"
              >
                {cta.label}
              </Button>

              {/* Mobile trigger */}
              <HeaderHamBurgerButton
                onMenuClick={onMenuClick}
                open={open}
                scrolled={scrolled}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
