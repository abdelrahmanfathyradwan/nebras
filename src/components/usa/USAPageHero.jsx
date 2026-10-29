import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { ACADEMY } from '../../data/usa/shared';

const DEFAULT_IMAGE = {
  src: '/images/hero/quran-holder.webp',
  alt: 'An open copy of the Quran resting on a reading stand',
  width: 736,
  height: 1308,
};

const USAPageHero = ({
  eyebrow,
  title,
  intro,
  bullets = [],
  image = DEFAULT_IMAGE,
  imageCaption,
  primaryLabel = 'Book your free trial',
  primaryTo = '/trial',
  secondary,
}) => (
  <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F9F6] via-white to-[#FFF6EE]">
    <div
      className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-200/40 blur-3xl"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-secondary-200/30 blur-3xl"
      aria-hidden="true"
    />

    <div className="container relative mx-auto grid items-center gap-10 px-4 py-14 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:px-6 md:py-20">
      <div>
        {eyebrow && (
          <p className="mb-3 inline-flex items-center rounded-full border border-primary-200 bg-white/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary-700">
            {eyebrow}
          </p>
        )}

        <h1 className="text-3xl font-bold leading-tight text-secondary-800 sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
          {title}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-8 text-gray-700 sm:text-lg">{intro}</p>

        {bullets.length > 0 && (
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5 text-sm font-medium text-secondary-800">
                <FaCheckCircle className="mt-0.5 flex-shrink-0 text-emerald-600" aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            to={primaryTo}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
          >
            {primaryLabel}
            <FaArrowRight className="text-xs" aria-hidden="true" />
          </Link>

          {secondary && (
            <Link
              to={secondary.to}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-secondary-300 bg-white px-6 py-3 text-sm font-bold text-secondary-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary-500 hover:bg-secondary-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2"
            >
              {secondary.label}
            </Link>
          )}

          <a
            href={ACADEMY.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-secondary-700 underline-offset-4 transition-colors hover:text-primary-600 hover:underline"
          >
            <FaWhatsapp className="text-base text-[#25D366]" aria-hidden="true" />
            Ask a question on WhatsApp
          </a>
        </div>

        <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-600">
          <span className="inline-flex items-center gap-1.5">
            <FaPhoneAlt className="text-secondary-500" aria-hidden="true" />
            <a href={`tel:${ACADEMY.telephoneE164}`} className="font-semibold hover:text-primary-600">
              {ACADEMY.telephoneDisplay}
            </a>
          </span>
          <span>No credit card required for the trial</span>
        </p>
      </div>

      <figure className="relative mx-auto w-full max-w-md">
        <div className="absolute inset-4 -z-10 rounded-[2rem] bg-secondary-200/40 blur-2xl" aria-hidden="true" />
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          fetchPriority="high"
          decoding="async"
          className="h-[320px] w-full rounded-[2rem] object-cover shadow-xl shadow-secondary-900/10 sm:h-[420px] md:h-[480px]"
        />
        {imageCaption && (
          <figcaption className="mt-3 text-center text-xs leading-5 text-gray-600">{imageCaption}</figcaption>
        )}
      </figure>
    </div>
  </section>
);

export default USAPageHero;
