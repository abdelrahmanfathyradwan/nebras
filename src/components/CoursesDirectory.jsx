import React from "react";
import { Link } from 'react-router-dom';

const CoursesDirectory = () => {
  const courses = [
    {
      title: "Quran Tajweed and Recitation",
      description: "Master the art of Quranic recitation with proper Tajweed rules. Suitable for all levels with personalized feedback from certified instructors.",
      image: "/images/quran2.jpg"
    },
    {
      title: "Quran Memorization (Hifz)",
      description: "Structured memorization program with proven techniques. Includes revision plans and motivational support to help you achieve your Hifz goals.",
      image: "/images/quran1.jpg"
    },
    {
      title: "Arabic Language Course",
      description: "Comprehensive Arabic learning to understand the Quran in its original language. Focuses on reading, writing, and conversational skills.",
      image: "/images/arabic.jpg"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-400 mb-12">
          Nebras Academy Course Directory
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-500 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <Link to="/courses" className="text-secondary-500 font-semibold hover:text-primary-600 transition duration-300">
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/courses" className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition duration-300 shadow-lg">
            VIEW MORE COURSES
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesDirectory;