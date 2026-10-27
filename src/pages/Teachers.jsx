import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { teachers } from '../data/teachers';
import TeacherCard from '../components/teachers/TeacherCard';
import IjazahLightbox from '../components/teachers/IjazahLightbox';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import BookingModal from '../components/BookingModal';
import {
  FaAward,
  FaBookOpen,
  FaGraduationCap,
  FaShieldAlt,
  FaCheckCircle,
  FaCalendarCheck,
  FaCertificate,
  FaArrowRight,
} from 'react-icons/fa';

const Teachers = () => {
  const [activeDoc, setActiveDoc] = useState(null);
  const [activeTeacher, setActiveTeacher] = useState(null);
  const [triggerRef, setTriggerRef] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenDoc = (doc, teacher, ref) => {
    setActiveDoc(doc);
    setActiveTeacher(teacher);
    setTriggerRef(ref);
  };

  const handleCloseDoc = () => {
    setActiveDoc(null);
    setActiveTeacher(null);
  };

  // Schema.org structured data for Teachers & Credentials
  const teachersSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Nebras Academy Certified Quran Teachers & Ijazah Scholars',
    description: 'Certified Quran teachers and Al-Azhar University graduates holding authentic Ijazah with connected chains of transmission (Sanad).',
    url: 'https://www.nebrasacadmy.com/teachers',
    itemListElement: teachers.map((teacher, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Person',
        name: teacher.name,
        alternateName: teacher.arabicName,
        jobTitle: teacher.title,
        description: teacher.bio,
        worksFor: {
          '@type': 'EducationalOrganization',
          name: 'Nebras Academy',
          url: 'https://www.nebrasacadmy.com',
        },
        hasCredential: teacher.documents?.map((doc) => ({
          '@type': 'EducationalOccupationalCredential',
          name: doc.title,
          credentialCategory: 'Ijazah',
          recognizedBy: doc.authorizingSheikh
            ? {
                '@type': 'Person',
                name: doc.authorizingSheikh,
              }
            : undefined,
        })),
      },
    })),
  };

  return (
    <div className="bg-gradient-to-b from-sage-100/30 via-white to-gray-50 min-h-screen py-12 md:py-20 page-enter">
      {/* SEO Configuration */}
      <SEO
        title="Our Teachers & Ijazah – Certified Quran Scholars with Connected Sanad | Nebras Academy"
        description="Meet our verified Quran scholars and Al-Azhar graduates holding authentic Ijazah and unbroken chains of transmission (Sanad) back to Prophet Muhammad (PBUH)."
        canonical="/teachers"
      />
      <StructuredData data={teachersSchema} />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 text-xs sm:text-sm text-gray-500 flex items-center gap-2">
          <Link to="/" className="hover:text-primary-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-secondary-700 font-semibold">Our Teachers &amp; Ijazah</span>
        </nav>

        {/* Hero & Intro Section (Significance of Sanad / Connected Transmission) */}
        <header className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold mb-4 shadow-sm">
            <FaAward className="text-emerald-600 text-sm" />
            <span>Connected Chains of Transmission (Sanad Muttasil) &amp; Verified Ijazah</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-800 tracking-tight leading-tight">
            Our Teachers &amp; Ijazah
          </h1>
          <p className="text-base sm:text-lg text-primary-600 font-bold mt-2">
            Unbroken Chain of Transmission to Prophet Muhammad ﷺ • Al-Azhar University Scholars
          </p>

          <div className="w-20 h-1 rounded-full bg-primary-500 mx-auto my-6" />

          {/* Intro text on unbroken chain of transmission (Sanad) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-150 shadow-sm text-left space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            <h2 className="text-lg sm:text-xl font-bold text-secondary-800 flex items-center gap-2">
              <FaBookOpen className="text-primary-500 text-base" />
              <span>The Significance of an Unbroken Chain of Transmission (Sanad)</span>
            </h2>
            <p>
              In the Islamic tradition, learning the Holy Quran through oral transmission (<strong className="text-secondary-800">Talaqqi</strong>) and an unbroken chain of authorization (<strong className="text-secondary-800">Sanad Muttasil</strong>) from teacher to student, generation after generation back to the Prophet Muhammad ﷺ, is the sacred fortress that preserves the divine text and exact phonetics. As the great scholar Abdullah ibn al-Mubarak stated:{' '}
              <em className="text-secondary-800 font-semibold">"The chain of transmission (Sanad) is part of the religion; were it not for the Sanad, anyone would say whatever they wished."</em>
            </p>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              At <strong className="text-secondary-800 font-semibold">Nebras Academy</strong>, we uphold this sacred trust. Our instructors are not only fluent and qualified educators; they are verified scholars holding authentic Ijazahs from prominent Quran authorities at Al-Azhar University, ensuring that you and your children learn pure, precise, and authentic Quran recitation.
            </p>
          </div>
        </header>

        {/* Teachers Cards Grid */}
        <section aria-labelledby="teachers-list-heading" className="mb-20">
          <h2 id="teachers-list-heading" className="sr-only">
            List of Nebras Academy Certified Teachers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
            {teachers.map((teacher) => (
              <TeacherCard
                key={teacher.id}
                teacher={teacher}
                compact={false}
                onOpenDocument={handleOpenDoc}
              />
            ))}
          </div>
        </section>

        {/* Trust Badges & Methodology Pillars */}
        <section className="mb-20 p-8 sm:p-10 rounded-3xl bg-secondary-500 text-white shadow-xl relative overflow-hidden">
          {/* Ambient decorative glow */}
          <div
            className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full bg-primary-500/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-primary-300 font-bold">
                Academic Rigor &amp; Sacred Trust
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                How We Select Our Teachers at Nebras Academy
              </h2>
              <div className="w-16 h-1 rounded-full bg-primary-500 mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500 text-white font-bold">
                  <FaCertificate className="text-base" />
                </div>
                <h3 className="text-base font-bold text-primary-300">Sanad Verification</h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Rigorous verification of the authorizing sheikhs and lineage to ensure unbroken, authentic transmission back to the Prophet ﷺ.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500 text-white font-bold">
                  <FaGraduationCap className="text-base" />
                </div>
                <h3 className="text-base font-bold text-primary-300">Al-Azhar Heritage</h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Graduates from the prestigious faculties of Al-Azhar University, trained in Quranic sciences, Arabic linguistics, and Islamic Da'wah.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500 text-white font-bold">
                  <FaShieldAlt className="text-base" />
                </div>
                <h3 className="text-base font-bold text-primary-300">Pedagogical Excellence</h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Assessed for teaching methodology, patience, friendly rapport with children, and the ability to explain complex Tajweed concepts simply.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="text-center max-w-2xl mx-auto py-8">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary-800">
              Start Your Quran Journey with Certified Scholars Today
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Book a free 1-on-1 trial class with our instructors. Assess your level, discuss your goals, and begin reciting with confidence.
            </p>
            <div className="pt-3">
              <button
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-primary-500 hover:bg-primary-600 active:scale-[0.98] text-white text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaCalendarCheck className="text-lg" />
                <span>Book Your Free Trial Class</span>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox for certificates */}
      <IjazahLightbox
        isOpen={Boolean(activeDoc)}
        onClose={handleCloseDoc}
        document={activeDoc}
        teacher={activeTeacher}
        triggerRef={triggerRef}
      />

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};

export default Teachers;
