import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
   <div className="max-w-6xl mx-auto px-4 py-12">
  {/* القسم الرئيسي */}
  <section className="mb-16">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-secondary-700 mb-6">WHO WE ARE</h1>
      <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
    </div>

    <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
      <h2 className="text-3xl font-bold text-secondary-800 mb-6 text-center">About Nebras Academy</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Nebras Academy is your premier source of Quranic education. From foundational Quran reading to advanced memorization, we provide comprehensive tutoring services covering all aspects of the Quran.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-amber-500">
          <p className="text-gray-700 leading-relaxed">
            Our meticulously designed courses help you achieve your Quranic goals, whether mastering Tajweed, memorizing the entire Quran, or obtaining Ijaazah. With qualified male and female teachers, we cater to both children and adults.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary-600">
          <p className="text-gray-700 leading-relaxed">
            Online Quran learning with Nebras Academy eliminates logistical challenges while ensuring safety for you and your family. We help establish consistent Quranic study habits and guide you toward achieving your spiritual objectives.
          </p>
        </div>
      </div>

      <p className="text-center mt-8 text-gray-600 font-medium">
        Nebras Academy is a registered entity in Egypt and the USA.
      </p>
    </div>
  </section>

  {/* لماذا تختارنا؟ */}
  <section className="mb-16">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-secondary-700 mb-6">WHY CHOOSE NEBRAS ACADEMY?</h1>
      <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* بطاقة الخبرة */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-secondary-600">
        <h3 className="text-xl font-bold text-secondary-800 mb-4">Proven Experience</h3>
        <p className="text-gray-700">
          With over a decade of excellence in online Quran education, Nebras Academy stands as a trusted leader. Our certified teachers hold Ijaazah in multiple Qiraa'at—a standard many platforms cannot match.
        </p>
      </div>

      {/* بطاقة الأسعار */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-amber-500">
        <h3 className="text-xl font-bold text-secondary-800 mb-4">Unmatched Affordability</h3>
        <p className="text-gray-700">
          We make premium Quran education accessible. Our one-on-one classes start at just $10/hour—combining exceptional quality with remarkable value.
        </p>
      </div>

      {/* بطاقة الجودة */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
        <h3 className="text-xl font-bold text-secondary-800 mb-4">Trust and Quality—Guaranteed</h3>
        <p className="text-gray-700">
          Teaching Quran is a sacred trust (amanah). Every Nebras Academy teacher undergoes rigorous vetting and training, earning global recognition for sincerity, transparency, and results.
        </p>
      </div>
    </div>
  </section>

  {/* معلمونا */}
  <section className="mb-16 bg-gradient-to-r from-secondary-50 to-amber-50 p-8 rounded-xl">
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-secondary-700 mb-6">ABOUT OUR QURAN TEACHERS</h1>
      <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
    </div>

    <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto leading-relaxed">
      At Nebras Academy, we deliver authentic Quranic education through distinguished scholars from Egypt. Each instructor is an Al-Azhar University graduate or equivalent, bringing profound knowledge and decades of collective experience.
    </p>

    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <ul className="space-y-4 text-gray-700">
        <li className="flex items-start">
          <span className="text-amber-500 mr-2">✓</span>
          <span>Al-Azhar trained scholars with Ijaazah certification</span>
        </li>
        <li className="flex items-start">
          <span className="text-amber-500 mr-2">✓</span>
          <span>Specialized in teaching non-native speakers</span>
        </li>
      </ul>
      <ul className="space-y-4 text-gray-700">
        <li className="flex items-start">
          <span className="text-amber-500 mr-2">✓</span>
          <span>Authentic Sunni methodology (Ahl al-Sunnah wal-Jama'ah)</span>
        </li>
        <li className="flex items-start">
          <span className="text-amber-500 mr-2">✓</span>
          <span>Structured learning from basics to mastery</span>
        </li>
      </ul>
    </div>

    <p className="text-center mt-8 text-gray-600 italic font-medium">
      With Nebras Academy, you won't just learn Quran—you'll cherish the journey with teachers who truly understand your path.
    </p>
  </section>

  {/* كيفية التسجيل */}
  <section className="bg-white rounded-xl shadow-lg p-8">
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-secondary-700 mb-6">HOW TO SIGN UP</h1>
      <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
    </div>

    <div className="max-w-2xl mx-auto text-center">
      <p className="text-gray-700 text-lg mb-8 leading-relaxed">
        Begin your Quranic journey in three simple steps:
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-secondary-50 p-4 rounded-lg">
          <div className="text-secondary-700 font-bold text-2xl mb-2">1</div>
          <p>Create your student account</p>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg">
          <div className="text-amber-600 font-bold text-2xl mb-2">2</div>
          <p>Schedule free evaluation</p>
        </div>
        <div className="bg-secondary-50 p-4 rounded-lg">
          <div className="text-secondary-700 font-bold text-2xl mb-2">3</div>
          <p>Start your classes</p>
        </div>
      </div>

      <p className="text-gray-700 mb-8">
        We offer flexible scheduling with male and female tutors available 24/7 to accommodate your routine.
      </p>

      <Link to="https://wa.me/201146162847" className="bg-secondary-600 hover:bg-secondary-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors">
        Sign Up Here
      </Link>

      <blockquote className="mt-10 text-gray-600 italic border-l-4 border-amber-500 pl-4 py-2">
        "The best among you (Muslims) are those who learn the Quran and teach it."
        <br />
        <span className="font-semibold">Hadith: Bukhari</span>
      </blockquote>
    </div>
  </section>
</div>
  )
}

export default About
