import { Link } from 'react-router-dom';

const MemorizingJuzAmma = () => {
  return (
    <div className="max-w-full mx-auto">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/60 flex items-center w-full">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative pl-6 border-l-4 border-amber-400">
                Memorizing Juz' Amma (Part 30)
              </h1>
              <p className="text-lg text-green-100 mb-6">
                Master the short Surahs commonly recited in daily prayers with our specialized memorization program.
              </p>
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
                  Kids & Adults Courses
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
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Juz' Amma</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Course Description */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Course Description</h2>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  The Memorizing Juz' Amma course is designed to help students—especially children—memorize the short Surahs from the 30th part of the Quran, which are commonly recited in daily prayers.
                </p>
                <p className="mb-4">
                  This program builds a strong foundation for Quran learning and is ideal for beginners. Our systematic approach combines traditional memorization techniques with modern teaching methods to ensure effective and lasting retention.
                </p>
                <p className="mb-4">
                  Students will learn proper pronunciation (Tajweed) while memorizing, enabling them to recite these Surahs correctly in their prayers. The course includes regular revision sessions to strengthen memorization.
                </p>
              </div>
            </div>

            {/* Course Highlights */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Course Highlights</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-green-100 rounded-full p-1">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-semibold">Comprehensive Memorization:</span> Cover all Surahs from Juz' Amma with proper Tajweed
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-green-100 rounded-full p-1">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-semibold">Age-Appropriate Learning:</span> Special teaching methods for children and adults
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-green-100 rounded-full p-1">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-semibold">Flexible Scheduling:</span> Choose timings that work for you
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-green-800 mb-4">Course Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Duration</h4>
                  <p className="mt-1 text-gray-700">3-6 months (flexible)</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Class Type</h4>
                  <p className="mt-1 text-gray-700">One-on-One or Small Groups</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Age Group</h4>
                  <p className="mt-1 text-gray-700">5+ years (Kids & Adults)</p>
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
                  Enroll Now
                </button>
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-green-800 mb-4">Related Courses</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/courses/reading" className="text-green-600 hover:text-green-800 hover:underline">
                    Quran Reading (Noor Al Bayan)
                  </Link>
                </li>
                <li>
                  <Link to="/courses/tajweed" className="text-green-600 hover:text-green-800 hover:underline">
                    Quran Tajweed and Recitation
                  </Link>
                </li>
                <li>
                  <Link to="/courses/ArabicKids" className="text-green-600 hover:text-green-800 hover:underline">
                    Arabic Language Kids Course
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

export default MemorizingJuzAmma;