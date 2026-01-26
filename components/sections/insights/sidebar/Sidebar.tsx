"use client";

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/utils/utils';
import Link from 'next/link';
import InsightsSearch from './InsightsSearch';

export interface LinkItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface SidebarProps {
  version?: 'v1' | 'v2' | 'v3';
  page?: 'insights' | 'details' | string;
  visible?: boolean;
  exploreLinks?: LinkItem[];
  topicLinks?: LinkItem[];
  tocLinks?: LinkItem[];
  onLinkClick?: () => void;
}

function Sidebar({
  version = 'v1',
  page = 'insights',
  visible = true,
  exploreLinks = [],
  topicLinks = [],
  tocLinks = [],
  onLinkClick,
}: SidebarProps) {
  const [activeId, setActiveId] = useState<string>('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (page !== 'details' || tocLinks.length === 0) return;

    // Disconnect previous observer if exists
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px', // Adjust trigger point $(40% from top as requested previously for scroll position)
        threshold: 0
      }
    );

    tocLinks.forEach((link) => {
      const id = link.href.replace('#', '');
      const element = document.getElementById(id);
      if (element && observer.current) {
        observer.current.observe(element);
      }
    });

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [page, tocLinks]);

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Extract ID from href (e.g. "#some-id")
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    
    if (element) {
      // Calculate position: element top + current scroll - offset (40% of viewport)
      const offset = window.innerHeight * 0.4;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    if (onLinkClick) {
      onLinkClick();
    }
  };

  const renderLinkList = (links: LinkItem[], isToc: boolean = false) => (
    <ul className={cn(
      "flex w-full flex-col md:flex-wrap lg:flex-nowrap md:flex-row lg:flex-col text-xl md:text-base xl:text-xl leading-[1.30] font-normal text-black",
      isToc ? "gap-2 md:gap-8 lg:gap-2" : "gap-4 md:gap-8 lg:gap-2"
    )}>
      {links.map((link, index) => {
        const id = isToc ? link.href.replace('#', '') : '';
        const isCurrentActive = isToc ? (activeId === id || link.isActive) : link.isActive;
        
        return (
          <Link
            key={index}
            href={link.href}
            onClick={isToc ? (e) => handleTocClick(e, link.href) : onLinkClick}
            className={cn(
              'hover:text-pulse-pink-600 focus:text-pulse-pink-600 duration-300',
              !isToc && 'py-2 md:py-0',
              isToc && 'py-2 md:py-0',
              isCurrentActive && 'text-pulse-pink-600'
            )}
          >
            <li className={cn(isToc ? "truncate" : "text-nowrap")}>
              {link.label}
            </li>
          </Link>
        );
      })}
    </ul>
  );

  return (
    <div
      className={cn(
        ' flex-col self-start',
        version == 'v1'
          ? 'sticky top-[124px] md:top-[130px] lg:top-[168px] lg:w-[220px] xl:w-[248px] hidden lg:pr-2 xl:pr-6 lg:border-r lg:border-r-border lg:flex'
          : 'relative w-full hidden lg:hidden md:flex',
        version == 'v3'
          ? 'flex px-6 py-4 sm:py-6 border-t-2 border-t-[#EDEDEE] max-h-[50dvh] h-auto overflow-auto'
          : '',
        visible == false && 'hidden',
        page === 'details' &&
          'border-r-transparent! lg:max-w-[211px]! xl:max-w-[248px]! xl:grow'
      )}
    >
      {page === 'insights' && <InsightsSearch />}
      {page === 'insights' && exploreLinks.length > 0 && (
        <div className="w-full flex flex-col gap-2 xl:gap-4 mb-8 lg:mb-10 xl:mb-20">
          <h6 className="text-xl leading-[1.30] md:text-base font-normal md:leading-[1.37] text-black pb-5 border-b border-b-border">
            Explore
          </h6>
          {renderLinkList(exploreLinks)}
        </div>
      )}
      {page === 'details' && tocLinks && tocLinks.length > 0 && (
        <div className="w-full flex flex-col gap-2 xl:gap-4 lg:mb-10 xl:mb-20">
          {renderLinkList(tocLinks, true)}
        </div>
      )}
      <div className="w-full flex flex-col gap-2 xl:gap-4 lg:mb-10 xl:mb-20">
        {page === 'insights' && topicLinks.length > 0 && (
          <h6 className="text-xl leading-[1.30] md:text-base font-normal md:leading-[1.37] text-black pb-5 border-b border-b-border">
            Topics
          </h6>
        )}
        {topicLinks.length > 0 && renderLinkList(topicLinks)}
      </div>
    </div>
  );
}

export default Sidebar;
