import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BookingModal from '../components/BookingModal';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const FAQPage = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I start learning at Nebras Academy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Starting is easy! Just click on 'Get a Free Trial', fill in your details, and our support team will contact you to schedule your first free evaluation session."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need previous knowledge of Arabic to join?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not at all. We offer courses for absolute beginners starting from the Arabic alphabet (Noorani Qaida) all the way to advanced levels."
        }
      },
      {
        "@type": "Question",
        "name": "Are the teachers male or female?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We have both male and female native Egyptian teachers available. Sisters and children are taught exclusively by female teachers upon request."
        }
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 page-enter">
      <SEO 
        title="Frequently Asked Questions" 
        description="Find answers to common questions about learning Quran, Arabic, and Islamic studies online with Nebras Academy." 
        canonical="/faqs"
      />
      <StructuredData data={faqSchema} />
      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      
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
            Nebras Academy is an online Quran and Islamic studies platform that connects students with qualified teachers worldwide. We offer personalized one-on-one and small group classes for children, adults, and families.
          </p>
        </div>

        {/* سؤال 2 */}
        <div className="card p-6 sm:p-8">
          <h3 className="text-xl font-bold text-secondary-800 mb-3">Who are your teachers?</h3>
          <p className="text-gray-600 leading-relaxed">
            All our teachers are highly qualified, university-educated instructors with ijazah (certification) in Quran or Islamic sciences. They are fluent in English, Arabic, and often other languages to ensure effective communication.
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
              <span className="text-sm font-medium">Islamic Studies for Kids & Adults</span>
            </li>
          </ul>
          <p className="text-gray-500 text-sm mt-4 italic">Custom programs available based on your goals.</p>
        </div>

        {/* سؤال 4 */}
        <div className="card p-6 sm:p-8">
          <h3 className="text-xl font-bold text-secondary-800 mb-3">How does the trial class work?</h3>
          <p className="text-gray-600 leading-relaxed">
            Book a <span className="font-semibold text-primary-500">free trial class</span> to meet a teacher, assess your level, and experience our platform before enrolling. No credit card required.
          </p>
        </div>

        {/* سؤال 5 */}
        <div className="card p-6 sm:p-8">
          <h3 className="text-xl font-bold text-secondary-800 mb-3">Do you offer classes for kids?</h3>
          <p className="text-gray-600 leading-relaxed">
            Absolutely! We specialize in teaching children from age 4+. Our kid-friendly curriculum uses games, stories, and interactive methods to make learning engaging and effective.
          </p>
        </div>

        {/* سؤال 6 */}
        <div className="card p-6 sm:p-8">
          <h3 className="text-xl font-bold text-secondary-800 mb-3">What is an Ijazah?</h3>
          <p className="text-gray-600 leading-relaxed">
            An Ijazah is a certification authorizing you to teach/recite the Quran. At Nebras Academy, you can enroll in our <span className="font-semibold text-secondary-700">Ijazah Program</span> and earn your certificate upon mastering precise recitation.
          </p>
        </div>

        {/* سؤال 7 */}
        <div className="card p-6 sm:p-8">
          <h3 className="text-xl font-bold text-secondary-800 mb-3">How is Nebras Academy different?</h3>
          <p className="text-gray-600 leading-relaxed">
            Unlike other platforms, we focus on <span className="font-semibold text-secondary-700">quality education</span> through handpicked teachers, structured curriculum pathways, and progress tracking for faster, lasting results.
          </p>
        </div>

        {/* قسم الحجز */}
        <div className="bg-gradient-to-r from-secondary-600 to-secondary-500 rounded-2xl p-8 sm:p-10 text-center mt-12 shadow-md">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to begin your Quran journey?</h3>
          <p className="text-secondary-100 mb-8 max-w-xl mx-auto leading-relaxed">
            Experience the Nebras Academy difference with a free trial class
          </p>
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="btn-primary btn-pill px-8 py-3.5 text-base font-bold shadow-lg"
          >
            SCHEDULE YOUR FREE TRIAL CLASS
          </button>
        </div>
      </div>
    </div>
  )
}

export default FAQPage;
