import { FaWhatsapp, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const Hero = () => {
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const dropdownRef = useRef(null);

  const whatsappNumbers = [
    { number: '+20 114 616 2847', label: "First Number" },
    { number: '+20 111 495 6994', label: 'Second Number' }
  ];

  // إغلاق الدروب داون عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsWhatsAppOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleWhatsAppClick = (phoneNumber) => {
    const cleanNumber = phoneNumber.replace(/\s/g, '');
    window.open(`https://wa.me/${cleanNumber}`, '_blank');
    setIsWhatsAppOpen(false);
  };

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
              href='https://wa.me/201146162847'
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

        {/* Fixed WhatsApp Button with Dropdown */}
        <div className='fixed bottom-8 right-8 z-50' ref={dropdownRef}>
          {/* Main WhatsApp Button */}
          <button
            onClick={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
            className='bg-secondary-400 hover:bg-secondary-600 text-white p-4 rounded-full shadow-xl transition-all animate-bounce flex items-center gap-2'
          >
            <FaWhatsapp className='text-3xl' />
            <FaChevronDown className={`text-sm transition-transform ${isWhatsAppOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {isWhatsAppOpen && (
            <div className='absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-3 min-w-[180px] border border-gray-200'>
              <h4 className='text-sm font-bold text-gray-700 mb-2 text-center border-b pb-2'>Choose WhatsApp Number</h4>
              <div className='space-y-2'>
                {whatsappNumbers.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleWhatsAppClick(item.number)}
                    className='w-full bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded text-sm transition-all flex items-center justify-center gap-2'
                  >
                    <FaWhatsapp className='text-xs' />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
};

export default Hero;
