import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaUsers, FaUniversity, FaVideo, 
         FaBook, FaTasks, FaUserTie, FaUserFriends } from 'react-icons/fa';
import BookingModal from '../components/BookingModal';
import SEO from '../components/SEO';

const Pricing = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const features = [
    {
      icon: <FaChalkboardTeacher className="text-3xl text-secondary-600" />,
      title: "Expert Quran Teachers",
      description: "Certified Native Male & Female Quran Tutors available to teach 24/7. You choose the schedule and we will match you with the perfect Quran tutor."
    },
    {
      icon: <FaUsers className="text-3xl text-secondary-600" />,
      title: "Private & Group Quran Tutoring",
      description: "1:1 Quran Classes and Group Quran Classes are available. Take a group class with your friends or family or study Quran by yourself with your Quran tutor."
    },
    {
      icon: <FaUniversity className="text-3xl text-secondary-600" />,
      title: "Quran Teachers from Al Azhar",
      description: "Study Quran with an Expert Quran Teacher from Al Azhar University, one of the most prestigious universities in the world."
    },
    {
      icon: <FaVideo className="text-3xl text-secondary-600" />,
      title: "Video Recordings",
      description: "Students have the option to record each session anytime they want! Review your Quran lessons outside of class easily."
    },
    {
      icon: <FaBook className="text-3xl text-secondary-600" />,
      title: "Digital Study Materials",
      description: "Digital Quran study materials are shared with students during class and available for after-class reviewing."
    },
    {
      icon: <FaTasks className="text-3xl text-secondary-600" />,
      title: "Assignments & Exams",
      description: "Students are regularly assessed with course exams to ensure that milestones are being met well. Assignments are given by the teachers throughout the course."
    },
    {
      icon: <FaUserTie className="text-3xl text-secondary-600" />,
      title: "Academic Advisors",
      description: "Our experienced Academic Advisors are available anytime to help you in planning your Quranic studies."
    },
    {
      icon: <FaUserFriends className="text-3xl text-secondary-600" />,
      title: "Family Discount",
      description: "Learning Quran doesn't have to be difficult for bigger families. Nebras Academy provides a 10% discount for families of 3 or more students."
    }
  ];

  return (
    <div className="font-sans page-enter">
      <SEO 
        title="Pricing & Tuition" 
        description="Affordable and high-quality online Quran learning for only $10/hr. Private and group classes available 24/7 with expert Al-Azhar teachers." 
        canonical="/pricing"
      />
      {/* Hero Section */}
      <div className="relative h-[200px] overflow-hidden">
        <img 
          src="/images/pricing.png"
          alt="Pricing Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary-900/80 flex items-center justify-start px-6 md:px-16">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white border-l-4 border-primary-500 pl-6 py-2">
              Pricing & Tuition
            </h1>
            <p className="text-gray-300 mt-2 pl-6 max-w-xl">
              Transparent pricing with high-quality online Quran classes.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Header */}
      <div className="bg-white py-16 px-6 text-center border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary-800 mb-4 leading-tight">
            High-Quality Quran Learning for Only <span className="text-primary-500">$10/hr</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Get it All for One Low Price. Start Today at Nebras Academy.
          </p>
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="btn-primary btn-pill px-8 py-3.5 text-base font-bold shadow-lg"
          >
            SCHEDULE YOUR FREE TRIAL CLASS
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Everything Included</h2>
            <p className="text-gray-500 mt-2">Premium features at no extra cost</p>
            <div className="accent-bar"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-secondary-50 rounded-xl flex items-center justify-center mb-5 text-secondary-600 shadow-sm border border-secondary-100/50">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-secondary-850 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 text-center bg-white">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl text-secondary-800 font-bold mb-4">
            And Many Other Features
          </h3>
          <p className="text-gray-600 mb-8">Join thousands of students learning worldwide with custom flexible hours.</p>
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="btn-primary btn-pill px-8 py-3.5 text-base font-bold shadow-lg"
          >
            SCHEDULE YOUR FREE TRIAL CLASS
          </button>
        </div>
      </div>
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};

export default Pricing;