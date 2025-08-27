import React from "react";
import { Link } from 'react-router-dom';

const MainContent = () => {
  return (
        <div className='flex flex-col items-center mb-5'>
          <div className="bg-white">
            {/* Section 1: Certified Teachers */}
            <section className="py-16 px-4 bg-gray-50">
              <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-600 mb-8">
                  Certified Quran teachers. Flexible schedules.<br/><strong className='text-secondary-300'>One-on-one classes</strong> available from anywhere.
                </h2>
                <p className="text-gray-700 w-[85%] mx-auto text-lg leading-relaxed text-start">
                  <stronge className="text-primary-500 font-bold">Nebras Academy</stronge> offers exceptional <stronge className="text-primary-500 font-semibold">online Quran education </stronge>
                  with certified teachers from Al-Azhar and other prestigious institutions. Our flexible scheduling allows students worldwide to learn at their convenience. We provide personalized one-on-one sessions tailored to each student's level and pace. With interactive learning tools and a structured curriculum.
                </p>
                <p className="text-gray-700 w-[85%] mx-auto text-lg leading-relaxed text-start">
                  <span className='font-bold'>We</span> make <stronge className="text-primary-500 font-semibold">Quran learning accessible, effective, and enjoyable</stronge> for all ages. Our mission is to nurture a deep connection with the Quran while ensuring proper <stronge className="text-primary-800 font-semibold">Tajweed</stronge> and understanding.
                </p>
              </div>
            </section>

            {/* Section 2: Why Learn with Us (Image Right) */}
            <section className="py-16 px-4">
              <div className="container mx-auto flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 pl-3 ">
                <div className='flex gap-5'> 
                  <span className='border-l-4 border-secondary-300'></span>
                  <h2 className="text-3xl font-bold text-secondary-600 mb-4">Why Learn Quran with Nebras Academy Online?</h2>
                </div>
                  <p className="text-gray-700 text-lg leading-10">
                    At Nebras Academy, we combine traditional Quran teaching methods with modern technology for an optimal learning experience. Our qualified teachers provide individual attention, ensuring <span className='text-primary-600 font-semibold'>correct pronunciation and understanding</span>. The online platform allows learning from home while maintaining high educational standards. We offer progress tracking, regular assessments, and a supportive learning environment. Whether you're a beginner or advanced student, our customized approach helps you achieve your Quranic goals effectively and with confidence.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="/images/doaa.jpg" 
                    alt="Online Quran Learning"
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </section>

            {/* Section 3: Learn Quran and Arabic (Image Left) */}
            <section className="py-16 px-4 bg-gray-50">
              <div className="container mx-auto flex flex-col md:flex-row items-start pl-3">
                <div className="w-full h-1/2 md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
                  <img 
                    src="/images/muslim.jpg" 
                    alt="Quran and Arabic Learning"
                    className="h-[210px] md:h-[400px] rounded-lg shadow-lg w-full object-cover object-center"
                  />
                </div>
                <div className="md:w-1/2 md:pl-8 order-1 md:order-2">
                  <div className='flex gap-5'> 
                    <span className='border-l-4 border-secondary-300'></span>
                    <h2 className="text-3xl font-bold text-secondary-600 mb-4">Learn Quran and Arabic Online with Experts</h2>
                  </div>
                  <p className="text-gray-700 text-lg leading-10 text-start">
                    Our comprehensive Arabic language program complements Quran studies, helping students understand the divine text in its original language. Expert instructors teach both classical and modern Arabic, focusing on reading, writing, and conversation skills. The integrated approach connects Arabic learning directly to Quranic verses, enhancing comprehension and memorization. Flexible course levels accommodate all proficiency levels, from absolute beginners to advanced learners. Interactive lessons and cultural insights make the learning process engaging and meaningful.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Learn Quran and Arabic (Image Right) */}
            <section className="py-16 px-4">
              <div className="container mx-auto flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 pl-3 ">
                <div className='flex gap-5'> 
                  <span className='border-l-4 border-secondary-300'></span>
                  <h2 className="text-3xl font-bold text-secondary-600 mb-4">Ready to Learn Quran the Right Way?<br/>
                  Start Today with IQRA Online</h2>
                </div>
                  <p className="text-gray-700 text-lg leading-10">
                  Join thousands of satisfied students who have transformed their Quranic recitation and understanding through our proven teaching methods. Take the first step in your spiritual journey <span className='text-primary-400 font-semibold'>with a free trial class</span> tailored to your level and goals.
                  </p>
                </div>
                <div className="w-full md:w-1/2">
                  <img 
                    src="/images/Modesty.jpg" 
                    alt="Online Quran Learning"
                    className="h-[210px] md:h-[400px] rounded-lg shadow-lg w-full object-cover object-center"
                  />
                </div>
              </div>
            </section>
          </div>
          <Link to="https://wa.me/201146162847" className='flex text-center bg-secondary-400 transition duration-300 shadow-lg text-white font-bold hover:bg-primary-500 p-5 justify-center items-center w-1/3 rounded-full'>Sign Up</Link>
        </div>
  );
};

export default MainContent;
