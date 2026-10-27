import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import BookingModal from './BookingModal';

/**
 * HeroSection — Section 1 of the homepage.
 *
 * Compact white band with subtle sage organic shapes.
 * Left: hero photo in a soft rounded frame with shadow.
 * Right: brand badge, H1, sub-line, primary CTA.
 * Floating WhatsApp button at bottom-right.
 *
 * Motion layer (all continuous, GPU-friendly, decorative only):
 *  - 3 static glowing spotlight beams slanting from the top-right corner
 *  - drifting sage blobs
 *  - rising brand-diamond particles
 *  - floating image frame + rotating conic glow ring + light sweep
 *  - orbiting dots around the image
 *  - shimmering brand badge, animated-gradient "Quran", glowing CTA
 *  - rippling WhatsApp button
 * All animations are disabled for users with prefers-reduced-motion.
 */

// Rising particles (static config → no re-render cost)
const PARTICLES = [
  { left: '6%',  size: 10, dur: 14, delay: 0,   color: '#F29A1F' },
  { left: '16%', size: 7,  dur: 18, delay: 3,   color: '#0B5A3A' },
  { left: '27%', size: 12, dur: 16, delay: 6,   color: '#F29A1F' },
  { left: '38%', size: 8,  dur: 20, delay: 1.5, color: '#0B5A3A' },
  { left: '49%', size: 6,  dur: 15, delay: 8,   color: '#F29A1F' },
  { left: '60%', size: 11, dur: 19, delay: 4,   color: '#0B5A3A' },
  { left: '71%', size: 8,  dur: 17, delay: 10,  color: '#F29A1F' },
  { left: '82%', size: 12, dur: 21, delay: 2,   color: '#0B5A3A' },
  { left: '92%', size: 7,  dur: 16, delay: 7,   color: '#F29A1F' },
];

// Spotlight beams from the top-right corner.
// Static (non-animated) and glowing.
// angle = tilt in degrees (clockwise → leans toward the left; kept ≥ 40°),
// w = beam width (px), len = beam length (% of section height),
// right = offset from the right edge, color = 'R,G,B', peak = brightness at the source.
const BEAMS = [
  { angle: 40, w: 130, len: 175, right: '2%',  color: '242,154,31', peak: 0.34 }, // orange
  { angle: 52, w: 100, len: 185, right: '7%',  color: '16,150,100', peak: 0.26 }, // emerald green
  { angle: 64, w: 150, len: 200, right: '12%', color: '255,193,90', peak: 0.38 }, // golden
];

