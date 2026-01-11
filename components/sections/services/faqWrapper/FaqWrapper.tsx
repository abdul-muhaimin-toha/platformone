import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function FaqWrapper() {
  return (
    <section>
      <div className="container-custom">
        <div className="w-full flex flex-col py-32 gap-10 lg:flex-row lg:gap-6 lg:justify-between">
          <h2 className="text-[38px] leading-[1.36] md:text-[56px] md:leading-[1.28] max-w-[560px] text-black font-bold w-full ">
            Frequently asked questions
          </h2>
          <div className="w-full">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What types of CX programs can Platform One support?
                </AccordionTrigger>
                <AccordionContent>
                  Customer Experience research helps you understand how
                  customers interact with your brand across key touchpoints,
                  identifying gaps, friction points, and opportunities to
                  improve loyalty and satisfaction.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What types of CX programs can Platform One support?
                </AccordionTrigger>
                <AccordionContent>
                  Customer Experience research helps you understand how
                  customers interact with your brand across key touchpoints,
                  identifying gaps, friction points, and opportunities to
                  improve loyalty and satisfaction.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What types of CX programs can Platform One support?
                </AccordionTrigger>
                <AccordionContent>
                  Customer Experience research helps you understand how
                  customers interact with your brand across key touchpoints,
                  identifying gaps, friction points, and opportunities to
                  improve loyalty and satisfaction.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  What types of CX programs can Platform One support?
                </AccordionTrigger>
                <AccordionContent>
                  Customer Experience research helps you understand how
                  customers interact with your brand across key touchpoints,
                  identifying gaps, friction points, and opportunities to
                  improve loyalty and satisfaction.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqWrapper;
