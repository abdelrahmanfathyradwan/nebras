import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const About = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Nebras Academy",
    "description": "Nebras Academy teaches Quran, Arabic and Islamic Studies online to students worldwide from Cairo, Egypt.",
    "url": "https://www.nebrasacadmy.com/about"
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 page-enter">
      <SEO 
        title="About Us" 
        description="Learn about Nebras Academy, our Quran teachers in Cairo, and how our live online Quran, Arabic and Islamic Studies lessons work." 
        canonical="/about"
      />
      <StructuredData data={aboutSchema} />
      
      {/* القسم الرئيسي */}
      <section className="mb-16 md:mb-20">
        <div className="text-center mb-12">
          <h1 className="page-title">WHO WE ARE</h1>
          <div className="accent-bar"></div>
        </div>

        <div className="card-elevated p-8 md:p-12 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-6 text-center">About Nebras Academy</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Nebras Academy is your premier source of Quranic education. From foundational Quran reading to advanced memorization, we provide comprehensive tutoring services covering all aspects of the Quran.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-amber-50/50 p-6 rounded-xl border-l-4 border-primary-500 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                Our courses help you work toward your Quranic goals, whether that means reading with correct Tajweed, memorising part or all of the Quran, or studying for an Ijaazah. Lessons are one-to-one or in small groups, and we teach children from age 5 as well as teenagers and adults.
              </p>
            </div>
            <div className="bg-secondary-50/50 p-6 rounded-xl border-l-4 border-secondary-600 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                Online Quran learning with Nebras Academy eliminates logistical challenges while ensuring safety for you and your family. We help establish consistent Quranic study habits and guide you toward achieving your spiritual objectives.
              </p>
            </div>
          </div>

          <p className="text-center mt-10 text-gray-500 font-medium text-sm tracking-wide uppercase">
            Teaching live online from Cairo, Egypt to students worldwide.
          </p>
        </div>
      </section>

      {/* لماذا تختارنا؟ */}
      <section className="mb-16 md:mb-20">
        <div className="text-center mb-12">
          <h2 className="section-title">WHY CHOOSE NEBRAS ACADEMY?</h2>
          <div className="accent-bar"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* بطاقة الخبرة */}
          <div className="card p-8 border-t-4 border-secondary-600 hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-secondary-50 rounded-xl flex items-center justify-center mb-6 text-secondary-600 font-bold text-xl">
              1:1
            </div>
            <h3 className="text-xl font-bold text-secondary-800 mb-4">One-to-One Attention</h3>
            <p className="text-gray-600 leading-relaxed">
              Every lesson is taught live by a qualified teacher who knows your level, your goals and the errors you are working on. Small groups of up to five are also available for families and friends.
            </p>
          </div>

          {/* بطاقة الأسعار */}
          <div className="card p-8 border-t-4 border-primary-500 hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-6 text-primary-500 font-bold text-xl">
              $
            </div>
            <h3 className="text-xl font-bold text-secondary-800 mb-4">Clear, Honest Pricing</h3>
            <p className="text-gray-600 leading-relaxed">
              Lessons start at $8 per hour, and drop to $6 per hour for one-to-one bookings of ten or more hours a month or for group classes. You can{' '}
              <Link to="/pricing" className="text-primary-600 font-semibold underline underline-offset-2">
                see the full pricing
              </Link>{' '}
              before you book.
            </p>
          </div>

          {/* بطاقة الجودة */}
          <div className="card p-8 border-t-4 border-blue-600 hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 font-bold text-xl">
              ✓
            </div>
            <h3 className="text-xl font-bold text-secondary-800 mb-4">Trust and Quality</h3>
            <p className="text-gray-600 leading-relaxed">
              Teaching Quran is a sacred trust (amanah). We publish each teacher's Ijazah details and authorising sheikh so families can check the credential behind the claim instead of taking it on faith.
            </p>
          </div>
        </div>
      </section>

      {/* معلمونا */}
      <section className="mb-16 md:mb-20 bg-gradient-to-r from-secondary-50/70 to-amber-50/70 p-8 md:p-12 rounded-2xl border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="section-title">ABOUT OUR QURAN TEACHERS</h2>
          <div className="accent-bar"></div>
        </div>

        <p className="text-lg text-gray-700 text-center mb-10 max-w-4xl mx-auto leading-relaxed">
          Our teachers are based in Cairo, Egypt, and teach live online in English and Arabic. Each public profile lists the teacher's Ijazah, its narration and the sheikh who authorised it, and one of our teachers is also a graduate of Al-Azhar University. You can{' '}
          <Link to="/teachers" className="text-primary-600 font-semibold underline underline-offset-2">
            read the teacher profiles and see the documents
          </Link>
          .
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-gray-700 bg-white/60 p-4 rounded-xl shadow-sm border border-white/80">
              <span className="text-primary-500 font-bold text-lg">✓</span>
              <span className="font-medium">Ijazah credentials published for every teacher</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700 bg-white/60 p-4 rounded-xl shadow-sm border border-white/80">
              <span className="text-primary-500 font-bold text-lg">✓</span>
              <span className="font-medium">Specialized in teaching non-native speakers</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-gray-700 bg-white/60 p-4 rounded-xl shadow-sm border border-white/80">
              <span className="text-primary-500 font-bold text-lg">✓</span>
              <span className="font-medium">Authentic Sunni methodology (Ahl al-Sunnah)</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700 bg-white/60 p-4 rounded-xl shadow-sm border border-white/80">
              <span className="text-primary-500 font-bold text-lg">✓</span>
              <span className="font-medium">Structured learning from basics to mastery</span>
            </div>
          </div>
        </div>

        <p className="text-center mt-10 text-gray-600 italic font-semibold text-lg">
          "With Nebras Academy, you won't just learn Quran—you'll learn it from a teacher whose chain of transmission you can trace."
        </p>
      </section>

      {/* كيفية التسجيل */}
      <section className="card-elevated p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="section-title">HOW TO SIGN UP</h2>
          <div className="accent-bar"></div>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-700 text-lg mb-10 leading-relaxed">
            Begin your Quranic journey in three simple steps:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12 relative">
            <div className="bg-secondary-50/50 p-6 rounded-xl border border-secondary-100 hover:shadow-md transition-shadow">
              <div className="bg-secondary-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">1</div>
              <p className="font-semibold text-secondary-800">Create Account</p>
            </div>
            <div className="bg-primary-50/50 p-6 rounded-xl border border-primary-100 hover:shadow-md transition-shadow">
              <div className="bg-primary-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">2</div>
              <p className="font-semibold text-primary-600">Schedule Free Evaluation</p>
            </div>
            <div className="bg-secondary-50/50 p-6 rounded-xl border border-secondary-100 hover:shadow-md transition-shadow">
              <div className="bg-secondary-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">3</div>
              <p className="font-semibold text-secondary-800">Start Classes</p>
            </div>
          </div>

          <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
            We offer flexible scheduling around the clock to fit a school day, a work shift or a time zone outside Egypt.
          </p>

          <Link
            to="/trial"
            className="btn-primary btn-pill px-8 py-3 text-lg font-semibold inline-block mb-4"
          >
            Book Your Free Trial
          </Link>
          <p className="text-sm text-gray-600 mb-10">
            New to online Quran lessons? Start with{' '}
            <Link to="/online-quran-classes-usa" className="font-semibold text-primary-600 underline underline-offset-2">
              how our online Quran classes work
            </Link>{' '}
            or read the{' '}
            <Link to="/learn-quran-online-usa" className="font-semibold text-primary-600 underline underline-offset-2">
              beginner's guide to learning Quran online
            </Link>
            .
          </p>

          <blockquote className="text-gray-600 italic border-l-4 border-primary-500 pl-6 py-3 bg-gray-50 rounded-r-xl max-w-lg mx-auto text-left leading-relaxed">
            "The best among you (Muslims) are those who learn the Quran and teach it."
            <footer className="font-bold text-secondary-700 mt-2 not-italic text-sm">— Hadith: Bukhari</footer>
          </blockquote>
        </div>
      </section>
    </div>
  )
}

export default About
