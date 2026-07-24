import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaEnvelope, FaChevronDown, FaChevronUp, FaBars, FaCheck } from "react-icons/fa"
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

  return (
    <div className='font-sans sticky top-0 z-20'>
      {/* Combined Navbar Container */}
      <div className='flex flex-col md:flex-row items-stretch'>
        {/* Academy Logo - Beside both navbars */}
        <Link to="/" className='hidden md:flex items-center justify-center'>
          <img
            src='/Logo.png'
            alt='Academy Logo'
            className='h-[100px] w-[100%] bg-white hidden md:flex items-center shadow-lg justify-center '
          />
        </Link>

        {/* Navbar Content */}
        <div className='flex-grow'>
          {/* Upper Navbar */}
          <div className='bg-secondary-400 text-white py-2 px-4'>
            <div className='container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center'>
              {/* Contact Info - Centered */}
              <div className='hidden md:flex flex-wrap justify-center gap-4 md:gap-8 my-2 md:my-0 lg:ml-[200px] lg:gap-[80px]'>
                <span className='flex items-center text-sm'>
                  <img
                    src='https://flagcdn.com/w20/eg.png' // علم مصر من flagcdn
                    alt='Egypt Flag'
                    className='w-5 h-5 mr-1 rounded-full'
                  />
                  <a
                   dir='ltr'
                   href="tel:+201146162847" 
                  >
                  +20 114 616 2847
                  </a>
                </span>
                <span className='flex items-center text-sm'>
                  <img
                    src='https://flagcdn.com/w20/eg.png' // علم مصر من flagcdn
                    alt='Egypt Flag'
                    className='w-5 h-5 mr-1 rounded-full'
                  />
                  <a
                   dir='ltr'
                   href="tel:+201003342452" 
                  >
                  +201003342452
                  </a>
                </span>
                 <a 
                    href="mailto:nebrasacademey2025@gmail.com" 
                    className="flex items-center transition-colors duration-200"
                    onClick={copyEmailToClipboard}
                  >
                    <FaEnvelope className="mr-2" />
                    nebrasacademey2025@gmail.com
                  </a>
                  {copied ? (
                    <div className="flex items-center text-primary-600">
                      <FaCheck className="ml-1" />
                      <span className="text-sm">Copied</span>
                    </div>
                  ):""}
              </div>

              {/* Book Your Free Trial CTA */}
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className='bg-primary-500 hover:bg-primary-600 text-white px-4 py-1 rounded text-sm transition-colors'
                >
                    Book Your Free Trial
                </button>
            </div>
          </div>

          {/* Lower Navbar */}
          <div className='bg-white shadow-md py-1 sm:py-4 px-4'>
            <div className='container mx-auto flex justify-center items-center'>
              {/* Mobile Menu Button */}
              <button
                className='md:hidden text-secondary-400 focus:outline-none'
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <FaBars className='h-6 w-6' />
              </button>

              {/* Desktop Navigation */}
              <nav className='hidden md:flex space-x-8'>
                {/* Courses Dropdown */}
                <div ref={coursesRef} className='relative'>
                  <button
                    className='flex items-center text-secondary-400 hover:text-secondary font-medium focus:outline-none'
                    onClick={toggleCourses}
                    aria-expanded={isCoursesOpen}
                    aria-label="Toggle courses menu"
                  >
                    Courses
                    {isCoursesOpen ? (
                      <FaChevronUp className='ml-1' />
                    ) : (
                      <FaChevronDown className='ml-1' />
                    )}
                  </button>

                  {isCoursesOpen && (
                    <div className='absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-secondary-200'>
                      <Link
                        to='/courses/MemorizingJuzAmma'
                        className='block px-4 py-2 text-sm text-secondary-400 hover:bg-secondary-50 hover:text-secondary'
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Memorization Juz' Amma (Part 30)
                      </Link>
                      <Link
                        to='/courses/tajweed'
                        className='block px-4 py-2 text-sm text-secondary-400 hover:bg-secondary-50 hover:text-secondary'
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Quran Tajweed and Recitation
                      </Link>
                      <Link
                        to='/courses/reading'
                        className='block px-4 py-2 text-sm text-secondary-400 hover:bg-secondary-50 hover:text-secondary'
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Quran Reading (Noor Al Bayan)
                      </Link>
                      <Link
                        to='/courses/recitation'
                        className='block px-4 py-2 text-sm text-secondary-400 hover:bg-secondary-50 hover:text-secondary'
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Quran Recitation
                      </Link>
                      <Link
                        to='/courses/memorization'
                        className='block px-4 py-2 text-sm text-secondary-400 hover:bg-secondary-50 hover:text-secondary'
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Quran Memorization
                      </Link>
                      <Link
                        to='/courses/ArabicKids'
                        className='block px-4 py-2 text-sm text-secondary-400 hover:bg-secondary-50 hover:text-secondary'
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Arabic Language Kids Course
                      </Link>
                      <Link
                        to='/courses/arabic'
                        className='block px-4 py-2 text-sm text-secondary-400 hover:bg-secondary-50 hover:text-secondary'
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Arabic Language Course
                      </Link>
                      <Link
                        to='/courses/Islamic'
                        className='block px-4 py-2 text-sm text-secondary-400 hover:bg-secondary-50 hover:text-secondary'
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Islamic Studies Course
                      </Link>
                    </div>
                  )}
                </div>
                <Link to='/pricing' className='text-secondary-400 hover:text-secondary font-medium'>
                  Pricing
                </Link>
                <Link to='/blog' className='text-secondary-400 hover:text-secondary font-medium'>
                  Blog
                </Link>
                <Link to='/about' className='text-secondary-400 hover:text-secondary font-medium'>
                  About
                </Link>

                {/* More Dropdown */}
                <div ref={moreRef} className='relative'>
                  <button
                    className='flex items-center text-secondary-400 hover:text-secondary font-medium focus:outline-none'
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
                    <div className='absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-secondary-200'>
                      <Link
                        to='/faqs'
                        className='block px-4 py-2 text-sm text-secondary-400 hover:bg-secondary-50 hover:text-secondary'
                        onClick={() => setIsMoreOpen(false)}
                      >
                        FAQs
                      </Link>
                      <Link
                        to='/contact'
                        className='block px-4 py-2 text-sm text-secondary-400 hover:bg-secondary-50 hover:text-secondary'
                        onClick={() => setIsMoreOpen(false)}
                      >
                        Contact
                      </Link>
                    </div>
                  )}
                </div>
              </nav>

              {/* Mobile Logo - Only visible on mobile */}
              <div className='md:hidden pl-[200px]'>
                <img
                  src='/Logo.png'
                  alt='Academy Logo'
                  className='h-[60px] w-[90%] bg-white rounded-full shadow-lg'
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
            
            <Link
             to="/courses"
             className='block py-2 text-secondary-400 border-b border-secondary-200 hover:text-secondary'
             onClick={() => setIsMobileMenuOpen(false)}
             >
              Courses
             </Link>
            <Link
              to='/pricing'
              className='block py-2 text-secondary-400 border-b border-secondary-200 hover:text-secondary'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to='/blog'
              className='block py-2 text-secondary-400 border-b border-secondary-200 hover:text-secondary'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to='/about'
              className='block py-2 text-secondary-400 border-b border-secondary-200 hover:text-secondary'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>

            
            <div className='border-b border-secondary-200 pb-2'>
                  <Link
                    to='/contact'
                    className='block py-1 text-secondary-400 hover:text-secondary'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
            </div>

            {/* Book Your Free Trial CTA in Mobile Menu */}
            <div className='pt-2 pb-2'>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setIsBookingOpen(true)
                }}
                className='w-full bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded text-sm font-semibold transition-colors'
              >
                Book Your Free Trial
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  )
}

export default Navbar