const HeroSection = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      {/* Scoped keyframes — prefixed "hx-" so nothing else is affected */}
      <style>{`
        @keyframes hx-blob-a {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33%      { transform: translate(-24px, 18px) rotate(8deg) scale(1.06); }
          66%      { transform: translate(14px, -12px) rotate(-6deg) scale(0.96); }
        }
        @keyframes hx-blob-b {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          50%      { transform: translate(26px, -20px) rotate(-10deg) scale(1.1); }
        }
        @keyframes hx-rise {
          0%   { transform: translateY(0) rotate(0deg) scale(0.6); opacity: 0; }
          10%  { opacity: 0.55; }
          85%  { opacity: 0.35; }
          100% { transform: translateY(-110vh) rotate(360deg) scale(1.1); opacity: 0; }
        }
        @keyframes hx-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-14px) rotate(0.6deg); }
        }
        @keyframes hx-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes hx-orbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes hx-sweep {
          0%   { transform: translateX(-160%) skewX(-18deg); }
          55%, 100% { transform: translateX(260%) skewX(-18deg); }
        }
        @keyframes hx-gradient {
          0%, 100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        @keyframes hx-underline {
          0%, 100% { transform: scaleX(0.35); opacity: 0.5; }
          50%      { transform: scaleX(1); opacity: 1; }
        }
        @keyframes hx-diamond {
          0%, 100% { transform: rotate(0deg) scale(1); opacity: 1; }
          50%      { transform: rotate(180deg) scale(1.35); opacity: 0.7; }
        }
        @keyframes hx-glow {
          0%, 100% { box-shadow: 0 6px 16px rgba(11,90,58,0.25), 0 0 0 0 rgba(242,154,31,0.55); }
          50%      { box-shadow: 0 10px 24px rgba(11,90,58,0.35), 0 0 0 14px rgba(242,154,31,0); }
        }
        @keyframes hx-ripple {
          0%   { transform: scale(1); opacity: 0.55; }
          100% { transform: scale(2.1); opacity: 0; }
        }
        @keyframes hx-wiggle {
          0%, 88%, 100% { transform: rotate(0deg); }
          91% { transform: rotate(-14deg); }
          94% { transform: rotate(12deg); }
          97% { transform: rotate(-8deg); }
        }

        /* Static spotlight: no animation, just a soft glowing cone */
        .hx-beam { transform-origin: 50% 0; }
        .hx-beam-core {
          clip-path: polygon(42% 0, 58% 0, 100% 100%, 0 100%);
          filter: blur(7px);
        }
        .hx-blob-a   { animation: hx-blob-a 18s ease-in-out infinite; }
        .hx-blob-b   { animation: hx-blob-b 22s ease-in-out infinite; }
        .hx-particle { animation: hx-rise linear infinite; will-change: transform, opacity; }
        .hx-float    { animation: hx-float 6s ease-in-out infinite; will-change: transform; }
        .hx-ring     { animation: hx-spin 9s linear infinite; will-change: transform; }
        .hx-orbit    { animation: hx-orbit 16s linear infinite; }
        .hx-orbit-r  { animation: hx-orbit 24s linear infinite reverse; }
        .hx-sweep    { animation: hx-sweep 5.5s ease-in-out infinite; }
        .hx-text-grad {
          background-image: linear-gradient(90deg, #F29A1F, #FFC15A, #E67E00, #F29A1F);
          background-size: 250% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          animation: hx-gradient 5s ease-in-out infinite;
        }
        .hx-underline { transform-origin: left center; animation: hx-underline 3.6s ease-in-out infinite; }
        .hx-diamond   { display: inline-block; animation: hx-diamond 3s ease-in-out infinite; }
        .hx-glow      { animation: hx-glow 2.6s ease-in-out infinite; }
        .hx-ripple    { animation: hx-ripple 2.4s ease-out infinite; }
        .hx-wiggle    { animation: hx-wiggle 6s ease-in-out infinite; transform-origin: center; }

        @media (prefers-reduced-motion: reduce) {
          .hx-blob-a, .hx-blob-b, .hx-particle, .hx-float, .hx-ring, .hx-orbit,
          .hx-orbit-r, .hx-sweep, .hx-text-grad, .hx-underline, .hx-diamond,
          .hx-glow, .hx-ripple, .hx-wiggle { animation: none !important; }
          .hx-particle, .hx-ripple { display: none; }
          .hx-ring { transform: translate(-50%, -50%); }
        }
      `}</style>

      <section
        id="hero"
        className="relative overflow-hidden bg-white"
        aria-label="Hero"
      >
        {/* Spotlight beams — static, glowing slanted light from the top-right corner (decorative) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {BEAMS.map((b, i) => (
            <div
              key={i}
              className="hx-beam absolute top-[-6%]"
              style={{
                right: b.right,
                width: `${b.w}px`,
                height: `${b.len}%`,
                transform: `rotate(${b.angle}deg)`,
                filter: `drop-shadow(0 0 22px rgba(${b.color},0.65))`,
              }}
            >
              <div
                className="hx-beam-core absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom, rgba(${b.color},${b.peak}) 0%, rgba(${b.color},${b.peak * 0.55}) 50%, transparent 90%)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Rising brand-diamond particles — purely decorative */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {PARTICLES.map((p, i) => (
            <span
              key={i}
              className="hx-particle absolute bottom-[-20px] leading-none"
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

        {/* Decorative sage brush-stroke shapes — very low opacity, now drifting */}
        <svg
          className="hx-blob-a absolute -top-10 -right-16 w-[420px] h-[420px] opacity-[0.09] pointer-events-none"
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
          className="hx-blob-b absolute -bottom-10 -left-12 w-[340px] h-[340px] opacity-[0.1] pointer-events-none"
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
              {/* Floating wrapper (keeps the original sized box untouched) */}
              <div className="hx-float">
                <div className="relative w-[220px] h-[270px] sm:w-[260px] sm:h-[320px] md:w-[300px] md:h-[370px] lg:w-[340px] lg:h-[420px]">

                  {/* Orbiting dots around the image */}
                  <div className="hx-orbit absolute inset-[-22px] pointer-events-none" aria-hidden="true">
                    <span className="absolute top-0 left-1/2 w-3 h-3 rounded-full bg-[#F29A1F] shadow-[0_0_12px_#F29A1F]" />
                    <span className="absolute bottom-6 right-0 w-2 h-2 rounded-full bg-[#0B5A3A]/70" />
                  </div>
                  <div className="hx-orbit-r absolute inset-[-34px] pointer-events-none" aria-hidden="true">
                    <span className="absolute bottom-0 left-1/3 w-2.5 h-2.5 rounded-full bg-[#0B5A3A] shadow-[0_0_10px_rgba(11,90,58,0.6)]" />
                    <span className="absolute top-10 left-0 w-2 h-2 rounded-full bg-[#F29A1F]/70" />
                  </div>

                  {/* Rotating conic glow ring behind the image (replaces the static arc) */}
                  <div
                    className="absolute -inset-2 rounded-[2rem] overflow-hidden opacity-40 pointer-events-none"
                    aria-hidden="true"
                  >
                    <div
                      className="hx-ring absolute top-1/2 left-1/2 w-[200%] h-[200%]"
                      style={{
                        background:
                          'conic-gradient(from 0deg, #F29A1F, transparent 25%, #0B5A3A 50%, transparent 75%, #F29A1F)',
                      }}
                    />
                  </div>

                  {/* Image container with rounded corners and shadow */}
                  <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden shadow-xl ring-1 ring-black/5">
                    {/* TODO: Replace with actual hero image — person holding an ornate Quran.
                         File needed: /public/images/hero/quran-holder.webp (≈900×1000, portrait, light bg)
                         Also provide /public/images/hero/quran-holder.avif for modern browsers. */}
                    <img
                      src="/images/mainContint.jpg"
                      alt="A teacher gently holding an ornate Quran, ready for an online lesson at Nebras Academy"
                      width="1100"
                      height="1000"
                      fetchpriority="high"
                      decoding="async"
                      className="w-full h-full object-cover object-center"
                    />
                    {/* Light sweep passing over the photo */}
                    <span
                      className="hx-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Text content */}
            <div className="w-full lg:w-[62%] flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 page-enter">
              {/* Brand badge — pill ribbon with shimmer + pulsing diamonds */}
              <p
                className="brand-badge relative overflow-hidden inline-flex items-center gap-2 px-5 py-2 rounded-full text-white font-display text-sm sm:text-base tracking-wide select-none"
                aria-label="Nebras Academy"
              >
                <span className="text-brand-orange-500 text-xs hx-diamond" aria-hidden="true">◆</span>
                <span>Nebras Academy</span>
                <span className="text-brand-orange-500 text-xs hx-diamond" style={{ animationDelay: '1.5s' }} aria-hidden="true">◆</span>
                <span
                  className="hx-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  aria-hidden="true"
                />
              </p>

              {/* H1 — the only H1 on the page */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold leading-[1.15] text-ink-900">
                Online{' '}
                <span className="relative inline-block">
                  <span className="hx-text-grad text-brand-orange-500">Quran</span>
                  {/* Breathing underline */}
                  <span
                    className="hx-underline absolute left-0 -bottom-1 h-[4px] w-full rounded-full bg-brand-orange-500"
                    aria-hidden="true"
                  />
                </span>{' '}
                Classes
                <br className="hidden sm:block" />
                {' '}for Kids &amp; Adults
              </h1>

              {/* Sub-line */}
              <p className="text-base sm:text-lg text-ink-800/80 max-w-xl leading-relaxed">
                Live 1-on-1 lessons in Tajweed, memorization and Arabic.{' '}
                <span className="font-semibold text-ink-900">Book a free trial</span> and start your journey today.
              </p>

              {/* Primary CTA + Trust Badge */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
                <a
                  href="/free-trial"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsBookingOpen(true);
                  }}
                  className="hx-glow relative overflow-hidden inline-flex items-center justify-center bg-brand-green-900 hover:bg-brand-green-700 text-white font-semibold text-base sm:text-lg px-7 py-3.5 sm:px-8 sm:py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 min-h-[44px] w-full sm:w-auto"
                  id="hero-cta"
                >
                  <span className="relative z-10">Book Your Free Trial</span>
                  <span
                    className="hx-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                    aria-hidden="true"
                  />
                </a>

                {/* Trust Badge linking to /teachers */}
                <Link
                  to="/teachers"
                  className="flex items-center justify-center text-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100/90 border border-emerald-200/90 text-emerald-900 text-xs sm:text-sm font-bold shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5 group w-full sm:w-auto"
                  title="Meet our certified Quran scholars and Al-Azhar graduates"
                >
                  <span className="flex h-2 w-2 relative flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="break-words">All Teachers Certified with Sanad • Al-Azhar Graduates</span>
                  <span className="text-emerald-700 font-bold transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Fixed WhatsApp Button — with ripple rings + periodic wiggle */}
      <a
        href="https://wa.me/201146162847"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 bg-[#25D366] hover:bg-[#1fb855] text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl transition-all duration-300 animate-pulse-gentle flex items-center justify-center hover:scale-110 focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        aria-label="Contact us on WhatsApp"
      >
        <span
          className="hx-ripple pointer-events-none absolute inset-0 rounded-full bg-[#25D366]"
          aria-hidden="true"
        />
        <span
          className="hx-ripple pointer-events-none absolute inset-0 rounded-full bg-[#25D366]"
          style={{ animationDelay: '1.2s' }}
          aria-hidden="true"
        />
        <FaWhatsapp className="hx-wiggle relative text-2xl sm:text-3xl" />
      </a>
    </>
  );
};

export default HeroSection;