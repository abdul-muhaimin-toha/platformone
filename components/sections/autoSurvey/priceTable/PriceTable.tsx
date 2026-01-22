function PriceTable({ data }) {
  const content = data?.data;
  if (!content) return null;

  const {
    right_description = '',
    short_description = '',
    title = '',
  } = content;

  console.log(data, 'text');

  return (
    <section className="bg-red-950 h-20 w-full">
      PriceTabledrgrgrtgrtgrtbtbrbrtrrb
    </section>
  );
}

export default PriceTable;
