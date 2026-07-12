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
      icon: <FaChalkboardTeacher className="text-4xl text-secondary-600" />,
      title: "Expert Quran Teachers",
      description: "Certified Native Male & Female Quran Tutors available to teach 24/7. You choose the schedule and we will match you with the perfect Quran tutor."
    },
    {
      icon: <FaUsers className="text-4xl text-secondary-600" />,
      title: "Private & Group Quran Tutoring",
      description: "1:1 Quran Classes and Group Quran Classes are available. Take a group class with your friends or family or study Quran by yourself with your Quran tutor."
    },
    {
      icon: <FaUniversity className="text-4xl text-secondary-600" />,
      title: "Quran Teachers from Al Azhar",
      description: "Study Quran with an Expert Quran Teacher from Al Azhar University, one of the most prestigious universities in the world."
    },
    {
      icon: <FaVideo className="text-4xl text-secondary-600" />,
      title: "Video Recordings",
      description: "Students have the option to record each session anytime they want! Review your Quran lessons outside of class easily."
    },
    {
      icon: <FaBook className="text-4xl text-secondary-600" />,
      title: "Digital Study Materials",
      description: "Digital Quran study materials are shared with students during class and available for after-class reviewing."
    },
    {
      icon: <FaTasks className="text-4xl text-secondary-600" />,
      title: "Assignments & Exams",
      description: "Students are regularly assessed with course exams to ensure that milestones are being met well. Assignments are given by the teachers throughout the course."
    },
    {
      icon: <FaUserTie className="text-4xl text-secondary-600" />,
      title: "Academic Advisors",
      description: "Our experienced Academic Advisors are available anytime to help you in planning your Quranic studies."
    },
    {
      icon: <FaUserFriends className="text-4xl text-secondary-600" />,
      title: "Family Discount",
      description: "Learning Quran doesn't have to be difficult for bigger families. Nebras Academy provides a 10% discount for families of 3 or more students."
    }
  ];

  return (
    <div className="font-sans">
      <SEO 
        title="Pricing & Tuition" 
        description="Affordable and high-quality online Quran learning for only $10/hr. Private and group classes available 24/7 with expert Al-Azhar teachers." 
        canonical="/pricing"
      />
      {/* Hero Section */}
      <div className="relative">
        <img 
          src="/images/pricing.png" // استبدل بمسار صورتك
          alt="Pricing Banner"
          className="w-full h-[200px] "
        />
        <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-start px-6 md:px-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white border-l-4 border-primary-500 pl-4 py-2">
            Pricing
          </h1>
        </div>
      </div>

      {/* Pricing Header */}
      <div className="bg-white py-12 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
          High-Quality Quran Learning for Only <span className="text-primary-500">$10/hr</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Get it All for One Low Price. Start Today at Nebras Academy
        </p>
        <button 
          onClick={() => setIsBookingOpen(true)}
          className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-block"
        >
          SCHEDULE YOUR FREE TRIAL CLASS
        </button>
      </div>

      {/* Features Grid */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="text-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary-800 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-6 text-center text-white">
        <h3 className="text-2xl md:text-3xl text-secondary-800 font-bold mb-6">
          And Many Other Features
        </h3>
        <button 
          onClick={() => setIsBookingOpen(true)}
          className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-block"
        >
          SCHEDULE YOUR FREE TRIAL CLASS
        </button>
      </div>
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};

export default Pricing;