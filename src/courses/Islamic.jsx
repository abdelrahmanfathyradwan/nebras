import { Link } from 'react-router-dom';

const Islamic = () => {
  return (
    <div className="mx-auto">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/60 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative pl-6 border-l-4 border-amber-400">
                Islamic Studies Kids Course
              </h1>
              <blockquote className="text-lg text-green-100 mb-6 italic">
                "And remind, for indeed, the reminder benefits the believers."
                <footer className="mt-2 not-italic text-amber-200">Surah Adh-Dhariyat 51:55</footer>
              </blockquote>
              <div className="flex flex-wrap gap-4">
                <span className="bg-green-600/90 text-white px-4 py-2 rounded-full text-sm flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  Male & Female Teachers
                </span>
                <span className="bg-amber-500/90 text-white px-4 py-2 rounded-full text-sm flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  Kids Course (Ages 5-12)
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
              <Link to="/" className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-800">
                Home
              </Link>
            </li>
            <li className="inline-flex items-center">
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <Link to="/courses" className="ml-1 text-sm font-medium text-green-600 hover:text-green-800 md:ml-2">
                Courses
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Islamic Studies for Kids</span>
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
              <h2 className="text-2xl font-bold text-green-800 mb-4">About This Course</h2>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  Nebras Academy's Islamic Studies course focuses on increasing your child's knowledge of the Deen and History of Islam. We've made it easy and convenient for parents to set a solid foundation of Islamic knowledge for their children.
                </p>
                <p className="mb-4">
                  Starting from the basics and continuing through all aspects of Islamic Studies, your child will establish a foundation of Islam and build upon it, increasing their love for Islam and desire to learn more about the Islamic Religion.
                </p>
                <p className="mb-4">
                  Our child-friendly approach makes learning about Islam engaging and meaningful, with experienced teachers who know how to connect with young minds.
                </p>
              </div>
            </div>

            {/* Course Outline */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-green-800 mb-4">What Your Child Will Learn</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                  <h3 className="font-semibold text-green-800 mb-2">Islamic Manners</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Respect for parents and elders</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Cleanliness and hygiene</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Good behavior in daily life</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                  <h3 className="font-semibold text-amber-800 mb-2">Daily Duas</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span>Morning and evening supplications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span>Prayer before eating</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span>Duas for various occasions</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-blue-800 mb-2">Prophet's Teachings</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Selected Hadith of the Prophet (SAW)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Sunnah practices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Moral lessons from Hadith</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                  <h3 className="font-semibold text-purple-800 mb-2">Islamic History</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Stories of the Prophets</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Life of Prophet Muhammad (SAW)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Companions of the Prophet</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Course Benefits</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-green-100 rounded-full p-1">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Builds a strong Islamic identity and love for the religion from an early age
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-green-100 rounded-full p-1">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Teaches practical Islamic knowledge for daily life
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-green-100 rounded-full p-1">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Develops moral character based on Islamic values
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-green-100 rounded-full p-1">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Provides age-appropriate understanding of Islamic beliefs and practices
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-green-800 mb-4">Course Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Recommended Age</h4>
                  <p className="mt-1 text-gray-700">5-12 years</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Duration</h4>
                  <p className="mt-1 text-gray-700">6-12 months (flexible pace)</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Class Type</h4>
                  <p className="mt-1 text-gray-700">One-on-One or Small Groups (2-4 students)</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Price</h4>
                  <p className="mt-1 text-gray-700">$10/hour (individual)</p>
                  <p className="text-sm text-gray-500">$6/hour per student (group)</p>
                </div>
              </div>
               <a
              href='https://wa.me/201146162847?text=Peace%20be%20upon%20you%20and%20God%27s%20mercy%20and%20blessings.%20We%20are%20the%20Nebras%20team%20for%20Quran%20education.%20How%20can%20we%20help%20you%3F'
                  target='_blank'
                  rel='noopener noreferrer'
              >
                <button 
                className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-colors">
                  Enroll your Child
                </button>
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-green-800 mb-4">Teaching Methodology</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Interactive storytelling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Visual learning aids and Islamic art</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Role-playing Islamic scenarios</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Reward system for memorization</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-green-800 mb-4">Related Courses</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/courses/ArabicKids" className="text-green-600 hover:text-green-800 hover:underline">
                    Arabic Language for Kids
                  </Link>
                </li>
                <li>
                  <Link to="/courses/memorization" className="text-green-600 hover:text-green-800 hover:underline">
                    Quran Memorization for Kids
                  </Link>
                </li>
                <li>
                  <Link to="/courses/islamic" className="text-green-600 hover:text-green-800 hover:underline">
                    Islamic Studies for Adults
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

export default Islamic;