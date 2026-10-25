import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import {
  LuSparkles,
  LuUsers,
  LuHeart,
  LuSend,
  LuShare2,
  LuMoonStar,
  LuBookOpen,
  LuShieldCheck,
  LuLanguages,
  LuBookMarked,
  LuMic,
} from "react-icons/lu";

/* ------------------------------------------------------------------ */
/* Pricing rules (edit here only)                                      */
/* ------------------------------------------------------------------ */
const PRICING = {
  baseRate: 8,                        // $/hour for everyone by default
  discountedRate: 6,                  // $/hour when a discount applies
  individualDiscountMonthlyHours: 10, // single student: 10+ hours per month
  maxStudents: 5,
  minStudents: 1,
};

const WEEKS_PER_MONTH = 4;
const PRESET_HOURS = [1, 2, 3, 5, 10, 15]; // hours per week
const MIN_HOURS = 1;
const MAX_HOURS = 40;
const MONTH_OPTIONS = [3, 4, 5, 6];

// Smallest weekly hours that reach the monthly threshold (10 / 4 -> 3)
const MIN_WEEKLY_FOR_DISCOUNT = Math.ceil(
  PRICING.individualDiscountMonthlyHours / WEEKS_PER_MONTH
);

const money = (value) => `$${Number.isInteger(value) ? value : value.toFixed(2)}`;
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

/* ------------------------------------------------------------------ */
/* Free community (WhatsApp)                                           */
/* ------------------------------------------------------------------ */
const WHATSAPP_GROUP_URL = "https://whatsapp.com/channel/0029Vb8mO30BadmjZ9lXxG2d";
const SHARE_TEXT = "Join us for free gatherings on the Quran, prayer, and Arabic. Everyone is welcome, so come and bring someone you love!";

const FREE_EVENTS = [
  {
    title: "Prayer Gatherings",
    tagline: "Deepen your connection with every prayer",
    Icon: LuMoonStar,
  },
  {
    title: "Savor the Surahs",
    tagline: "Taste the beauty and meaning of the Quran's chapters",
    Icon: LuBookOpen,
  },
  {
    title: "Purity & Chastity",
    tagline: "Guard your heart and honor your faith",
    Icon: LuShieldCheck,
  },
  {
    title: "Arabic for Everyone",
    tagline: "Learn the language of the Quran, at any level",
    Icon: LuLanguages,
  },
  {
    title: "Al-Fatihah: Mother of the Quran",
    tagline: "Discover its depth, one verse at a time",
    Icon: LuBookMarked,
  },
  {
    title: "Haqq Tilawatih",
    tagline: "Recite the Quran the way it deserves",
    Icon: LuMic,
  },
];

