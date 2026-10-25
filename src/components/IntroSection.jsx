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
 *
 * Motion layer (continuous, GPU-friendly, decorative only):
 *  - drifting soft blobs + rising brand-diamond particles
 *  - dashed divider that "marches"
 *  - brand name with animated gradient + breathing underline
 *  - floating circular photo, spinning dashed ring, orbiting dots, light sweep
 *  - orange arcs that draw / un-draw endlessly
 *  - glowing CTA with shine sweep
 * All animations are disabled for users with prefers-reduced-motion.
 */

// Rising particles (static config → no re-render cost)
const PARTICLES = [
  { left: '5%',  size: 9,  dur: 15, delay: 0,   color: '#F29A1F' },
  { left: '15%', size: 12, dur: 19, delay: 4,   color: '#0B5A3A' },
  { left: '26%', size: 7,  dur: 17, delay: 8,   color: '#F29A1F' },
  { left: '37%', size: 10, dur: 21, delay: 2,   color: '#0B5A3A' },
  { left: '48%', size: 8,  dur: 16, delay: 6,   color: '#F29A1F' },
  { left: '59%', size: 12, dur: 20, delay: 1,   color: '#0B5A3A' },
  { left: '70%', size: 7,  dur: 18, delay: 9,   color: '#F29A1F' },
  { left: '81%', size: 11, dur: 22, delay: 3,   color: '#0B5A3A' },
  { left: '93%', size: 8,  dur: 17, delay: 5,   color: '#F29A1F' },
];

