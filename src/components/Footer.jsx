import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaPhone,
  FaGlobe,
  FaFileAlt,
  FaQuestionCircle,
  FaBlog,
  FaEnvelope,
  FaWhatsapp,
  FaTelegram,
  FaYoutube,
  FaFacebook,
  FaChevronRight,
  FaArrowUp,
  FaGraduationCap,
  FaClock,
  FaTags,
  FaUserGraduate,
  FaAward,
} from 'react-icons/fa';

/* ------------------------------------------------------------------ */
/* Hooks & small helpers                                               */
/* ------------------------------------------------------------------ */

// Fires once when the element enters the viewport
const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
};

// Fade + slide-up reveal with optional stagger delay (ms)
const Reveal = ({ inView, delay = 0, className = '', children }) => (
  <div
    style={{ transitionDelay: `${delay}ms` }}
    className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    } ${className}`}
  >
    {children}
  </div>
);

// Section heading with an animated underline
const SectionTitle = ({ children }) => (
  <h3 className="relative inline-block text-lg font-bold mb-6 text-primary-300 pb-2 group/title">
    {children}
    <span className="absolute left-0 bottom-0 h-0.5 w-8 rounded-full bg-primary-500 transition-all duration-500 group-hover/title:w-full" />
  </h3>
);

// Navigation link with sliding arrow
const FooterLink = ({ to, icon: Icon, children }) => (
  <Link
    to={to}
    className="group inline-flex items-center text-white/80 hover:text-primary-300 transition-all duration-300 hover:translate-x-1"
  >
    {Icon ? (
      <Icon className="mr-2.5 text-primary-300 text-xs flex-shrink-0 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" />
    ) : (
      <FaChevronRight className="mr-2 text-[10px] text-primary-300 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 flex-shrink-0" />
    )}
    <span className="relative text-sm">
      {children}
      <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-primary-300 transition-all duration-300 group-hover:w-full" />
    </span>
  </Link>
);

// Contact row (phone / email)
const ContactItem = ({ icon: Icon, href, children, small = false }) => (
  <a
    href={href}
    className="group flex items-center text-white/80 hover:text-white transition-colors duration-300"
  >
    <span className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-300/10 text-primary-300 transition-all duration-300 group-hover:bg-primary-500 group-hover:text-white group-hover:scale-110 group-hover:-rotate-6">
      <Icon className="text-xs" />
    </span>
    <span className={small ? 'break-all text-sm font-medium' : 'text-sm font-medium'}>{children}</span>
  </a>
);

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const courses = [
  { to: '/courses/tajweed', label: 'Quran Tajweed and Recitation' },
  { to: '/courses/reading', label: 'Quran Reading (Noor Al Bayan)' },
  { to: '/courses/recitation', label: 'Quran Recitation' },
  { to: '/courses/memorization', label: 'Quran Memorization' },
  { to: '/courses/memorizing-juz-amma', label: "Memorizing Juz' Amma" },
  { to: '/courses/arabic', label: 'Arabic Language Course' },
  { to: '/courses/arabic-kids', label: 'Arabic for Kids' },
  { to: '/courses/islamic-studies', label: 'Islamic Studies for Kids' },
];

const supportLinks = [
  { to: '/teachers', label: 'Our Teachers & Ijazah', icon: FaAward },
  { to: '/about', label: 'About Us', icon: FaUserGraduate },
  { to: '/pricing', label: 'Pricing Plans', icon: FaTags },
  { to: '/policy', label: 'Student Policy', icon: FaFileAlt },
  { to: '/contact', label: 'Contact Us', icon: FaPhone },
  { to: '/faqs', label: 'FAQs', icon: FaQuestionCircle },
  { to: '/blog', label: 'Blog & Articles', icon: FaBlog },
];

const channels = [
  {
    href: 'https://whatsapp.com/channel/0029Vb8mO30BadmjZ9lXxG2d',
    name: 'WhatsApp',
    action: 'Follow',
    icon: FaWhatsapp,
    color: '#25D366',
  },
  {
    href: 'https://t.me/nebrasacademi',
    name: 'Telegram',
    action: 'Join',
    icon: FaTelegram,
    color: '#229ED9',
  },
  {
    href: 'https://www.youtube.com/@Nebraskacadmey',
    name: 'YouTube',
    action: 'Subscribe',
    icon: FaYoutube,
    color: '#FF0000',
  },
  {
    href: 'https://www.facebook.com/people/Nebras-Academy-for-Teaching-the-Holy-Quran/61595964628884/',
    name: 'Facebook',
    action: 'Like Page',
    icon: FaFacebook,
    color: '#1877F2',
  },
];

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

const Footer = () => {
  const [footerRef, inView] = useInView(0.1);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-secondary-500 text-white pt-20 pb-8 px-4 md:px-6"
    >
      {/* Keyframes used by the animations below */}
      <style>{`
        @keyframes nbScan {
          0%, 100% { top: 0%; opacity: 0; }
          10%, 90% { opacity: 1; }
          50% { top: calc(100% - 2px); opacity: 1; }
        }
        @keyframes nbBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes nbShimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes nbCorner {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.12); }
        }
        @media (prefers-reduced-motion: reduce) {
          .nb-anim { animation: none !important; }
        }
      `}</style>

      {/* Animated top accent line */}
      <div
        className="nb-anim absolute top-0 left-0 right-0 h-1 bg-[length:200%_100%] bg-gradient-to-r from-primary-500 via-primary-300 to-primary-500 animate-[nbShimmer_6s_linear_infinite]"
        aria-hidden="true"
      />

      {/* Decorative floating blobs */}
      <div
        className="nb-anim pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary-500/10 blur-3xl animate-[nbBlob_14s_ease-in-out_infinite]"
        aria-hidden="true"
      />
      <div
        className="nb-anim pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-primary-300/10 blur-3xl animate-[nbBlob_18s_ease-in-out_infinite_reverse]"
        aria-hidden="true"
      />

      <div className="container relative mx-auto flex flex-col justify-center">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 mb-16">

          {/* 1. About Nebras (lg:col-span-4) */}
          <Reveal inView={inView} delay={0} className="sm:col-span-2 lg:col-span-4">
            <SectionTitle>About Nebras</SectionTitle>
            <p className="mb-5 text-white/80 leading-relaxed text-sm sm:text-base">
              <strong className="text-primary-300 font-bold">Nebras Academy</strong> is a trusted global provider of personalized 1-on-1 online Quran, Tajweed, and Arabic classes for kids and adults worldwide.
            </p>

            {/* Academy Highlights */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-xs text-white/75">
                <FaGlobe className="mr-2.5 text-primary-300 text-xs flex-shrink-0" />
                <span>Worldwide Online Classes</span>
              </div>
              <div className="flex items-center text-xs text-white/75">
                <FaGraduationCap className="mr-2.5 text-primary-300 text-xs flex-shrink-0" />
                <span>Certified Native Al-Azhar Teachers</span>
              </div>
              <div className="flex items-center text-xs text-white/75">
                <FaClock className="mr-2.5 text-primary-300 text-xs flex-shrink-0" />
                <span>Flexible 24/7 Scheduling</span>
              </div>
            </div>

            {/* Direct Contact info */}
            <div className="pt-4 border-t border-white/10 space-y-2.5">
              <ContactItem icon={FaPhone} href="tel:+201146162847">
                +20 114 616 2847
              </ContactItem>
              <ContactItem icon={FaPhone} href="tel:+201508586055">
                +20 150 858 6055
              </ContactItem>
              <ContactItem
                icon={FaEnvelope}
                href="mailto:nebrasacademey2025@gmail.com"
                small
              >
                nebrasacademey2025@gmail.com
              </ContactItem>
            </div>
          </Reveal>

          {/* 2. Courses Section (lg:col-span-3) */}
          <Reveal inView={inView} delay={120} className="lg:col-span-3">
            <SectionTitle>Our Courses</SectionTitle>
            <ul className="space-y-2.5">
              {courses.map((course) => (
                <li key={course.to}>
                  <FooterLink to={course.to}>{course.label}</FooterLink>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* 3. Quick Links & Support (lg:col-span-2) */}
          <Reveal inView={inView} delay={240} className="lg:col-span-2">
            <SectionTitle>Quick Links</SectionTitle>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.to}>
                  <FooterLink to={link.to} icon={link.icon}>
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* 4. Community & Channels (lg:col-span-3) */}
          <Reveal inView={inView} delay={360} className="sm:col-span-2 lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <SectionTitle>Join Our Community</SectionTitle>
              <span className="flex h-2.5 w-2.5 relative mb-4" title="Active Community">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>

            <p className="mb-4 text-white/80 leading-relaxed text-sm">
              Follow our official channels for daily Quran reminders, study materials, announcements, and free live sessions.
            </p>

            {/* 2x2 Modern Channel Cards */}
            <div className="grid grid-cols-2 gap-2.5 mb-5">
              {channels.map(({ href, name, action, icon: Icon, color }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ '--brand': color }}
                  className="group relative flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.05] border border-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--brand)] hover:bg-white/[0.1] hover:shadow-lg overflow-hidden"
                >
                  <span className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--brand)]/20 text-[var(--brand)] transition-all duration-300 group-hover:bg-[var(--brand)] group-hover:text-white group-hover:scale-105 shadow-sm">
                    <Icon className="text-sm transition-transform duration-300 group-hover:rotate-6" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold text-white/95 truncate group-hover:text-white">
                      {name}
                    </span>
                    <span className="block text-[10px] text-white/50 group-hover:text-[var(--brand)] transition-colors">
                      {action}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Free Trial Mini Banner */}
            <div className="rounded-xl p-3 bg-gradient-to-r from-primary-500/20 to-primary-300/10 border border-primary-500/30">
              <p className="text-xs text-white/85 mb-1.5 font-medium">Ready to start learning?</p>
              <Link
                to="/contact"
                className="inline-flex items-center text-xs font-bold text-primary-300 hover:text-white transition-colors"
              >
                <span>Book a Free Trial Session</span>
                <FaChevronRight className="ml-1 text-[9px]" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* QR Code Quick Contact Card */}
        <Reveal inView={inView} delay={480} className="mb-14">
          <div className="group relative mx-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary-300/40 hover:shadow-2xl hover:shadow-black/25 sm:p-8">
            {/* Soft glow behind the card */}
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-primary-500/20 blur-3xl opacity-60 transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden="true"
            />
            {/* Accent bar */}
            <div className="absolute left-1/2 top-0 h-1 w-16 -translate-x-1/2 rounded-b-full bg-primary-500 transition-all duration-500 group-hover:w-32" />

            <div className="relative flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
              {/* QR with scanner frame */}
              <div className="relative flex-shrink-0 p-3 sm:p-4">
                {/* Corner brackets */}
                {[
                  'top-0 left-0 border-t-2 border-l-2 rounded-tl-xl',
                  'top-0 right-0 border-t-2 border-r-2 rounded-tr-xl',
                  'bottom-0 left-0 border-b-2 border-l-2 rounded-bl-xl',
                  'bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl',
                ].map((pos) => (
                  <span
                    key={pos}
                    className={`nb-anim absolute h-5 w-5 sm:h-6 sm:w-6 border-primary-300 animate-[nbCorner_2.4s_ease-in-out_infinite] ${pos}`}
                    aria-hidden="true"
                  />
                ))}

                <div className="relative overflow-hidden rounded-xl bg-white p-2.5 sm:p-3 shadow-xl shadow-black/30 transition-transform duration-500 group-hover:scale-105">
                  <img
                    src="/QR.jpg"
                    alt="Scan to Contact Nebras Academy"
                    className="h-28 w-28 rounded-lg object-contain sm:h-36 sm:w-36"
                    loading="lazy"
                    width="144"
                    height="144"
                  />
                  {/* Scanning line */}
                  <span
                    className="nb-anim pointer-events-none absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent shadow-[0_0_12px_2px] shadow-primary-500/60 animate-[nbScan_3s_ease-in-out_infinite]"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Text + quick actions */}
              <div className="flex-1 text-center sm:text-left">
                <span className="mb-2.5 inline-block rounded-full bg-primary-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-300">
                  Quick Connect
                </span>
                <h4 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                  Scan to <span className="text-primary-300">Contact Us</span> Instantly
                </h4>
                <p className="mb-5 text-sm leading-relaxed text-white/75">
                  Scan the QR code with your smartphone camera to reach our student support team directly on WhatsApp, or start a chat right away.
                </p>

                <div className="flex flex-col justify-center gap-3 sm:flex-row sm:justify-start">
                  <a
                    href="https://wa.me/201146162847"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/40"
                  >
                    <FaWhatsapp className="text-base transition-transform duration-300 group-hover/btn:rotate-12 group-hover/btn:scale-110" />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a
                    href="tel:+201146162847"
                    className="group/btn inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-300 hover:bg-white/10 hover:text-primary-300"
                  >
                    <FaPhone className="text-sm transition-transform duration-300 group-hover/btn:-rotate-12 group-hover/btn:scale-110" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Copyright Section */}
        <Reveal inView={inView} delay={600}>
          <div className="relative border-t border-white/10 pt-6 text-center">
            <span
              className={`absolute -top-px left-1/2 h-px -translate-x-1/2 bg-gradient-to-r from-transparent via-primary-300 to-transparent transition-all duration-1000 delay-700 ${
                inView ? 'w-1/2 opacity-100' : 'w-0 opacity-0'
              }`}
              aria-hidden="true"
            />
            <p className="text-white/70 text-sm">
              &copy; Copyright {new Date().getFullYear()} <strong className="text-white font-semibold">Nebras Academy</strong>. All Rights Reserved.
            </p>
            <p className="text-white/45 text-xs mt-1">
              Dedicated to authentic online Quran, Tajweed, and Arabic learning worldwide.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Back to top button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-14 left-7 sm:bottom-14 sm:left-9 z-50 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-primary-500 text-white shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 ${
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;