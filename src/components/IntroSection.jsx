import { Link } from 'react-router-dom';
import { useState } from 'react';
import WaveDivider from './WaveDivider';
import BookingModal from './BookingModal';

/**
 * IntroSection — Section 2 of the homepage.
 *
 * Soft sage/beige background (#EEEFE6) with organic white wave dividers
 * at the top and bottom edges.
 *
 * Left column: H2, dashed divider, intro paragraph with internal links, CTA.
 * Right column: circular student photo with orange arc accents.
 */
const IntroSection = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <section
        id="intro"
        className="relative bg-sage-100 py-20 md:py-28"
        aria-label="Introduction"
      >
        {/* Top wave divider */}
        <WaveDivider position="top" fillColor="#ffffff" />

        {/* Bottom wave divider */}
        <WaveDivider position="bottom" fillColor="#ffffff" />

        {/* Main content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left column — Text content */}
            <div className="w-full lg:w-[55%] space-y-6">
              {/* H2 */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ink-900 leading-tight">
                Your Journey to Reading the Quran with Confidence Starts Here
              </h2>

              {/* Dashed divider line */}
              <div className="w-[70%] border-t border-dashed border-ink-900/20" aria-hidden="true" />

              {/* Intro paragraph */}
              <p className="text-base sm:text-[17px] text-ink-800 leading-[1.8] max-w-2xl">
                At{' '}
                <strong className="text-brand-orange-500 font-bold">
                  Nebras Academy
                </strong>
                , we offer personalised 1-on-1 online lessons for kids and adults who want
                to connect deeply with the Quran. Our courses cover{' '}
                <Link
                  to="/courses/tajweed"
                  className="text-brand-green-900 underline underline-offset-2 decoration-brand-green-900/30 hover:decoration-brand-green-900 transition-colors"
                >
                  Tajweed
                </Link>
                ,{' '}
                <Link
                  to="/courses/memorization"
                  className="text-brand-green-900 underline underline-offset-2 decoration-brand-green-900/30 hover:decoration-brand-green-900 transition-colors"
                >
                  Quran memorization
                </Link>
                , Quran reading, and{' '}
                <Link
                  to="/courses/arabic"
                  className="text-brand-green-900 underline underline-offset-2 decoration-brand-green-900/30 hover:decoration-brand-green-900 transition-colors"
                >
                  Arabic for non-Arabic speakers
                </Link>
                . With flexible scheduling across time zones, you can learn at the pace
                that suits your family. Start with a{' '}
                <Link
                  to="/pricing"
                  className="text-brand-green-900 underline underline-offset-2 decoration-brand-green-900/30 hover:decoration-brand-green-900 transition-colors"
                >
                  free trial
                </Link>{' '}
                and experience the difference.
              </p>

              {/* CTA button */}
              <a
                href="/free-trial"
                onClick={(e) => {
                  e.preventDefault();
                  setIsBookingOpen(true);
                }}
                className="inline-flex items-center justify-center bg-brand-green-600 hover:bg-brand-green-700 text-white font-semibold text-base px-7 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 min-h-[44px] w-full sm:w-auto"
                id="intro-cta"
              >
                Book Your Free Trial
              </a>
            </div>

            {/* Right column — Circular photo with orange arc accents */}
            <div className="w-full lg:w-[45%] flex justify-center">
              <div className="relative">
                {/* Top orange arc accent */}
                <svg
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] pointer-events-none"
                  viewBox="0 0 380 380"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M110,30 A160,160 0 0,1 270,30"
                    stroke="#F29A1F"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>

                {/* Bottom orange arc accent */}
                <svg
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] pointer-events-none"
                  viewBox="0 0 380 380"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M110,350 A160,160 0 0,0 270,350"
                    stroke="#F29A1F"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>

                {/* Circular photo */}
                {/* TODO: Replace with actual student photo — student learning/reciting in a calm setting.
                     File needed: /public/images/hero/student-circle.webp (≥800×800, square)
                     Also provide /public/images/hero/student-circle.avif */}
                <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden shadow-xl">
                  <img
                    src="/images/quran2.jpg"
                    alt="A student reciting the Quran during an online lesson with Nebras Academy"
                    width="800"
                    height="800"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal for intro CTA */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
};

export default IntroSection;