const IntroSection = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      {/* Scoped keyframes — prefixed "ix-" so nothing else is affected */}
      <style>{`
        @keyframes ix-blob-a {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          50%      { transform: translate(30px, -22px) rotate(10deg) scale(1.1); }
        }
        @keyframes ix-blob-b {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33%      { transform: translate(-26px, 20px) rotate(-8deg) scale(1.07); }
          66%      { transform: translate(16px, 10px) rotate(6deg) scale(0.95); }
        }
        @keyframes ix-rise {
          0%   { transform: translateY(0) rotate(0deg) scale(0.6); opacity: 0; }
          10%  { opacity: 0.5; }
          85%  { opacity: 0.3; }
          100% { transform: translateY(-620px) rotate(360deg) scale(1.1); opacity: 0; }
        }
        @keyframes ix-march {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -28; }
        }
        @keyframes ix-gradient {
          0%, 100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        @keyframes ix-underline {
          0%, 100% { transform: scaleX(0.3); opacity: 0.5; }
          50%      { transform: scaleX(1); opacity: 1; }
        }
        @keyframes ix-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-12px); }
        }
        @keyframes ix-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes ix-breathe {
          0%, 100% { transform: scale(1); opacity: 0.55; }
          50%      { transform: scale(1.06); opacity: 1; }
        }
        @keyframes ix-draw {
          0%   { stroke-dashoffset: 100; }
          45%  { stroke-dashoffset: 0; }
          55%  { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -100; }
        }
        @keyframes ix-sweep {
          0%   { transform: translateX(-160%) skewX(-18deg); }
          55%, 100% { transform: translateX(420%) skewX(-18deg); }
        }
        @keyframes ix-glow {
          0%, 100% { box-shadow: 0 6px 16px rgba(11,90,58,0.25), 0 0 0 0 rgba(242,154,31,0.5); }
          50%      { box-shadow: 0 10px 24px rgba(11,90,58,0.35), 0 0 0 14px rgba(242,154,31,0); }
        }

        .ix-blob-a   { animation: ix-blob-a 20s ease-in-out infinite; }
        .ix-blob-b   { animation: ix-blob-b 24s ease-in-out infinite; }
        .ix-particle { animation: ix-rise linear infinite; will-change: transform, opacity; }
        .ix-march    { stroke-dasharray: 8 6; animation: ix-march 1.6s linear infinite; }
        .ix-text-grad {
          background-image: linear-gradient(90deg, #F29A1F, #FFC15A, #E67E00, #F29A1F);
          background-size: 250% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          animation: ix-gradient 5s ease-in-out infinite;
        }
        .ix-underline { transform-origin: left center; animation: ix-underline 3.6s ease-in-out infinite; }
        .ix-float     { animation: ix-float 6.5s ease-in-out infinite; will-change: transform; }
        .ix-ring      { animation: ix-spin 28s linear infinite; }
        .ix-ring-r    { animation: ix-spin 40s linear infinite reverse; }
        .ix-orbit     { animation: ix-spin 14s linear infinite; }
        .ix-orbit-r   { animation: ix-spin 22s linear infinite reverse; }
        .ix-breathe   { animation: ix-breathe 4.5s ease-in-out infinite; }
        .ix-draw      { stroke-dasharray: 100; animation: ix-draw 6s ease-in-out infinite; }
        .ix-sweep     { animation: ix-sweep 5.5s ease-in-out infinite; }
        .ix-glow      { animation: ix-glow 2.6s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .ix-blob-a, .ix-blob-b, .ix-particle, .ix-march, .ix-text-grad,
          .ix-underline, .ix-float, .ix-ring, .ix-ring-r, .ix-orbit, .ix-orbit-r,
          .ix-breathe, .ix-draw, .ix-sweep, .ix-glow { animation: none !important; }
          .ix-particle { display: none; }
          .ix-draw { stroke-dasharray: none; }
        }
      `}</style>

      <section
        id="intro"
        className="relative bg-sage-100 py-20 md:py-28"
        aria-label="Introduction"
      >
        {/* Ambient layer — clipped so it never causes horizontal scroll */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {/* Drifting soft blobs */}
          <div className="ix-blob-a absolute top-16 -left-20 w-72 h-72 rounded-full bg-white/50 blur-2xl" />
          <div className="ix-blob-b absolute bottom-16 -right-16 w-80 h-80 rounded-full bg-[#F29A1F]/10 blur-2xl" />

          {/* Rising brand-diamond particles */}
          {PARTICLES.map((p, i) => (
            <span
              key={i}
              className="ix-particle absolute bottom-0 leading-none"
              style={{
                left: p.left,
                fontSize: `${p.size}px`,
                color: p.color,
                animationDuration: `${p.dur}s`,
                animationDelay: `${p.delay}s`,
              }}
            >
              ◆
            </span>
          ))}
        </div>

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

              {/* Dashed divider line — dashes now march continuously */}
              <svg
                className="w-[70%] h-[2px] block"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line
                  x1="0"
                  y1="1"
                  x2="100%"
                  y2="1"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="ix-march text-ink-900/30"
                />
              </svg>

              {/* Intro paragraph */}
              <p className="text-base sm:text-[17px] text-ink-800 leading-[1.8] max-w-2xl">
                At{' '}
                <strong className="relative inline-block font-bold">
                  <span className="ix-text-grad text-brand-orange-500">Nebras Academy</span>
                  <span
                    className="ix-underline absolute left-0 -bottom-0.5 h-[3px] w-full rounded-full bg-brand-orange-500"
                    aria-hidden="true"
                  />
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

              {/* CTA button — pulsing glow + shine sweep */}
              <a
                href="/free-trial"
                onClick={(e) => {
                  e.preventDefault();
                  setIsBookingOpen(true);
                }}
                className="ix-glow relative overflow-hidden inline-flex items-center justify-center bg-brand-green-600 hover:bg-brand-green-700 text-white font-semibold text-base px-7 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 min-h-[44px] w-full sm:w-auto"
                id="intro-cta"
              >
                <span className="relative z-10">Book Your Free Trial</span>
                <span
                  className="ix-sweep pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* Right column — Circular photo with orange arc accents */}
            <div className="w-full lg:w-[45%] flex justify-center">
              {/* Floating wrapper (keeps the original sized box untouched) */}
              <div className="ix-float">
                <div className="relative">
                  {/* Spinning dashed rings around the photo */}
                  <div
                    className="ix-ring absolute inset-[-18px] rounded-full border-2 border-dashed border-[#0B5A3A]/25 pointer-events-none"
                    aria-hidden="true"
                  />
                  <div
                    className="ix-ring-r absolute inset-[-34px] rounded-full border border-dashed border-[#F29A1F]/35 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Orbiting dots */}
                  <div className="ix-orbit absolute inset-[-18px] pointer-events-none" aria-hidden="true">
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#F29A1F] shadow-[0_0_14px_#F29A1F]" />
                  </div>
                  <div className="ix-orbit-r absolute inset-[-34px] pointer-events-none" aria-hidden="true">
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-[#0B5A3A] shadow-[0_0_12px_rgba(11,90,58,0.6)]" />
                  </div>

                  {/* Top orange arc accent — breathing + endlessly drawing */}
                  <svg
                    className="absolute -top-3 left-1/2 -translate-x-1/2 w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] pointer-events-none"
                    viewBox="0 0 380 380"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      className="ix-draw"
                      pathLength="100"
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
                      className="ix-draw"
                      style={{ animationDelay: '3s' }}
                      pathLength="100"
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
                  <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden shadow-xl">
                    <img
                      src="/images/quran2.jpg"
                      alt="A student reciting the Quran during an online lesson with Nebras Academy"
                      width="800"
                      height="800"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                    {/* Light sweep passing over the photo */}
                    <span
                      className="ix-sweep pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                      aria-hidden="true"
                    />
                  </div>
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