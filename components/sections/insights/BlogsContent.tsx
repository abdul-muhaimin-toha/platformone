import Image from "next/image";

function BlogsContent() {
  return (
    <div className="w-full block">
      <p className="text-xl leading-normal font-normal text-black my-8">
        Feedback is the heartbeat of any customer experience strategy. It&apos;s
        the unfiltered truth about how people perceive your brand, your
        products, and your service. Yet, in many organizations, feedback is
        collected, stored in a dashboard, and then left to gather digital dust.
        The opportunity is lost—not because the feedback lacks value, but
        because there&apos;s no clear path from insight to action.
      </p>
      <p className="text-xl leading-normal font-normal text-black my-8">
        The real challenge is not gathering feedback; it&apos;s knowing what to
        do with it. Actionable insights don&apos;t just happen automatically. In
        this article, we&apos;ll explore how organizations can move from simply
        listening to truly acting-and in doing so, drive measurable growth.
      </p>
      <ol className="text-xl marker:text-pulse-pink-600 leading-[1.3] text-black font-normal mt-8 mb-16 list-decimal flex flex-col gap-3 ml-6">
        <li>They&apos;re the result of asking the right questions.</li>
        <li>Connecting data from multiple touchpoints.</li>
        <li>Prioritizing improvements, and then executing with intention.</li>
      </ol>
      <h3 className="text-[32px] leading-tight font-semibold text-black mt-16 mb-8">
        Start with the Right Questions
      </h3>
      <p className="text-xl leading-normal font-normal text-black my-8">
        The real challenge is not gathering feedback; it&apos;s knowing what to
        do with it. Actionable insights don&apos;t just happen automatically. In
        this article, we&apos;ll explore how organizations can move from simply
        listening to truly acting-and in doing so, drive measurable growth.
      </p>
      <ul className="text-xl marker:text-pulse-pink-600 leading-[1.3] text-black font-normal mt-8 mb-16 list-disc flex flex-col gap-3 ml-6">
        <li>Every impactful insight starts with a purposeful question.</li>
        <li>Too often, organisations default to generic survey templates.</li>
        <li>You need to go deeper with open-ended prompts.</li>
      </ul>
      <h3 className="text-[32px] leading-tight font-semibold text-black mt-16 mb-8">
        Connect Feedback Across Touchpoints
      </h3>
      <p className="text-xl leading-normal font-normal text-black my-8">
        Customers and employees interact with your organisation in many ways:
        online chat, in-store visits, app usage, customer support calls, or even
        social media comments. Each of these touchpoints provides a small but
        valuable fragment of the bigger picture. When feedback is siloed by
        department or channel, you risk missing critical connections.
      </p>
      <blockquote className="w-full bg-pulse-pink-50 flex flex-col p-6 gap-6 mt-8 mb-16 rounded-2xl">
        <p className="text-2xl font-normal leading-[1.33] text-mulberry-900">
          “Before Platform One, our feedback process felt like shouting into the
          void. Now, we can see exactly where we&apos;re improving and where to
          focus next.”
        </p>
        <p className="text-base font-normal leading-[1.37] text-[#6C6C6C]">
          Ray Poynter, Chief Research Officer at Platform One
        </p>
      </blockquote>
      <h3 className="text-[32px] leading-tight font-semibold text-black mt-16 mb-8">
        Prioritise What Matters
      </h3>
      <p className="text-xl leading-normal font-normal text-black my-8">
        Once you&apos;ve consolidated your feedback, it&apos;s tempting to
        address everything at once. But spreading your efforts too thin often
        leads to shallow fixes that don&apos;t move the needle. Instead,
        prioritise issues based on their potential business impact.
      </p>
      <Image
        src="/insights/top-card.png"
        alt="Insight"
        className=" object-cover w-full rounded-2xl aspect-380/249 mt-8 mb-16"
        width={920}
        height={522}
      />
      <h3 className="text-[32px] leading-tight font-semibold text-black mt-16 mb-8">
        Close the Loop
      </h3>
      <p className="text-xl leading-normal font-normal text-black my-8">
        Once you&apos;ve consolidated your feedback, it&apos;s tempting to
        address everything at once. But spreading your efforts too thin often
        leads to shallow fixes that don&apos;t move the needle. Instead,
        prioritise issues based on their potential business impact.
      </p>
      <div className="flex flex-row md:grid md:grid-cols-2 xl:grid-cols-3 items-center gap-6 overflow-auto pb-4 mt-8 grow-0">
        <div className="flex md:w-full flex-col p-6 gap-4 rounded-2xl border border-border min-w-[290px] md:min-w-auto">
          <p className="text-pulse-pink-600 text-[56px] leading-[1.28] font-bold">
            28%
          </p>
          <p className="text-mulberry-900 text-xl leading-[1.30] font-normal">
            Improvement in NPS within 6 months of closing the feedback loop
          </p>
        </div>
        <div className="flex md:w-full flex-col p-6 gap-4 rounded-2xl border border-border min-w-[290px] md:min-w-auto">
          <p className="text-pulse-pink-600 text-[56px] leading-[1.28] font-bold">
            28%
          </p>
          <p className="text-mulberry-900 text-xl leading-[1.30] font-normal">
            Improvement in NPS within 6 months of closing the feedback loop
          </p>
        </div>
        <div className="flex md:w-full flex-col p-6 gap-4 rounded-2xl border border-border min-w-[290px] md:min-w-auto">
          <p className="text-pulse-pink-600 text-[56px] leading-[1.28] font-bold">
            28%
          </p>
          <p className="text-mulberry-900 text-xl leading-[1.30] font-normal">
            Improvement in NPS within 6 months of closing the feedback loop
          </p>
        </div>
      </div>
      <h3 className="text-[32px] leading-tight font-semibold text-black mt-16 mb-8">
        Final Thought
      </h3>
      <p className="text-xl leading-normal font-normal text-black my-8">
        Once you&apos;ve consolidated your feedback, it&apos;s tempting to
        address everything at once. But spreading your efforts too thin often
        leads to shallow fixes that don&apos;t move the needle. Instead,
        prioritise issues based on their potential business impact.
      </p>
    </div>
  );
}

export default BlogsContent;
