import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { getFaqsByIds } from '@/graphql/components/get-faq-data';

interface FaqWrapperProps {
  data: {
    data: {
      title?: string;
      faq_cards?: { id: string | number; type: string; subtype: string }[];
    };
  };
}

async function FaqWrapper({ data }: FaqWrapperProps) {
  const content = data?.data ?? {};
  const { title, faq_cards = [] } = content;

  const ids = faq_cards.map((card) => card.id).filter(Boolean);
  const faqs = ids.length > 0 ? await getFaqsByIds(ids) : [];

  if (faqs.length === 0) return null;

  return (
    <section>
      <div className="container-custom">
        <div className="w-full flex flex-col py-32 gap-10 lg:flex-row lg:gap-6 lg:justify-between">
          <div className="max-w-[560px] flex flex-col gap-10 w-full">
            <h2 className="text-[38px] leading-[1.36] md:text-[56px] md:leading-[1.28] lg:text-[40px] lg:leading-[1.28] xl:text-[56px] xl:leading-[1.28] text-black font-bold w-full ">
              {title || 'Frequently asked questions'}
            </h2>
            <svg
              className="hidden lg:flex opacity-5"
              width={195}
              height={260}
              viewBox="0 0 195 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M97.5 0C43.6532 0 0 42.0164 0 93.85C0 145.684 43.6532 187.694 97.5 187.694C151.347 187.694 195 145.677 195 93.85C195 42.0227 151.347 0 97.5 0ZM97.6475 151.55C66.0471 151.55 40.422 125.715 40.422 93.85C40.422 61.9849 66.0471 36.1437 97.6475 36.1437C129.248 36.1437 154.873 61.9786 154.873 93.85C154.873 125.722 129.254 151.55 97.6475 151.55Z"
                fill="url(#paint0_linear_1236_6335)"
              />
              <path
                d="M189.166 223.503H5.83398V260H189.166V223.503Z"
                fill="url(#paint1_linear_1236_6335)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1236_6335"
                  x1={0}
                  y1="93.8437"
                  x2={195}
                  y2="93.8437"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E13FAB" />
                  <stop offset={1} stopColor="#EB335B" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1236_6335"
                  x1="5.83398"
                  y1="241.751"
                  x2="189.166"
                  y2="241.751"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E13FAB" />
                  <stop offset={1} stopColor="#EB335B" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="w-full">
            <Accordion type="single" collapsible defaultValue="item-1">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.id || index}
                  value={`item-${index + 1}`}
                >
                  <AccordionTrigger className="text-mulberry-950 duration-300 data-[state=open]:text-pulse-pink-600 hover:text-pulse-pink-600">
                    {faq.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: faq.faqContent || '',
                      }}
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqWrapper;
