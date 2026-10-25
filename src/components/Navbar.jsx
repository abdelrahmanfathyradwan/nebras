import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaEnvelope, FaChevronDown, FaBars, FaCheck, FaTimes, FaPhoneAlt } from "react-icons/fa"
import BookingModal from "./BookingModal"

const EMAIL = "nebrasacademey2025@gmail.com"

const COURSES = [
  { to: "/courses/memorizing-juz-amma", label: "Memorization Juz' Amma (Part 30)" },
  { to: "/courses/tajweed", label: "Quran Tajweed and Recitation" },
  { to: "/courses/reading", label: "Quran Reading (Noor Al Bayan)" },
  { to: "/courses/recitation", label: "Quran Recitation" },
  { to: "/courses/memorization", label: "Quran Memorization" },
  { to: "/courses/arabic-kids", label: "Arabic Language Kids Course" },
  { to: "/courses/arabic", label: "Arabic Language Course" },
  { to: "/courses/islamic-studies", label: "Islamic Studies Course" },
]

const NAV_LINKS = [
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
]

const MORE_LINKS = [
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
]

const Navbar = () => {
  const { pathname } = useLocation()

  const [isCoursesOpen, setIsCoursesOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [copied, setCopied] = useState(false)
  const coursesRef = useRef(null)
  const moreRef = useRef(null)

  const copyEmailToClipboard = () => {
    if (!navigator.clipboard) return
    navigator.clipboard
      .writeText(EMAIL)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000) // hide the message after 2 seconds
      })
      .catch(() => {})
  }

  // Close dropdowns when clicking outside, and close everything on Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (coursesRef.current && !coursesRef.current.contains(event.target)) {
        setIsCoursesOpen(false)
      }
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setIsMoreOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsCoursesOpen(false)
        setIsMoreOpen(false)
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  // Compact header on scroll (two thresholds prevent flicker near the edge)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setIsScrolled((prev) => (prev ? y > 20 : y > 60))
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close menus whenever the route changes (e.g. browser back button)
  useEffect(() => {
    setIsCoursesOpen(false)
    setIsMoreOpen(false)
    setIsMobileMenuOpen(false)
    setIsMobileCoursesOpen(false)
  }, [pathname])

  // Toggle dropdowns on click (opening one closes the other)
  const toggleCourses = () => {
    setIsCoursesOpen((open) => !open)
    setIsMoreOpen(false)
  }
  const toggleMore = () => {
    setIsMoreOpen((open) => !open)
    setIsCoursesOpen(false)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsMobileCoursesOpen(false)
  }

  // Active route helpers
  const isActive = (to) => pathname === to || pathname.startsWith(`${to}/`)
  const isCoursesActive = pathname.startsWith("/courses")
  const isMoreActive = MORE_LINKS.some(({ to }) => isActive(to))

  // Styles
  const navLinkClasses = (active) =>
    `relative text-[15px] font-semibold transition-colors duration-300 hover:text-primary-500 after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-full ${
      active ? "text-primary-500 after:w-full" : "text-secondary-600 after:w-0"
    }`

  const dropdownTriggerClasses = (active) =>
    `flex items-center gap-1.5 text-[15px] font-semibold transition-colors duration-300 hover:text-primary-500 ${
      active ? "text-primary-500" : "text-secondary-600"
    }`

  const dropdownLinkClasses = (active) =>
    `block px-4 py-2.5 text-sm transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg hover:bg-primary-50 hover:text-primary-600 ${
      active ? "bg-primary-50 text-primary-600 font-semibold" : "text-gray-700"
    }`

  const mobileLinkClasses = (active) =>
    `block py-3 px-3 rounded-lg font-semibold transition-colors duration-200 ${
      active
        ? "text-primary-600 bg-primary-50"
        : "text-secondary-600 hover:text-primary-500 hover:bg-primary-50"
    }`

  const contactLinkClasses =
    "flex items-center text-[13px] font-medium tracking-wide text-white/90 hover:text-primary-300 transition-colors duration-200"

  const ctaClasses =
    "items-center justify-center rounded-full bg-primary-500 hover:bg-primary-400 text-white font-semibold shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"

  return (
    <div className='font-sans sticky top-0 z-20'>
      {/* Upper bar: contact info (collapses smoothly once the page is scrolled) */}
      <div
        className={`bg-secondary-600 text-white overflow-hidden transition-all duration-300 motion-reduce:transition-none ${
          isScrolled ? 'max-h-0 opacity-0 invisible' : 'max-h-24 opacity-100 visible'
        }`}
      >
        <div className='px-4'>
          {/* Desktop: contacts on the left, tagline on the right */}
          <div className='container mx-auto hidden md:flex items-center justify-between gap-6 py-2'>
            <div className='flex flex-wrap items-center gap-x-5 lg:gap-x-6 gap-y-1'>
              <a dir='ltr' href="tel:+201146162847" className={contactLinkClasses}>
                <img
                  src='https://flagcdn.com/w20/eg.png'
                  alt='Egypt Flag'
                  className='w-5 h-[14px] mr-2 rounded-sm object-cover'
                />
                +20 114 616 2847
              </a>

              <span className='hidden lg:block h-3.5 w-px bg-white/25' aria-hidden="true" />

              {/* NOTE: the number shown below differs from the number in href. Please verify which one is correct. */}
              <a dir='ltr' href="tel:+201003342452" className={contactLinkClasses}>
                <img
                  src='https://flagcdn.com/w20/eg.png'
                  alt='Egypt Flag'
                  className='w-5 h-[14px] mr-2 rounded-sm object-cover'
                />
                +20 150 858 6055
              </a>

              <span className='hidden lg:block h-3.5 w-px bg-white/25' aria-hidden="true" />

              <a href={`mailto:${EMAIL}`} className={contactLinkClasses} onClick={copyEmailToClipboard}>
                {copied ? (
                  <FaCheck className="mr-2 text-xs text-primary-300" />
                ) : (
                  <FaEnvelope className="mr-2 text-xs" />
                )}
                {/* Both texts share one grid cell, so the width never changes */}
                <span className='grid'>
                  <span className={`col-start-1 row-start-1 transition-opacity duration-200 ${copied ? 'opacity-0' : 'opacity-100'}`}>
                    {EMAIL}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`col-start-1 row-start-1 text-primary-300 transition-opacity duration-200 ${copied ? 'opacity-100' : 'opacity-0'}`}
                  >
                    Email copied!
                  </span>
                </span>
              </a>
              <span role="status" className='sr-only'>{copied ? "Email address copied" : ""}</span>
            </div>

            <p className='hidden lg:block text-[13px] text-white/75'>
              Certified Quran teachers. Flexible schedules.
            </p>
          </div>

          {/* Mobile: booking CTA */}
          <div className='md:hidden flex justify-center py-2'>
            <button
              onClick={() => setIsBookingOpen(true)}
              className={`inline-flex px-5 py-1.5 text-sm ${ctaClasses}`}
            >
              Book Your Free Trial
            </button>
          </div>
        </div>
      </div>

      {/* Lower bar: logo, navigation and CTA */}
      <div
        className={`bg-white border-b border-gray-100 px-4 transition-all duration-300 motion-reduce:transition-none ${
          isScrolled ? 'py-2 shadow-md' : 'py-3 shadow-sm'
        }`}
      >
        <div className='container mx-auto flex items-center justify-between'>
          {/* Mobile Menu Button */}
          <button
            className='md:hidden flex items-center justify-center h-11 w-11 shrink-0 text-secondary-600 hover:text-primary-500 transition-colors duration-200 rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <FaTimes className='h-5 w-5' /> : <FaBars className='h-5 w-5' />}
          </button>

          {/* Academy Logo (single instance for desktop and mobile) */}
          <Link
  to="/"
  aria-label="Nebras Academy - Home"
  className='flex items-center -my-2 md:-my-4 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2'
