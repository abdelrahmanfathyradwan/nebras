/**
 * Shared configuration, verified facts and JSON-LD builders for the two
 * USA-focused landing pages.
 *
 * Every value here must be traceable to the academy knowledge base or the
 * existing site content. Anything the owner still has to provide is listed
 * in OWNER_TODO and rendered as an honest fallback instead of a made-up fact.
 */

export const SITE_URL = 'https://www.nebrasacadmy.com';
export const PAGE_PATHS = {
  classes: '/online-quran-classes-usa',
  guide: '/learn-quran-online-usa',
};

export const ACADEMY = {
  name: 'Nebras Academy',
  legalName: 'Nebras Academy for Teaching the Holy Quran',
  email: 'info@nebrasacadmy.com',
  telephone: '+20-114-616-2847',
  telephoneDisplay: '+20 114 616 2847',
  telephoneE164: '+201146162847',
  whatsappUrl: 'https://wa.me/201146162847',
  whatsappChannel: 'https://whatsapp.com/channel/0029Vb8mO30BadmjZ9lXxG2d',
  telegram: 'https://t.me/nebrasacademi',
  youtube: 'https://www.youtube.com/@Nebraskacadmey',
  facebook:
    'https://www.facebook.com/people/Nebras-Academy-for-Teaching-the-Holy-Quran/61595964628884/',
  logo: `${SITE_URL}/Logo.png`,
  basedIn: 'Cairo, Egypt',
};

export const PRICES = {
  baseRate: 8,
  discountedRate: 6,
  individualDiscountMonthlyHours: 10,
  maxStudents: 5,
  minStudents: 1,
};

/**
 * The owner must confirm the items below. `null` / empty values trigger a
 * clearly worded fallback in the UI, so nothing unverified is published.
 */
export const OWNER_TODO = {
  trialLengthMinutes: null, // e.g. 30
  availableSlots: [], // [{ usZone: 'ET', usTime: '4:00 PM – 8:00 PM', cairoTime: '11:00 PM – 3:00 AM' }]
  reviews: [], // [{ firstName: 'Amina', location: 'Texas, USA', quote: '...' }]
  femaleTeacherRosterConfirmed: null, // true / false once confirmed
  studentCount: null,
  videos: [], // [{ youtubeId: '...', title: '...', summary: '...' }]
  // Real lesson screenshots, shared by the owner on 2026-10-29 with written parental
  // consent confirmed. Student display names are covered; published teacher names stay.
  consentedPhotos: [
    {
      src: '/images/sessions/quran-class-one-to-one-lesson.webp',
      alt: 'Screenshot of a one-to-one online Quran lesson: the teacher on video in the corner and a discussion slide shared on screen',
      width: 1200,
      height: 564,
      caption: 'One-to-one lesson: teacher on video, lesson slide shared on screen.',
    },
    {
      src: '/images/sessions/quran-class-group-lesson-board.webp',
      alt: 'Screenshot of a small-group online Quran class with the teacher pinned and a numbered review board on screen',
      width: 1200,
      height: 456,
      caption: 'Small group: a review board game keeps every student answering.',
    },
    {
      src: '/images/sessions/quran-class-tajweed-group-session.webp',
      alt: 'Screenshot of an online Tajweed class with the teacher and several students on video',
      width: 1200,
      height: 477,
      caption: 'Tajweed class: the teacher listens to each student recite in turn.',
    },
    {
      src: '/images/sessions/quran-class-teen-group-session.webp',
      alt: 'Screenshot of an online Quran class with a teacher and five older students on video',
      width: 1200,
      height: 621,
      caption: 'Older students: recitation first, then discussion of the passage.',
    },
  ],
  timelineStatements: null, // owner-confirmed ranges if you want them published
};

export const COURSE_LINKS = [
  {
    to: '/courses/tajweed',
    label: 'Quran Tajweed and Recitation',
    description: 'Makharij, Sifat and applied Tajweed rules with live correction.',
  },
  {
    to: '/courses/memorization',
    label: 'Quran Memorization (Hifz)',
    description: 'A structured Hifz plan with scheduled revision (Muraja’ah).',
  },
  {
    to: '/courses/reading',
    label: 'Quran Reading (Noor Al-Bayan)',
    description: 'Start from the Arabic alphabet and build fluent reading.',
  },
  {
    to: '/courses/memorizing-juz-amma',
    label: "Memorizing Juz' Amma (Part 30)",
    description: 'A foundational memorization track for children and beginners.',
  },
  {
    to: '/courses/recitation',
    label: 'Quran Recitation (Tilaawah)',
    description: 'Continuous recitation practice with immediate teacher feedback.',
  },
  {
    to: '/courses/arabic',
    label: 'Arabic Language (Fusha)',
    description: 'Nahw, Sarf, reading and conversation for adults and youth.',
  },
  {
    to: '/courses/arabic-kids',
    label: 'Arabic for Kids',
    description: 'Vocabulary, speaking and early literacy in a child-friendly format.',
  },
  {
    to: '/courses/islamic-studies',
    label: 'Islamic Studies for Kids & Youth',
    description: 'Aqeedah, Fiqh of worship, Seerah and Adab.',
  },
];

/**
 * Example clock conversion only. It is deliberately NOT a promise of a
 * specific free slot; exact availability is confirmed when the trial is booked.
 */
export const US_TIMEZONE_ROWS = [
  {
    usZone: 'Eastern (ET)',
    usExample: '4:00 PM – 8:00 PM',
    cairoExample: '11:00 PM – 3:00 AM (next day)',
    offset: 'Cairo is usually 7 hours ahead',
  },
  {
    usZone: 'Central (CT)',
    usExample: '3:00 PM – 7:00 PM',
    cairoExample: '11:00 PM – 3:00 AM (next day)',
    offset: 'Cairo is usually 8 hours ahead',
  },
  {
    usZone: 'Mountain (MT)',
    usExample: '2:00 PM – 6:00 PM',
    cairoExample: '11:00 PM – 3:00 AM (next day)',
    offset: 'Cairo is usually 9 hours ahead',
  },
  {
    usZone: 'Pacific (PT)',
    usExample: '1:00 PM – 5:00 PM',
    cairoExample: '11:00 PM – 3:00 AM (next day)',
    offset: 'Cairo is usually 10 hours ahead',
  },
];

export const organizationRef = { '@id': `${SITE_URL}/#organization` };

export const CONTENT_DATES = {
  published: '2026-10-28',
  modified: '2026-10-28',
};

/**
 * FAQ answers contain the same [[label|/path]] markup as the page body, which
 * must never leak into JSON-LD. Schema answers need plain text.
 */
function plainText(text = '') {
  return text.replace(/\[\[([^\]|]+)\|[^\]]+\]\]/g, '$1').replace(/\s+/g, ' ').trim();
}

export function breadcrumbSchema(pageName, pagePath) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: pageName, item: `${SITE_URL}${pagePath}` },
    ],
  };
}

export function faqPageSchema(faqs, pagePath) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}${pagePath}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: plainText(faq.answerForSchema || faq.answer),
      },
    })),
  };
}

export function serviceSchema({ name, description, pagePath }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}${pagePath}#service`,
    name,
    serviceType: 'Online Quran classes',
    description,
    url: `${SITE_URL}${pagePath}`,
    provider: organizationRef,
    areaServed: { '@type': 'Country', name: 'United States' },
    audience: {
      '@type': 'PeopleAudience',
      suggestedMinAge: 5,
      audienceType: 'Children, teenagers and adults in the United States',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE_URL}/trial`,
      servicePhone: ACADEMY.telephone,
      availableLanguage: ['English', 'Arabic'],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: String(PRICES.baseRate),
      description: `Base rate of $${PRICES.baseRate} per hour per student, reduced to $${PRICES.discountedRate} per hour for one-on-one bookings of ${PRICES.individualDiscountMonthlyHours} or more hours per month and for group classes from the first hour.`,
      url: `${SITE_URL}/trial`,
      availability: 'https://schema.org/InStock',
    },
  };
}

export function teachersPersonSchema(teachers) {
  return teachers.map((teacher) => {
    const credentials = [];

    if (teacher.id === 'karim-othman') {
      credentials.push({
        '@type': 'EducationalOccupationalCredential',
        name: "Ijazah in the Holy Quran — narration of Hafs from 'Asim via the Shatibiyyah route",
        credentialCategory: 'Ijazah',
        recognizedBy: {
          '@type': 'Person',
          name: teacher.authorizingSheikh,
          description: teacher.authorizingTitle,
        },
      });
    }

    if (teacher.id === 'ahmed-gouda') {
      credentials.push({
        '@type': 'EducationalOccupationalCredential',
        name: "Tajweed Ijazah in the narration of Hafs from 'Asim",
        credentialCategory: 'Ijazah',
      });
      credentials.push({
        '@type': 'EducationalOccupationalCredential',
        name: "Bachelor's degree, Faculty of Islamic Da'wah, Al-Azhar University (Very Good with Honors)",
        credentialCategory: 'degree',
        recognizedBy: {
          '@type': 'CollegeOrUniversity',
          name: 'Al-Azhar University',
        },
      });
    }

    return {
      '@type': 'Person',
      '@id': `${SITE_URL}/teachers#${teacher.id}`,
      name: teacher.name,
      alternateName: teacher.arabicName,
      jobTitle: teacher.title,
      description: teacher.bio,
      url: `${SITE_URL}/teachers`,
      worksFor: organizationRef,
      knowsLanguage: ['Arabic', 'English'],
      hasCredential: credentials,
    };
  });
}

export function videoObjectSchema(videos, pagePath) {
  return videos
    .filter((video) => Boolean(video.youtubeId))
    .map((video) => ({
      '@type': 'VideoObject',
      name: video.title,
      description: video.summary,
      thumbnailUrl: `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`,
      uploadDate: video.uploadDate || '2026-10-28',
      embedUrl: `https://www.youtube-nocookie.com/embed/${video.youtubeId}`,
      url: `${SITE_URL}${pagePath}#video-${video.youtubeId}`,
    }));
}

export function articleSchema({ headline, description, pagePath, image }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE_URL}${pagePath}#article`,
    headline,
    description,
    image: `${SITE_URL}${image}`,
    datePublished: CONTENT_DATES.published,
    dateModified: CONTENT_DATES.modified,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${pagePath}` },
    author: organizationRef,
    publisher: organizationRef,
    inLanguage: 'en-US',
  };
}
