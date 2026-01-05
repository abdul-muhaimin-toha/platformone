import Link from "next/link";

interface FooterBottomProps {
  copyright: string;
  links: { label: string; href: string }[];
}

export default function FooterBottom({ copyright, links }: FooterBottomProps) {
  return (
    <div className="w-full flex lg:flex-row lg:justify-between lg:items-start pt-16 gap-2.5 border-t border-t-white/16 flex-col">
      <p className="text-base font-normal grow shrink-0 leading-[1.37] text-pulse-pink-50">
        {copyright}
      </p>
      <div className="w-full flex flex-row grow flex-wrap lg:justify-end gap-x-4 text-pulse-pink-300 gap-y-2 text-sm font-normal leading-normal">
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className="hover:text-pulse-pink-200 hover:underline duration-300"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