>
  <img
    src='/Logo.png'
    alt='Nebras Academy logo'
    draggable={false}
    className={`w-auto scale-[1.4] mix-blend-multiply origin-left max-w-[220px] md:max-w-[320px] object-contain transition-all duration-300 motion-reduce:transition-none ${
      isScrolled ? 'h-14 md:h-20' : 'h-16 md:h-28'
    }`}
  />
</Link>

          {/* Desktop navigation + CTA */}
          <div className='hidden md:flex items-center gap-5 lg:gap-8'>
            <nav className='flex items-center gap-5 lg:gap-8' aria-label="Main navigation">
              {/* Courses Dropdown */}
              <div ref={coursesRef} className='relative'>
                <button
                  className={dropdownTriggerClasses(isCoursesActive)}
                  onClick={toggleCourses}
                  aria-expanded={isCoursesOpen}
                  aria-haspopup="true"
                  aria-label="Toggle courses menu"
                >
                  Courses
                  <FaChevronDown className={`text-[10px] transition-transform duration-300 ${isCoursesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isCoursesOpen && (
                  <div className='absolute left-0 mt-4 w-72 bg-white rounded-xl shadow-lg py-1 z-50 border border-gray-100 animate-slide-down'>
                    {COURSES.map(({ to, label }) => (
                      <Link
                        key={to}
                        to={to}
                        className={dropdownLinkClasses(isActive(to))}
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {NAV_LINKS.map(({ to, label }) => (
                <Link key={to} to={to} className={navLinkClasses(isActive(to))}>
                  {label}
                </Link>
              ))}

              {/* More Dropdown */}
              <div ref={moreRef} className='relative'>
                <button
                  className={dropdownTriggerClasses(isMoreActive)}
                  onClick={toggleMore}
                  aria-expanded={isMoreOpen}
                  aria-haspopup="true"
                >
                  More
                  <FaChevronDown className={`text-[10px] transition-transform duration-300 ${isMoreOpen ? 'rotate-180' : ''}`} />
                </button>

                {isMoreOpen && (
                  <div className='absolute right-0 mt-4 w-48 bg-white rounded-xl shadow-lg py-1 z-50 border border-gray-100 animate-slide-down'>
                    {MORE_LINKS.map(({ to, label }) => (
                      <Link
                        key={to}
                        to={to}
                        className={dropdownLinkClasses(isActive(to))}
                        onClick={() => setIsMoreOpen(false)}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            <button
              onClick={() => setIsBookingOpen(true)}
              className={`inline-flex px-4 lg:px-5 py-2 text-sm ${ctaClasses}`}
            >
              Book Your Free Trial
            </button>
          </div>

          {/* Mobile: tap-to-call (same width as the menu button, keeps the logo centered) */}
          <a
            href="tel:+201146162847"
            aria-label="Call Nebras Academy"
            className='md:hidden flex items-center justify-center h-11 w-11 shrink-0 text-secondary-600 hover:text-primary-500 transition-colors duration-200 rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500'
          >
            <FaPhoneAlt className='h-4 w-4' />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-white shadow-lg absolute top-full left-0 w-full z-50 border-t border-gray-100 transition-all duration-300 ease-in-out overflow-y-auto ${
          isMobileMenuOpen ? 'max-h-[80vh] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className='px-5 py-3 space-y-1'>
          {/* Courses accordion */}
          <button
            type="button"
            onClick={() => setIsMobileCoursesOpen((open) => !open)}
            aria-expanded={isMobileCoursesOpen}
            className={`flex w-full items-center justify-between ${mobileLinkClasses(isCoursesActive)}`}
          >
            Courses
            <FaChevronDown className={`text-xs transition-transform duration-300 ${isMobileCoursesOpen ? 'rotate-180' : ''}`} />
          </button>
          {isMobileCoursesOpen && (
            <div className='ml-3 pl-3 border-l-2 border-primary-300 space-y-0.5'>
              {COURSES.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`block py-2.5 px-3 text-sm rounded-lg transition-colors duration-200 hover:text-primary-600 hover:bg-primary-50 ${
                    isActive(to) ? 'text-primary-600 bg-primary-50 font-semibold' : 'text-gray-700'
                  }`}
                  onClick={closeMobileMenu}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}

          {[...NAV_LINKS, ...MORE_LINKS].map(({ to, label }) => (
            <Link key={to} to={to} className={mobileLinkClasses(isActive(to))} onClick={closeMobileMenu}>
              {label}
            </Link>
          ))}

          {/* Book Your Free Trial CTA in Mobile Menu */}
          <div className='pt-2 pb-1'>
            <button
              onClick={() => {
                closeMobileMenu()
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