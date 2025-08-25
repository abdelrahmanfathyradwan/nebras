import { Link } from 'react-router-dom';

const Reading = () => {
  return (
    <div className="mx-auto">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/80 to-secondary-800/60 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative pl-6 border-l-4 border-amber-400">
                Quran Reading (Noor Al Bayan)
              </h1>
              <p className="text-lg text-secondary-100 mb-6">
                Master Quranic reading using the renowned Noor Al Bayan method with native Arabic instructors.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-secondary-600/90 text-white px-4 py-2 rounded-full text-sm flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  Male & Female Teachers
                </span>
                <span className="bg-amber-500/90 text-white px-4 py-2 rounded-full text-sm flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  All Age Groups
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
              <Link to="/" className="inline-flex items-center text-sm font-medium text-secondary-600 hover:text-secondary-800">
                Home
              </Link>
            </li>
            <li className="inline-flex items-center">
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <Link to="/courses" className="ml-1 text-sm font-medium text-secondary-600 hover:text-secondary-800 md:ml-2">
                Courses
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Noor Al Bayan</span>
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
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">Master Quranic Reading</h2>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  The first step in learning the Quran is mastering proper reading. The Noor Al Bayan method, used by our qualified Quran teachers, is one of the most effective approaches for Quranic reading.
                </p>
                <p className="mb-4">
                  Our instructors focus on ensuring students can accurately read Quranic letters and words, pronounce each letter correctly, and use the proper articulation points (Makharij) for each sound.
                </p>
                <p className="mb-4">
                  From pronunciation to fluency, Quran reading involves many intricacies. With Nebras Academy, you'll learn proven techniques to read Allah's words correctly and confidently.
                </p>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">What You Will Learn</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-secondary-50 p-4 rounded-lg border-l-4 border-secondary-600">
                  <h3 className="font-semibold text-secondary-800 mb-2">Foundational Skills</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-secondary-600 mr-2">•</span>
                      <span>Arabic letter recognition</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-600 mr-2">•</span>
                      <span>Proper pronunciation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-600 mr-2">•</span>
                      <span>Letter connection rules</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                  <h3 className="font-semibold text-amber-800 mb-2">Quranic Practice</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span>Reading Quranic verses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span>Practical application</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span>Progressive exercises</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">Course Outcomes</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-secondary-100 rounded-full p-1">
                      <svg className="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Read Quran fluently and prepare for Khatma (complete reading)
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-secondary-100 rounded-full p-1">
                      <svg className="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Correct your articulation points (Makharij) for each letter
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-secondary-100 rounded-full p-1">
                      <svg className="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Significantly improve your Arabic pronunciation
                  </p>
                </div>
              </div>
            </div>

            {/* Nebras Advantage */}
            <div className="bg-white rounded-xl shadow-md p-6 mt-8">
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">Why Choose Nebras Academy?</h2>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  If you've ever worried that learning Quranic reading is too difficult, our Noor Al Bayan course will change your perspective. Nebras Academy makes Quranic education accessible to everyone.
                </p>
                <p className="mb-4">
                  Our experienced teachers emphasize proper Arabic pronunciation and help you develop a strong foundation for Quranic reading. We make the process engaging and effective for students of all ages.
                </p>
                <p>
                  Begin your Quranic journey today with Nebras Academy - your trusted partner in Quranic education.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-secondary-800 mb-4">Course Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Suitable For</h4>
                  <p className="mt-1 text-gray-700">Beginners of all ages</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Duration</h4>
                  <p className="mt-1 text-gray-700">3-9 months (flexible pace)</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Class Type</h4>
                  <p className="mt-1 text-gray-700">One-on-One or Small Groups</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Price</h4>
                  <p className="mt-1 text-gray-700">$10/hour (individual)</p>
                  <p className="text-sm text-gray-500">$6/hour per student (group)</p>
                </div>
              </div>
              <a
              href='https://wa.me/201146162847 '
                  target='_blank'
                  rel='noopener noreferrer'
              >
                <button 
                className="w-full mt-6 bg-secondary-600 hover:bg-secondary-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-colors">
                  Enroll Now
                </button>
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-secondary-800 mb-4">Noor Al Bayan Method</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">•</span>
                  <span>Proven teaching methodology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">•</span>
                  <span>Gradual progression from letters to words</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">•</span>
                  <span>Focus on proper articulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">•</span>
                  <span>Quranic examples from the first lesson</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-secondary-800 mb-4">Related Courses</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/courses/tajweed" className="text-secondary-600 hover:text-secondary-800 hover:underline">
                    Quran Tajweed Course
                  </Link>
                </li>
                <li>
                  <Link to="/courses/arabic" className="text-secondary-600 hover:text-secondary-800 hover:underline">
                    Arabic Language Course
                  </Link>
                </li>
                <li>
                  <Link to="/courses/memorization" className="text-secondary-600 hover:text-secondary-800 hover:underline">
                    Quran Memorization
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

export default Reading;