/* ------------------------------------------------------------------ */
/* Motion layer                                                        */
/* Everything below is purely visual. All keyframes/classes are        */
/* prefixed "mc-" so nothing else on the site is affected.             */
/* All motion is disabled for users with prefers-reduced-motion.       */
/* ------------------------------------------------------------------ */
const MOTION_CSS = `
  /* ---------- scroll reveal ---------- */
  .mc-reveal {
    opacity: 0;
    transition: opacity .9s cubic-bezier(.2,.7,.2,1), transform .9s cubic-bezier(.2,.7,.2,1);
    will-change: opacity, transform;
  }
  .mc-reveal.mc-up    { transform: translateY(38px); }
  .mc-reveal.mc-left  { transform: translateX(-52px); }
  .mc-reveal.mc-right { transform: translateX(52px); }
  .mc-reveal.mc-zoom  { transform: scale(.92); }
  .mc-reveal.mc-in    { opacity: 1; transform: none; }

  /* ---------- keyframes ---------- */
  @keyframes mc-blob-a {
    0%, 100% { transform: translate(0,0) scale(1); }
    33%      { transform: translate(34px,-24px) scale(1.12); }
    66%      { transform: translate(-20px,22px) scale(.94); }
  }
  @keyframes mc-blob-b {
    0%, 100% { transform: translate(0,0) scale(1); }
    50%      { transform: translate(-36px,-28px) scale(1.14); }
  }
  @keyframes mc-rise {
    0%   { transform: translateY(0) rotate(0deg) scale(.6); opacity: 0; }
    10%  { opacity: .5; }
    85%  { opacity: .3; }
    100% { transform: translateY(-520px) rotate(360deg) scale(1.1); opacity: 0; }
  }
  @keyframes mc-bubble {
    0%   { transform: translateY(0) scale(.6); opacity: 0; }
    15%  { opacity: 1; }
    100% { transform: translateY(-210px) scale(1.15); opacity: 0; }
  }
  @keyframes mc-float {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-10px); }
  }
  @keyframes mc-float-s {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-5px); }
  }
  @keyframes mc-spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes mc-ring-spin {
    from { transform: translate(-50%,-50%) rotate(0deg); }
    to   { transform: translate(-50%,-50%) rotate(360deg); }
  }
  @keyframes mc-sweep {
    0%        { transform: translateX(-160%) skewX(-18deg); }
    55%, 100% { transform: translateX(420%) skewX(-18deg); }
  }
  @keyframes mc-shimmer {
    0%, 20%   { background-position: 100% 0; }
    70%, 100% { background-position: 0% 0; }
  }
  @keyframes mc-bar {
    0%, 100% { transform: scaleY(.55); opacity: .65; }
    50%      { transform: scaleY(1);   opacity: 1; }
  }
  @keyframes mc-ring-pulse {
    0%   { transform: scale(1);   opacity: .55; }
    100% { transform: scale(1.9); opacity: 0; }
  }
  @keyframes mc-glow-cta {
    0%, 100% { box-shadow: 0 6px 16px rgba(0,0,0,.12), 0 0 0 0 rgba(242,154,31,.55); }
    50%      { box-shadow: 0 10px 24px rgba(0,0,0,.18), 0 0 0 14px rgba(242,154,31,0); }
  }
  @keyframes mc-pop {
    0%   { transform: scale(.8); }
    60%  { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
  @keyframes mc-bump {
    0%   { transform: translateY(10px) scale(.9); opacity: .35; }
    100% { transform: none; opacity: 1; }
  }
  @keyframes mc-plan-idle {
    0%, 100% { box-shadow: 0 0 0 0 rgba(242,154,31,.4); }
    50%      { box-shadow: 0 0 0 10px rgba(242,154,31,0); }
  }
  @keyframes mc-plan-active {
    0%, 100% { box-shadow: 0 10px 26px rgba(242,154,31,.18), 0 0 0 0 rgba(242,154,31,.28); }
    50%      { box-shadow: 0 14px 34px rgba(242,154,31,.38), 0 0 0 6px rgba(242,154,31,0); }
  }
  @keyframes mc-twinkle {
    0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
    50%      { transform: scale(1.28) rotate(22deg); opacity: .7; }
  }
  @keyframes mc-heart {
    0%, 60%, 100% { transform: scale(1); }
    15%           { transform: scale(1.28); }
    30%           { transform: scale(1); }
    45%           { transform: scale(1.18); }
  }
  @keyframes mc-fly {
    0%, 100% { transform: translate(0,0) rotate(0deg); }
    50%      { transform: translate(4px,-5px) rotate(-8deg); }
  }
  @keyframes mc-wiggle {
    0%, 86%, 100% { transform: rotate(0deg); }
    89% { transform: rotate(-14deg); }
    92% { transform: rotate(12deg); }
    95% { transform: rotate(-8deg); }
  }
  @keyframes mc-pan-a {
    0%, 100% { object-position: 50% 30%; }
    50%      { object-position: 50% 75%; }
  }
  @keyframes mc-pan-b {
    0%, 100% { object-position: 50% 100%; }
    50%      { object-position: 50% 55%; }
  }
  @keyframes mc-slide-in {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: none; }
  }
  @keyframes mc-line {
    0%, 100% { transform: scaleX(.3); opacity: .55; }
    50%      { transform: scaleX(1);  opacity: 1; }
  }
  @keyframes mc-flow {
    0%   { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }
  @keyframes mc-bounce-up {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-5px); }
  }

  /* ---------- classes ---------- */
  .mc-blob-a    { animation: mc-blob-a 22s ease-in-out infinite; will-change: transform; }
  .mc-blob-b    { animation: mc-blob-b 26s ease-in-out infinite; will-change: transform; }
  .mc-particle  { animation: mc-rise linear infinite; will-change: transform, opacity; }
  .mc-bubble    { animation: mc-bubble ease-in infinite; }
  .mc-float     { animation: mc-float 6.5s ease-in-out infinite; will-change: transform; }
  .mc-float-s   { animation: mc-float-s 4.5s ease-in-out infinite; }
  .mc-spin-slow { animation: mc-spin 70s linear infinite; }
  .mc-spin-rev  { animation: mc-spin 48s linear infinite reverse; }
  .mc-diamond-spin { display: inline-block; animation: mc-spin 6s linear infinite; }
  .mc-ring      { animation: mc-ring-spin 12s linear infinite; will-change: transform; }
  .mc-sweep     { animation: mc-sweep 6s ease-in-out infinite; }
  .mc-sweep-slow{ animation: mc-sweep 9s ease-in-out infinite; }
  .mc-shimmer {
    background-image: linear-gradient(110deg, currentColor 36%, #FFC15A 50%, currentColor 64%);
    background-size: 250% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: mc-shimmer 5s ease-in-out infinite;
  }
  .mc-bar       { transform-origin: center; animation: mc-bar 3s ease-in-out infinite; }
  .mc-ring-pulse{ animation: mc-ring-pulse 2.6s ease-out infinite; }
  .mc-glow-cta  { animation: mc-glow-cta 2.8s ease-in-out infinite; }
  .mc-pop       { animation: mc-pop .45s cubic-bezier(.2,.8,.3,1.3) both; }
  .mc-bump      { animation: mc-bump .5s cubic-bezier(.2,.8,.3,1) both; }
  .mc-plan-idle { animation: mc-plan-idle 2.4s ease-in-out infinite; }
  .mc-plan-active { animation: mc-plan-active 3s ease-in-out infinite; }
  .mc-twinkle   { animation: mc-twinkle 3.2s ease-in-out infinite; }
  .mc-heart     { animation: mc-heart 2.4s ease-in-out infinite; transform-origin: center; }
  .mc-fly       { animation: mc-fly 3s ease-in-out infinite; }
  .mc-wiggle    { animation: mc-wiggle 6s ease-in-out infinite; transform-origin: center; }
  .mc-pan-a     { animation: mc-pan-a 16s ease-in-out infinite; }
  .mc-pan-b     { animation: mc-pan-b 18s ease-in-out infinite; }
  .mc-slide-in  { animation: mc-slide-in .45s ease-out both; }
  .mc-line      { animation: mc-line 3.6s ease-in-out infinite; }
  .mc-flow-bar {
    background-image: linear-gradient(90deg, #F29A1F, #FFC15A, #0B5A3A, #FFC15A, #F29A1F);
    background-size: 200% 100%;
    animation: mc-flow 6s linear infinite;
  }
  .mc-bounce-up { display: inline-block; animation: mc-bounce-up 1.4s ease-in-out infinite; }

  /* Pause every ambient animation while it is off-screen (saves battery) */
  .mc-paused, .mc-paused * { animation-play-state: paused !important; }

  /* ---------- accessibility ---------- */
  @media (prefers-reduced-motion: reduce) {
    .mc-root *, .mc-root *::before, .mc-root *::after { animation: none !important; }
    .mc-reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
    .mc-decor  { display: none !important; }
  }
`;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Reports whether an element is on screen */
const useInView = ({ threshold = 0.15, once = true, rootMargin = '0px 0px -8% 0px' } = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once, rootMargin]);

  return [ref, inView];
};

/* Smoothly counts a number up/down whenever its target changes */
const useCountUp = (target, duration = 700) => {
  const [value, setValue] = useState(target);
  const currentRef = useRef(target);

  useEffect(() => {
    if (prefersReducedMotion() || currentRef.current === target) {
      currentRef.current = target;
      setValue(target);
      return undefined;
    }
    const from = currentRef.current;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const next = t === 1 ? target : from + (target - from) * eased;
      currentRef.current = next;
      setValue(next);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value;
};

/* Fades/slides its content in when it scrolls into view */
const Reveal = ({ as: Tag = 'div', variant = 'up', delay = 0, className = '', children, ...rest }) => {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`mc-reveal mc-${variant} ${inView ? 'mc-in' : ''} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

/* Slowly rotating eight-pointed star (Islamic geometric motif) */
const IslamicStar = ({ className = '' }) => (
  <div className={className}>
    <svg viewBox="0 0 200 200" className="mc-spin-slow w-full h-full" fill="none" stroke="#F29A1F" strokeWidth="1.2">
      <rect x="45" y="45" width="110" height="110" />
      <rect x="45" y="45" width="110" height="110" transform="rotate(45 100 100)" />
      <circle cx="100" cy="100" r="78" />
      <circle cx="100" cy="100" r="52" strokeDasharray="3 5" />
    </svg>
    <svg viewBox="0 0 200 200" className="mc-spin-rev absolute inset-0 w-full h-full" fill="none" stroke="#0B5A3A" strokeWidth="1">
      <rect x="62" y="62" width="76" height="76" transform="rotate(22.5 100 100)" />
      <rect x="62" y="62" width="76" height="76" transform="rotate(67.5 100 100)" />
      <circle cx="100" cy="100" r="30" />
    </svg>
  </div>
);

const PARTICLES = [
  { left: '6%',  size: 10, dur: 16, delay: 0,   color: '#F29A1F' },
  { left: '19%', size: 7,  dur: 20, delay: 4,   color: '#0B5A3A' },
  { left: '33%', size: 12, dur: 18, delay: 8,   color: '#F29A1F' },
  { left: '48%', size: 8,  dur: 22, delay: 2,   color: '#0B5A3A' },
  { left: '63%', size: 11, dur: 17, delay: 6,   color: '#F29A1F' },
  { left: '78%', size: 7,  dur: 21, delay: 10,  color: '#0B5A3A' },
  { left: '92%', size: 10, dur: 19, delay: 3,   color: '#F29A1F' },
];

/* Ambient background for a section: drifting glows, rotating stars, rising diamonds */
const Ambient = ({ side = 'right', offset = 0 }) => {
  const [ref, inView] = useInView({ threshold: 0, once: false, rootMargin: '120px' });
  const starBig = side === 'right'
    ? '-top-36 -right-36'
    : '-bottom-36 -left-36';
  const starSmall = side === 'right'
    ? 'bottom-6 left-[4%]'
    : 'top-6 right-[4%]';

  return (
    <div
      ref={ref}
      className={`mc-decor absolute inset-0 overflow-hidden pointer-events-none z-0 ${inView ? '' : 'mc-paused'}`}
      aria-hidden="true"
    >
      <div
        className="mc-blob-a absolute top-[10%] -left-24 w-72 h-72 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(242,154,31,0.16) 0%, transparent 70%)' }}
      />
      <div
        className="mc-blob-b absolute bottom-[6%] -right-20 w-80 h-80 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(11,90,58,0.12) 0%, transparent 70%)' }}
      />
      <IslamicStar className={`absolute ${starBig} w-[460px] h-[460px] opacity-[0.2]`} />
      <IslamicStar className={`absolute ${starSmall} w-[150px] h-[150px] opacity-[0.16]`} />
      {PARTICLES.map((p, i) => {
        const q = PARTICLES[(i + offset) % PARTICLES.length];
        return (
          <span
            key={i}
            className="mc-particle absolute bottom-[-20px] leading-none"
            style={{
              left: p.left,
              fontSize: `${q.size}px`,
              color: q.color,
              animationDuration: `${q.dur}s`,
              animationDelay: `${q.delay}s`,
            }}
          >
            ◆
          </span>
        );
      })}
    </div>
  );
};

/* The little vertical accent next to section titles — now breathing */
const AccentBar = () => (
  <span className="mc-bar border-l-4 border-primary-500 rounded-full" aria-hidden="true"></span>
);

/* Decorative divider: line – spinning diamond – line */
const Ornament = () => (
  <div className="mc-decor flex items-center justify-center gap-3 mb-8" aria-hidden="true">
    <span
      className="mc-line origin-right h-[2px] w-16 rounded-full"
      style={{ background: 'linear-gradient(90deg, transparent, #F29A1F)' }}
    />
    <span className="mc-diamond-spin text-sm" style={{ color: '#F29A1F' }}>◆</span>
    <span
      className="mc-line origin-left h-[2px] w-16 rounded-full"
      style={{ background: 'linear-gradient(90deg, #F29A1F, transparent)' }}
    />
  </div>
);

/* Photo frame: floating, with a rotating glow border and a light sweep */
const FramedImage = ({ children, delay = 0 }) => (
  <div className="relative mc-float" style={{ animationDelay: `${delay}s` }}>
    <div
      className="mc-decor absolute -inset-1.5 rounded-[1.1rem] overflow-hidden opacity-70 pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="mc-ring absolute top-1/2 left-1/2 w-[250%] h-[250%]"
        style={{
          background:
            'conic-gradient(from 0deg, #F29A1F, transparent 22%, #0B5A3A 48%, transparent 72%, #F29A1F)',
        }}
      />
    </div>
    <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      {children}
      <span
        className="mc-sweep mc-decor pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        aria-hidden="true"
      />
    </div>
  </div>
);

/* Shine that passes across a button */
const Shine = ({ tone = 'rgba(255,255,255,0.28)' }) => (
  <span
    className="mc-sweep mc-decor pointer-events-none absolute inset-y-0 left-0 w-1/4"
    style={{ background: `linear-gradient(90deg, transparent, ${tone}, transparent)` }}
    aria-hidden="true"
  />
);

const BUBBLES = [
  { left: '8%',  size: 10, dur: 7,  delay: 0 },
  { left: '24%', size: 6,  dur: 9,  delay: 2 },
  { left: '47%', size: 12, dur: 8,  delay: 4 },
  { left: '66%', size: 7,  dur: 10, delay: 1 },
  { left: '82%', size: 9,  dur: 7.5, delay: 3 },
  { left: '94%', size: 5,  dur: 9,  delay: 5 },
];

/* ------------------------------------------------------------------ */
/* Price calculator                                                    */
/* ------------------------------------------------------------------ */
const PriceCalculator = () => {
  // null = the user has not chosen a package yet
  const [plan, setPlan] = useState(null);
  const [hours, setHours] = useState(5);              // hours per week (per student)
  const [hoursInput, setHoursInput] = useState('5');
  const [students, setStudents] = useState(2);        // used only in group plan
  const [months, setMonths] = useState(3);

  const isIndividual = plan === 'individual';
  const isGroup = plan === 'group';

  // One-on-One is always 1 student
  const studentCount = isGroup ? students : 1;

  const monthlyHours = hours * WEEKS_PER_MONTH;

  // Discount rules:
  //  - more than one student: always discounted, from the first hour
  //  - single student: discounted from 10 hours per month
  let discountReason = null;
  if (plan) {
    if (studentCount > 1) discountReason = 'group';
    else if (monthlyHours >= PRICING.individualDiscountMonthlyHours) discountReason = 'hours';
  }
  const hasDiscount = Boolean(discountReason);

  const rate = !plan ? 0 : hasDiscount ? PRICING.discountedRate : PRICING.baseRate;
  const saving = PRICING.baseRate - PRICING.discountedRate;

  const pricePerStudentWeekly = hours * rate;
  const weeklyTotal = hours * rate * studentCount;
  const monthlyTotal = weeklyTotal * WEEKS_PER_MONTH;
  const periodTotal = monthlyTotal * months;

  // Animated (counting) versions of the totals: display only
  const animatedWeekly = useCountUp(weeklyTotal);
  const animatedMonthly = useCountUp(monthlyTotal);
  const animatedPeriod = useCountUp(periodTotal);

  const selectHours = (value) => {
    setHours(value);
    setHoursInput(String(value));
  };

  // Digits only, 1 to 40. Empty / 0 / negative / text are rejected or reset on blur.
  const handleHoursInput = (e) => {
    const raw = e.target.value;
    if (raw !== '' && !/^\d{1,2}$/.test(raw)) return;
    setHoursInput(raw);
    if (raw === '') return;
    const parsed = parseInt(raw, 10);
    if (parsed >= MIN_HOURS) setHours(clamp(parsed, MIN_HOURS, MAX_HOURS));
  };

  const handleHoursBlur = () => setHoursInput(String(hours));

  const chipClass = (active) =>
    `px-4 py-2 rounded-full border text-sm sm:text-base font-semibold transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${
      active
        ? 'mc-pop bg-secondary-500 border-secondary-500 text-white shadow-md'
        : 'bg-white border-gray-300 text-gray-700 hover:border-primary-500'
    }`;

  const planCardClass = (active, idle) =>
    `relative text-start w-full rounded-xl border-2 p-5 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${
      active
        ? 'mc-plan-active border-primary-500 bg-white shadow-lg'
        : `border-gray-200 bg-white hover:border-primary-500 hover:shadow-md ${idle ? 'mc-plan-idle' : ''}`
    }`;

  const checkBadge = (
    <span
      className="mc-pop absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-white text-sm font-bold"
      aria-hidden="true"
    >
      ✓
    </span>
  );

  const stepperBtn =
    'w-11 h-11 text-xl font-bold text-secondary-600 transition-all duration-150 active:scale-90 hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500';

  const monthsStep = isGroup ? 4 : 3;

  const reasonText =
    discountReason === 'group'
      ? 'more than one student'
      : `${monthlyHours} hours per month`;

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden" aria-labelledby="price-calculator-title">
      <Ambient side="right" offset={2} />
      <div className="container mx-auto relative z-10">
        <Reveal variant="left" className="flex gap-4 mb-4">
          <AccentBar />
          <h2 id="price-calculator-title" className="text-2xl sm:text-3xl font-bold text-secondary-600">
            Course Details &amp; Price Calculator
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-gray-700 text-base sm:text-lg leading-8 max-w-4xl mb-8">
            Choose your package, set the weekly hours, and see your price instantly.
          </p>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Course details */}
          <Reveal variant="left" className="lg:w-5/12 relative overflow-hidden bg-white rounded-xl shadow-md p-6 sm:p-8">
            <div className="mc-flow-bar mc-decor absolute top-0 inset-x-0 h-1" aria-hidden="true" />
            <h3 className="text-xl font-bold text-secondary-600 mb-2">Course Details</h3>
            <dl className="divide-y divide-gray-200">
              {[
                ['Duration', '3-6 months (flexible)'],
                ['Class Type', 'One-on-One or Small Groups'],
                ['Age Group', '5+ years (Kids & Adults)'],
                [
                  'Price',
                  `${money(PRICING.baseRate)}/hour\nDiscount: ${money(PRICING.discountedRate)}/hour from ${PRICING.individualDiscountMonthlyHours} hours per month (individual)\nDiscount: ${money(PRICING.discountedRate)}/hour per student (group)`,
                ],
              ].map(([term, value], i) => (
                <Reveal
                  key={term}
                  delay={150 + i * 130}
                  className="py-4 flex flex-col sm:flex-row sm:gap-6 transition-colors duration-300 hover:bg-gray-50"
                >
                  <dt className="sm:w-28 shrink-0 font-semibold text-gray-500 text-sm sm:text-base">{term}</dt>
                  <dd className="text-gray-800 text-base sm:text-lg leading-relaxed whitespace-pre-line">{value}</dd>
                </Reveal>
              ))}
            </dl>
          </Reveal>

          {/* Calculator */}
          <Reveal variant="right" delay={120} className="lg:w-7/12 relative overflow-hidden bg-white rounded-xl shadow-md p-6 sm:p-8">
            <div className="mc-flow-bar mc-decor absolute top-0 inset-x-0 h-1" aria-hidden="true" />

            {/* Step 1: package */}
            <fieldset className="mb-6">
              <legend className="font-semibold text-gray-700 mb-3">1. Choose your package</legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="radiogroup" aria-label="Package">
                <button
                  type="button"
                  role="radio"
                  aria-checked={isIndividual}
                  onClick={() => setPlan('individual')}
                  className={planCardClass(isIndividual, !plan)}
                >
                  {isIndividual && checkBadge}
                  <span className="block text-lg font-bold text-secondary-600">One-on-One</span>
                  <span className="block text-sm sm:text-base text-gray-600 mt-1">
                    {money(PRICING.baseRate)}/hour, or {money(PRICING.discountedRate)}/hour
                    from {PRICING.individualDiscountMonthlyHours} hours per month
                  </span>
                </button>
                <button
                  type="button"
                  role="radio"
                  aria-checked={isGroup}
                  onClick={() => setPlan('group')}
                  className={planCardClass(isGroup, !plan)}
                  style={!plan ? { animationDelay: '0.7s' } : undefined}
                >
                  {isGroup && checkBadge}
                  <span className="block text-lg font-bold text-secondary-600">More than one student</span>
                  <span className="block text-sm sm:text-base text-gray-600 mt-1">
                    {money(PRICING.baseRate)}/hour, or {money(PRICING.discountedRate)}/hour per student
                  </span>
                </button>
              </div>
            </fieldset>

            {/* Step 2: hours per week */}
            <fieldset className={`mb-6 transition-opacity duration-300 ${plan ? '' : 'opacity-40'}`} disabled={!plan}>
              <legend className="font-semibold text-gray-700 mb-3">2. Hours per week</legend>
              <div className="flex flex-wrap items-center gap-3">
                {PRESET_HOURS.map((h) => (
                  <button
                    key={h}
                    type="button"
                    aria-pressed={hours === h}
                    onClick={() => selectHours(h)}
                    className={chipClass(hours === h)}
                  >
                    {h} {h === 1 ? 'hour' : 'hours'}
                  </button>
                ))}
                <label className="flex items-center gap-2 text-gray-700">
                  <span className="text-sm sm:text-base">Other:</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={hoursInput}
                    onChange={handleHoursInput}
                    onBlur={handleHoursBlur}
                    aria-label={`Custom hours per week, ${MIN_HOURS} to ${MAX_HOURS}`}
                    className="w-20 px-3 py-2 rounded-lg border border-gray-300 text-center font-semibold transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </label>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-gray-500">
                {hours} {hours === 1 ? 'hour' : 'hours'} per week = {monthlyHours} hours per month
              </p>

              {plan && studentCount === 1 && !hasDiscount && (
                <p key={hours} className="mc-slide-in mt-3 text-sm sm:text-base text-gray-600">
                  Reach <span className="font-semibold text-primary-600">{PRICING.individualDiscountMonthlyHours} hours per month</span>{' '}
                  (at least {MIN_WEEKLY_FOR_DISCOUNT} hours per week) to get {money(PRICING.discountedRate)}/hour.
                </p>
              )}
              {plan && studentCount === 1 && hasDiscount && (
                <p className="mc-slide-in mt-3 text-sm sm:text-base text-primary-600 font-semibold">
                  You get the {money(PRICING.discountedRate)}/hour rate.
                </p>
              )}
            </fieldset>

            {/* Step 3: students (group only) */}
            {isGroup && (
              <div className="mc-slide-in mb-6">
                <p className="font-semibold text-gray-700 mb-3">3. Number of students</p>
                <div className="inline-flex items-center rounded-full border border-gray-300 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setStudents((s) => Math.max(PRICING.minStudents, s - 1))}
                    disabled={students <= PRICING.minStudents}
                    aria-label="Decrease number of students"
                    className={stepperBtn}
                  >
                    −
                  </button>
                  <span key={students} className="mc-pop w-12 text-center font-bold text-lg" aria-live="polite">{students}</span>
                  <button
                    type="button"
                    onClick={() => setStudents((s) => Math.min(PRICING.maxStudents, s + 1))}
                    disabled={students >= PRICING.maxStudents}
                    aria-label="Increase number of students"
                    className={stepperBtn}
                  >
                    +
                  </button>
                </div>
                {students === 1 && (
                  <p className="mt-2 text-sm text-gray-600">
                    With one student the group discount does not apply. Add another student to get {money(PRICING.discountedRate)}/hour each.
                  </p>
                )}
              </div>
            )}

            {/* Step: months */}
            <fieldset className={`mb-6 transition-opacity duration-300 ${plan ? '' : 'opacity-40'}`} disabled={!plan}>
              <legend className="font-semibold text-gray-700 mb-3">{monthsStep}. Number of months</legend>
              <div className="flex flex-wrap items-center gap-3">
                {MONTH_OPTIONS.map((m) => (
                  <button
                    key={m}
                    type="button"
                    aria-pressed={months === m}
                    onClick={() => setMonths(m)}
                    className={chipClass(months === m)}
                  >
                    {m} months
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Result */}
            <div className="relative overflow-hidden rounded-xl bg-secondary-600 text-white p-5 sm:p-6" aria-live="polite">
              {/* Decorative: passing sheen + rising bubbles */}
              <div className="mc-decor absolute inset-0 pointer-events-none" aria-hidden="true">
                <span className="mc-sweep-slow absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                {BUBBLES.map((b, i) => (
                  <span
                    key={i}
                    className="mc-bubble absolute bottom-0 rounded-full bg-white/15"
                    style={{
                      left: b.left,
                      width: `${b.size}px`,
                      height: `${b.size}px`,
                      animationDuration: `${b.dur}s`,
                      animationDelay: `${b.delay}s`,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                {!plan ? (
                  <p className="text-base sm:text-lg">
                    <span className="mc-bounce-up mr-2" aria-hidden="true">↑</span>
                    Choose a package above to see your price.
                  </p>
                ) : (
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                      {/* Hourly rate: always starts from $8 */}
                      <p className="text-lg sm:text-xl font-bold">
                        {hasDiscount ? (
                          <>
                            <span className="line-through text-white/60 mr-2">{money(PRICING.baseRate)}</span>
                            <span key={rate} className="mc-pop inline-block text-primary-300">{money(rate)}</span>
                            <span className="text-white/80 font-semibold"> /hour</span>
                          </>
                        ) : (
                          <>
                            {money(PRICING.baseRate)}
                            <span className="text-white/80 font-semibold"> /hour</span>
                          </>
                        )}
                      </p>
                      {hasDiscount && (
                        <p className="mc-slide-in text-sm sm:text-base text-white/90">
                          {money(saving)} off every hour ({reasonText})
                        </p>
                      )}

                      <p className="mt-3 text-white/80 text-sm sm:text-base">
                        {hours} {hours === 1 ? 'hour' : 'hours'} per week × {money(rate)}
                        {isGroup ? ` × ${students} ${students === 1 ? 'student' : 'students'}` : ''}
                      </p>
                      {isGroup && (
                        <p className="text-white/80 text-sm sm:text-base">
                          Each student pays {money(pricePerStudentWeekly)} per week
                        </p>
                      )}

                      <p className="mt-3 text-sm text-white/80">Weekly price</p>
                      <p className="text-4xl sm:text-5xl font-bold leading-none">
                        <span className="sr-only">{money(weeklyTotal)}</span>
                        <span key={weeklyTotal} className="mc-bump inline-block" aria-hidden="true">
                          {money(Math.round(animatedWeekly))}
                        </span>
                      </p>

                      <p className="mt-3 text-sm sm:text-base text-white/80">
                        Monthly:{' '}
                        <span className="font-bold text-white">
                          <span className="sr-only">{money(monthlyTotal)}</span>
                          <span key={monthlyTotal} className="mc-bump inline-block" aria-hidden="true">
                            {money(Math.round(animatedMonthly))}
                          </span>
                        </span>{' '}
                        ({WEEKS_PER_MONTH} weeks)
                      </p>

                      <p className="mt-1 text-sm sm:text-base text-white/80">
                        Total for {months} months:{' '}
                        <span className="font-bold text-white text-lg sm:text-xl">
                          <span className="sr-only">{money(periodTotal)}</span>
                          <span key={periodTotal} className="mc-bump inline-block" aria-hidden="true">
                            {money(Math.round(animatedPeriod))}
                          </span>
                        </span>
                      </p>
                    </div>
                    <a
                      href="https://wa.me/201146162847"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mc-glow-cta relative overflow-hidden inline-flex justify-center items-center px-6 py-3 rounded-full bg-white text-secondary-600 font-bold hover:bg-primary-500 hover:text-white hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-600"
                    >
                      <span className="relative z-10">Book Your Free Trial</span>
                      <Shine tone="rgba(242,154,31,0.35)" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Free community section                                              */
/* ------------------------------------------------------------------ */
const FreeCommunity = () => {
  // Uses the native share sheet when available, otherwise opens WhatsApp's share link
  const shareInvitation = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Free Gatherings | Nebras Academy",
          text: SHARE_TEXT,
          url: WHATSAPP_GROUP_URL,
        });
      } catch (err) {
        // The user closed the share sheet: nothing to do
      }
      return;
    }
    window.open(
      `https://wa.me/?text=${encodeURIComponent(`${SHARE_TEXT} ${WHATSAPP_GROUP_URL}`)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  // Icon bubble with an expanding pulse ring behind it
  const iconBubble = (delay) => (
    <span
      className="mc-ring-pulse mc-decor absolute inset-0 rounded-full"
      style={{ background: 'rgba(242,154,31,0.4)', animationDelay: `${delay}s` }}
      aria-hidden="true"
    />
  );

  return (
    <section className="section-padding relative overflow-hidden" aria-labelledby="free-community-title">
      <div className="container mx-auto relative z-10">
        <Reveal variant="zoom" className="relative overflow-hidden bg-primary-50 rounded-2xl shadow-md p-6 sm:p-10">
          <Ambient side="left" offset={4} />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Message */}
          <div className="lg:w-3/5">
            <Reveal variant="left" className="flex gap-4 mb-5">
              <AccentBar />
              <h2 id="free-community-title" className="text-2xl sm:text-3xl font-bold text-secondary-600">
                Spread the Goodness!
              </h2>
            </Reveal>
            <ul className="space-y-5">
              <Reveal as="li" delay={150} className="flex items-start gap-4">
                <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary-600 shadow-sm">
                  {iconBubble(0)}
                  <LuSparkles className="mc-twinkle relative h-5 w-5" aria-hidden="true" />
                </span>
                <p className="pt-1.5 text-secondary-600 text-lg sm:text-xl font-bold leading-snug">
                  Every gathering is <span className="mc-shimmer text-primary-600">FREE</span> and open to everyone!
                </p>
              </Reveal>
              <Reveal as="li" delay={300} className="flex items-start gap-4">
                <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary-600 shadow-sm">
                  {iconBubble(0.8)}
                  <LuUsers className="mc-float-s relative h-5 w-5" aria-hidden="true" />
                </span>
                <p className="pt-1.5 text-gray-700 text-base sm:text-lg leading-relaxed">
                  Bring your family, your friends, and the people you love, and grow together in faith and knowledge.
                </p>
              </Reveal>
              <Reveal as="li" delay={450} className="flex items-start gap-4">
                <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary-600 shadow-sm">
                  {iconBubble(1.6)}
                  <LuHeart className="mc-heart relative h-5 w-5" aria-hidden="true" />
                </span>
                <p className="pt-1.5 text-gray-700 text-base sm:text-lg leading-relaxed">
                  Be the reason someone discovers something beautiful. Pass the goodness on.
                </p>
              </Reveal>
            </ul>
          </div>

          {/* Actions */}
          <Reveal variant="right" delay={200} className="w-full lg:w-2/5 relative overflow-hidden bg-white rounded-xl shadow-sm p-6 sm:p-8 text-center">
            <div className="mc-flow-bar mc-decor absolute top-0 inset-x-0 h-1" aria-hidden="true" />
            <span className="relative mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600">
              {iconBubble(0.4)}
              <LuSend className="mc-fly relative h-6 w-6" aria-hidden="true" />
            </span>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              Know someone who would love this? Send them an invitation. Everyone is welcome!
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mc-glow-cta relative overflow-hidden inline-flex justify-center items-center gap-2 bg-secondary-500 text-white font-bold px-6 py-3.5 rounded-full text-base sm:text-lg shadow-md transition-all duration-300 hover:bg-primary-500 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  <FaWhatsapp className="mc-wiggle text-xl" aria-hidden="true" />
                  Join Our WhatsApp Group
                </span>
                <Shine />
              </a>
              <button
                type="button"
                onClick={shareInvitation}
                className="relative overflow-hidden inline-flex justify-center items-center gap-2 border-2 border-secondary-500 text-secondary-600 font-bold px-6 py-3 rounded-full text-base sm:text-lg transition-all duration-300 hover:bg-secondary-500 hover:text-white hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                <LuShare2 className="mc-float-s h-5 w-5" aria-hidden="true" />
                Invite a Friend
              </button>
            </div>
          </Reveal>
          </div>

          {/* Free events */}
          <div className="relative z-10 mt-8 pt-8 border-t border-primary-300">
            <Reveal>
              <h3 className="text-xl sm:text-2xl font-bold text-secondary-600 mb-5">
                Free events, open to everyone
              </h3>
            </Reveal>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {FREE_EVENTS.map(({ title, tagline, Icon }, i) => (
                <Reveal key={title} as="li" delay={(i % 3) * 130 + Math.floor(i / 3) * 120}>
                  <div className="group relative overflow-hidden h-full flex items-center gap-4 bg-white rounded-xl shadow-sm px-4 py-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <span className="mc-float-s shrink-0" style={{ animationDelay: `${i * 0.45}s` }}>
                      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-50 text-primary-600 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                    </span>
                    <span className="min-w-0">
                      <span className="block font-semibold text-secondary-600 text-base sm:text-lg leading-snug">{title}</span>
                      <span className="block mt-0.5 text-sm text-gray-600 leading-snug">{tagline}</span>
                    </span>
                    <span
                      className="mc-sweep-slow mc-decor pointer-events-none absolute inset-y-0 left-0 w-1/4"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(242,154,31,0.14), transparent)',
                        animationDelay: `${i * 1.3}s`,
                      }}
                      aria-hidden="true"
                    />
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Main content                                                        */
/* ------------------------------------------------------------------ */
const MainContent = () => {
  return (
    <div className='mc-root flex flex-col items-center'>
      <style>{MOTION_CSS}</style>
      <div className="bg-white w-full">
        {/* Section 1: Certified Teachers */}
        <section className="section-padding bg-gray-50 relative overflow-hidden">
          <Ambient side="right" offset={0} />
          <div className="container mx-auto text-center relative z-10">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-600 mb-5 leading-tight">
                Certified Quran teachers. Flexible schedules.<br/><strong className='mc-shimmer text-secondary-300'>One-on-one classes</strong> available from anywhere.
              </h2>
            </Reveal>
            <Ornament />
            <Reveal delay={120}>
              <p className="text-gray-700 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed text-start mb-4">
                <strong className="mc-shimmer text-primary-500 font-bold">Nebras Academy</strong> offers exceptional <strong className="text-primary-500 font-semibold">online Quran education </strong>
                with certified teachers from Al-Azhar and other prestigious institutions. Our flexible scheduling allows students worldwide to learn at their convenience. We provide personalized one-on-one sessions tailored to each student's level and pace. With interactive learning tools and a structured curriculum.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p className="text-gray-700 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed text-start">
                <span className='font-bold'>We</span> make <strong className="mc-shimmer text-primary-500 font-semibold">Quran learning accessible, effective, and enjoyable</strong> for all ages. Our mission is to nurture a deep connection with the Quran while ensuring proper <strong className="text-primary-800 font-semibold">Tajweed</strong> and understanding.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Section 2: Why Learn with Us (Image Right) */}
        <section className="section-padding relative overflow-hidden">
          <Ambient side="left" offset={1} />
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
            <Reveal variant="left" className="md:w-1/2">
              <div className='flex gap-4 mb-4'>
                <AccentBar />
                <h2 className="text-2xl sm:text-3xl font-bold text-secondary-600">Why Learn Quran with Nebras Academy Online?</h2>
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-8">
                At Nebras Academy, we combine traditional Quran teaching methods with modern technology for an optimal learning experience. Our qualified teachers provide individual attention, ensuring <span className='mc-shimmer text-primary-600 font-semibold'>correct pronunciation and understanding</span>. The online platform allows learning from home while maintaining high educational standards. We offer progress tracking, regular assessments, and a supportive learning environment. Whether you're a beginner or advanced student, our customized approach helps you achieve your Quranic goals effectively and with confidence.
              </p>
            </Reveal>
            <Reveal variant="right" delay={150} className="md:w-1/2">
              <FramedImage>
                <img
                  src="/images/doaa.jpg"
                  alt="Online Quran Learning"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </FramedImage>
            </Reveal>
          </div>
        </section>

        {/* Section 3: Learn Quran and Arabic (Image Left) */}
        <section className="section-padding bg-gray-50 relative overflow-hidden">
          <Ambient side="right" offset={3} />
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
            <Reveal variant="left" className="w-full md:w-1/2 order-2 md:order-1">
              <FramedImage delay={1.2}>
                <img
                  src="/images/muslim.jpg"
                  alt="Quran and Arabic Learning"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                  className="mc-pan-a h-[240px] md:h-[380px] w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </FramedImage>
            </Reveal>
            <Reveal variant="right" delay={150} className="md:w-1/2 order-1 md:order-2">
              <div className='flex gap-4 mb-4'>
                <AccentBar />
                <h2 className="text-2xl sm:text-3xl font-bold text-secondary-600">Learn Quran and Arabic Online with Experts</h2>
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-8 text-start">
                Our comprehensive Arabic language program complements Quran studies, helping students understand the divine text in its original language. Expert instructors teach both classical and modern Arabic, focusing on reading, writing, and conversation skills. The integrated approach connects Arabic learning directly to Quranic verses, enhancing comprehension and memorization. Flexible course levels accommodate all proficiency levels, from absolute beginners to advanced learners. Interactive lessons and cultural insights make the learning process engaging and meaningful.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Section 4: Learn Quran and Arabic (Image Right) */}
        <section className="section-padding relative overflow-hidden">
          <Ambient side="left" offset={5} />
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
            <Reveal variant="left" className="md:w-1/2">
              <div className='flex gap-4 mb-4'>
                <AccentBar />
                <h2 className="text-2xl sm:text-3xl font-bold text-secondary-600">Ready to Learn Quran the Right Way?<br/>
                Start Today with Nebras Academy</h2>
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-8">
                Join thousands of satisfied students who have transformed their Quranic recitation and understanding through our proven teaching methods. Take the first step in your spiritual journey <span className='mc-shimmer text-primary-500 font-semibold'>with a free trial class</span> tailored to your level and goals.
              </p>
            </Reveal>
            <Reveal variant="right" delay={150} className="w-full md:w-1/2">
              <FramedImage delay={2.4}>
                <img
                  src="/images/mainContint.jpg"
                  alt="Online Quran Learning"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                  className="mc-pan-b h-[240px] md:h-[380px] w-full object-cover object-bottom transition-transform duration-500 hover:scale-105"
                />
              </FramedImage>
            </Reveal>
          </div>
        </section>

        {/* Section 5: Course Details & Price Calculator */}
        <PriceCalculator />

        {/* Section 6: Free community (WhatsApp) */}
        <FreeCommunity />
      </div>

      {/* Bottom CTA */}
      <Reveal variant="zoom" className="w-full flex justify-center py-12 bg-white">
        <div className="relative inline-flex">
          <span
            className="mc-ring-pulse mc-decor pointer-events-none absolute inset-0 rounded-full"
            style={{ background: 'rgba(242,154,31,0.35)' }}
            aria-hidden="true"
          />
          <span
            className="mc-ring-pulse mc-decor pointer-events-none absolute inset-0 rounded-full"
            style={{ background: 'rgba(242,154,31,0.35)', animationDelay: '1.3s' }}
            aria-hidden="true"
          />
          <a
            href="https://wa.me/201146162847"
            target="_blank"
            rel="noopener noreferrer"
            className='mc-glow-cta relative overflow-hidden inline-flex text-center bg-secondary-500 transition-all duration-300 shadow-lg text-white font-bold hover:bg-primary-500 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 px-8 py-4 justify-center items-center rounded-full text-base sm:text-lg'
          >
            <span className="relative z-10">Book Your Free Trial</span>
            <Shine />
          </a>
        </div>
      </Reveal>
    </div>
  );
};

export default MainContent;