import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface PaginationCustomProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

function PaginationCustom({
  currentPage,
  totalPages,
  baseUrl,
}: PaginationCustomProps) {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pages = getPages();

  return (
    <div className="flex w-full items-center justify-center">
      <Pagination className="py-6">
        <PaginationContent className="flex flex-row items-center justify-center gap-2">
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious
                className="bg-border rounded-4xl h-8 w-11 inline-flex items-center justify-center hover:bg-mulberry-900 hover:text-white duration-300"
                href={`${baseUrl}page=${currentPage - 1}`}
              />
            </PaginationItem>
          )}

          {pages.map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                href={`${baseUrl}page=${p}`}
                className={`${
                  currentPage === p
                    ? 'bg-mulberry-900 text-white'
                    : 'bg-border text-black'
                } rounded-4xl h-8 w-10 inline-flex items-center justify-center text-base font-semibold leading-none hover:bg-mulberry-900 hover:text-white duration-300`}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}

          {currentPage < totalPages && (
            <PaginationItem>
              <PaginationNext
                className="bg-border rounded-4xl h-8 w-11 inline-flex items-center justify-center hover:bg-mulberry-900 hover:text-white duration-300"
                href={`${baseUrl}page=${currentPage + 1}`}
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default PaginationCustom;
