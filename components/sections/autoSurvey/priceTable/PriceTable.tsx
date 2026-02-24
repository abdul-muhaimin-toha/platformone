import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface PrizeDraw {
  _id: string;
  _type: string;
  prize_draws_title: string;
  prize_draws_date: string;
  prize_draws_winner: string;
  terms_and_condition_url: string;
  upload_draw_file: string;
}

interface PriceTableData {
  crb_information_text: string;
  title: string;
  prize_draws: PrizeDraw[];
}

interface PriceTableProps {
  data: {
    data: PriceTableData;
  };
}

function PriceTable({ data }: PriceTableProps) {
  const content = data?.data;
  if (!content) return null;

  const { crb_information_text = '', title = '', prize_draws = [] } = content;

  if (prize_draws.length === 0) return null;

  return (
    <section className="my-32 first:pb-10">
      <div className="container-custom">
        <div className="flex w-full flex-col gap-8">
          {/* Section Title */}
          {title && (
            <h2 className="text-[38px] leading-[1.26] text-black font-bold">
              {title}
            </h2>
          )}
          {/* Prize Draws Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[280px] text-[12px] font-semibold h-12 border-[#DBD9DD] border text-[#746A6F] bg-[#F6F6F8] p-4">
                  Prize Draws
                </TableHead>
                <TableHead className="w-[280px]  text-[12px] font-semibold  h-12 border-[#DBD9DD] border text-[#746A6F] bg-[#F6F6F8] p-4">
                  Dates
                </TableHead>
                <TableHead className="w-[368px] text-[12px] font-semibold  h-12 border-[#DBD9DD] border text-[#746A6F] bg-[#F6F6F8] p-4">
                  Winners
                </TableHead>
                <TableHead className="w-40 h-12 text-[12px] font-semibold  border-[#DBD9DD] border text-[#746A6F] bg-[#F6F6F8] p-4">
                  Terms & Conditions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {prize_draws.map((draw) => (
                <TableRow key={draw._id}>
                  <TableCell className="w-[280px] text-[14px] font-normal h-12 border-none border-0 text-black bg-transparent p-4">
                    {draw.prize_draws_title}
                  </TableCell>
                  <TableCell className="w-[280px] text-[14px] font-normal h-12 border-none border-0 text-black bg-transparent p-4">
                    {draw.prize_draws_date}
                  </TableCell>
                  <TableCell className="w-[368px] text-[14px] font-normal h-12 border-none border-0 text-black bg-transparent p-4">
                    {draw.prize_draws_winner}
                  </TableCell>
                  <TableCell className="w-40 h-12 text-[14px] font-normal border-none border-0 text-pulse-pink-600 bg-transparent p-4 text-center">
                    {draw.upload_draw_file ? (
                      <a
                        href={draw.upload_draw_file}
                        className="hover:underline font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}

export default PriceTable;
