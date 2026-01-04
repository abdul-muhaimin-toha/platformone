import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

function PaginationCustom() {
  return (
    <div className="flex w-full items-center justify-center">
      <Pagination className="py-6">
        <PaginationContent className="flex flex-row items-center justify-center gap-2">
          <PaginationItem>
            <PaginationPrevious
              className="bg-border rounded-4xl h-8 w-11 inline-flex items-center justify-center hover:bg-mulberry-900 hover:text-white duration-300"
              href="#"
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="bg-border rounded-4xl h-8 w-10 inline-flex items-center justify-center text-base font-semibold leading-none text-black hover:bg-mulberry-900 hover:text-white duration-300"
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="bg-border rounded-4xl h-8 w-10 inline-flex items-center justify-center text-base font-semibold leading-none text-black hover:bg-mulberry-900 hover:text-white duration-300"
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="bg-border rounded-4xl h-8 w-10 inline-flex items-center justify-center text-base font-semibold leading-none text-black hover:bg-mulberry-900 hover:text-white duration-300"
            >
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="bg-border rounded-4xl h-8 w-10 inline-flex items-center justify-center text-base font-semibold leading-none text-black hover:bg-mulberry-900 hover:text-white duration-300"
            >
              4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              className="bg-border rounded-4xl h-8 w-11 inline-flex items-center justify-center hover:bg-mulberry-900 hover:text-white duration-300"
              href="#"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default PaginationCustom;
