import React from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaTelegram, FaYoutube, FaFacebook } from 'react-icons/fa'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'
import { ACADEMY, SITE_URL } from '../data/usa/shared'

const Contact = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Nebras Academy",
    "description": "Contact us to start your online Quran learning journey.",
    "url": "https://www.nebrasacadmy.com/contact",
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "Nebras Academy",
      "url": SITE_URL,
      "logo": ACADEMY.logo,
      "email": ACADEMY.email,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": ACADEMY.phoneE164,
        "email": ACADEMY.email,
        "contactType": "customer service",
        "availableLanguage": ["English", "Arabic"]
      }
    }
  };

  return (
   <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 page-enter">
     <SEO 
       title="Contact Us" 
       description="Get in touch with Nebras Academy to start your online Quran, Tajweed, or Arabic classes today. 24/7 support available." 
       canonical="/contact"
     />
     <StructuredData data={contactSchema} />

     {/* القسم العلوي */}
     <div className="text-center mb-16">
       <h1 className="page-title">Contact Us</h1>
       <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
         Welcome to Nebras Academy. We're honored to be part of your Quranic journey.
       </p>
       <div className="accent-bar"></div>
     </div>

     <div className="grid md:grid-cols-2 gap-12 items-start">
       {/* معلومات الاتصال */}
       <div className="space-y-6">
         {/* بطاقة الهاتف */}
         <div className="card p-6 border-l-4 border-secondary-600 flex items-start">
           <div className="bg-secondary-50 p-3.5 rounded-xl mr-4 text-secondary-600 flex-shrink-0">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
             </svg>
           </div>
           <div>
             <h3 className="text-lg font-bold text-secondary-800 mb-1">Phone &amp; WhatsApp</h3>
             <a href={`tel:${ACADEMY.telephoneE164}`} className="text-gray-600 font-medium hover:text-primary-600 transition-colors">
               {ACADEMY.telephoneDisplay}
             </a>
             <p className="text-xs text-gray-500 mt-1">Egypt number, used for WhatsApp</p>
           </div>
         </div>

         {/* بطاقة البريد الإلكتروني */}
         <div className="card p-6 border-l-4 border-primary-500 flex items-start">
           <div className="bg-primary-50 p-3.5 rounded-xl mr-4 text-primary-500 flex-shrink-0">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
             </svg>
           </div>
           <div>
             <h3 className="text-lg font-bold text-secondary-800 mb-1">Email</h3>
             <a href={`mailto:${ACADEMY.email}`} className="text-gray-600 font-medium break-all hover:text-primary-600 transition-colors">
               {ACADEMY.email}
             </a>
           </div>
         </div>

         {/* بطاقة العنوان */}
         <div className="card p-6 border-l-4 border-blue-500 flex items-start">
           <div className="bg-blue-50 p-3.5 rounded-xl mr-4 text-blue-500 flex-shrink-0">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
             </svg>
           </div>
           <div>
             <h3 className="text-lg font-bold text-secondary-800 mb-1">Where we teach</h3>
             <p className="text-gray-600 font-medium">
               Online from Cairo, Egypt — students worldwide, including the USA.
             </p>
             <p className="text-xs text-gray-500 mt-1">
               Nebras Academy has no US office, branch or mailing address. All lessons are live online.
             </p>
           </div>
         </div>

         {/* بطاقات قنوات المجتمع */}
         <div className="pt-2">
           <h3 className="text-lg font-bold text-secondary-800 mb-3">Join Our Official Channels</h3>
           <div className="grid sm:grid-cols-2 gap-3.5">
             <a 
               href="https://whatsapp.com/channel/0029Vb8mO30BadmjZ9lXxG2d"
               target="_blank"
               rel="noopener noreferrer"
               className="card p-4 border-l-4 border-[#25D366] flex items-center gap-3.5 hover:shadow-md hover:-translate-y-0.5 transition-all group"
             >
               <div className="bg-[#25D366]/10 p-3 rounded-xl text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors flex-shrink-0">
                 <FaWhatsapp className="w-6 h-6" />
               </div>
               <div>
                 <h4 className="font-bold text-secondary-800 text-sm group-hover:text-primary-600 transition-colors">WhatsApp Channel</h4>
                 <p className="text-xs text-gray-500">Daily reminders & updates</p>
               </div>
             </a>

             <a 
               href="https://t.me/nebrasacademi"
               target="_blank"
               rel="noopener noreferrer"
               className="card p-4 border-l-4 border-[#229ED9] flex items-center gap-3.5 hover:shadow-md hover:-translate-y-0.5 transition-all group"
             >
               <div className="bg-[#229ED9]/10 p-3 rounded-xl text-[#229ED9] group-hover:bg-[#229ED9] group-hover:text-white transition-colors flex-shrink-0">
                 <FaTelegram className="w-6 h-6" />
               </div>
               <div>
                 <h4 className="font-bold text-secondary-800 text-sm group-hover:text-primary-600 transition-colors">Telegram Channel</h4>
                 <p className="text-xs text-gray-500">Free events & resources</p>
               </div>
             </a>

             <a 
               href="https://www.youtube.com/@Nebraskacadmey"
               target="_blank"
               rel="noopener noreferrer"
               className="card p-4 border-l-4 border-[#FF0000] flex items-center gap-3.5 hover:shadow-md hover:-translate-y-0.5 transition-all group"
             >
               <div className="bg-[#FF0000]/10 p-3 rounded-xl text-[#FF0000] group-hover:bg-[#FF0000] group-hover:text-white transition-colors flex-shrink-0">
                 <FaYoutube className="w-6 h-6" />
               </div>
               <div>
                 <h4 className="font-bold text-secondary-800 text-sm group-hover:text-primary-600 transition-colors">YouTube Channel</h4>
                 <p className="text-xs text-gray-500">Free lessons & recitations</p>
               </div>
             </a>

             <a 
               href="https://www.facebook.com/people/Nebras-Academy-for-Teaching-the-Holy-Quran/61595964628884/"
               target="_blank"
               rel="noopener noreferrer"
               className="card p-4 border-l-4 border-[#1877F2] flex items-center gap-3.5 hover:shadow-md hover:-translate-y-0.5 transition-all group"
             >
               <div className="bg-[#1877F2]/10 p-3 rounded-xl text-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white transition-colors flex-shrink-0">
                 <FaFacebook className="w-6 h-6" />
               </div>
               <div>
                 <h4 className="font-bold text-secondary-800 text-sm group-hover:text-primary-600 transition-colors">Facebook Page</h4>
                 <p className="text-xs text-gray-500">Updates & announcements</p>
               </div>
             </a>
           </div>
         </div>
       </div>

       {/* نموذج الاتصال */}
       <form 
         action={`mailto:${ACADEMY.email}`}
         method="POST"
         encType="text/plain"
         className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 space-y-6"
       >
         <div>
           <h2 className="text-2xl font-bold text-secondary-800 mb-2">Send Us a Message</h2>
           <p className="text-sm text-gray-500">
             This form opens your email app and sends the message to {ACADEMY.email}. You can also message us on{' '}
             <a href={ACADEMY.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-600 underline underline-offset-2">
               WhatsApp
             </a>
             . Required fields are marked with *.
           </p>
         </div>
         
         <div className="space-y-4">
           <div>
             <label htmlFor="name" className="block text-sm font-semibold text-secondary-700 mb-1">Name *</label>
             <input 
               type="text" 
               id="name" 
               name="name"
               className="input-base"
               required
             />
           </div>
           
           <div>
             <label htmlFor="email" className="block text-sm font-semibold text-secondary-700 mb-1">Email *</label>
             <input 
               type="email" 
               id="email" 
               name="email"
               className="input-base"
               required
             />
           </div>
           
           <div>
             <label htmlFor="subject" className="block text-sm font-semibold text-secondary-700 mb-1">Subject *</label>
             <input 
               type="text" 
               id="subject" 
               name="subject"
               className="input-base"
               required
             />
           </div>
           
           <div>
             <label htmlFor="message" className="block text-sm font-semibold text-secondary-700 mb-1">Message *</label>
             <textarea 
               id="message" 
               name="message"
               rows="4" 
               className="input-base"
               required
             ></textarea>
           </div>
         </div>
         
         <button 
           type="submit" 
           className="w-full btn-secondary py-3.5"
         >
           Send Message
         </button>
       </form>
     </div>

     {/* قسم الأسئلة الشائعة */}
     <div className="max-w-4xl mx-auto mt-24">
       <div className="text-center mb-12">
         <h2 className="section-title">Frequently Asked Questions</h2>
         <p className="text-gray-600 mt-2">Quick answers to common questions</p>
         <div className="accent-bar"></div>
       </div>

       <div className="grid md:grid-cols-2 gap-6">
         {/* الأسئلة */}
         <div className="card p-6">
           <h3 className="text-lg font-bold text-secondary-800 mb-2">Who are your teachers?</h3>
           <p className="text-gray-600 leading-relaxed text-sm">
             All our teachers are highly qualified, university-educated instructors with ijazah certification in Quran or Islamic studies, fluent in English and Arabic.
           </p>
         </div>
         
         <div className="card p-6">
           <h3 className="text-lg font-bold text-secondary-800 mb-2">What courses do you offer?</h3>
           <p className="text-gray-600 leading-relaxed text-sm">
             We offer Quran Recitation (Tajweed), Memorization (Hifz), Ijazah Programs, Arabic Language, and Islamic Studies for all ages.
           </p>
         </div>
         
         <div className="card p-6">
           <h3 className="text-lg font-bold text-secondary-800 mb-2">Do you offer classes for kids?</h3>
           <p className="text-gray-600 leading-relaxed text-sm">
             Yes. We teach children from age 5 using engaging, interactive methods, and parents are welcome to sit in on the lesson.
           </p>
         </div>
         
         <div className="card p-6">
           <h3 className="text-lg font-bold text-secondary-800 mb-2">How is Nebras Academy different?</h3>
           <p className="text-gray-600 leading-relaxed text-sm">
             We focus on quality education through handpicked teachers, structured curriculum, and progress tracking for optimal learning outcomes.
           </p>
         </div>
       </div>

       {/* زر الحجز */}
       <div className="text-center mt-12">
         <Link
           to="/trial"
           className="btn-primary btn-pill px-8 py-3.5 text-base font-bold shadow-lg inline-block"
         >
           SCHEDULE YOUR FREE TRIAL CLASS
         </Link>
         <p className="mt-6 text-sm text-gray-600">
           Comparing options in the US? Read the{' '}
           <Link to="/online-quran-classes-usa" className="font-semibold text-primary-600 underline underline-offset-2">
             online Quran classes for US students
           </Link>{' '}
           page or the{' '}
           <Link to="/learn-quran-online-usa" className="font-semibold text-primary-600 underline underline-offset-2">
             full guide to learning Quran online
           </Link>
           .
         </p>
       </div>
     </div>
   </div>
  )
}

export default Contact
