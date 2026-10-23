import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaEnvelope, FaChevronDown, FaChevronUp, FaBars, FaCheck, FaTimes } from "react-icons/fa"
import BookingModal from "./BookingModal"

const Navbar = () => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const coursesRef = useRef(null)
  const moreRef = useRef(null)
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('nebrasacademey2025@gmail.com')
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // إخفاء الرسالة بعد ثانيتين
      });
  };

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

  const navLinkClasses = "relative text-secondary-500 hover:text-primary-500 font-medium transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-full"

  const dropdownLinkClasses = "block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"

  return (
    <div className='font-sans sticky top-0 z-20'>
      {/* Combined Navbar Container */}
      <div className='flex flex-col md:flex-row items-stretch'>
        {/* Academy Logo - Beside both navbars */}
        <Link to="/" className='hidden md:flex items-center justify-center flex-shrink-0'>
          <img
            src='/Logo.png'
            alt='Academy Logo'
            className='h-[100px] w-auto bg-white hidden md:flex items-center shadow-lg justify-center'
          />
        </Link>

        {/* Navbar Content */}
        <div className='flex-grow'>
          {/* Upper Navbar */}
          <div className='bg-secondary-500 text-white py-2.5 px-4'>
            <div className='container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center'>
              {/* Contact Info - Centered */}
              <div className='hidden md:flex flex-wrap justify-center items-center gap-6 lg:gap-10 my-0 lg:ml-[200px]'>
                <a
                  dir='ltr'
                  href="tel:+201146162847"
                  className='flex items-center text-sm hover:text-primary-300 transition-colors duration-200'
                >
                  <img
                    src='https://flagcdn.com/w20/eg.png'
                    alt='Egypt Flag'
                    className='w-5 h-4 mr-2 rounded-sm object-cover'
                  />
                  +20 114 616 2847
                </a>
                <a
                  dir='ltr'
                  href="tel:+201003342452"
                  className='flex items-center text-sm hover:text-primary-300 transition-colors duration-200'
                >
                  <img
                    src='https://flagcdn.com/w20/eg.png'
                    alt='Egypt Flag'
                    className='w-5 h-4 mr-2 rounded-sm object-cover'
                  />
                  +20 150 858 6055
                </a>
                <a 
                  href="mailto:nebrasacademey2025@gmail.com" 
                  className="flex items-center text-sm hover:text-primary-300 transition-colors duration-200"
                  onClick={copyEmailToClipboard}
                >
                  <FaEnvelope className="mr-2 text-xs" />
                  nebrasacademey2025@gmail.com
                </a>
                {copied ? (
                  <div className="flex items-center text-primary-300 animate-fade-in">
                    <FaCheck className="mr-1 text-xs" />
                    <span className="text-sm font-medium">Copied!</span>
                  </div>
                ):""}
              </div>

              {/* Book Your Free Trial CTA */}
              <button
                onClick={() => setIsBookingOpen(true)}
                className='bg-primary-500 hover:bg-primary-400 text-white px-5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0'
              >
                Book Your Free Trial
              </button>
            </div>
          </div>

          {/* Lower Navbar */}
          <div className='bg-white shadow-sm py-2 sm:py-3 px-4 border-b border-gray-100'>
            <div className='container mx-auto flex justify-center items-center'>
              {/* Mobile Menu Button */}
              <button
                className='md:hidden text-secondary-500 hover:text-primary-500 transition-colors duration-200 p-1.5 rounded-lg hover:bg-gray-50'
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className='h-5 w-5' />
                ) : (
                  <FaBars className='h-5 w-5' />
                )}
              </button>

              {/* Desktop Navigation */}
              <nav className='hidden md:flex items-center space-x-10'>
                {/* Courses Dropdown */}
                <div ref={coursesRef} className='relative'>
                  <button
                    className={`flex items-center gap-1.5 ${navLinkClasses} after:hidden`}
                    onClick={toggleCourses}
                    aria-expanded={isCoursesOpen}
                    aria-label="Toggle courses menu"
                  >
                    Courses
                    <FaChevronDown className={`text-xs transition-transform duration-300 ${isCoursesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isCoursesOpen && (
                    <div className='absolute left-0 mt-3 w-56 bg-white rounded-xl shadow-lg py-1 z-50 border border-gray-100 animate-slide-down'>
                      <Link
                        to='/courses/MemorizingJuzAmma'
                        className={dropdownLinkClasses}
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Memorization Juz' Amma (Part 30)
                      </Link>
                      <Link
                        to='/courses/tajweed'
                        className={dropdownLinkClasses}
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Quran Tajweed and Recitation
                      </Link>
                      <Link
                        to='/courses/reading'
                        className={dropdownLinkClasses}
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Quran Reading (Noor Al Bayan)
                      </Link>
                      <Link
                        to='/courses/recitation'
                        className={dropdownLinkClasses}
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Quran Recitation
                      </Link>
                      <Link
                        to='/courses/memorization'
                        className={dropdownLinkClasses}
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Quran Memorization
                      </Link>
                      <Link
                        to='/courses/ArabicKids'
                        className={dropdownLinkClasses}
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Arabic Language Kids Course
                      </Link>
                      <Link
                        to='/courses/arabic'
                        className={dropdownLinkClasses}
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Arabic Language Course
                      </Link>
                      <Link
                        to='/courses/Islamic'
                        className={dropdownLinkClasses}
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Islamic Studies Course
                      </Link>
                    </div>
                  )}
                </div>
                <Link to='/pricing' className={navLinkClasses}>
                  Pricing
                </Link>
                <Link to='/blog' className={navLinkClasses}>
                  Blog
                </Link>
                <Link to='/about' className={navLinkClasses}>
                  About
                </Link>

                {/* More Dropdown */}
                <div ref={moreRef} className='relative'>
                  <button
                    className={`flex items-center gap-1.5 ${navLinkClasses} after:hidden`}
                    onClick={toggleMore}
                  >
                    More
                    <FaChevronDown className={`text-xs transition-transform duration-300 ${isMoreOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isMoreOpen && (
                    <div className='absolute left-0 mt-3 w-48 bg-white rounded-xl shadow-lg py-1 z-50 border border-gray-100 animate-slide-down'>
                      <Link
                        to='/faqs'
                        className={dropdownLinkClasses}
                        onClick={() => setIsMoreOpen(false)}
                      >
                        FAQs
                      </Link>
                      <Link
                        to='/contact'
                        className={dropdownLinkClasses}
                        onClick={() => setIsMoreOpen(false)}
                      >
                        Contact
                      </Link>
                    </div>
                  )}
                </div>
              </nav>

              {/* Mobile Logo - Only visible on mobile */}
              <div className='md:hidden flex-1 flex justify-center'>
                <Link to="/">
                  <img
                    src='/Logo.png'
                    alt='Academy Logo'
                    className='h-[50px] w-auto'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-lg absolute w-full z-50 border-t border-gray-100 transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className='px-5 py-3 space-y-1'>
          <Link
            to="/courses"
            className='block py-3 px-3 text-secondary-500 hover:text-primary-500 hover:bg-primary-50 rounded-lg font-medium transition-colors duration-200'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Courses
          </Link>
          <Link
            to='/pricing'
            className='block py-3 px-3 text-secondary-500 hover:text-primary-500 hover:bg-primary-50 rounded-lg font-medium transition-colors duration-200'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            to='/blog'
            className='block py-3 px-3 text-secondary-500 hover:text-primary-500 hover:bg-primary-50 rounded-lg font-medium transition-colors duration-200'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            to='/about'
            className='block py-3 px-3 text-secondary-500 hover:text-primary-500 hover:bg-primary-50 rounded-lg font-medium transition-colors duration-200'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to='/contact'
            className='block py-3 px-3 text-secondary-500 hover:text-primary-500 hover:bg-primary-50 rounded-lg font-medium transition-colors duration-200'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>

          {/* Book Your Free Trial CTA in Mobile Menu */}
          <div className='pt-2 pb-1'>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false)
                setIsBookingOpen(true)
              }}
              className='w-full btn-primary btn-pill text-sm'
            >
              Book Your Free Trial
            </button>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  )
}

export default Navbar
