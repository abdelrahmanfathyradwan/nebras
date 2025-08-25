import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
   <div className="max-w-7xl mx-auto px-4 py-12">
  {/* القسم العلوي */}
  <div className="text-center mb-16">
    <h1 className="text-5xl font-bold text-secondary-700 mb-4">Contact Us</h1>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      Welcome to Nebras Academy. We're honored to be part of your Quranic journey.
    </p>
    <div className="w-24 h-1.5 bg-amber-500 mx-auto mt-6 rounded-full"></div>
  </div>

  <div className="grid md:grid-cols-2 gap-12">
    {/* معلومات الاتصال */}
    <div className="space-y-8">
      {/* بطاقة الهاتف */}
      <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-secondary-600">
        <div className="flex items-start">
          <div className="bg-secondary-100 p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Phone</h3>
            <p className="text-gray-600 mb-1">Egy: +20 114 616 2847</p>
          </div>
        </div>
      </div>

      {/* بطاقة البريد الإلكتروني */}
      <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-amber-500">
        <div className="flex items-start">
          <div className="bg-amber-100 p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Email</h3>
            <p className="text-gray-600">nebrasacademey2025@gmail.com</p>
          </div>
        </div>
      </div>

      {/* بطاقة العنوان */}
      <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
        <div className="flex items-start">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Address</h3>
            <p className="text-gray-600">Office Branches: USA and Cairo, Egypt</p>
          </div>
        </div>
      </div>
    </div>

    {/* نموذج الاتصال */}
   <form 
  action="https://formspree.io/f/afat7i2005@gmail.com" 
  method="POST" 
  className="bg-white p-8 rounded-2xl shadow-lg"
>
  <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
  <p className="text-gray-500 mb-8">Your email address will not be published. Required fields are marked with *</p>
  
  <div className="space-y-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
      <input 
        type="text" 
        id="name" 
        name="name"  // مهم لإرسال البيانات
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 transition-all"
        required
      />
    </div>
    
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
      <input 
        type="email" 
        id="email" 
        name="email"  // مهم لإرسال البيانات
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 transition-all"
        required
      />
    </div>
    
    <div>
      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
      <input 
        type="text" 
        id="subject" 
        name="subject"  // مهم لإرسال البيانات
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 transition-all"
        required
      />
    </div>
    
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
      <textarea 
        id="message" 
        name="message"  // مهم لإرسال البيانات
        rows="5" 
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 transition-all"
        required
      ></textarea>
    </div>
    
    <button 
      type="submit" 
      className="w-full bg-secondary-600 hover:bg-secondary-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-colors"
    >
      Send Message
    </button>
  </div>
</form>
  </div>

  {/* قسم الأسئلة الشائعة */}
  <div className="max-w-4xl mx-auto mt-24">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-secondary-700 mb-4">Frequently Asked Questions</h2>
      <p className="text-gray-600">Quick answers to common questions</p>
      <div className="w-20 h-1 bg-amber-500 mx-auto mt-4"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {/* الأسئلة */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-secondary-800 mb-3">Who are your teachers?</h3>
        <p className="text-gray-700">
          All our teachers are highly qualified, university-educated instructors with ijazah certification in Quran or secondary sciences, fluent in English and Arabic.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-secondary-800 mb-3">What courses do you offer?</h3>
        <p className="text-gray-700">
          We offer Quran Recitation (Tajweed), Memorization (Hifz), Ijazah Programs, Arabic Language, and secondary Studies for all ages.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-secondary-800 mb-3">Do you offer classes for kids?</h3>
        <p className="text-gray-700">
          Yes! We specialize in teaching children from age 4+ using engaging, interactive methods tailored for young learners.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-secondary-800 mb-3">How is Nebras Academy different?</h3>
        <p className="text-gray-700">
          We focus on quality education through handpicked teachers, structured curriculum, and progress tracking for optimal learning outcomes.
        </p>
      </div>
    </div>

    {/* زر الحجز */}
    <div className="text-center mt-12">
      <Link 
        to="https://wa.me/201146162847" 
        className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors text-lg"
      >
        SCHEDULE YOUR FREE TRIAL CLASS
      </Link>
    </div>
  </div>
</div>
  )
}

export default Contact
