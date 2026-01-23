import Link from 'next/link';
import { parseHighlights } from '@/utils/utils';

export interface ContactHeaderProps {
  title: string;
  description: string;
  email: string;
  emailHref: string;
}

function ContactUsHeader({
  title,
  description,
  email,
  emailHref,
}: ContactHeaderProps) {
  return (
    <div className="flex w-full max-w-[520px] flex-col gap-10 md:max-w-[552px]">
      <h1
        className="inline-flex flex-col text-[56px] font-bold leading-[1.28] text-black [&_span]:text-pulse-pink-600"
        dangerouslySetInnerHTML={{ __html: parseHighlights(title) }}
      />

      <div
        className="flex flex-col gap-4 text-xl font-normal leading-normal text-black"
        dangerouslySetInnerHTML={{ __html: parseHighlights(description) }}
      />

      <Link
        href={emailHref}
        className="
          relative w-fit text-[32px] font-semibold leading-tight
          bg-[linear-gradient(90deg,#EA3461_0%,var(--mulberry-700,#AA2C69)_100%)]
          bg-clip-text text-transparent
          after:absolute after:left-0 after:bottom-0
          after:h-0.5 after:w-0
          after:bg-[linear-gradient(90deg,#EA3461_0%,var(--mulberry-700,#AA2C69)_100%)]
          after:transition-all after:duration-300
          hover:after:w-full
        "
      >
        {email}
      </Link>
    </div>
  );
}

export default ContactUsHeader;
