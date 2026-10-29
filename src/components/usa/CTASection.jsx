import { Link } from 'react-router-dom';
import { FaArrowRight, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { ACADEMY } from '../../data/usa/shared';

const CTASection = ({
  title = 'Start with a free trial class',
  text = 'Meet a teacher one-on-one, see how the online classroom works, and decide on a study plan before you pay for anything.',
  primaryLabel = 'Book your free trial',
  primaryTo = '/trial',
  showPhone = true,
}) => (
  <section className="section-padding bg-white">
    <div className="container mx-auto">
      <div className="relative overflow-hidden rounded-3xl bg-secondary-600 px-6 py-12 text-center shadow-xl sm:px-10 md:py-16">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-primary-300/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-white/80 sm:text-lg">{text}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to={primaryTo}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-600"
            >
              {primaryLabel}
              <FaArrowRight className="text-xs" aria-hidden="true" />
            </Link>

            <a
              href={ACADEMY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10"
            >
              <FaWhatsapp className="text-base text-[#25D366]" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>

          {showPhone && (
            <p className="mt-5 flex items-center justify-center gap-2 text-sm text-white/70">
              <FaPhoneAlt className="text-primary-300" aria-hidden="true" />
              <a href={`tel:${ACADEMY.telephoneE164}`} className="font-semibold text-white hover:text-primary-300">
                {ACADEMY.telephoneDisplay}
              </a>
              <span aria-hidden="true">·</span>
              <span>Teachers are based in Cairo, Egypt, and teach online worldwide.</span>
            </p>
          )}
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
