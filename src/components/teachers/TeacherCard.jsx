import React, { useRef } from 'react';
import TeacherAvatar from './TeacherAvatar';
import { FaAward, FaGraduationCap, FaCertificate, FaBookReader } from 'react-icons/fa';

/**
 * TeacherCard Component
 *
 * Props:
 * - teacher: Object from teachers.js
 * - compact: Boolean (true for homepage summary, false for dedicated /teachers page)
 * - onOpenDocument: (doc, teacher, triggerRef) => void
 */
const TeacherCard = ({ teacher, compact = false, onOpenDocument }) => {
  const primaryDoc = teacher.documents?.[0];
  const secondDoc = teacher.documents?.[1];

  const primaryBtnRef = useRef(null);
  const secondBtnRef = useRef(null);

  return (
    <article
      className={`group relative rounded-2xl bg-white border border-gray-150 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1 ${
        compact ? 'p-5 sm:p-6' : 'p-6 sm:p-8'
      }`}
    >
      {/* Top subtle brand accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-500 via-primary-300 to-secondary-500 transition-all duration-500 group-hover:h-2" />

      {/* Main Content */}
      <div className="space-y-4">
        {/* Header: Avatar + Identity */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5">
          <TeacherAvatar
            src={teacher.avatar}
            alt={teacher.avatarAlt || `Avatar of ${teacher.name}`}
            size={compact ? 'sm' : 'md'}
          />

          <div className="space-y-1.5 flex-1 min-w-0">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
              <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2.5 py-0.5 rounded-full border border-primary-200/60">
                {teacher.honorific || 'Sheikh'}
              </span>
              {teacher.narrationBadge && (
                <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 inline-flex items-center gap-1">
                  <FaBookReader className="text-[10px] text-emerald-600" />
                  <span>{teacher.narrationBadge}</span>
                </span>
              )}
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-secondary-800 group-hover:text-secondary-600 transition-colors">
              {teacher.name}
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              {teacher.title}
            </p>
          </div>
        </div>

        {/* Badges Row (Especially Al-Azhar badge for Sheikh Ahmed Gouda) */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {teacher.azharGraduationBadge && (
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary-700 bg-secondary-50 px-3 py-1 rounded-lg border border-secondary-200">
              <FaGraduationCap className="text-secondary-600 text-sm" />
              <span>{teacher.azharGraduationBadge}</span>
            </span>
          )}

          {!compact &&
            teacher.badges?.map((badge, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium text-gray-600 bg-gray-100 px-2.5 py-0.5 rounded-md"
              >
                {badge}
              </span>
            ))}
        </div>

        {/* Authorizing Sheikh / Ijazah Lineage */}
        {teacher.authorizingSheikh && (
          <div className="p-3 rounded-xl bg-gray-50/90 border border-gray-100 space-y-1 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-secondary-800">
              <FaAward className="text-primary-500 text-sm flex-shrink-0" />
              <span>Authorizing Sheikh (Al-Mujeez):</span>
            </div>
            <p className="text-gray-600 leading-relaxed pl-5">
              {teacher.authorizingSheikh}
              {teacher.authorizingTitle && (
                <span className="block text-gray-500 text-[11px] mt-0.5">{teacher.authorizingTitle}</span>
              )}
            </p>
          </div>
        )}

        {/* Bio */}
        {teacher.bio && (
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
            {teacher.bio}
          </p>
        )}
      </div>

      {/* Action Buttons: View Ijazah / View Azhar Certificate */}
      <div className="pt-5 mt-5 border-t border-gray-100 flex flex-wrap gap-2.5">
        {primaryDoc && (
          <button
            ref={primaryBtnRef}
            type="button"
            onClick={() => onOpenDocument?.(primaryDoc, teacher, primaryBtnRef)}
            className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-secondary-500 hover:bg-secondary-600 active:scale-[0.98] text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            aria-label={`${primaryDoc.buttonLabel || 'View Ijazah'} - ${teacher.name}`}
          >
            <FaCertificate className="text-primary-300 text-sm" />
            <span>{primaryDoc.buttonLabel || 'View Ijazah'}</span>
          </button>
        )}

        {secondDoc && (
          <button
            ref={secondBtnRef}
            type="button"
            onClick={() => onOpenDocument?.(secondDoc, teacher, secondBtnRef)}
            className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-primary-50 border border-primary-500 text-primary-700 hover:text-primary-800 active:scale-[0.98] text-xs sm:text-sm font-bold shadow-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            aria-label={`${secondDoc.buttonLabel || 'View Certificate'} - ${teacher.name}`}
          >
            {secondDoc.badge ? (
              <FaGraduationCap className="text-primary-500 text-sm" />
            ) : (
              <FaCertificate className="text-primary-500 text-sm" />
            )}
            <span>{secondDoc.buttonLabel || 'View Certificate'}</span>
          </button>
        )}
      </div>
    </article>
  );
};

export default TeacherCard;
