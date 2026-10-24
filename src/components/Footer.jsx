import { Link } from 'react-router-dom';
import { FaPhone, FaGlobe, FaFileAlt, FaQuestionCircle, FaBriefcase, FaBlog, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const footerLinkClasses = "hover:text-primary-300 transition-colors duration-200";

  return (
    <footer className="bg-secondary-500 text-white pt-16 pb-8 px-4 md:px-6">
      <div className="container mx-auto flex flex-col justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-primary-300">About Nebras</h3>
            <p className="mb-5 text-white/80 leading-relaxed"><strong className='text-primary-300 font-bold'>Nebras Academy</strong> is a trusted provider of online Quran classes worldwide.</p>
            <div className="space-y-3">
              <div className="flex items-center">
                <FaPhone className="mr-3 text-primary-300 text-sm flex-shrink-0" />
                <span className="text-white/80">+20 114 616 2847</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3 text-primary-300 text-sm flex-shrink-0" />
                <span className="text-white/80">+20 150 858 6055</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-primary-300 text-sm flex-shrink-0" />
                <span className="text-white/80 break-all text-sm">nebrasacademey2025@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Courses Section */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-primary-300">Courses</h3>
            <ul className="space-y-3">
              <li><Link to="/courses/tajweed" className={footerLinkClasses}>Quran Tajweed and Recitation</Link></li>
              <li><Link to="/courses/reading" className={footerLinkClasses}>Quran Reading (Noor Al Bayan)</Link></li>
              <li><Link to="/courses/recitation" className={footerLinkClasses}>Quran Recitation</Link></li>
              <li><Link to="/courses/memorization" className={footerLinkClasses}>Quran Memorization</Link></li>
              <li><Link to="/courses/arabic" className={footerLinkClasses}>Arabic Language Course</Link></li>
              <li><Link to="/courses/arabic-kids" className={footerLinkClasses}>Arabic for Kids</Link></li>
              <li><Link to="/courses/islamic-studies" className={footerLinkClasses}>Islamic Studies for Kids</Link></li>
              <li><Link to="/courses/memorizing-juz-amma" className={footerLinkClasses}>Memorizing Juz' Amma</Link></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-primary-300">Support</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaFileAlt className="mr-3 text-primary-300 text-sm flex-shrink-0" />
                <Link to="/policy" className={footerLinkClasses}>Student Policy</Link>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-primary-300 text-sm flex-shrink-0" />
                <Link to="/contact" className={footerLinkClasses}>Contact</Link>
              </li>
              <li className="flex items-center">
                <FaQuestionCircle className="mr-3 text-primary-300 text-sm flex-shrink-0" />
                <Link to="/faqs" className={footerLinkClasses}>FAQs</Link>
              </li>
              <li className="flex items-center">
                <FaBlog className="mr-3 text-primary-300 text-sm flex-shrink-0" />
                <Link to="/blog" className={footerLinkClasses}>Blog</Link>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-primary-300">Company</h3>
            <p className="mb-5 text-white/80 leading-relaxed">Nebras Academy is dedicated to providing authentic Quranic education with certified teachers.</p>
            <div className="flex items-center">
              <FaGlobe className="mr-3 text-primary-300 text-sm flex-shrink-0" />
              <span className="text-white/80">Worldwide Online Classes</span>
            </div>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="flex justify-center mb-10">
          <div
            className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5 sm:gap-8 max-w-md sm:max-w-lg w-full transition-all duration-300 hover:bg-white/15 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20"
          >
            {/* Accent bar */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-b-full bg-primary-500" />

            {/* QR Image */}
            <div className="flex-shrink-0 bg-white rounded-xl p-2.5 shadow-lg transition-transform duration-300 group-hover:scale-105">
              <img
                src="/QR.jpg"
                alt="Scan to Contact Nebras Academy"
                className="w-28 h-28 sm:w-32 sm:h-32 object-contain rounded-lg"
                loading="lazy"
                width="128"
                height="128"
              />
            </div>

            {/* Text Content */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-bold text-primary-300 mb-1.5">
                Scan to Contact Us
              </h4>
              <p className="text-sm text-white/80 leading-relaxed">
                Scan the QR code to contact Nebras Academy instantly.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/60 text-sm">&copy; Copyright {new Date().getFullYear()} Nebras Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
