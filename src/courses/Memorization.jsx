import { Link } from 'react-router-dom';

const Memorization = () => {
  return (
    <div className="mx-auto">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-purple-800/60 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative pl-6 border-l-4 border-amber-400">
                Quran Memorization Course
              </h1>
              <blockquote className="text-lg text-purple-100 mb-6 italic">
                "And We have certainly made the Quran easy for remembrance, so is there any who will remember?"
                <footer className="mt-2 not-italic text-amber-200">Surah Al-Qamar (54:17)</footer>
              </blockquote>
              <div className="flex flex-wrap gap-4">
                <span className="bg-purple-600/90 text-white px-4 py-2 rounded-full text-sm flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  Male & Female Teachers
                </span>
                <span className="bg-amber-500/90 text-white px-4 py-2 rounded-full text-sm flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  For Kids & Adults
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-800">
                Home
              </Link>
            </li>
            <li className="inline-flex items-center">
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <Link to="/courses" className="ml-1 text-sm font-medium text-purple-600 hover:text-purple-800 md:ml-2">
                Courses
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Quran Memorization</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {/* Introduction */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">About This Quran Memorization Course</h2>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  This course for memorizing the Quran is designed to enable you to memorize and learn the Quran with Tajweed for sisters and brothers, kids, teens and adults.
                </p>
                <p className="mb-4">
                  Your teacher will first make sure that your recitation of the Quran is correct and that you are reciting it with the Tajweed. It is important to master the recitation of the Quran before starting the full memorization of the Quran. This, in turn, will start to help you to memorize the Quran easily.
                </p>
                <p className="mb-4">
                  This Quran Hifz program is one of the best as the Quran teachers who are assigned to teach the Quran are all highly qualified from Al Azhar university, known in its great history with teaching the Quran as well as other well-known Quran institutes.
                </p>
                <p className="mb-4">
                  Nebras Academy teachers are highly qualified for teaching the Quran to any ages, teachers are dedicated and trained to teach Quran with the highest skills. We understand that memorizing the Quran is not an easy job, or one that is fast, but we are here in Nebras Academy to teach you Quran online successfully.
                </p>
              </div>
            </div>

            {/* Course Outline */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">What You Will Learn</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                  <h3 className="font-semibold text-purple-800 mb-2">Memorization</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Memorize the whole Quran</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Effective memorization techniques</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                  <h3 className="font-semibold text-amber-800 mb-2">Tajweed Mastery</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span>Studying the right Makharej (points of articulation)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span>Understanding Sifaat (letter characteristics)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-blue-800 mb-2">Recitation</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Applying the rules of Tajweed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Proper way of reciting the Quran</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-800 mb-2">Understanding</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Learning meanings of verses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Practical application in daily life</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">Goals of This Course</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-purple-100 rounded-full p-1">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">
                    To memorize the Holy Quran with proper Tajweed
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-purple-100 rounded-full p-1">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">
                    To master reading Quran and recitation of the whole Quran including the proper way of recitation
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-purple-100 rounded-full p-1">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Fixing the Makharej and pronouncing each letter from its right Makhraj (point of articulation)
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-purple-100 rounded-full p-1">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Understand Quran, and not just memorize it - focusing on its application in your day to day life
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-purple-800 mb-4">Course Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">For Ages</h4>
                  <p className="mt-1 text-gray-700">Kids (5+) & Adults</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Duration</h4>
                  <p className="mt-1 text-gray-700">Flexible (2-5 years depending on pace)</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Class Type</h4>
                  <p className="mt-1 text-gray-700">One-on-One recommended</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Price</h4>
                  <p className="mt-1 text-gray-700">$15/hour (individual)</p>
                  <p className="text-sm text-gray-500">Discounts available for long-term commitment</p>
                </div>
              </div>
               <a
              href='https://wa.me/201146162847?text=Peace%20be%20upon%20you%20and%20God%27s%20mercy%20and%20blessings.%20We%20are%20the%20Nebras%20team%20for%20Quran%20education.%20How%20can%20we%20help%20you%3F'
                  target='_blank'
                  rel='noopener noreferrer'
              >
                <button 
                className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-colors">
                  Enroll Now
                </button>
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-purple-800 mb-4">Teaching Methodology</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Personalized memorization plan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Daily revision system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Regular testing and evaluation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Understanding before memorization</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-purple-800 mb-4">Why Choose Nebras Academy</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Al-Azhar certified teachers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Proven memorization techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Flexible scheduling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Focus on understanding and application</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-purple-800 mb-4">Related Courses</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/courses/tajweed" className="text-purple-600 hover:text-purple-800 hover:underline">
                    Tajweed Mastery Course
                  </Link>
                </li>
                <li>
                  <Link to="/courses/recitation" className="text-purple-600 hover:text-purple-800 hover:underline">
                    Quran Recitation Course
                  </Link>
                </li>
                <li>
                  <Link to="/courses/arabic" className="text-purple-600 hover:text-purple-800 hover:underline">
                    Arabic Language Course
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memorization;