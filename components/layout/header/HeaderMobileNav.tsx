import Button from '@/components/globals/Button';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { NavLink } from './types';

interface HeaderMobileNavProps {
  links: NavLink[];
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
      <div className="flex w-full flex-col items-center pt-[72px] md:pt-[74px] lg:pt-24 justify-center bg-white border-b-2">
        <div className="container-custom">
          <div className="flex flex-col py-5 gap-10 w-full">
            <div className="w-full flex flex-col justify-start text-black gap-6 text-2xl font-semibold leading-[1.33]">
              {links.map((link, i) => {
                if (link.child) {
                  return (
                    <Accordion
                      key={i}
                      type="single"
                      collapsible
                      className="w-full border-b-0"
                    >
                      <AccordionItem value={`item-${i}`} className="border-b-0">
                        <AccordionTrigger className="hover:text-pulse-pink-900 duration-300 py-2 hover:no-underline font-semibold text-2xl data-[state=open]:text-pulse-pink-900">
                          {link.label}
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-3 pt-2 pb-0 border-l-0 mb-0 pl-0">
                          {link.child.map((childLink, j) => (
                            <Link
                              key={j}
                              href={childLink.href}
                              className="hover:text-pulse-pink-900 duration-300 py-2 hover:no-underline font-medium text-xl data-[state=open]:text-pulse-pink-900"
                            >
                              {childLink.label}
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  );
                }

                return (
                  <Link
                    key={i}
                    href={link.href || '#'}
                    className="py-2 hover:text-pulse-pink-900 duration-300"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <Button
              href={cta.href}
              variant="primary"
              className="w-full font-semibold! text-xl! leading-[26px]!"
            >
              {cta.label}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
