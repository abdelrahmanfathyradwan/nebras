import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { teachers } from '../../data/teachers';
import TeacherCard from './TeacherCard';
import IjazahLightbox from './IjazahLightbox';
import { FaGraduationCap, FaArrowRight, FaCheckCircle, FaAward } from 'react-icons/fa';

/**
 * TeachersSection Component (Homepage)
 *
 * Requirements:
 * - English UI.
 * - Heading: "Quran Teachers with a Connected Sanad"
 * - Compact versions of both teacher cards
 * - Button: "Meet All Our Teachers" linking to /teachers
 * - Placed after features and BEFORE pricing & registration
 */
const TeachersSection = () => {
  const [activeDoc, setActiveDoc] = useState(null);
  const [activeTeacher, setActiveTeacher] = useState(null);
  const [triggerRef, setTriggerRef] = useState(null);

  const handleOpenDoc = (doc, teacher, ref) => {
    setActiveDoc(doc);
    setActiveTeacher(teacher);
    setTriggerRef(ref);
  };

  const handleCloseDoc = () => {
    setActiveDoc(null);
    setActiveTeacher(null);
  };

  return (
    <section
      id="teachers-preview"
      className="section-padding bg-gradient-to-b from-white via-sage-100/40 to-white relative overflow-hidden"
      aria-labelledby="teachers-section-title"
    >
      {/* Decorative background ambient glows */}
      <div
        className="pointer-events-none absolute -top-24 right-0 w-96 h-96 rounded-full bg-primary-500/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-0 w-96 h-96 rounded-full bg-secondary-500/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold mb-4 shadow-sm">
            <FaAward className="text-emerald-600 text-sm" />
            <span>Verified Ijazah Holders with Published Credentials</span>
          </div>

          <h2
            id="teachers-section-title"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-600 tracking-tight leading-snug"
          >
            Quran Teachers with a Connected Sanad
          </h2>

          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            At Nebras Academy, students learn the Holy Quran as it was revealed through authentic one-on-one transmission (<span className="text-secondary-700 font-semibold">Talaqqi</span>) from qualified scholars holding unbroken chains of transmission (<span className="text-secondary-700 font-semibold">Sanad</span>) back to the Prophet Muhammad ﷺ.
          </p>

          <div className="w-16 h-1 rounded-full bg-primary-500 mx-auto mt-5" />
        </div>

        {/* 2 Teacher Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-10">
          {teachers.map((teacher) => (
            <TeacherCard
              key={teacher.id}
              teacher={teacher}
              compact={true}
              onOpenDocument={handleOpenDoc}
            />
          ))}
        </div>

        {/* Trust Points Mini-Bar */}
        <div className="max-w-4xl mx-auto mb-10 p-4 rounded-xl bg-white border border-gray-150 shadow-sm flex flex-wrap items-center justify-around gap-4 text-xs sm:text-sm text-gray-700">
          <div className="flex items-center gap-2 font-medium">
            <FaCheckCircle className="text-primary-500 text-sm" />
            <span>Connected transmission back to the Prophet ﷺ</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <FaCheckCircle className="text-primary-500 text-sm" />
            <span>Al-Azhar credentials published where applicable</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <FaCheckCircle className="text-primary-500 text-sm" />
            <span>Personalized 1-on-1 instruction for all ages</span>
          </div>
        </div>

        {/* CTA Button to /teachers */}
        <div className="text-center">
          <Link
            to="/teachers"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-secondary-500 hover:bg-secondary-600 active:scale-[0.98] text-white text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Meet All Our Teachers &amp; View Ijazahs</span>
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Lightbox for viewing credentials */}
      <IjazahLightbox
        isOpen={Boolean(activeDoc)}
        onClose={handleCloseDoc}
        document={activeDoc}
        teacher={activeTeacher}
        triggerRef={triggerRef}
      />
    </section>
  );
};

export default TeachersSection;
