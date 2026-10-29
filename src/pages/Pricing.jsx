import React from 'react';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaUsers, FaUniversity, FaVideo, 
         FaBook, FaTasks, FaUserTie, FaUserFriends } from 'react-icons/fa';
import SEO from '../components/SEO';

const Pricing = () => {
  const features = [
    {
      icon: <FaChalkboardTeacher className="text-3xl text-secondary-600" />,
      title: "Expert Quran Teachers",
      description: "Certified Quran tutors available to teach online. You choose the schedule and we will match you with a suitable teacher."
    },
    {
      icon: <FaUsers className="text-3xl text-secondary-600" />,
      title: "Private & Group Quran Tutoring",
      description: "1:1 Quran Classes and Group Quran Classes are available. Take a group class with your friends or family or study Quran by yourself with your Quran tutor."
    },
    {
      icon: <FaUniversity className="text-3xl text-secondary-600" />,
      title: "Al-Azhar Credentials",
      description: "Study with teachers whose Ijazah and Al-Azhar credentials are published, so you can check the qualification behind the claim."
    },
    {
      icon: <FaVideo className="text-3xl text-secondary-600" />,
      title: "English & Arabic Instruction",
      description: "Lessons are available in English and Arabic, so beginners and non-Arabic speakers can ask questions in the language they understand."
    },
    {
      icon: <FaBook className="text-3xl text-secondary-600" />,
      title: "Digital Study Materials",
      description: "Digital Quran study materials are shared with students during class and available for after-class reviewing."
    },
    {
      icon: <FaTasks className="text-3xl text-secondary-600" />,
      title: "Progress Check-ins",
      description: "Teachers review what has been covered and agree the next steps with the student, so the plan adjusts as the student improves."
    },
    {
      icon: <FaUserTie className="text-3xl text-secondary-600" />,
      title: "Academic Advisors",
      description: "Our experienced Academic Advisors are available anytime to help you in planning your Quranic studies."
    },
    {
      icon: <FaUserFriends className="text-3xl text-secondary-600" />,
      title: "Parents Welcome",
      description: "Parents may sit in on a child's lesson, especially during the first weeks, to see how the teacher works and support practice at home."
    }
  ];

  return (
    <div className="font-sans page-enter">
      <SEO 
        title="Pricing & Tuition" 
        description="Affordable and high-quality online Quran learning for only $8/hr. Private and group classes available 24/7 with Ijazah-holding teachers." 
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
            High-Quality Quran Learning for Only <span className="text-primary-500">$8/hr</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Get it All for One Low Price. Start Today at Nebras Academy.
          </p>
          <Link 
            to="/trial"
            className="btn-primary btn-pill px-8 py-3.5 text-base font-bold shadow-lg inline-block"
          >
            SCHEDULE YOUR FREE TRIAL CLASS
          </Link>
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
          <p className="text-gray-600 mb-8">Start with a free trial and keep the schedule that fits your family.</p>
          <Link 
            to="/trial"
            className="btn-primary btn-pill px-8 py-3.5 text-base font-bold shadow-lg inline-block"
          >
            SCHEDULE YOUR FREE TRIAL CLASS
          </Link>
          <p className="mt-6 text-sm text-gray-600">
            Not sure where to start? Read the{' '}
            <Link to="/online-quran-classes-usa" className="font-semibold text-primary-600 underline underline-offset-2">
              guide to online Quran classes for US students
            </Link>{' '}
            or the{' '}
            <Link to="/learn-quran-online-usa" className="font-semibold text-primary-600 underline underline-offset-2">
              complete guide to learning Quran online
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;