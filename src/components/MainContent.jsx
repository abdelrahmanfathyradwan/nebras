import React from "react";
import { Link } from 'react-router-dom';

const MainContent = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className="bg-white w-full">
        {/* Section 1: Certified Teachers */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-600 mb-8 leading-tight">
              Certified Quran teachers. Flexible schedules.<br/><strong className='text-secondary-300'>One-on-one classes</strong> available from anywhere.
            </h2>
            <p className="text-gray-700 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed text-start mb-4">
              <strong className="text-primary-500 font-bold">Nebras Academy</strong> offers exceptional <strong className="text-primary-500 font-semibold">online Quran education </strong>
              with certified teachers from Al-Azhar and other prestigious institutions. Our flexible scheduling allows students worldwide to learn at their convenience. We provide personalized one-on-one sessions tailored to each student's level and pace. With interactive learning tools and a structured curriculum.
            </p>
            <p className="text-gray-700 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed text-start">
              <span className='font-bold'>We</span> make <strong className="text-primary-500 font-semibold">Quran learning accessible, effective, and enjoyable</strong> for all ages. Our mission is to nurture a deep connection with the Quran while ensuring proper <strong className="text-primary-800 font-semibold">Tajweed</strong> and understanding.
            </p>
          </div>
        </section>

        {/* Section 2: Why Learn with Us (Image Right) */}
        <section className="section-padding">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2">
              <div className='flex gap-4 mb-4'>
                <span className='border-l-4 border-primary-500 rounded-full'></span>
                <h2 className="text-2xl sm:text-3xl font-bold text-secondary-600">Why Learn Quran with Nebras Academy Online?</h2>
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-8">
                At Nebras Academy, we combine traditional Quran teaching methods with modern technology for an optimal learning experience. Our qualified teachers provide individual attention, ensuring <span className='text-primary-600 font-semibold'>correct pronunciation and understanding</span>. The online platform allows learning from home while maintaining high educational standards. We offer progress tracking, regular assessments, and a supportive learning environment. Whether you're a beginner or advanced student, our customized approach helps you achieve your Quranic goals effectively and with confidence.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <img 
                  src="/images/doaa.jpg" 
                  alt="Online Quran Learning"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Learn Quran and Arabic (Image Left) */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <img 
                  src="/images/muslim.jpg" 
                  alt="Quran and Arabic Learning"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                  className="h-[240px] md:h-[380px] w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className='flex gap-4 mb-4'>
                <span className='border-l-4 border-primary-500 rounded-full'></span>
                <h2 className="text-2xl sm:text-3xl font-bold text-secondary-600">Learn Quran and Arabic Online with Experts</h2>
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-8 text-start">
                Our comprehensive Arabic language program complements Quran studies, helping students understand the divine text in its original language. Expert instructors teach both classical and modern Arabic, focusing on reading, writing, and conversation skills. The integrated approach connects Arabic learning directly to Quranic verses, enhancing comprehension and memorization. Flexible course levels accommodate all proficiency levels, from absolute beginners to advanced learners. Interactive lessons and cultural insights make the learning process engaging and meaningful.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Learn Quran and Arabic (Image Right) */}
        <section className="section-padding">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2">
              <div className='flex gap-4 mb-4'>
                <span className='border-l-4 border-primary-500 rounded-full'></span>
                <h2 className="text-2xl sm:text-3xl font-bold text-secondary-600">Ready to Learn Quran the Right Way?<br/>
                Start Today with Nebras Academy</h2>
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-8">
                Join thousands of satisfied students who have transformed their Quranic recitation and understanding through our proven teaching methods. Take the first step in your spiritual journey <span className='text-primary-500 font-semibold'>with a free trial class</span> tailored to your level and goals.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <img 
                  src="/images/Modesty.jpg" 
                  alt="Online Quran Learning"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                  className="h-[240px] md:h-[380px] w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <div className="w-full flex justify-center py-12 bg-white">
        <a
          href="https://wa.me/201146162847"
          target="_blank"
          rel="noopener noreferrer"
          className='inline-flex text-center bg-secondary-500 transition-all duration-300 shadow-lg text-white font-bold hover:bg-primary-500 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 px-8 py-4 justify-center items-center rounded-full text-base sm:text-lg'
        >
          Book Your Free Trial
        </a>
      </div>
    </div>
  );
};

export default MainContent;
