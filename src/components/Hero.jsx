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
            src='/images/heroImg.jfif' // Replace with your Quran image path
            alt='Quran Background'
            className='w-full h-full object-cover object-center'
          />
          <div className='absolute inset-0 bg-black bg-opacity-40'></div>
        </div>

        {/* Hero Content */}
        <div className='relative z-10 h-full flex flex-col items-center justify-center text-center px-4'>
          <h1 className='text-4xl md:text-6xl font-bold text-orange-400 mb-4'>Nebras Academy</h1>
          <p className='text-3xl md:text-4xl text-orange-300 mb-8 max-w-2xl'>
            Learn Quran Online, Anytime, Anywhere
          </p>
          <p className='text-2xl md:text-3xl text-orange-200 mb-8 max-w-2xl'>
            Nebras Academy - Top-Rated Online Quran Classes for Kids & Adults Worldwide
          </p>
          <div className='flex gap-5'>
             <a
          href='https://wa.me/201146162847?text=Peace%20be%20upon%20you%20and%20God%27s%20mercy%20and%20blessings.%20We%20are%20the%20Nebras%20team%20for%20Quran%20education.%20How%20can%20we%20help%20you%3F'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-orange-500 hover:text-orange-500 hover:bg-inherit text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors shadow-lg'
        >
          Get a free trial now
        </a>
            <Link to="/courses" className='bg-green-500 hover:bg-inherit hover:text-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors shadow-lg'>
              Browse Our Courses
            </Link>
          </div>
        </div>

        {/* Fixed WhatsApp Button */}
        <a
          href='https://wa.me/201146162847?text=Peace%20be%20upon%20you%20and%20God%27s%20mercy%20and%20blessings.%20We%20are%20the%20Nebras%20team%20for%20Quran%20education.%20How%20can%20we%20help%20you%3F'
          target='_blank'
          rel='noopener noreferrer'
          className='fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all animate-bounce'
        >
          <FaWhatsapp className='text-3xl' />
        </a>
      </section>
    </div>
  )
};

export default Hero;