import { useState } from 'react';
import { FaWhatsapp, FaPlay, FaRegCheckCircle, FaStar, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BookingModal from './BookingModal';

const Hero = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className='relative overflow-hidden bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-950 text-white min-h-[92vh] flex items-center py-12 md:py-20'>
      {/* Decorative background grid and organic glowing spheres */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-primary-500/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-secondary-400/20 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Main Container */}
      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Premium Typography and interactive CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8 page-enter">
            {/* Trust badge */}
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-sm">
              <span className="flex text-amber-400">
                <FaStar className="w-3.5 h-3.5 fill-current" />
                <FaStar className="w-3.5 h-3.5 fill-current" />
                <FaStar className="w-3.5 h-3.5 fill-current" />
                <FaStar className="w-3.5 h-3.5 fill-current" />
                <FaStar className="w-3.5 h-3.5 fill-current" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-gray-200">
                Top-Rated Academy Worldwide
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-rb text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
                Learn Quran Online <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-500">
                  Anytime, Anywhere
                </span>
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-xl">
                Online Quran classes tailored for kids &amp; adults. Learn Tajweed, memorization, and Arabic with verified native Egyptian scholars from Al-Azhar.
              </p>
            </div>

            {/* Dynamic visual checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-lg">
              <div className="flex items-center space-x-3 text-gray-200 text-sm font-medium bg-white/5 border border-white/5 p-3 rounded-xl backdrop-blur-sm">
                <FaRegCheckCircle className="text-primary-400 text-lg flex-shrink-0" />
                <span>1-on-1 Personalized Classes</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-200 text-sm font-medium bg-white/5 border border-white/5 p-3 rounded-xl backdrop-blur-sm">
                <FaRegCheckCircle className="text-primary-400 text-lg flex-shrink-0" />
                <span>Male &amp; Female Native Teachers</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-200 text-sm font-medium bg-white/5 border border-white/5 p-3 rounded-xl backdrop-blur-sm">
                <FaRegCheckCircle className="text-primary-400 text-lg flex-shrink-0" />
                <span>24/7 Flexible Scheduling</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-200 text-sm font-medium bg-white/5 border border-white/5 p-3 rounded-xl backdrop-blur-sm">
                <FaRegCheckCircle className="text-primary-400 text-lg flex-shrink-0" />
                <span>Verified Al-Azhar Curriculum</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="bg-primary-500 hover:bg-primary-600 text-white font-bold px-8 py-4 rounded-xl text-base shadow-lg hover:shadow-primary-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 w-full sm:w-auto text-center"
              >
                Book Your Free Trial
              </button>
              <Link
                to="/courses"
                className="bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-xl text-base border border-white/10 shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-center w-full sm:w-auto"
              >
                Browse Our Courses
              </Link>
            </div>
          </div>

          {/* Right Column: Premium Mockup with Floating UI widgets */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-8 lg:mt-0 page-enter [animation-delay:200ms]">
            
            {/* Glow backing the main image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 rounded-3xl filter blur-3xl opacity-75 pointer-events-none" />

            {/* Central mockup container */}
            <div className="relative z-10 w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group bg-secondary-900">
              <img
                src='/images/hero.jpg'
                alt='Quran Background study'
                className='w-full h-full object-cover opacity-95 transition-transform duration-700 group-hover:scale-105'
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-950 via-transparent to-black/30" />
            </div>

            {/* Floating Widget 1: Live Sessions status */}
            <div className="absolute -top-4 -left-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl flex items-center space-x-3 hover:-translate-y-0.5 transition-transform duration-300">
              <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white">
                <FaGlobe className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-gray-300 font-semibold tracking-wider uppercase">Classes Hosted</p>
                <p className="text-sm font-bold text-white">10,000+ Worldwide</p>
              </div>
            </div>

            {/* Floating Widget 2: Interactive Play Trigger for Trial */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="absolute bottom-6 -right-4 z-20 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 p-4 rounded-2xl shadow-2xl flex items-center space-x-3 hover:scale-105 transition-transform duration-300 text-white"
            >
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <FaPlay className="w-3 h-3 text-white fill-current ml-0.5 animate-pulse" />
              </span>
              <span className="text-sm font-bold pr-2">Start Trial Now</span>
            </button>
          </div>

        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Fixed WhatsApp Button - Direct link */}
      <a
        href='https://wa.me/201146162847'
        target='_blank'
        rel='noopener noreferrer'
        className='fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#1fb855] text-white p-4 rounded-full shadow-2xl transition-all duration-300 animate-pulse-gentle flex items-center hover:scale-110'
        aria-label='Contact us on WhatsApp'
      >
        <FaWhatsapp className='text-3xl' />
      </a>
    </div>
  )
};

export default Hero;
