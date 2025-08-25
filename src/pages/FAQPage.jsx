import React from 'react'
import { Link } from 'react-router-dom';

const FAQPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
  {/* العنوان الرئيسي */}
  <div className="text-center mb-16">
    <h1 className="text-4xl font-bold text-secondary-700 mb-4">Frequently Asked Questions</h1>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      Find answers to common questions about learning with Nebras Academy
    </p>
    <div className="w-20 h-1 bg-amber-500 mx-auto mt-6"></div>
  </div>

  {/* الأسئلة والأجوبة */}
  <div className="space-y-8">
    {/* سؤال 1 */}
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <div className="p-6">
        <h3 className="text-xl font-bold text-secondary-800 mb-2">What is NebrasAcademy.com?</h3>
        <p className="text-gray-700">
          Nebras Academy is an online Quran and secondary studies platform that connects students with qualified teachers worldwide. We offer personalized one-on-one and small group classes for children, adults, and families.
        </p>
      </div>
    </div>

    {/* سؤال 2 */}
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <div className="p-6">
        <h3 className="text-xl font-bold text-secondary-800 mb-2">Who are your teachers?</h3>
        <p className="text-gray-700">
          All our teachers are highly qualified, university-educated instructors with ijazah (certification) in Quran or secondary sciences. They are fluent in English, Arabic, and often other languages to ensure effective communication.
        </p>
      </div>
    </div>

    {/* سؤال 3 */}
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <div className="p-6">
        <h3 className="text-xl font-bold text-secondary-800 mb-2">What courses do you offer?</h3>
        <p className="text-gray-700 mb-3">We offer a comprehensive range of courses including:</p>
        <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-amber-500 mr-2">•</span>
            <span>Quran Recitation (Tajweed)</span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-500 mr-2">•</span>
            <span>Quran Memorization (Hifz)</span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-500 mr-2">•</span>
            <span>Ijazah Programs</span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-500 mr-2">•</span>
            <span>Arabic Language</span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-500 mr-2">•</span>
            <span>secondary Studies for Kids & Adults</span>
          </li>
        </ul>
        <p className="text-gray-700 mt-3">Custom programs available based on your goals.</p>
      </div>
    </div>

    {/* سؤال 4 */}
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <div className="p-6">
        <h3 className="text-xl font-bold text-secondary-800 mb-2">How does the trial class work?</h3>
        <p className="text-gray-700">
          Book a <span className="font-semibold text-amber-600">free trial class</span> to meet a teacher, assess your level, and experience our platform before enrolling. No credit card required.
        </p>
      </div>
    </div>

    {/* سؤال 5 */}
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <div className="p-6">
        <h3 className="text-xl font-bold text-secondary-800 mb-2">Do you offer classes for kids?</h3>
        <p className="text-gray-700">
          Absolutely! We specialize in teaching children from age 4+. Our kid-friendly curriculum uses games, stories, and interactive methods to make learning engaging and effective.
        </p>
      </div>
    </div>

    {/* سؤال 6 */}
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <div className="p-6">
        <h3 className="text-xl font-bold text-secondary-800 mb-2">What is an Ijazah?</h3>
        <p className="text-gray-700">
          An Ijazah is a certification authorizing you to teach/recite the Quran. At Nebras Academy, you can enroll in our <span className="font-semibold">Ijazah Program</span> and earn your certificate upon mastering precise recitation.
        </p>
      </div>
    </div>

    {/* سؤال 7 */}
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <div className="p-6">
        <h3 className="text-xl font-bold text-secondary-800 mb-2">How is Nebras Academy different?</h3>
        <p className="text-gray-700">
          Unlike other platforms, we focus on <span className="font-semibold">quality education</span> through handpicked teachers, structured curriculum pathways, and progress tracking for faster, lasting results.
        </p>
      </div>
    </div>

    {/* المزيد من الأسئلة... */}
    {/* يمكن إضافة باقي الأسئلة بنفس النمط */}

    {/* قسم الحجز */}
    <div className="bg-gradient-to-r from-secondary-600 to-secondary-700 rounded-xl p-8 text-center mt-12">
      <h3 className="text-2xl font-bold text-white mb-4">Ready to begin your Quran journey?</h3>
      <p className="text-secondary-100 mb-6 max-w-2xl mx-auto">
        Experience the Nebras Academy difference with a free trial class
      </p>
      <Link 
        to="https://wa.me/201146162847" 
        className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors"
      >
        SCHEDULE YOUR FREE TRIAL CLASS
      </Link>
    </div>
  </div>
</div>
  )
}

export default FAQPage;
