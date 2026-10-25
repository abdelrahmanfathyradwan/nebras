import React, { useState } from "react";
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
  individual: {
    standardRate: 8,        // $/hour when weekly hours are below the threshold
    discountedRate: 6,       // $/hour when weekly hours reach the threshold
    discountThreshold: 10,   // weekly hours (10 or more gets the discounted rate)
  },
  group: {
    rate: 6,                 // $/hour per student
    minStudents: 2,
    maxStudents: 5,
  },
};

const WEEKS_PER_MONTH = 4;
const PRESET_HOURS = [3, 5, 10, 15];
const MIN_HOURS = 1;
const MAX_HOURS = 40;

const money = (value) => `$${Number.isInteger(value) ? value : value.toFixed(2)}`;
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

/* ------------------------------------------------------------------ */
/* Free community (WhatsApp)                                           */
/* ------------------------------------------------------------------ */
const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/GIh6qMmcnIGGttiPmo4W1b?s=cl&p=a&mlu=4&ilr=4";
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
/* Price calculator                                                    */
/* ------------------------------------------------------------------ */
const PriceCalculator = () => {
  // null = the user has not chosen a package yet (they must choose first)
  const [plan, setPlan] = useState(null);
  const [hours, setHours] = useState(5);
  const [hoursInput, setHoursInput] = useState('5');
  const [students, setStudents] = useState(PRICING.group.minStudents);

  const isIndividual = plan === 'individual';
  const isGroup = plan === 'group';

  const rate = isIndividual
    ? hours >= PRICING.individual.discountThreshold
      ? PRICING.individual.discountedRate
      : PRICING.individual.standardRate
    : isGroup
      ? PRICING.group.rate
      : 0;

  const pricePerStudentWeekly = hours * rate;
  const weeklyTotal = isGroup ? pricePerStudentWeekly * students : pricePerStudentWeekly;
  const monthlyTotal = weeklyTotal * WEEKS_PER_MONTH;

  const hoursToDiscount = Math.max(0, PRICING.individual.discountThreshold - hours);

  const selectHours = (value) => {
    setHours(value);
    setHoursInput(String(value));
  };

  const handleHoursInput = (e) => {
    const raw = e.target.value;
    if (raw !== '' && !/^\d+$/.test(raw)) return;
    setHoursInput(raw);
    if (raw !== '') setHours(clamp(parseInt(raw, 10), MIN_HOURS, MAX_HOURS));
  };

  const chipClass = (active) =>
    `px-4 py-2 rounded-full border text-sm sm:text-base font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${
      active
        ? 'bg-secondary-500 border-secondary-500 text-white'
        : 'bg-white border-gray-300 text-gray-700 hover:border-primary-500'
    }`;

  const planCardClass = (active) =>
    `text-start w-full rounded-xl border-2 p-5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${
      active
        ? 'border-primary-500 bg-white shadow-lg'
        : 'border-gray-200 bg-white hover:border-primary-500 hover:shadow-md'
    }`;

  return (
    <section className="section-padding bg-gray-50" aria-labelledby="price-calculator-title">
      <div className="container mx-auto">
        <div className='flex gap-4 mb-4'>
          <span className='border-l-4 border-primary-500 rounded-full'></span>
          <h2 id="price-calculator-title" className="text-2xl sm:text-3xl font-bold text-secondary-600">
            Course Details &amp; Price Calculator
          </h2>
        </div>
        <p className="text-gray-700 text-base sm:text-lg leading-8 max-w-4xl mb-8">
          Choose your package, set the weekly hours, and see your price instantly.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Course details */}
          <div className="lg:w-5/12 bg-white rounded-xl shadow-md p-6 sm:p-8">
            <h3 className="text-xl font-bold text-secondary-600 mb-2">Course Details</h3>
            <dl className="divide-y divide-gray-200">
              {[
                ['Duration', '3-6 months (flexible)'],
                ['Class Type', 'One-on-One or Small Groups'],
                ['Age Group', '5+ years (Kids & Adults)'],
                ['Price', '$8/hour (individual)\n$6/hour from 10 hours per week\n$6/hour per student (group)'],
              ].map(([term, value]) => (
                <div key={term} className="py-4 flex flex-col sm:flex-row sm:gap-6">
                  <dt className="sm:w-28 shrink-0 font-semibold text-gray-500 text-sm sm:text-base">{term}</dt>
                  <dd className="text-gray-800 text-base sm:text-lg leading-relaxed whitespace-pre-line">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Calculator */}
          <div className="lg:w-7/12 bg-white rounded-xl shadow-md p-6 sm:p-8">
            {/* Step 1: package (required first) */}
            <fieldset className="mb-6">
              <legend className="font-semibold text-gray-700 mb-3">1. Choose your package</legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="radiogroup" aria-label="Package">
                <button
                  type="button"
                  role="radio"
                  aria-checked={isIndividual}
                  onClick={() => setPlan('individual')}
                  className={planCardClass(isIndividual)}
                >
                  <span className="block text-lg font-bold text-secondary-600">One-on-One</span>
                  <span className="block text-sm sm:text-base text-gray-600 mt-1">
                    {money(PRICING.individual.standardRate)}/hour, or {money(PRICING.individual.discountedRate)}/hour
                    from {PRICING.individual.discountThreshold} hours per week
                  </span>
                </button>
                <button
                  type="button"
                  role="radio"
                  aria-checked={isGroup}
                  onClick={() => setPlan('group')}
                  className={planCardClass(isGroup)}
                >
                  <span className="block text-lg font-bold text-secondary-600">More than one student</span>
                  <span className="block text-sm sm:text-base text-gray-600 mt-1">
                    {money(PRICING.group.rate)}/hour per student
                  </span>
                </button>
              </div>
            </fieldset>

            {/* Step 2: hours (after a package is chosen) */}
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
                    {h} hours
                  </button>
                ))}
                <label className="flex items-center gap-2 text-gray-700">
                  <span className="text-sm sm:text-base">Other:</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={hoursInput}
                    onChange={handleHoursInput}
                    onBlur={() => setHoursInput(String(hours))}
                    aria-label={`Custom hours per week, ${MIN_HOURS} to ${MAX_HOURS}`}
                    className="w-20 px-3 py-2 rounded-lg border border-gray-300 text-center font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </label>
              </div>
              {isIndividual && hoursToDiscount > 0 && (
                <p className="mt-3 text-sm sm:text-base text-gray-600">
                  Add <span className="font-semibold text-primary-600">{hoursToDiscount} more {hoursToDiscount === 1 ? 'hour' : 'hours'}</span> per
                  week to get {money(PRICING.individual.discountedRate)}/hour.
                </p>
              )}
              {isIndividual && hoursToDiscount === 0 && (
                <p className="mt-3 text-sm sm:text-base text-primary-600 font-semibold">
                  You get the {money(PRICING.individual.discountedRate)}/hour rate.
                </p>
              )}
            </fieldset>

            {/* Students (group only) */}
            {isGroup && (
              <div className="mb-6">
                <p className="font-semibold text-gray-700 mb-3">3. Number of students</p>
                <div className="inline-flex items-center rounded-full border border-gray-300 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setStudents((s) => Math.max(PRICING.group.minStudents, s - 1))}
                    disabled={students <= PRICING.group.minStudents}
                    aria-label="Decrease number of students"
                    className="w-11 h-11 text-xl font-bold text-secondary-600 hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                  >
                    −
                  </button>
                  <span className="w-12 text-center font-bold text-lg" aria-live="polite">{students}</span>
                  <button
                    type="button"
                    onClick={() => setStudents((s) => Math.min(PRICING.group.maxStudents, s + 1))}
                    disabled={students >= PRICING.group.maxStudents}
                    aria-label="Increase number of students"
                    className="w-11 h-11 text-xl font-bold text-secondary-600 hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* Result */}
            <div className="rounded-xl bg-secondary-600 text-white p-5 sm:p-6" aria-live="polite">
              {!plan ? (
                <p className="text-base sm:text-lg">Choose a package above to see your price.</p>
              ) : (
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                  <div>
                    <p className="text-white/80 text-sm sm:text-base">
                      {hours} {hours === 1 ? 'hour' : 'hours'} per week × {money(rate)}
                      {isGroup ? ` × ${students} students` : ''}
                    </p>
                    {isGroup && (
                      <p className="text-white/80 text-sm sm:text-base">
                        Each student pays {money(pricePerStudentWeekly)} per week
                      </p>
                    )}
                    <p className="mt-3 text-sm text-white/80">Weekly price</p>
                    <p className="text-4xl sm:text-5xl font-bold leading-none">{money(weeklyTotal)}</p>
                    <p className="mt-3 text-sm sm:text-base text-white/80">
                      About <span className="font-bold text-white">{money(monthlyTotal)}</span> per month ({WEEKS_PER_MONTH} weeks)
                    </p>
                  </div>
                  <a
                    href="https://wa.me/201146162847"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center items-center px-6 py-3 rounded-full bg-white text-secondary-600 font-bold hover:bg-primary-500 hover:text-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-600"
                  >
                    Book Your Free Trial
                  </a>
                </div>
              )}
            </div>
          </div>
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

  return (
    <section className="section-padding" aria-labelledby="free-community-title">
      <div className="container mx-auto">
        <div className="bg-primary-50 rounded-2xl shadow-md p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Message */}
          <div className="lg:w-3/5">
            <div className='flex gap-4 mb-5'>
              <span className='border-l-4 border-primary-500 rounded-full'></span>
              <h2 id="free-community-title" className="text-2xl sm:text-3xl font-bold text-secondary-600">
                Spread the Goodness!
              </h2>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary-600 shadow-sm">
                  <LuSparkles className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="pt-1.5 text-secondary-600 text-lg sm:text-xl font-bold leading-snug">
                  Every gathering is <span className="text-primary-600">FREE</span> and open to everyone!
                </p>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary-600 shadow-sm">
                  <LuUsers className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="pt-1.5 text-gray-700 text-base sm:text-lg leading-relaxed">
                  Bring your family, your friends, and the people you love, and grow together in faith and knowledge.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary-600 shadow-sm">
                  <LuHeart className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="pt-1.5 text-gray-700 text-base sm:text-lg leading-relaxed">
                  Be the reason someone discovers something beautiful. Pass the goodness on.
                </p>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="w-full lg:w-2/5 bg-white rounded-xl shadow-sm p-6 sm:p-8 text-center">
            <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600">
              <LuSend className="h-6 w-6" aria-hidden="true" />
            </span>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              Know someone who would love this? Send them an invitation. Everyone is welcome!
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-secondary-500 text-white font-bold px-6 py-3.5 rounded-full text-base sm:text-lg shadow-md transition-all duration-300 hover:bg-primary-500 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                <FaWhatsapp className="text-xl" aria-hidden="true" />
                Join Our WhatsApp Group
              </a>
              <button
                type="button"
                onClick={shareInvitation}
                className="inline-flex justify-center items-center gap-2 border-2 border-secondary-500 text-secondary-600 font-bold px-6 py-3 rounded-full text-base sm:text-lg transition-colors duration-300 hover:bg-secondary-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                <LuShare2 className="h-5 w-5" aria-hidden="true" />
                Invite a Friend
              </button>
            </div>
          </div>
          </div>

          {/* Free events */}
          <div className="mt-8 pt-8 border-t border-primary-300">
            <h3 className="text-xl sm:text-2xl font-bold text-secondary-600 mb-5">
              Free events, open to everyone
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {FREE_EVENTS.map(({ title, tagline, Icon }) => (
                <li key={title} className="flex items-center gap-4 bg-white rounded-xl shadow-sm px-4 py-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold text-secondary-600 text-base sm:text-lg leading-snug">{title}</span>
                    <span className="block mt-0.5 text-sm text-gray-600 leading-snug">{tagline}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Main content                                                        */
/* ------------------------------------------------------------------ */
const MainContent = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className="bg-white w-full">
        {/* Section 1: Certified Teachers */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-600 mb-8 leading-tight">
              Certified Quran teachers. Flexible schedules.<br/><strong className='text-secondary-300'>One-on-one classes</strong> available from anywhere.
            </h2>
            <p className="text-gray-700 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed text-start mb-4">
              <strong className="text-primary-500 font-bold">Nebras Academy</strong> offers exceptional <strong className="text-primary-500 font-semibold">online Quran education </strong>
              with certified teachers from Al-Azhar and other prestigious institutions. Our flexible scheduling allows students worldwide to learn at their convenience. We provide personalized one-on-one sessions tailored to each student's level and pace. With interactive learning tools and a structured curriculum.
            </p>
            <p className="text-gray-700 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed text-start">
              <span className='font-bold'>We</span> make <strong className="text-primary-500 font-semibold">Quran learning accessible, effective, and enjoyable</strong> for all ages. Our mission is to nurture a deep connection with the Quran while ensuring proper <strong className="text-primary-800 font-semibold">Tajweed</strong> and understanding.
            </p>
          </div>
        </section>

        {/* Section 2: Why Learn with Us (Image Right) */}
        <section className="section-padding">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2">
              <div className='flex gap-4 mb-4'>
                <span className='border-l-4 border-primary-500 rounded-full'></span>
                <h2 className="text-2xl sm:text-3xl font-bold text-secondary-600">Why Learn Quran with Nebras Academy Online?</h2>
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-8">
                At Nebras Academy, we combine traditional Quran teaching methods with modern technology for an optimal learning experience. Our qualified teachers provide individual attention, ensuring <span className='text-primary-600 font-semibold'>correct pronunciation and understanding</span>. The online platform allows learning from home while maintaining high educational standards. We offer progress tracking, regular assessments, and a supportive learning environment. Whether you're a beginner or advanced student, our customized approach helps you achieve your Quranic goals effectively and with confidence.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <img 
                  src="/images/doaa.jpg" 
                  alt="Online Quran Learning"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Learn Quran and Arabic (Image Left) */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <img 
                  src="/images/muslim.jpg" 
                  alt="Quran and Arabic Learning"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                  className="h-[240px] md:h-[380px] w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className='flex gap-4 mb-4'>
                <span className='border-l-4 border-primary-500 rounded-full'></span>
                <h2 className="text-2xl sm:text-3xl font-bold text-secondary-600">Learn Quran and Arabic Online with Experts</h2>
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-8 text-start">
                Our comprehensive Arabic language program complements Quran studies, helping students understand the divine text in its original language. Expert instructors teach both classical and modern Arabic, focusing on reading, writing, and conversation skills. The integrated approach connects Arabic learning directly to Quranic verses, enhancing comprehension and memorization. Flexible course levels accommodate all proficiency levels, from absolute beginners to advanced learners. Interactive lessons and cultural insights make the learning process engaging and meaningful.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Learn Quran and Arabic (Image Right) */}
        <section className="section-padding">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2">
              <div className='flex gap-4 mb-4'>
                <span className='border-l-4 border-primary-500 rounded-full'></span>
                <h2 className="text-2xl sm:text-3xl font-bold text-secondary-600">Ready to Learn Quran the Right Way?<br/>
                Start Today with Nebras Academy</h2>
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-8">
                Join thousands of satisfied students who have transformed their Quranic recitation and understanding through our proven teaching methods. Take the first step in your spiritual journey <span className='text-primary-500 font-semibold'>with a free trial class</span> tailored to your level and goals.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <img 
                  src="/images/mainContint.jpg" 
                  alt="Online Quran Learning"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                  className="h-[240px] md:h-[380px] w-full object-cover object-bottom transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Course Details & Price Calculator */}
        <PriceCalculator />

        {/* Section 6: Free community (WhatsApp) */}
        <FreeCommunity />
      </div>

      {/* Bottom CTA */}
      <div className="w-full flex justify-center py-12 bg-white">
        <a
          href="https://wa.me/201146162847"
          target="_blank"
          rel="noopener noreferrer"
          className='inline-flex text-center bg-secondary-500 transition-all duration-300 shadow-lg text-white font-bold hover:bg-primary-500 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 px-8 py-4 justify-center items-center rounded-full text-base sm:text-lg'
        >
          Book Your Free Trial
        </a>
      </div>
    </div>
  );
};

export default MainContent;