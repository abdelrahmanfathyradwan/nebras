import { Link } from 'react-router-dom';
import { courses } from '../data/data';
import SEO from '../components/SEO';
  
const Courses = () => {
  return (
    <div className="max-w-full mx-auto page-enter">
      <SEO 
        title="Our Courses" 
        description="Explore our wide range of Quran, Arabic, and Islamic Studies courses designed for all ages and skill levels." 
        canonical="/courses"
      />
      {/* Hero Section */}
      <div className="relative w-full h-[240px] overflow-hidden">
        <img 
          src="/images/celebrateEid.jpg" 
          alt="Courses Banner" 
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-secondary-900/80 flex items-center justify-start pl-6 md:pl-16">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white relative pl-6 border-l-4 border-primary-500">
              Courses
            </h1>
            <p className="text-gray-300 mt-2 pl-6 max-w-xl">
              Discover customized learning pathways for Quran, Arabic, and Islamic Studies.
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100/80 border-b border-gray-200/50 py-4 px-6 md:px-16">
        <div className="max-w-7xl mx-auto w-full">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="inline-flex items-center text-sm font-medium text-secondary-600 hover:text-primary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Courses</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link 
              to={course.path} 
              key={course.id} 
              className="group bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="h-52 overflow-hidden relative">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-grow flex items-center justify-between">
                <h3 className="text-lg font-bold text-secondary-800 group-hover:text-primary-500 transition-colors duration-300">
                  {course.title}
                </h3>
                <span className="text-primary-500 font-bold ml-4 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
