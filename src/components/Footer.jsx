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
  FaChevronRight,
  FaArrowUp,
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
      <Icon className="mr-3 text-primary-300 text-sm flex-shrink-0 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" />
    ) : (
      <FaChevronRight className="mr-2 text-[10px] text-primary-300 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
    )}
    <span className="relative">
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
    <span className={small ? 'break-all text-sm' : ''}>{children}</span>
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
  { to: '/courses/arabic', label: 'Arabic Language Course' },
  { to: '/courses/arabic-kids', label: 'Arabic for Kids' },
  { to: '/courses/islamic-studies', label: 'Islamic Studies for Kids' },
  { to: '/courses/memorizing-juz-amma', label: "Memorizing Juz' Amma" },
];

const supportLinks = [
  { to: '/policy', label: 'Student Policy', icon: FaFileAlt },
  { to: '/contact', label: 'Contact', icon: FaPhone },
  { to: '/faqs', label: 'FAQs', icon: FaQuestionCircle },
  { to: '/blog', label: 'Blog', icon: FaBlog },
];

const channels = [
  {
    href: 'https://whatsapp.com/channel/0029Vb8mO30BadmjZ9lXxG2d',
    label: 'WhatsApp Channel',
    icon: FaWhatsapp,
    color: '#25D366',
  },
  {
    href: 'https://t.me/nebrasacademi',
    label: 'Telegram Channel',
    icon: FaTelegram,
    color: '#229ED9',
  },
  {
    href: 'https://www.youtube.com/@Nebraskacadmey',
    label: 'YouTube Channel',
    icon: FaYoutube,
    color: '#FF0000',
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-10 mb-14">
          {/* About Section */}
          <Reveal inView={inView} delay={0} className="sm:col-span-2 lg:col-span-3">
            <SectionTitle>About Nebras</SectionTitle>
            <p className="mb-6 text-white/80 leading-relaxed">
              <strong className="text-primary-300 font-bold">Nebras Academy</strong> is a
              trusted provider of online Quran classes worldwide.
            </p>
            <div className="space-y-3">
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

          {/* Courses Section */}
          <Reveal inView={inView} delay={120} className="sm:col-span-2 lg:col-span-4">
            <SectionTitle>Courses</SectionTitle>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {courses.map((course) => (
                <li key={course.to}>
                  <FooterLink to={course.to}>{course.label}</FooterLink>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Support Section */}
          <Reveal inView={inView} delay={240} className="lg:col-span-2">
            <SectionTitle>Support</SectionTitle>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.to}>
                  <FooterLink to={link.to} icon={link.icon}>
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Company & Community */}
          <Reveal inView={inView} delay={360} className="lg:col-span-3">
            <SectionTitle>Company</SectionTitle>
            <p className="mb-4 text-white/80 leading-relaxed">
              Nebras Academy is dedicated to providing authentic Quranic education with
              certified teachers.
            </p>
            <div className="group mb-5 flex items-center text-white/80">
              <FaGlobe className="nb-anim mr-3 text-primary-300 text-sm flex-shrink-0 transition-transform duration-700 group-hover:rotate-[360deg]" />
              <span>Worldwide Online Classes</span>
            </div>

            {/* Official Channels */}
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-300 mb-3">
                Join Our Channels
              </h4>
              <div className="flex flex-col gap-2.5">
                {channels.map(({ href, label, icon: Icon, color }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ '--brand': color }}
                    className="group flex items-center gap-2.5 text-sm text-white/85 transition-all duration-300 hover:translate-x-1 hover:text-[var(--brand)]"
                  >
                    <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand)]/20 text-[var(--brand)] transition-all duration-300 group-hover:bg-[var(--brand)] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg">
                      <Icon className="text-sm transition-transform duration-300 group-hover:rotate-12" />
                    </span>
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* QR Code Section */}
        <Reveal inView={inView} delay={480} className="mb-12">
          <div className="group relative mx-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/15 via-white/5 to-transparent p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary-300/40 hover:shadow-2xl hover:shadow-black/25 sm:p-8">
            {/* Soft glow behind the card */}
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-primary-500/20 blur-3xl opacity-60 transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden="true"
            />
            {/* Accent bar */}
            <div className="absolute left-1/2 top-0 h-1 w-16 -translate-x-1/2 rounded-b-full bg-primary-500 transition-all duration-500 group-hover:w-32" />

            <div className="relative flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
              {/* QR with scanner frame */}
              <div className="relative flex-shrink-0 p-4">
                {/* Corner brackets */}
                {[
                  'top-0 left-0 border-t-2 border-l-2 rounded-tl-xl',
                  'top-0 right-0 border-t-2 border-r-2 rounded-tr-xl',
                  'bottom-0 left-0 border-b-2 border-l-2 rounded-bl-xl',
                  'bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl',
                ].map((pos) => (
                  <span
                    key={pos}
                    className={`nb-anim absolute h-6 w-6 border-primary-300 animate-[nbCorner_2.4s_ease-in-out_infinite] ${pos}`}
                    aria-hidden="true"
                  />
                ))}

                <div className="relative overflow-hidden rounded-xl bg-white p-3 shadow-xl shadow-black/30 transition-transform duration-500 group-hover:scale-105">
                  <img
                    src="/QR.jpg"
                    alt="Scan to Contact Nebras Academy"
                    className="h-32 w-32 rounded-lg object-contain sm:h-36 sm:w-36"
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
                <span className="mb-3 inline-block rounded-full bg-primary-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-300">
                  Quick Contact
                </span>
                <h4 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                  Scan to <span className="text-primary-300">Contact Us</span>
                </h4>
                <p className="mb-5 text-sm leading-relaxed text-white/75">
                  Scan the QR code with your phone to reach Nebras Academy instantly, or use
                  one of the quick options below.
                </p>

                <div className="flex flex-col justify-center gap-3 sm:flex-row sm:justify-start">
                  <a
                    href="https://wa.me/201146162847"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/40"
                  >
                    <FaWhatsapp className="text-base transition-transform duration-300 group-hover/btn:rotate-12 group-hover/btn:scale-110" />
                    Chat on WhatsApp
                  </a>
                  <a
                    href="tel:+201146162847"
                    className="group/btn inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-300 hover:bg-white/10 hover:text-primary-300"
                  >
                    <FaPhone className="text-sm transition-transform duration-300 group-hover/btn:-rotate-12 group-hover/btn:scale-110" />
                    Call Now
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
            <p className="text-white/60 text-sm">
              &copy; Copyright {new Date().getFullYear()} Nebras Academy. All Rights Reserved.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Back to top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-28 right-10 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-primary-500 text-white shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 ${
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;