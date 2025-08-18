import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaEnvelope, FaChevronDown, FaChevronUp, FaBars } from "react-icons/fa"

const Navbar = () => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const coursesRef = useRef(null)
  const moreRef = useRef(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (coursesRef.current && !coursesRef.current.contains(event.target)) {
        setIsCoursesOpen(false)
      }
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setIsMoreOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Toggle dropdowns on click
  const toggleCourses = () => setIsCoursesOpen(!isCoursesOpen)
  const toggleMore = () => setIsMoreOpen(!isMoreOpen)

  return (
    <div className='font-sans sticky top-0 z-20'>
      {/* Combined Navbar Container */}
      <div className='flex flex-col md:flex-row items-stretch'>
        {/* Academy Logo - Beside both navbars */}
        <Link to="/" className='hidden md:flex items-center justify-center'>
          <img
            src='/Logo.jpg'
            alt='Academy Logo'
            className='h-[133px] w-[100%] hidden md:flex items-center shadow-lg justify-center '
          />
        </Link>

        {/* Navbar Content */}
        <div className='flex-grow'>
          {/* Upper Navbar */}
          <div className='bg-islamic-900 text-white py-2 px-4'>
            <div className='container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center'>
              {/* Contact Info - Centered */}
              <div className='flex flex-wrap justify-center gap-4 md:gap-8 my-2 md:my-0 lg:ml-[200px] lg:gap-[80px]'>
                <span className='flex items-center text-sm'>
                  <img
                    src='https://flagcdn.com/w20/eg.png' // علم مصر من flagcdn
                    alt='Egypt Flag'
                    className='w-5 h-5 mr-1 rounded-full'
                  />
                  <span dir='ltr'>+20 114 616 2847</span>
                </span>
                <span className='flex items-center text-sm'>
                  <FaEnvelope className='mr-1' />
                  nebrasacademey2025@gmail.com
                </span>
              </div>

              {/* Login Button */}
                <a
                  href='https://wa.me/201146162847?text=Peace%20be%20upon%20you%20and%20God%27s%20mercy%20and%20blessings.%20We%20are%20the%20Nebras%20team%20for%20Quran%20education.%20How%20can%20we%20help%20you%3F'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded text-sm transition-colors'
                >
                    Login Student
                </a>
            </div>
          </div>

          {/* Lower Navbar */}
          <div className='bg-white shadow-md py-8 px-4'>
            <div className='container mx-auto flex justify-center items-center'>
              {/* Mobile Menu Button */}
              <button
                className='md:hidden text-gray-700 focus:outline-none'
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <FaBars className='h-6 w-6' />
              </button>

              {/* Desktop Navigation */}
              <nav className='hidden md:flex space-x-8'>
                {/* Courses Dropdown */}
                <div ref={coursesRef} className='relative'>
                  <button
                    className='flex items-center text-gray-700 hover:text-islamic font-medium focus:outline-none'
                    onClick={toggleCourses}
                  >
                    Courses
                    {isCoursesOpen ? (
                      <FaChevronUp className='ml-1' />
                    ) : (
                      <FaChevronDown className='ml-1' />
                    )}
                  </button>

                  {isCoursesOpen && (
                    <div className='absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200'>
                      <Link
                        to='/courses/MemorizingJuzAmma'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-islamic-50 hover:text-islamic'
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Memorization Juz' Amma (Part 30)
                      </Link>
                      <Link
                        to='/courses/tajweed'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-islamic-50 hover:text-islamic'
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Quran Tajweed and Recitation
                      </Link>
                      <Link
                        to='/courses/reading'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-islamic-50 hover:text-islamic'
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Quran Reading (Noor Al Bayan)
                      </Link>
                      <Link
                        to='/courses/recitation'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-islamic-50 hover:text-islamic'
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Quran Recitation
                      </Link>
                      <Link
                        to='/courses/memorization'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-islamic-50 hover:text-islamic'
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Quran Memorization
                      </Link>
                      <Link
                        to='/courses/ArabicKids'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-islamic-50 hover:text-islamic'
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Arabic Language Kids Course
                      </Link>
                      <Link
                        to='/courses/arabic'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-islamic-50 hover:text-islamic'
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Arabic Language Course
                      </Link>
                      <Link
                        to='/courses/Islamic'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-islamic-50 hover:text-islamic'
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Islamic Studies Course
                      </Link>
                    </div>
                  )}
                </div>
                <Link to='/pricing' className='text-gray-700 hover:text-islamic font-medium'>
                  Pricing
                </Link>
                <Link to='/blog' className='text-gray-700 hover:text-islamic font-medium'>
                  Blog
                </Link>
                <Link to='/about' className='text-gray-700 hover:text-islamic font-medium'>
                  About
                </Link>

                {/* More Dropdown */}
                <div ref={moreRef} className='relative'>
                  <button
                    className='flex items-center text-gray-700 hover:text-islamic font-medium focus:outline-none'
                    onClick={toggleMore}
                  >
                    More
                    {isMoreOpen ? (
                      <FaChevronUp className='ml-1' />
                    ) : (
                      <FaChevronDown className='ml-1' />
                    )}
                  </button>

                  {isMoreOpen && (
                    <div className='absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200'>
                      <Link
                        to='/faqs'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-islamic-50 hover:text-islamic'
                        onClick={() => setIsMoreOpen(false)}
                      >
                        FAQs
                      </Link>
                      {/* <Link
                        to='/applyForJop'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-islamic-50 hover:text-islamic'
                        onClick={() => setIsMoreOpen(false)}
                      >
                        Apply for a job
                      </Link> */}
                      <Link
                        to='/contact'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-islamic-50 hover:text-islamic'
                        onClick={() => setIsMoreOpen(false)}
                      >
                        Contact
                      </Link>
                    </div>
                  )}
                </div>
              </nav>

              {/* Mobile Logo - Only visible on mobile */}
              <div className='md:hidden'>
                <img
                  src='/Logo.jpg'
                  alt='Academy Logo'
                  className='h-[50px] w-[50px] rounded-full ml-[260px]'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden bg-white shadow-lg absolute w-full z-50'>
          <div className='px-4 py-2 space-y-2'>
            {/* Courses Dropdown */}
            <div className='border-b border-gray-200 pb-2'>
              <button
                className='flex items-center justify-between w-full text-gray-700 py-2 focus:outline-none'
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
              >
                <span>Courses</span>
                {isCoursesOpen ? (
                  <FaChevronUp className='ml-1' />
                ) : (
                  <FaChevronDown className='ml-1' />
                )}
              </button>
              {isCoursesOpen && (
                <div className='pl-4 space-y-2 mt-2'>
                  <Link
                    to='/courses/tajweed'
                    className='block py-1 text-gray-700 hover:text-islamic'
                    onClick={() => setIsCoursesOpen(false)}
                  >
                    Quran Tajweed and Recitation
                  </Link>
                  <Link
                    to='/courses/reading'
                    className='block py-1 text-gray-700 hover:text-islamic'
                    onClick={() => setIsCoursesOpen(false)}
                  >
                    Quran Reading (Noor Al Bayan)
                  </Link>
                  <Link
                    to='/courses/recitation'
                    className='block py-1 text-gray-700 hover:text-islamic'
                    onClick={() => setIsCoursesOpen(false)}
                  >
                    Quran Recitation
                  </Link>
                  <Link
                    to='/courses/memorization'
                    className='block py-1 text-gray-700 hover:text-islamic'
                    onClick={() => setIsCoursesOpen(false)}
                  >
                    Quran Memorization
                  </Link>
                  <Link
                    to='/courses/arabic'
                    className='block py-1 text-gray-700 hover:text-islamic'
                    onClick={() => setIsCoursesOpen(false)}
                  >
                    Arabic Language Course
                  </Link>
                </div>
              )}
            </div>

            <Link
              to='/pricing'
              className='block py-2 text-gray-700 border-b border-gray-200 hover:text-islamic'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to='/blog'
              className='block py-2 text-gray-700 border-b border-gray-200 hover:text-islamic'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to='/about'
              className='block py-2 text-gray-700 border-b border-gray-200 hover:text-islamic'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>

            {/* More Dropdown */}
            <div className='border-b border-gray-200 pb-2'>
              <button
                className='flex items-center justify-between w-full text-gray-700 py-2 focus:outline-none'
                onClick={() => setIsMoreOpen(!isMoreOpen)}
              >
                <span>More</span>
                {isMoreOpen ? <FaChevronUp className='ml-1' /> : <FaChevronDown className='ml-1' />}
              </button>
              {isMoreOpen && (
                <div className='pl-4 space-y-2 mt-2'>
                  <Link
                    to='/faqs'
                    className='block py-1 text-gray-700 hover:text-islamic'
                    onClick={() => setIsMoreOpen(false)}
                  >
                    FAQs
                  </Link>
                  {/* <Link
                    to='/applyForJop'
                    className='block py-1 text-gray-700 hover:text-islamic'
                    onClick={() => setIsMoreOpen(false)}
                  >
                    Apply for a job
                  </Link> */}
                  <Link
                    to='/contact'
                    className='block py-1 text-gray-700 hover:text-islamic'
                    onClick={() => setIsMoreOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
