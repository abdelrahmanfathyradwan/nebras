import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BookingModal from '../components/BookingModal';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const About = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Nebras Academy",
    "description": "Nebras Academy is your premier source of Quranic education with over a decade of excellence in online Quran education.",
    "url": "https://www.nebrasacadmy.com/about"
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 page-enter">
      <SEO 
        title="About Us" 
        description="Learn about Nebras Academy, our expert Quran teachers from Al-Azhar, and our mission to provide the best online Quran education." 
        canonical="/about"
      />
      <StructuredData data={aboutSchema} />
      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      
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
                Our meticulously designed courses help you achieve your Quranic goals, whether mastering Tajweed, memorizing the entire Quran, or obtaining Ijaazah. With qualified male and female teachers, we cater to both children and adults.
              </p>
            </div>
            <div className="bg-secondary-50/50 p-6 rounded-xl border-l-4 border-secondary-600 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                Online Quran learning with Nebras Academy eliminates logistical challenges while ensuring safety for you and your family. We help establish consistent Quranic study habits and guide you toward achieving your spiritual objectives.
              </p>
            </div>
          </div>

          <p className="text-center mt-10 text-gray-500 font-medium text-sm tracking-wide uppercase">
            Nebras Academy is a registered entity in Egypt and the USA.
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
              10+
            </div>
            <h3 className="text-xl font-bold text-secondary-800 mb-4">Proven Experience</h3>
            <p className="text-gray-600 leading-relaxed">
              With over a decade of excellence in online Quran education, Nebras Academy stands as a trusted leader. Our certified teachers hold Ijaazah in multiple Qiraa'at—a standard many platforms cannot match.
            </p>
          </div>

          {/* بطاقة الأسعار */}
          <div className="card p-8 border-t-4 border-primary-500 hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-6 text-primary-500 font-bold text-xl">
              $
            </div>
            <h3 className="text-xl font-bold text-secondary-800 mb-4">Unmatched Affordability</h3>
            <p className="text-gray-600 leading-relaxed">
              We make premium Quran education accessible. Our one-on-one classes start at just $10/hour—combining exceptional quality with remarkable value.
            </p>
          </div>

          {/* بطاقة الجودة */}
          <div className="card p-8 border-t-4 border-blue-600 hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 font-bold text-xl">
              ✓
            </div>
            <h3 className="text-xl font-bold text-secondary-800 mb-4">Trust and Quality</h3>
            <p className="text-gray-600 leading-relaxed">
              Teaching Quran is a sacred trust (amanah). Every Nebras Academy teacher undergoes rigorous vetting and training, earning global recognition for sincerity, transparency, and results.
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
          At Nebras Academy, we deliver authentic Quranic education through distinguished scholars from Egypt. Each instructor is an Al-Azhar University graduate or equivalent, bringing profound knowledge and decades of collective experience.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-gray-700 bg-white/60 p-4 rounded-xl shadow-sm border border-white/80">
              <span className="text-primary-500 font-bold text-lg">✓</span>
              <span className="font-medium">Al-Azhar trained scholars with Ijaazah certification</span>
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
          "With Nebras Academy, you won't just learn Quran—you'll cherish the journey with teachers who truly understand your path."
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
            We offer flexible scheduling with male and female tutors available 24/7 to accommodate your routine.
          </p>

          <button 
            onClick={() => setIsBookingOpen(true)}
            className="btn-primary btn-pill px-8 py-3 text-lg font-semibold inline-block mb-10"
          >
            Book Your Free Trial
          </button>

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
