import { Link } from 'react-router-dom';
import { courses } from '../data/data';
  
 const Courses = () => {

  return (
    <div className="max-w-full mx-auto">
      {/* Hero Section */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <img 
          src="/images/celebrateEid.jpg" 
          alt="Courses Banner" 
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 flex items-center justify-start pl-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white relative pl-4 border-l-4 border-secondary-500">
            Courses
          </h1>
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

      {/* Courses Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link 
              to={course.path} 
              key={course.id} 
              className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-500 group-hover:text-primary-700 transition-colors duration-200">
                  {course.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
