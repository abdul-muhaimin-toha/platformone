'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/utils/utils';

export default function InsightsSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('search') || '');

  // Sync state if URL changes (e.g. back button)
  useEffect(() => {
    setQuery(searchParams.get('search') || '');
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    
    if (query.trim()) {
      params.set('search', query.trim());
    } else {
      params.delete('search');
    }
    
    // Always reset to page 1 on new search
    params.delete('page');
    
    router.push(`/insights?${params.toString()}`, { scroll: false });
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-row items-center gap-2 w-full h-10 p-2 rounded-full bg-white border border-[#EDEDEE] md:border-none md:bg-background mb-10 xl:mb-20"
    >
      <button type="submit" className="focus:outline-none">
        <SearchIcon className="size-5 shrink-0 text-black opacity-30 hover:opacity-100 transition-opacity" />
      </button>
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={cn(
          'w-full rounded-0! border-0! leading-none! text-base! font-normal! placeholder:text-base! placeholder:font-sans! placeholder:text-black! placeholder:opacity-30! font-sans! p-0! h-auto! focus:border-0! selection:bg-pulse-pink-600 selection:text-white shadow-none! focus-visible:border-0! focus-visible:ring-0! rounded-none'
        )}
        placeholder="Search"
      />
    </form>
  );
}
