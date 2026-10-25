import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import BookingModal from './BookingModal';

/**
 * HeroSection — Section 1 of the homepage.
 *
 * Compact white band with subtle sage organic shapes.
 * Left: hero photo in a soft rounded frame with shadow.
 * Right: brand badge, H1, sub-line, primary CTA.
 * Floating WhatsApp button at bottom-right.
 */
const HeroSection = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <section
        id="hero"
        className="relative overflow-hidden bg-white"
        aria-label="Hero"
      >
        {/* Decorative sage brush-stroke shapes — very low opacity */}
        <svg
          className="absolute -top-10 -right-16 w-[420px] h-[420px] opacity-[0.09] pointer-events-none"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M400,50 Q500,150 450,300 Q400,450 250,480 Q100,500 50,350 Q0,200 100,100 Q200,-20 400,50Z"
            fill="#EEEFE6"
          />
        </svg>
        <svg
          className="absolute -bottom-10 -left-12 w-[340px] h-[340px] opacity-[0.1] pointer-events-none"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M50,350 Q-30,200 80,100 Q190,0 320,50 Q450,100 380,250 Q310,400 180,380 Q50,360 50,350Z"
            fill="#EEEFE6"
          />
        </svg>

        {/* Main content — compact vertical padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-14 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-10">

            {/* Left — Hero Image (below text on mobile) */}
            <div className="w-full lg:w-[38%] flex justify-center">
              <div className="relative w-[220px] h-[270px] sm:w-[260px] sm:h-[320px] md:w-[300px] md:h-[370px] lg:w-[340px] lg:h-[420px]">
                {/* Subtle orange accent arc behind the image */}
                <div
                  className="absolute -inset-2 rounded-[2rem] opacity-20 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, #F29A1F 0%, transparent 50%, #0B5A3A 100%)',
                  }}
                  aria-hidden="true"
                />
                {/* Image container with rounded corners and shadow */}
                <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden shadow-xl ring-1 ring-black/5">
                  {/* TODO: Replace with actual hero image — person holding an ornate Quran.
                       File needed: /public/images/hero/quran-holder.webp (≈900×1000, portrait, light bg)
                       Also provide /public/images/hero/quran-holder.avif for modern browsers. */}
                  <img
                    src="/mainContint.jpg"
                    alt="A teacher gently holding an ornate Quran, ready for an online lesson at Nebras Academy"
                    width="1100"
                    height="1000"
                    fetchpriority="high"
                    decoding="async"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Right — Text content */}
            <div className="w-full lg:w-[62%] flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 page-enter">
              {/* Brand badge — pill ribbon */}
              <p
                className="brand-badge inline-flex items-center gap-2 px-5 py-2 rounded-full text-white font-display text-sm sm:text-base tracking-wide select-none"
                aria-label="Nebras Academy"
              >
                <span className="text-brand-orange-500 text-xs" aria-hidden="true">◆</span>
                <span>Nebras Academy</span>
                <span className="text-brand-orange-500 text-xs" aria-hidden="true">◆</span>
              </p>

              {/* H1 — the only H1 on the page */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold leading-[1.15] text-ink-900">
                Online{' '}
                <span className="text-brand-orange-500">Quran</span>{' '}
                Classes
                <br className="hidden sm:block" />
                {' '}for Kids &amp; Adults
              </h1>

              {/* Sub-line */}
              <p className="text-base sm:text-lg text-ink-800/80 max-w-xl leading-relaxed">
                Live 1-on-1 lessons in Tajweed, memorization and Arabic.{' '}
                <span className="font-semibold text-ink-900">Book a free trial</span> and start your journey today.
              </p>

              {/* Primary CTA */}
              <a
                href="/free-trial"
                onClick={(e) => {
                  e.preventDefault();
                  setIsBookingOpen(true);
                }}
                className="inline-flex items-center justify-center bg-brand-green-900 hover:bg-brand-green-700 text-white font-semibold text-base sm:text-lg px-7 py-3.5 sm:px-8 sm:py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 min-h-[44px] w-full sm:w-auto"
                id="hero-cta"
              >
                Book Your Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/201146162847"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 bg-[#25D366] hover:bg-[#1fb855] text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-all duration-300 animate-pulse-gentle flex items-center hover:scale-110 focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="text-2xl sm:text-3xl" />
      </a>
    </>
  );
};

export default HeroSection;
