import { InlineText } from './InlineText';

const FAQList = ({ faqs, id = 'faq' }) => (
  <div id={id} className="space-y-3">
    {faqs.map((faq, index) => (
      <details
        key={faq.question}
        className="group rounded-2xl border border-gray-200 bg-white p-5 open:border-primary-300 open:shadow-sm"
        open={index === 0}
      >
        <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold text-secondary-800">
          <span>{faq.question}</span>
          <span
            aria-hidden="true"
            className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm text-primary-700 transition-transform group-open:rotate-45"
          >
            +
          </span>
        </summary>
        <p className="mt-3 text-sm sm:text-base leading-7 text-gray-700">
          <InlineText text={faq.answer} />
        </p>
      </details>
    ))}
  </div>
);

export default FAQList;
