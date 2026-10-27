import React, { useState } from 'react';

/**
 * TeacherAvatar Component
 *
 * Requirements:
 * - Featureless, blank-face cartoon avatar (NO facial features, NO real photos).
 * - Softly rounded/circular frame matching the academy's palette (secondary/primary).
 * - Fixed, consistent dimensions across all cards.
 * - Descriptive Arabic alt text.
 * - No zoom/enlarge interaction.
 * - Built-in dignified vector fallback for placeholders before files are dropped in.
 */
const TeacherAvatar = ({
  src,
  alt,
  className = '',
  size = 'md', // 'sm' | 'md' | 'lg'
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'w-20 h-20 sm:w-24 sm:h-24',
    md: 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32',
    lg: 'w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40',
  }[size] || 'w-28 h-28';

  return (
    <div
      className={`relative rounded-full p-1 bg-gradient-to-tr from-primary-500 via-primary-300 to-secondary-500 shadow-md flex-shrink-0 select-none overflow-hidden ${sizeClasses} ${className}`}
      aria-hidden="false"
    >
      <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-[#F7F9F6] to-[#E2E8E4] flex items-center justify-center">
        {!imageError && src ? (
          <img
            src={src}
            alt={alt}
            width="160"
            height="160"
            loading="lazy"
            decoding="async"
            draggable="false"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top select-none pointer-events-none"
          />
        ) : (
          /* Featureless, blank-face cartoon illustration (vector fallback) */
          <svg
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full pointer-events-none select-none"
            aria-label={alt}
            role="img"
          >
            {/* Soft ambient background */}
            <circle cx="60" cy="60" r="58" fill="#EAF1ED" />

            {/* Shoulders / Robe (Jubbah/Thobe in Nebras secondary green) */}
            <path
              d="M16 116C16 96 32 84 60 84C88 84 104 96 104 116"
              fill="#023535"
            />
            {/* Inner Collar (White) */}
            <path
              d="M48 84L60 102L72 84H48Z"
              fill="#FFFFFF"
            />
            {/* Vest / Trim Accent (Gold/Orange) */}
            <path
              d="M44 86L60 114L76 86"
              stroke="#FF7D29"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Neck */}
            <rect x="52" y="66" width="16" height="20" rx="4" fill="#E8C9A6" />

            {/* Deliberately blank, featureless face oval (NO eyes, NO nose, NO mouth) */}
            <ellipse cx="60" cy="54" rx="20" ry="24" fill="#F4D9BD" />

            {/* Islamic Headdress (Imamah/Turban - Pure White & Green/Gold Band) */}
            {/* Turban dome */}
            <path
              d="M36 46C36 28 46 16 60 16C74 16 84 28 84 46C84 48 82 50 80 50C76 40 44 40 40 50C38 50 36 48 36 46Z"
              fill="#FAFAFA"
            />
            {/* Turban wrap folds */}
            <path
              d="M34 44C38 36 50 34 60 34C70 34 82 36 86 44C84 48 76 50 60 50C44 50 36 48 34 44Z"
              fill="#ECEFF1"
            />
            {/* Gold/Green accent headband */}
            <path
              d="M35 44C43 38 77 38 85 44"
              stroke="#023535"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M38 43C45 39 75 39 82 43"
              stroke="#FF7D29"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default TeacherAvatar;
