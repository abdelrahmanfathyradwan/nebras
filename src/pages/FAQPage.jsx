import React from 'react'
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is NebrasAcadmy.com?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nebras Academy is an online Quran, Arabic and Islamic Studies academy. Teachers are based in Cairo, Egypt, and teach live one-to-one or in small groups of up to five students."
      }
    },
    {
      "@type": "Question",
      "name": "Who are your teachers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our teachers hold Ijazah in Quran recitation and teach in English and Arabic. Each public profile lists the teacher's Ijazah, its narration and the sheikh who authorised it."
      }
    },
    {
      "@type": "Question",
      "name": "What courses do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer Quran recitation and Tajweed, Hifz, Juz' Amma memorisation, reading with Noor Al-Bayan, Ijazah preparation, Arabic for adults and children, and Islamic Studies for kids and youth."
      }
    },
    {
      "@type": "Question",
      "name": "How does the trial class work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You book a free trial class through the trial page. A teacher assesses your level and goals, and you experience a live lesson before deciding whether to enrol. No credit card is required."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer classes for kids?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We teach children from age 5 using age-appropriate methods, and parents are welcome to sit in on the lesson."
      }
    },
    {
      "@type": "Question",
      "name": "What is an Ijazah?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An Ijazah is a licence to recite and teach the Quran, granted by an authorised teacher and carrying a chain of transmission back to the Prophet Muhammad. Our Ijazah track prepares students for that licence."
      }
    },
    {
      "@type": "Question",
      "name": "How is Nebras Academy different?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We keep classes small, publish teacher credentials, and follow a structured pathway with regular progress check-ins instead of open-ended conversation practice."
      }
    }
  ]
};

const FAQPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 page-enter">
      <SEO 
        title="Frequently Asked Questions" 
        description="Find answers to common questions about learning Quran, Arabic, and Islamic studies online with Nebras Academy." 
        canonical="/faqs"
      />
      <StructuredData data={faqSchema} />
      
      {/* العنوان الرئيسي */}
      <div className="text-center mb-16">
        <h1 className="page-title">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          Find answers to common questions about learning with Nebras Academy
        </p>
        <div className="accent-bar"></div>
      </div>

      {/* الأسئلة والأجوبة */}
      <div className="space-y-6">
        {/* سؤال 1 */}
        <div className="card p-6 sm:p-8">
          <h3 className="text-xl font-bold text-secondary-800 mb-3">What is NebrasAcadmy.com?</h3>
          <p className="text-gray-600 leading-relaxed">
            Nebras Academy is an online Quran, Arabic and Islamic Studies academy. Teachers are based in Cairo, Egypt, and teach live one-to-one or in small groups of up to five students. Lessons are available around the clock and are taught in English and Arabic.
          </p>
        </div>

        {/* سؤال 2 */}
        <div className="card p-6 sm:p-8">
          <h3 className="text-xl font-bold text-secondary-800 mb-3">Who are your teachers?</h3>
          <p className="text-gray-600 leading-relaxed">
            Our teachers hold Ijazah in Quran recitation and teach in English and Arabic. Each public profile lists the teacher's Ijazah, its narration and the sheikh who authorised it, so you can check the credential for yourself on the{' '}
            <Link to="/teachers" className="font-semibold text-primary-600 underline underline-offset-2">
              teachers page
            </Link>
            .
          </p>
        </div>

        {/* سؤال 3 */}
        <div className="card p-6 sm:p-8">
          <h3 className="text-xl font-bold text-secondary-800 mb-4">What courses do you offer?</h3>
          <p className="text-gray-600 mb-4">We offer a comprehensive range of courses including:</p>
          <ul className="grid sm:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-center space-x-2 bg-gray-50/50 p-2.5 rounded-lg border border-gray-100">
              <span className="text-primary-500 font-bold">•</span>
              <span className="text-sm font-medium">Quran Recitation (Tajweed)</span>
            </li>
            <li className="flex items-center space-x-2 bg-gray-50/50 p-2.5 rounded-lg border border-gray-100">
              <span className="text-primary-500 font-bold">•</span>
              <span className="text-sm font-medium">Quran Memorization (Hifz)</span>
            </li>
            <li className="flex items-center space-x-2 bg-gray-50/50 p-2.5 rounded-lg border border-gray-100">
              <span className="text-primary-500 font-bold">•</span>
              <span className="text-sm font-medium">Ijazah Programs</span>
            </li>
            <li className="flex items-center space-x-2 bg-gray-50/50 p-2.5 rounded-lg border border-gray-100">
              <span className="text-primary-500 font-bold">•</span>
              <span className="text-sm font-medium">Arabic Language</span>
            </li>
            <li className="flex items-center space-x-2 bg-gray-50/50 p-2.5 rounded-lg border border-gray-100 sm:col-span-2">
              <span className="text-primary-500 font-bold">•</span>
              <span className="text-sm font-medium">Islamic Studies for Kids &amp; Youth</span>
            </li>
          </ul>
          <p className="text-gray-500 text-sm mt-4 italic">Custom programs available based on your goals.</p>
        </div>

        {/* سؤال 4 */}
        <div className="card p-6 sm:p-8">
          <h3 className="text-xl font-bold text-secondary-800 mb-3">How does the trial class work?</h3>
          <p className="text-gray-600 leading-relaxed">
            Book a <Link to="/trial" className="font-semibold text-primary-600 underline underline-offset-2">free trial class</Link> to meet a teacher, assess your level, and experience a live lesson before enrolling. No credit card required.
          </p>
        </div>

        {/* سؤال 5 */}
        <div className="card p-6 sm:p-8">
          <h3 className="text-xl font-bold text-secondary-800 mb-3">Do you offer classes for kids?</h3>
          <p className="text-gray-600 leading-relaxed">
            Yes. We teach children from age 5 using age-appropriate methods, and parents are welcome to sit in on the lesson.
          </p>
        </div>

        {/* سؤال 6 */}
        <div className="card p-6 sm:p-8">
          <h3 className="text-xl font-bold text-secondary-800 mb-3">What is an Ijazah?</h3>
          <p className="text-gray-600 leading-relaxed">
            An Ijazah is a licence to recite and teach the Quran, granted by an authorised teacher and carrying a chain of transmission back to the Prophet Muhammad ﷺ. Our Ijazah track prepares students for that licence through precise recitation and memorisation.
          </p>
        </div>

        {/* سؤال 7 */}
        <div className="card p-6 sm:p-8">
          <h3 className="text-xl font-bold text-secondary-800 mb-3">How is Nebras Academy different?</h3>
          <p className="text-gray-600 leading-relaxed">
            We keep classes small, publish teacher credentials, and follow a structured pathway with regular progress check-ins. If you are comparing options in the US, the{' '}
            <Link to="/online-quran-classes-usa" className="font-semibold text-primary-600 underline underline-offset-2">
              online Quran classes for US students
            </Link>{' '}
            page and the{' '}
            <Link to="/learn-quran-online-usa" className="font-semibold text-primary-600 underline underline-offset-2">
              guide to learning Quran online
            </Link>{' '}
            explain how this works in practice.
          </p>
        </div>

        {/* قسم الحجز */}
        <div className="bg-gradient-to-r from-secondary-600 to-secondary-500 rounded-2xl p-8 sm:p-10 text-center mt-12 shadow-md">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to begin your Quran journey?</h3>
          <p className="text-secondary-100 mb-8 max-w-xl mx-auto leading-relaxed">
            Experience the Nebras Academy difference with a free trial class
          </p>
          <Link
            to="/trial"
            className="btn-primary btn-pill px-8 py-3.5 text-base font-bold shadow-lg inline-block"
          >
            SCHEDULE YOUR FREE TRIAL CLASS
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FAQPage;
