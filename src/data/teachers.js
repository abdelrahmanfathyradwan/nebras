/**
 * -----------------------------------------------------------------------------
 * NEBRAS ACADEMY - TEACHERS & IJAZAT DATA
 * -----------------------------------------------------------------------------
 * ⚠️ PRIVACY NOTICE (CRITICAL):
 * Official documents such as Al-Azhar graduation certificates and Ijazah
 * certificates may contain sensitive personal data (e.g. National ID numbers,
 * certificate serial numbers, birth dates, personal home addresses).
 *
 * DO NOT transcribe or expose any such sensitive personal information in this file
 * or in text. All images uploaded to `/ijazat/` MUST have sensitive
 * fields permanently redacted before uploading.
 *
 * ⚠️ AVATAR POLICY:
 * In accordance with academy guidelines, cartoon illustrations with a deliberately
 * blank, featureless face are used. Real photographs of teachers are NEVER used.
 * -----------------------------------------------------------------------------
 */

export const teachers = [
  {
    id: 'karim-othman',
    name: 'Sheikh Karim Ahmed Othman Ahmed',
    arabicName: 'الشيخ كريم أحمد عثمان أحمد',
    honorific: 'Sheikh',
    title: 'Quran Recitation & Tajweed Instructor with Connected Sanad',
    arabicTitle: 'معلم ومقرئ القرآن الكريم بالسند المتصل',
    narration: "Narration of Hafs from 'Asim via the Shatibiyyah route",
    arabicNarration: 'رواية حفص عن عاصم من طريق الشاطبية',
    narrationBadge: "Hafs from 'Asim (Shatibiyyah)",
    authorizingSheikh: "Sheikh Abu 'Ammar Muhammad ibn Hasan ibn Ibrahim 'Alyan",
    authorizingTitle: 'Quran and Tajweed instructor and faculty member at Al-Azhar University',
    arabicAuthorizingSheikh: "فضيلة الشيخ أبو عمار محمد بن حسن بن إبراهيم عليان (مدرس القرآن والتجويد وعضو هيئة التدريس بجامعة الأزهر)",
    bio: 'Certified Quran reciter and teacher with an authentic unbroken chain of transmission (Sanad) connecting directly to the Prophet Muhammad ﷺ. Known for his patience, structured pedagogy, and excellence in teaching Tajweed articulation to kids and adults.',
    avatar: null, // Built-in featureless blank cartoon illustration via TeacherAvatar
    avatarAlt: 'Featureless blank-face cartoon avatar of Sheikh Karim Ahmed Othman',
    badges: [
      'Holy Quran Ijazah',
      "Hafs from 'Asim",
      'Shatibiyyah Route',
      'Connected Sanad',
    ],
    documents: [
      {
        id: 'karim-ijaza-1',
        title: "Ijazah in the Holy Quran – Narration of Hafs from 'Asim (Page 1)",
        arabicTitle: 'إجازة في القرآن الكريم برواية حفص عن عاصم (الصفحة الأولى)',
        buttonLabel: 'View Ijazah (Page 1)',
        image: '/ijazat/karemOsmanIjaza (1).png',
        alt: "Ijazah document of Sheikh Karim Ahmed Othman Ahmed in the Holy Quran - Hafs from 'Asim (Page 1)",
        authorizingSheikh: "Sheikh Abu 'Ammar Muhammad ibn Hasan ibn Ibrahim 'Alyan",
        authorizingTitle: 'Faculty Member & Quran Instructor at Al-Azhar University',
        narration: "Hafs from 'Asim via Shatibiyyah",
        description: 'Official authorization (Ijazah) granting permission to recite and teach the Holy Quran according to the verified recitation of Hafs from Asim with an unbroken chain of transmission to the Messenger of Allah ﷺ.',
      },
      {
        id: 'karim-ijaza-2',
        title: "Ijazah in the Holy Quran – Connected Chain of Transmission (Page 2)",
        arabicTitle: 'إجازة في القرآن الكريم - سلسلة السند المتصل (الصفحة الثانية)',
        buttonLabel: 'View Ijazah (Page 2)',
        image: '/ijazat/karemOsmanIjaza (2).png',
        alt: 'Ijazah chain of transmission document of Sheikh Karim Ahmed Othman (Page 2)',
        authorizingSheikh: "Sheikh Abu 'Ammar Muhammad ibn Hasan ibn Ibrahim 'Alyan",
        authorizingTitle: 'Faculty Member & Quran Instructor at Al-Azhar University',
        narration: "Hafs from 'Asim via Shatibiyyah",
        description: 'Document outlining the verified names of the venerable scholars in the unbroken chain of transmission (Sanad) generation after generation back to the Prophet Muhammad ﷺ.',
      },
    ],
  },
  {
    id: 'ahmed-gouda',
    name: 'Sheikh Ahmed Gouda Mahmoud Abdel Ghani',
    arabicName: 'الشيخ أحمد جودة محمود عبد الغني',
    honorific: 'Sheikh',
    title: 'Tajweed & Islamic Studies Instructor, Al-Azhar University Graduate',
    arabicTitle: 'معلم التجويد والقرآن الكريم وخريج جامعة الأزهر',
    narration: "Tajweed Ijazah in the narration of Hafs from 'Asim",
    arabicNarration: 'إجازة تجويد برواية حفص عن عاصم',
    narrationBadge: "Tajweed Ijazah – Hafs from 'Asim",
    azharGraduationBadge: "Graduate of Al-Azhar University – Faculty of Islamic Da'wah",
    authorizingSheikh: 'Eminent Quran scholars and reciters at Al-Azhar Al-Sharif',
    arabicAuthorizingSheikh: 'نخبة من علماء ومقرئي القرآن الكريم بالأزهر الشريف',
    bio: "Honors graduate of the Faculty of Islamic Da'wah in Cairo, Al-Azhar University (Grade: Very Good with Honors). Specializes in making complex Tajweed rules intuitive and accessible for non-Arabic speakers, beginners, and advanced students.",
    avatar: null, // Built-in featureless blank cartoon illustration via TeacherAvatar
    avatarAlt: 'Featureless blank-face cartoon avatar of Sheikh Ahmed Gouda Mahmoud',
    badges: [
      'Tajweed Ijazah',
      "Hafs from 'Asim",
      'Al-Azhar University Graduate',
      'Very Good with Honors',
    ],
    documents: [
      {
        id: 'ahmed-gouda-ijaza',
        title: "Tajweed Ijazah in the Narration of Hafs from 'Asim",
        arabicTitle: 'إجازة تجويد برواية حفص عن عاصم',
        buttonLabel: 'View Tajweed Ijazah',
        image: '/ijazat/tajweed_ijazah_ahmedGoda.png',
        alt: 'Tajweed Ijazah certificate of Sheikh Ahmed Gouda Mahmoud Abdel Ghani',
        authorizingSheikh: 'Al-Azhar Quran Scholars',
        narration: "Hafs from 'Asim",
        description: 'Specialized certification in Quranic phonetics, rules of Tajweed, and accurate pronunciation according to verified classical treatises.',
      },
      {
        id: 'ahmed-gouda-azhar-cert',
        title: "Al-Azhar University Graduation Certificate – Faculty of Islamic Da'wah",
        arabicTitle: 'شهادة تخرج جامعة الأزهر – كلية الدعوة الإسلامية',
        buttonLabel: 'View Graduation Certificate',
        badge: "Graduate of Al-Azhar University – Faculty of Islamic Da'wah",
        image: '/ijazat/colleage-certificate-ahmedGoda.jfif',
        alt: "Graduation certificate of Sheikh Ahmed Gouda from Al-Azhar University, Faculty of Islamic Da'wah with honors",
        description: "Official Bachelor's degree certificate from the prestigious Al-Azhar University in Cairo, Faculty of Islamic Da'wah, awarded with the general grade of Very Good with Honors.",
      },
    ],
  },
];
