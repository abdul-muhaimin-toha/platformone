import Image from 'next/image';

function PoliciesRichText() {
  return (
    <div className="w-full block">
      <p className="text-xl leading-normal font-normal text-black my-8 first:mt-0 last:mb-0">
        Feedback is the heartbeat of any customer experience strategy. It's the
        unfiltered truth about how people perceive your brand, your products,
        and your service. Yet, in many organizations, feedback is collected,
        stored in a dashboard, and then left to gather digital dust. The
        opportunity is lost—not because the feedback lacks value, but because
        there's no clear path from insight to action.
      </p>
      <p className="text-xl leading-normal font-normal text-black my-8 first:mt-0 last:mb-0">
        The real challenge is not gathering feedback; it's knowing what to do
        with it. Actionable insights don't just happen automatically. In this
        article, we'll explore how organizations can move from simply listening
        to truly acting-and in doing so, drive measurable growth.
      </p>
      <ol className="text-xl leading-[1.3] text-black font-normal mt-8 mb-16 list-decimal flex flex-col gap-3 ml-6 first:mt-0 last:mb-0">
        <li>They're the result of asking the right questions.</li>
        <li>Connecting data from multiple touchpoints.</li>
        <li>Prioritizing improvements, and then executing with intention.</li>
      </ol>
      <Image
        src="/insights/top-card.png"
        alt="Insight"
        className=" object-cover w-full rounded-2xl sm:max-w-[477px] aspect-477/180 my-12 md:my-16 first:mt-0 last:mb-0"
        width={477}
        height={180}
      />
      <h3 className="text-[32px] leading-tight font-semibold text-black mt-16 mb-8 first:mt-0 last:mb-0">
        Start with the Right Questions
      </h3>
      <p className="text-xl leading-normal font-normal text-black my-8 first:mt-0 last:mb-0">
        Every impactful insight starts with a purposeful question. Too often,
        organisations default to generic survey templates that deliver vague
        results. Asking "Are you satisfied with our service?" might give you a
        percentage score, but it won't tell you what to change. Instead, you
        need to go deeper with open-ended prompts such as "What could we have
        done to make your experience better?" or scenario-based questions that
        encourage specifics.
      </p>
      <ul className="text-xl leading-[1.3] text-black font-normal mt-8 mb-16 list-disc flex flex-col gap-3 ml-6 first:mt-0 last:mb-0">
        <li>Every impactful insight starts with a purposeful question. </li>
        <li>Too often, organisations default to generic survey templates.</li>
        <li>You need to go deeper with open-ended prompts.</li>
      </ul>
      <h3 className="text-[32px] leading-tight font-semibold text-black mt-16 mb-8 first:mt-0 last:mb-0">
        Connect Feedback Across Touchpoints
      </h3>
      <p className="text-xl leading-normal font-normal text-black my-8 first:mt-0 last:mb-0">
        Customers and employees interact with your organisation in many ways:
        online chat, in-store visits, app usage, customer support calls, or even
        social media comments. Each of these touchpoints provides a small but
        valuable fragment of the bigger picture. When feedback is siloed by
        department or channel, you risk missing critical connections.
      </p>
      <h3 className="text-[32px] leading-tight font-semibold text-black mt-16 mb-8 first:mt-0 last:mb-0">
        Prioritise What Matters
      </h3>
      <p className="text-xl leading-normal font-normal text-black my-8 first:mt-0 last:mb-0">
        Once you've consolidated your feedback, it's tempting to address
        everything at once. But spreading your efforts too thin often leads to
        shallow fixes that don't move the needle. Instead, prioritise issues
        based on their potential business impact.
      </p>
      <h3 className="text-[32px] leading-tight font-semibold text-black mt-16 mb-8 first:mt-0 last:mb-0">
        Close the Loop
      </h3>
      <p className="text-xl leading-normal font-normal text-black my-8 first:mt-0 last:mb-0">
        Once you've consolidated your feedback, it's tempting to address
        everything at once. But spreading your efforts too thin often leads to
        shallow fixes that don't move the needle. Instead, prioritise issues
        based on their potential business impact.
      </p>
      <h3 className="text-[32px] leading-tight font-semibold text-black mt-16 mb-8 first:mt-0 last:mb-0">
        Final Thought
      </h3>
      <p className="text-xl leading-normal font-normal text-black my-8 first:mt-0 last:mb-0">
        Once you've consolidated your feedback, it's tempting to address
        everything at once. But spreading your efforts too thin often leads to
        shallow fixes that don't move the needle. Instead, prioritise issues
        based on their potential business impact.
      </p>
    </div>
  );
}

export default PoliciesRichText;
