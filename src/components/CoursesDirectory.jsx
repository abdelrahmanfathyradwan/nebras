import React from "react";
import { Link } from 'react-router-dom';

const CoursesDirectory = () => {
  const courses = [
    {
      title: "Quran Tajweed and Recitation",
      description: "Master the art of Quranic recitation with proper Tajweed rules. Suitable for all levels with personalized feedback from Ijazah-holding instructors.",
      image: "/images/quran-with-prayer-beads.webp",
      imageAlt: "A closed Quran resting beside white prayer beads on a dark prayer mat",
      width: 736,
      height: 981,
      to: "/courses/tajweed"
    },
    {
      title: "Quran Memorization (Hifz)",
      description: "Structured memorization program with proven techniques. Includes revision plans and motivational support to help you achieve your Hifz goals.",
      image: "/images/quran-open-pages.webp",
      imageAlt: "Open pages of the Quran showing Arabic text",
      width: 720,
      height: 1280,
      to: "/courses/memorization"
    },
    {
      title: "Arabic Language Course",
      description: "Comprehensive Arabic learning to understand the Quran in its original language. Focuses on reading, writing, and conversational skills.",
      image: "/images/arabic-calligraphy.webp",
      imageAlt: "Arabic calligraphy artwork in warm tones",
      width: 736,
      height: 736,
      to: "/courses/arabic"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-600 mb-3">
            Nebras Academy Course Directory
          </h2>
          <div className="accent-bar"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.imageAlt}
                  width={course.width}
                  height={course.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-600 mb-3 group-hover:text-primary-500 transition-colors duration-300">{course.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                <Link to={course.to} className="inline-flex items-center text-primary-500 font-semibold hover:text-primary-600 transition-all duration-300 group/link">
                  Learn More 
                  <span className="ml-1 transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/courses" className="btn-primary btn-pill inline-flex items-center gap-2 px-8 text-base">
            VIEW MORE COURSES
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesDirectory;