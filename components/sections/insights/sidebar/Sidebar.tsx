import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { SearchIcon } from 'lucide-react';
import Link from 'next/link';

function Sidebar({ version = 'v1', visible = true }) {
  return (
    <div
      className={cn(
        ' flex-col self-start',
        version == 'v1'
          ? 'sticky top-[124px] md:top-[130px] lg:top-[168px] lg:w-[220px] xl:w-[248px] hidden lg:pr-2 xl:pr-6 lg:border-r lg:border-r-border lg:flex'
          : 'relative w-full hidden lg:hidden md:flex',
        version == 'v3'
          ? 'flex px-6 py-8 border-t-2 border-t-[#EDEDEE] h-[50dvh] overflow-auto'
          : '',
        visible == false && 'hidden'
      )}
    >
      <div className="flex flex-row items-center gap-2 w-full h-10 p-2 rounded-full bg-white border border-[#EDEDEE] md:border-none md:bg-background mb-10 xl:mb-20">
        <SearchIcon className="size-5 shrink-0 text-black opacity-30" />
        <Input
          className={cn(
            'w-full rounded-0! border-0! leading-none! text-base! font-normal! placeholder:text-base! placeholder:font-sans! placeholder:text-black! placeholder:opacity-30! font-sans! p-0! h-auto! focus:border-0! selection:bg-transparent! selection:text-black! shadow-none! focus-visible:border-0! focus-visible:ring-0!'
          )}
          placeholder="Search"
        />
      </div>
      <div className="w-full flex flex-col gap-2 xl:gap-4 mb-8 lg:mb-10 xl:mb-20">
        <h6 className="text-xl leading-[1.30] md:text-base font-normal md:leading-[1.37] text-black pb-5 border-b border-b-border">
          Explore
        </h6>
        <ul className="flex w-full flex-col md:flex-wrap lg:flex-nowrap md:flex-row lg:flex-col text-xl md:text-base xl:text-xl leading-[1.30] gap-4 md:gap-8 lg:gap-2 font-normal text-black">
          <Link
            href="/"
            className="hover:text-pulse-pink-600 text-pulse-pink-600 duration-300"
          >
            <li className="text-nowrap">All</li>
          </Link>
          <Link href="/" className="hover:text-pulse-pink-600 duration-300">
            <li className="text-nowrap">Blogs</li>
          </Link>
          <Link href="/" className="hover:text-pulse-pink-600 duration-300">
            <li className="text-nowrap">Press Releases</li>
          </Link>
          <Link href="/" className="hover:text-pulse-pink-600 duration-300">
            <li className="text-nowrap">Podcasts</li>
          </Link>
          <Link href="/" className="hover:text-pulse-pink-600 duration-300">
            <li className="text-nowrap">Whitepapers</li>
          </Link>
        </ul>
      </div>
      <div className="w-full flex flex-col gap-2 xl:gap-4 lg:mb-10 xl:mb-20">
        <h6 className="text-xl leading-[1.30] md:text-base font-normal md:leading-[1.37] text-black pb-5 border-b border-b-border">
          Topics
        </h6>
        <ul className="flex w-full flex-col md:flex-wrap lg:flex-nowrap md:flex-row lg:flex-col text-xl md:text-base xl:text-xl leading-[1.30] gap-4 md:gap-8 lg:gap-2 font-normal text-black">
          <Link
            href="/"
            className="hover:text-pulse-pink-600 text-pulse-pink-600 duration-300"
          >
            <li className="text-nowrap">All</li>
          </Link>
          <Link href="/" className="hover:text-pulse-pink-600 duration-300 ">
            <li className="text-nowrap">Customer Experience</li>
          </Link>
          <Link href="/" className="hover:text-pulse-pink-600 duration-300">
            <li className="text-nowrap">Employee Experience</li>
          </Link>
          <Link href="/" className="hover:text-pulse-pink-600 duration-300">
            <li className="text-nowrap">Insight Communities</li>
          </Link>
          <Link href="/" className="hover:text-pulse-pink-600 duration-300">
            <li className="text-nowrap">Data Visualisation</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
