import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import {
  FaCalendarCheck,
  FaCheckCircle,
  FaWhatsapp,
  FaShieldAlt,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaBookOpen,
  FaAward,
} from 'react-icons/fa';
import { CHAT_CONFIG } from '../config/chatConfig';

const Trial = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    whatsapp: '',
    studentAge: '5-8',
    courseInterest: 'tajweed',
    preferredTime: 'afternoon',
    notes: '',
    consent: false,
    website_hp: '', // Honeypot field for bot detection
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    // Client-side validation
    if (!formData.parentName.trim() || formData.parentName.trim().length < 2) {
      setStatus({ submitting: false, success: false, error: 'Please enter a valid parent or guardian name.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setStatus({ submitting: false, success: false, error: 'Please enter a valid email address.' });
      return;
    }

    if (!formData.whatsapp.trim() || formData.whatsapp.trim().length < 6) {
      setStatus({ submitting: false, success: false, error: 'Please enter a valid WhatsApp number including country code.' });
      return;
    }

    if (!formData.consent) {
      setStatus({ submitting: false, success: false, error: 'Please accept the privacy policy to submit your request.' });
      return;
    }

    // Map course ID to human-readable label
    const courseLabels = {
      reading: 'Quran Reading from Scratch (Noor Al-Bayan)',
      tajweed: 'Quran Tajweed & Recitation',
      memorization: 'Quran Memorization (Hifz)',
      'juz-amma': "Memorizing Juz' Amma (Part 30)",
      'arabic-kids': 'Arabic Language for Kids',
      'arabic-adults': 'Arabic Language (Fusha / Standard)',
      'islamic-studies': 'Islamic Studies for Kids & Youth',
    };

    // Construct formatted WhatsApp message
    const waText = `*Free Trial Lesson Request - Nebras Academy* 📖✨

👤 *Parent/Guardian:* ${formData.parentName.trim()}
📱 *Contact Number:* ${formData.whatsapp.trim()}
✉️ *Email:* ${formData.email.trim()}
👶 *Age Group:* ${formData.studentAge}
📚 *Course:* ${courseLabels[formData.courseInterest] || formData.courseInterest}
⏰ *Preferred Time:* ${formData.preferredTime}
${formData.notes.trim() ? `📝 *Notes/Goals:* ${formData.notes.trim()}` : ''}

Looking forward to scheduling our free 1-on-1 trial session!`;

    const waLink = `https://wa.me/${CHAT_CONFIG.whatsappNumber}?text=${encodeURIComponent(waText)}`;

    // Send lead to Cloudflare Worker asynchronously in background
    fetch(CHAT_CONFIG.trialApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }).catch(() => {});

    // Update UI state and redirect immediately to WhatsApp
    setStatus({ submitting: false, success: true, error: null, waLink });

    // Immediate redirection to WhatsApp
    window.location.href = waLink;
  };

  const trialSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Book a Free Trial Quran Lesson | Nebras Academy',
    description: 'Register for a free, 1-on-1 assessment lesson with Ijazah-holding Quran teachers based in Cairo, Egypt.',
    url: 'https://www.nebrasacadmy.com/trial',
  };

  return (
    <div className="bg-gradient-to-b from-sage-100/30 via-white to-gray-50 min-h-screen py-12 md:py-20 page-enter">
      <SEO
        title="Book a Free Trial Lesson – 1-on-1 Quran Classes | Nebras Academy"
        description="Book a free 1-on-1 trial Quran or Arabic lesson with our Ijazah-holding teachers in Cairo. Zero payment or credit card required."
        canonical="/trial"
      />
      <StructuredData data={trialSchema} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-xs sm:text-sm text-gray-500 flex items-center gap-2">
          <Link to="/" className="hover:text-primary-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-secondary-700 font-semibold">Book Free Trial</span>
        </nav>

        {/* Header */}
        <header className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold mb-4 shadow-sm">
            <FaAward className="text-emerald-600 text-sm" />
            <span>100% Free • No Credit Card Required • Zero Obligation</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-800 tracking-tight">
            Book Your Free Trial Lesson
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            Experience a live 1-on-1 lesson. Meet an Ijazah-holding teacher, review your current recitation, and leave with a plan for the next steps.
          </p>
          <p className="mt-3 text-sm text-gray-500">
            Teachers are based in Cairo, Egypt and teach online worldwide, including the USA. Exact slot availability is confirmed when we reply.
          </p>
          <div className="w-16 h-1 rounded-full bg-primary-500 mx-auto mt-6" />
        </header>

        {/* Form Container / Success State */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-150 p-6 sm:p-10 md:p-12 relative overflow-hidden">
          {/* Subtle brand top accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-500 via-primary-300 to-secondary-500" />

          {status.success ? (
            /* Success confirmation screen */
            <div className="text-center py-8 space-y-6 animate-fade-in">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-inner">
                <FaCheckCircle className="text-4xl" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-secondary-800">
                  Redirecting to WhatsApp...
                </h2>
                <p className="text-gray-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                  Your trial details have been prepared. If WhatsApp did not open automatically, please click the button below to send your request:
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={status.waLink || `https://wa.me/${CHAT_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
                >
                  <FaWhatsapp className="text-2xl" />
                  <span>Open WhatsApp Conversation Now</span>
                </a>

                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm transition-all"
                >
                  Back to Homepage
                </Link>
              </div>
            </div>
          ) : (
            /* Registration Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {status.error && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm leading-relaxed flex items-start gap-3">
                  <span className="font-bold text-red-600">Notice:</span>
                  <div>
                    <p>{status.error}</p>
                    <a
                      href={CHAT_CONFIG.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold underline text-red-900 mt-1 inline-block"
                    >
                      Or click here to book via WhatsApp directly
                    </a>
                  </div>
                </div>
              )}

              {/* Honeypot field (hidden from legitimate users, catches spambots) */}
              <div
                style={{
                  opacity: 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: 0,
                  width: 0,
                  zIndex: -1,
                  pointerEvents: 'none',
                }}
                aria-hidden="true"
              >
                <label htmlFor="website_hp">Leave this field blank</label>
                <input
                  type="text"
                  id="website_hp"
                  name="website_hp"
                  value={formData.website_hp}
                  onChange={handleChange}
                  tabIndex="-1"
                  autoComplete="off"
                />
              </div>

              {/* Row 1: Parent Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="parentName" className="block text-xs sm:text-sm font-bold text-secondary-800 mb-1.5">
                    Parent / Guardian Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <FaUser className="text-xs" />
                    </span>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      required
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="e.g. Abdullah Khan"
                      className="w-full text-sm pl-10 pr-3.5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-secondary-800 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <FaEnvelope className="text-xs" />
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. parent@example.com"
                      className="w-full text-sm pl-10 pr-3.5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: WhatsApp Number & Age Group */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="whatsapp" className="block text-xs sm:text-sm font-bold text-secondary-800 mb-1.5">
                    WhatsApp Phone Number (with Country Code) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-emerald-600">
                      <FaWhatsapp className="text-sm" />
                    </span>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="e.g. +1 555 123 4567"
                      className="w-full text-sm pl-10 pr-3.5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <p className="text-[11px] text-gray-500 mt-1">
                    We use WhatsApp to coordinate class times and send meeting links.
                  </p>
                </div>

                <div>
                  <label htmlFor="studentAge" className="block text-xs sm:text-sm font-bold text-secondary-800 mb-1.5">
                    Student Age Group <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="studentAge"
                    name="studentAge"
                    value={formData.studentAge}
                    onChange={handleChange}
                    className="w-full text-sm px-3.5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="5-8">Child (5 – 8 years old)</option>
                    <option value="9-13">Youth (9 – 13 years old)</option>
                    <option value="14-17">Teenager (14 – 17 years old)</option>
                    <option value="18+">Adult (18+ years old)</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Course Interest & Preferred Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="courseInterest" className="block text-xs sm:text-sm font-bold text-secondary-800 mb-1.5">
                    Course of Interest
                  </label>
                  <select
                    id="courseInterest"
                    name="courseInterest"
                    value={formData.courseInterest}
                    onChange={handleChange}
                    className="w-full text-sm px-3.5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="reading">Quran Reading from Scratch (Noor Al-Bayan)</option>
                    <option value="tajweed">Quran Tajweed &amp; Recitation</option>
                    <option value="memorization">Quran Memorization (Hifz)</option>
                    <option value="juz-amma">Memorizing Juz' Amma (Part 30)</option>
                    <option value="arabic-kids">Arabic Language for Kids</option>
                    <option value="arabic-adults">Arabic Language (Fusha / Standard)</option>
                    <option value="islamic-studies">Islamic Studies for Kids &amp; Youth</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-xs sm:text-sm font-bold text-secondary-800 mb-1.5">
                    Preferred Time of Day
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full text-sm px-3.5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="morning">Morning (Your local time)</option>
                    <option value="afternoon">Afternoon (Your local time)</option>
                    <option value="evening">Evening (Your local time)</option>
                    <option value="weekends">Weekends Only</option>
                    <option value="flexible">Flexible / Any time</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Notes */}
              <div>
                <label htmlFor="notes" className="block text-xs sm:text-sm font-bold text-secondary-800 mb-1.5">
                  Goals or Specific Requirements (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  maxLength="500"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Tell us about the student's current reading background, previous Quran experience, or any teacher preferences..."
                  className="w-full text-sm p-3.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-secondary-600 focus:ring-primary-500"
                  />
                  <span className="text-xs sm:text-sm text-gray-700 leading-snug">
                    I agree to the processing of my contact information by Nebras Academy solely to schedule our free trial session, in accordance with the{' '}
                    <Link to="/policy" className="text-secondary-700 font-bold underline hover:text-primary-600">
                      Privacy Policy
                    </Link>
                    . We respect your family's privacy and never sell or share data.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-secondary-600 hover:bg-secondary-500 text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:hover:bg-secondary-600"
                >
                  <FaCalendarCheck className="text-lg" />
                  <span>{status.submitting ? 'Submitting Request...' : 'Confirm My Free Trial Booking'}</span>
                </button>
              </div>

              <div className="text-center">
                <p className="text-xs text-gray-500">
                  🔒 Encrypted submission • Ijazah-holding teachers • Free trial, no card required
                </p>
              </div>
            </form>
          )}
        </div>

        <p className="mt-8 text-center text-sm text-gray-600">
          Want the details first? Read{' '}
          <Link to="/online-quran-classes-usa" className="font-semibold text-primary-600 underline underline-offset-2">
            how online Quran classes work for US students
          </Link>{' '}
          or the{' '}
          <Link to="/learn-quran-online-usa" className="font-semibold text-primary-600 underline underline-offset-2">
            complete guide to learning Quran online
          </Link>
          . You can also meet the{' '}
          <Link to="/teachers" className="font-semibold text-primary-600 underline underline-offset-2">
            teachers and see their Ijazah
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Trial;
