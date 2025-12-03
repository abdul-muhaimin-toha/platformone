import Link from 'next/link';

interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterLinksProps {
  columns: FooterLinkColumn[];
}

export default function FooterLinks({ columns }: FooterLinksProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-10 w-full">
      {columns.map((col, idx) => (
        <div
          key={idx}
          className="flex flex-col w-full gap-2.5 font-normal text-lg leading-[1.33] text-pulse-pink-300"
        >
          <Link className="font-semibold text-pulse-pink-50" href="/">
            {col.title}
          </Link>
          {col.links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="hover:text-pulse-pink-100 duration-300 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
