/**
 * -----------------------------------------------------------------------------
 * NEBRAS ACADEMY - KNOWLEDGE BASE
 * -----------------------------------------------------------------------------
 * This file serves as the single source of truth for the AI Academy Assistant.
 * The system prompt strictly prohibits the assistant from inventing any facts,
 * prices, policies, schedules, or credentials not contained in this file.
 *
 * All unknown or pending values are marked with [TO BE FILLED].
 * Update these values as your academy policies evolve.
 * -----------------------------------------------------------------------------
 */

export const KNOWLEDGE_BASE = `
# NEBRAS ACADEMY KNOWLEDGE BASE

## 1. ABOUT THE ACADEMY
- **Academy Name**: Nebras Academy for Teaching the Holy Quran (أكاديمية نبراس لتعليم القرآن الكريم).
- **Mission**: Providing world-class, authentic online Quran, Tajweed, and Arabic education to Muslim children and adults worldwide through qualified Al-Azhar scholars with connected chains of transmission (Sanad).
- **Core Values**: Spiritual excellence, authentic oral transmission (Talaqqi), patient and caring pedagogy, and global accessibility.
- **Languages of Instruction**: English and Arabic.
- **Website**: https://www.nebrasacadmy.com
- **Official Contact Channels**:
  - WhatsApp: +20 114 616 2847 (https://wa.me/201146162847)
  - Secondary Phone: +20 150 858 6055
  - Email: nebrasacademey2025@gmail.com
  - YouTube: https://www.youtube.com/@Nebraskacadmey
  - Telegram: https://t.me/nebrasacademi
  - Facebook: https://www.facebook.com/people/Nebras-Academy-for-Teaching-the-Holy-Quran/61595964628884/
  - Registration / Trial Link: /trial

## 2. COURSES OFFERED
1. **Quran Tajweed and Recitation**:
   - Correct pronunciation (Makharij) and characteristics (Sifat) of Arabic letters.
   - Practical application of classical Tajweed rules (Noon Sakinah, Meem Sakinah, Madd rules, Waqf & Ibtida').
   - Tailored for all levels from beginner to advanced.
2. **Quran Reading (Noor Al-Bayan & Baghdadi Method)**:
   - Learn to read the Holy Quran from scratch starting from the Arabic alphabet up to fluent reading directly from the Mushaf.
   - Ideal for non-Arabic speakers and young children.
3. **Quran Recitation (Tilaawah)**:
   - Continuous recitation sessions with immediate feedback from certified teachers to improve fluency and melody.
4. **Quran Memorization (Hifz)**:
   - Structured memorization plans with regular revision (Muraja'ah) systems.
   - Dedicated tracks for full Quran memorization or specific chapters.
5. **Memorizing Juz' Amma (Part 30)**:
   - Dedicated foundational track for children and beginners focusing on the 30th part of the Quran with basic Tafsir.
6. **Arabic Language for Kids**:
   - Interactive, child-friendly Arabic lessons focusing on vocabulary, speaking, listening, and basic literacy.
7. **Arabic Language Course (Standard / Fusha)**:
   - Classical and Modern Standard Arabic for adults and youth covering grammar (Nahw), morphology (Sarf), reading, and conversation.
8. **Islamic Studies for Kids & Youth**:
   - Foundational Aqeedah (creed), Fiqh of Taharah and Salah (prayer), Seerah (life of Prophet Muhammad ﷺ), and Islamic manners (Adab & Akhlaq).

## 3. PACKAGES AND PRICES
- **Currency**: USD ($).
- **Base Rate**: $8.00 per hour per student by default.
- **Discounted Rate**: $6.00 per hour per student when discount conditions are met.
- **Discount Eligibility**:
  1. *One-on-One (Individual)*: Discount applies when booking 10 or more hours per month (e.g., at least 3 hours per week). The rate drops from $8/hr to $6/hr.
  2. *Group Classes (More than one student)*: Discount applies from the very first hour for all students ($6/hr per student).
- **Flexible Package Duration**: 1, 2, 3, 4, 5, or 6 months.
- **Payment Methods**: [TO BE FILLED: e.g., PayPal, Stripe / Credit Card, Direct Bank Wire, Wise].
- **Payment Frequency**: [TO BE FILLED: e.g., Monthly in advance or per full package term].
- **Family Discounts**: [TO BE FILLED: e.g., Additional 10% discount for families with 3 or more enrolled students].

## 4. CLASS SCHEDULE AND TIME ZONES
- **Availability**: 24 hours a day, 7 days a week (flexible scheduling based on the student's personal schedule).
- **Time Zones Supported**: Global coverage (USA/Canada Eastern/Central/Pacific, UK/GMT, Europe/CET, Gulf/GST, Australia/AEST, etc.).
- **Session Durations**: [TO BE FILLED: e.g., 30 minutes, 45 minutes, or 60 minutes per lesson].
- **Frequency**: Customizable (typically 2, 3, 4, or 5 sessions per week depending on student goals).

## 5. STUDENT AGES AND LEVELS ACCEPTED
- **Minimum Age**: 5 years old.
- **Accepted Demographics**:
  - Young children (ages 5 to 9) with specialized patient teachers.
  - Pre-teens and teenagers (ages 10 to 17).
  - Adults (18+) of all ages, including complete beginners.
  - Male and female students (male teachers for boys and men; female teachers available upon request for sisters and young children [TO BE FILLED: confirm female teacher availability roster]).
- **Levels Accepted**:
  - Level 0: Cannot read Arabic alphabet (starts with Noor Al-Bayan).
  - Level 1: Can read slowly, needs Tajweed guidance.
  - Level 2: Fluent reader, needs Tajweed mastery.
  - Level 3: Memorization (Hifz) track.
  - Level 4: Advanced reciters seeking Ijazah with connected Sanad.

## 6. TRIAL LESSON POLICY
- **Cost**: 100% Free.
- **Commitment**: No credit card required, zero obligation to enroll.
- **Duration**: [TO BE FILLED: e.g., 30 minutes].
- **What Happens in a Trial**:
  - The teacher evaluates the student's current reading/Tajweed level.
  - The teacher and student discuss the student's personalized goals (e.g., Noor Al-Bayan, Tajweed, Hifz).
  - A tailored learning roadmap and recommended weekly hours are provided.
- **How to Book**: Fill out the trial form on the website at /trial or click "Book Your Free Trial".

## 7. CANCELLATION, RESCHEDULING, AND REFUND POLICY
- **Notice Period for Rescheduling**: [TO BE FILLED: e.g., At least 4 hours before the scheduled lesson time to receive a makeup session].
- **Makeup Lessons**: [TO BE FILLED: e.g., Up to 2 makeup lessons per month with prior notice].
- **Teacher Absence**: If a teacher cancels or misses a session, the class is automatically made up or credited at the student's convenience.
- **Refund Policy**: [TO BE FILLED: e.g., Full money-back guarantee for unused lessons within 14 days of purchase].
- **Subscription Pausing**: [TO BE FILLED: e.g., Students may pause lessons for up to 30 days for exams, travel, or illness with prior notice].

## 8. CERTIFIED TEACHERS & IJAZAH
Nebras Academy teachers are verified scholars holding authentic Ijazahs from renowned authorities, connecting directly to the Prophet Muhammad ﷺ:

1. **Sheikh Karim Ahmed Othman Ahmed (الشيخ كريم أحمد عثمان أحمد)**:
   - **Credentials**: Holds an authentic Ijazah in the Holy Quran in the narration of Hafs from 'Asim via the Shatibiyyah route (رواية حفص عن عاصم من طريق الشاطبية).
   - **Chain of Transmission**: Connected unbroken Sanad (سند متصل) linking directly back to the Messenger of Allah ﷺ.
   - **Authorizing Authority (Al-Mujeez)**: Authorized by Sheikh Abu 'Ammar Muhammad ibn Hasan ibn Ibrahim 'Alyan, Quran and Tajweed instructor and faculty member at Al-Azhar University.
   - **Specialization**: Quran Recitation, Tajweed articulation, patient instruction for kids and adults.
   - **Documents**: Official verified Ijazah documents on file with Nebras Academy.

2. **Sheikh Ahmed Gouda Mahmoud Abdel Ghani (الشيخ أحمد جودة محمود عبد الغني)**:
   - **Credentials**: Holds a specialized Tajweed Ijazah in the narration of Hafs from 'Asim.
   - **Academic Degree**: Honors graduate of the prestigious Al-Azhar University, Faculty of Islamic Da'wah in Cairo (Awarded with the grade: Very Good with Honors).
   - **Specialization**: Making complex Tajweed rules intuitive, Arabic phonetics, Islamic studies, and Da'wah.
   - **Documents**: Official Al-Azhar University graduation certificate and Tajweed Ijazah on file.

## 9. FREQUENTLY ASKED QUESTIONS (FAQ)
1. **Q: How are online classes conducted?**
   - A: Classes are conducted live 1-on-1 via [TO BE FILLED: e.g., Zoom or Google Meet], using digital Mushaf screen sharing, audio-visual interaction, and interactive whiteboards.
2. **Q: Can parents sit in or monitor their children's lessons?**
   - A: Yes, parents are always encouraged to attend and observe their children's sessions, especially in the trial and early lessons.
3. **Q: Can I choose my teacher or request a male or female teacher?**
   - A: Yes, we accommodate preferences based on student age, gender, and language requirements.
4. **Q: How long does it take to learn to read the Quran from zero?**
   - A: For young children, it typically takes 3 to 6 months with consistent attendance (2-3 sessions per week). For adults, it often takes 2 to 4 months.
5. **Q: How long does it take to memorize the entire Quran (Hifz)?**
   - A: It varies based on age, memory capacity, and weekly hours. Typically, dedicated students finish in 2 to 4 years.
6. **Q: Do you offer lesson recordings?**
   - A: [TO BE FILLED: e.g., Yes, students may request class recordings to review pronunciations at home].
7. **Q: Are there reports or progress tracking?**
   - A: [TO BE FILLED: e.g., Monthly academic progress reports are shared with parents detailing memorization, revision, and Tajweed milestones].
8. **Q: What equipment do I need to attend classes?**
   - A: A computer, tablet, or smartphone with a reliable internet connection, a microphone/headset, and a webcam.
9. **Q: What happens if our family travels or has holidays?**
   - A: [TO BE FILLED: e.g., You can coordinate your schedule with the academy administration or temporarily freeze your subscription].
10. **Q: Can an adult with zero Arabic background join?**
    - A: Absolutely. Many of our adult students started with zero knowledge of the Arabic alphabet and are now reciting fluently with Tajweed.

## 10. IMPORTANT POLICIES & BOUNDARIES
- **No Fatwas**: The academy and assistant do NOT issue religious rulings or Fiqh verdicts. Students with Fiqh questions are referred to qualified local Islamic councils or scholars.
- **No Live Recitation Feedback in Chat**: Chat cannot evaluate pronunciation. Pronunciation and Tajweed must be assessed live by teachers in a trial lesson.
- **No Personal Data in Chat**: All registrations, names, contact numbers, and emails must be submitted through the official trial form at /trial or via WhatsApp.
`;
