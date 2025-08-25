import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='relative'>
      {/* Hero Section */}
      <section className='relative h-screen w-full overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0 z-0'>
          <img
            src='/images/hero.jpg' // Replace with your Quran image path
            alt='Quran Background'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-white bg-opacity-20'></div>
        </div>

        {/* Hero Content */}
        <div className='relative z-10 h-full flex flex-col items-center justify-start mt-12 text-center px-4'>
          <h1 className='font-rb text-7xl md:text-8xl font-bold text-secondary-600 mb-4'>Nebras Academy</h1>
          <p className='text-3xl md:text-4xl text-secondary-400 mb-8 max-w-2xl'>
            Learn Quran Online, Anytime, Anywhere
          </p>
          <p className='text-2xl md:text-3xl text-secondary-400 mb-8 max-w-2xl'>
            Nebras Academy - Top-Rated Online Quran Classes for Kids & Adults Worldwide
          </p>
          <div className='flex gap-5'>
             <a
          href='https://wa.me/201146162847 '
          target='_blank'
          rel='noopener noreferrer'
          className='bg-primary-500 hover:text-primary-600 hover:bg-inherit text-white px-5 py-2 rounded-full text-lg font-semibold transition-colors shadow-lg'
        >
              Get a free trial now
        </a>
            <Link to="/courses" className='bg-secondary-400 hover:bg-inherit hover:text-secondary-800 text-white px-5 py-2 rounded-full text-lg font-semibold transition-colors shadow-lg'>
              Browse Our Courses
            </Link>
          </div>
        </div>

        {/* Fixed WhatsApp Button */}
        <a
          href='https://wa.me/201146162847'
          target='_blank'
          rel='noopener noreferrer'
          className='fixed bottom-8 right-8 z-50 bg-secondary-400 hover:bg-secondary-600 text-white p-4 rounded-full shadow-xl transition-all animate-bounce'
        >
          <FaWhatsapp className='text-3xl' />
        </a>
      </section>
    </div>
  )
};

export default Hero;