import { COURSE_LINKS, OWNER_TODO, PRICES, US_TIMEZONE_ROWS } from './shared.js';

export const classPage = {
  seo: {
    title: 'Online Quran Classes in USA | 1-on-1 Ijazah Teachers',
    description:
      'Live online Quran classes for students in the USA. 1-on-1 or small-group Tajweed, Hifz and Arabic with Ijazah-holding teachers in Egypt. Free trial, no card.',
    canonical: '/online-quran-classes-usa',
    ogImage: '/images/hero/quran-holder.webp',
  },

  hero: {
    eyebrow: 'For families and adults in the United States',
    title: 'Online Quran Classes in the USA',
    intro:
      'Nebras Academy connects students across the United States with live, one-on-one Quran teachers in Cairo, Egypt. Lessons cover reading, Tajweed, memorization, Arabic and Islamic studies, and they are scheduled around US time zones. Start with a free trial, meet your teacher, and decide on a plan before you pay.',
    bullets: [
      'Live 1-on-1 or small-group lessons (maximum 5 students)',
      'Teachers with Ijazah in Hafs ‘an ‘Asim',
      'Times that fit US schedules, including after school',
      'English and Arabic instruction',
      'Students from age 5; parents may sit in',
      'Free trial with no credit card required',
    ],
    image: {
      src: '/images/hero/quran-holder.webp',
      alt: 'An open Quran on a wooden reading stand in a softly lit room',
      width: 736,
      height: 1308,
    },
    imageCaption: 'An online classroom can be anywhere the student is ready to learn.',
    secondary: { to: '/learn-quran-online-usa', label: 'Read the family guide' },
  },

  glance: [
    { label: 'Format', value: 'Live online, 1-on-1 or small group (up to 5)' },
    { label: 'Ages', value: 'From age 5 through adults' },
    { label: 'Languages', value: 'English and Arabic' },
    { label: 'Teachers', value: 'Based in Cairo, Egypt; credentials published' },
    { label: 'Schedule', value: 'Flexible slots across US time zones' },
    { label: 'Trial', value: 'Free, no card; length confirmed at booking' },
    { label: 'Rate', value: `$${PRICES.baseRate}/hour, or $${PRICES.discountedRate} with conditions` },
    { label: 'Narration', value: "Hafs ‘an ‘Asim" },
  ],

  sections: [
    {
      id: 'what-you-get',
      kicker: 'The programme',
      title: "What you get in Nebras Academy's online Quran classes",
      intro:
        'A live Quran class should do more than put a teacher on a screen. It should give the student a clear starting point, steady correction, and a plan that fits the rest of the week. Here is what the academy provides, and what it does not.',
      blocks: [
        {
          type: 'h3',
          text: 'A live teacher who listens and corrects in real time',
        },
        {
          type: 'p',
          text: 'Every lesson is taught live. A student reads, recites or answers, and the teacher responds immediately: adjusting a letter, repeating a rule, slowing the pace, or explaining a word. That back-and-forth is the main reason live classes work better than an app or a recorded playlist. Students can ask “why” and get an answer in the same lesson.',
        },
        {
          type: 'p',
          text: 'Lessons are available one-on-one or in a small group of no more than five students. One-on-one suits students who want the full lesson built around them. Small groups can work well for siblings or friends who are at a similar level and want a shared routine. The right choice depends on the student, the goal, and how much individual correction they need.',
        },
        {
          type: 'h3',
          text: 'A placement that matches the student’s actual level',
        },
        {
          type: 'p',
          text: 'New students are not dropped into a random chapter. The academy uses levels from 0 to 4, and the trial lesson is used to see where the student actually is. A complete beginner may start with letter recognition and short vowels. A student who reads fluently but has gaps in Tajweed may start with articulation points and applied rules. An adult returning after years away may need a short revision phase before moving forward.',
        },
        {
          type: 'p',
          text: 'Placement is a conversation, not a test with a pass mark. The teacher asks what the student wants to achieve, listens to them read if they can, and then proposes a starting point. If the proposed level feels too easy or too hard after the first week, it can be adjusted.',
        },
        {
          type: 'h3',
          text: 'Programmes for reading, Tajweed, memorization, Arabic and Islamic studies',
        },
        {
          type: 'p',
          text: 'The academy teaches the Quran as a set of connected skills rather than a single subject. A young beginner usually needs reading first. A teenager preparing for memorization needs Tajweed and a revision routine. An adult who wants to understand the Quran benefits from Arabic alongside recitation. Each programme has its own page so families can compare before booking:',
        },
        {
          type: 'links',
          items: COURSE_LINKS,
        },
        {
          type: 'p',
          text: 'Students can combine programmes. A child might take two weekly reading lessons and one Tajweed lesson. An adult might study Arabic on one day and recitation on another. The academy will help sequence the subjects so the student is not overloaded.',
        },
        {
          type: 'h3',
          text: 'Scheduling that accounts for US time zones',
        },
        {
          type: 'p',
          text: 'The teachers are in Cairo, and the students are in the United States. That sounds like a large gap, but it often works in the family’s favour: a Cairo evening overlaps with a US afternoon, and a Cairo late evening overlaps with a US evening. The academy schedules flexibly and confirms the exact slot with each family. Section three explains the typical conversions and what to check before booking.',
        },
        {
          type: 'h3',
          text: 'Feedback the student and parent can act on',
        },
        {
          type: 'p',
          text: 'A lesson is more useful when the student knows what to practise before the next one. Teachers close the loop with feedback on what was covered, what needs repetition, and what the next lesson will build on. How that feedback is shared is agreed with the family at enrollment, because a short message after each class suits some households while a longer monthly review suits others. Ask your teacher which format they use before the first paid month.',
        },
        {
          type: 'h3',
          text: 'Parents are welcome to stay involved',
        },
        {
          type: 'p',
          text: 'A parent may sit in on a child’s lesson, especially during the first few weeks. This helps the parent see how the teacher works, learn the correct pronunciation alongside the child, and carry the practice into the rest of the week. It also gives the child a familiar person in the room while they get used to learning online.',
        },
        {
          type: 'p',
          text: 'The academy is careful with children’s privacy. On this page and in public material, a child is identified at most by a first name and a country, and only when a parent has given written permission. No full names, school names or home details are published.',
        },
        {
          type: 'callout',
          title: 'Where the teachers are based',
          text: 'Nebras Academy teaches online from Cairo, Egypt. The academy does not have a US office, a US branch or a US mailing address, and this page does not claim one. Every class is delivered online, which is why students can join from any US state.',
        },
        {
          type: 'callout',
          title: 'What the academy does not do',
          text: 'Teachers do not issue fatwas or give rulings on personal religious questions. They also do not evaluate recitation through text chat alone; recitation needs to be heard. If you need a religious ruling, please consult a qualified scholar in your community.',
        },
      ],
    },
    {
      id: 'how-it-works',
      kicker: 'The process',
      title: 'How an online Quran class works, step by step',
      intro:
        'The first month should feel predictable. Here is the path from the first message to a steady weekly routine, including what happens in a lesson and what the student needs at home.',
      blocks: [
        {
          type: 'steps',
          items: [
            {
              title: 'Book a free trial',
              text: 'Use the [[trial form|/trial]] to tell the academy the student’s age, current level, goals and the times that usually work. You do not need to pay or enter card details. The academy replies to confirm a trial slot and the length of that trial, because the trial length is set at booking rather than published as a fixed number.',
            },
            {
              title: 'Meet the teacher and assess the starting point',
              text: 'The trial is a real lesson, not a sales call. The teacher introduces themselves, asks about goals, and listens to the student read or recite if they are able. A complete beginner may begin with letters and sounds. The teacher notes what the student can already do and where the gaps are.',
            },
            {
              title: 'Agree on a plan',
              text: 'After the trial, the teacher proposes a starting level, the subjects to focus on, a weekly rhythm and a realistic amount of home practice. The family can ask questions, request a different pace, or decide not to continue. Nothing is charged unless the family chooses a paid plan.',
            },
            {
              title: 'Attend weekly live lessons',
              text: 'Lessons run live at the agreed time. Each one usually reviews the previous material, introduces something new, practises it with the teacher listening, and ends with a clear task for the next class. The student is expected to practise between lessons; the teacher adjusts the amount to the student’s age and schedule.',
            },
            {
              title: 'Review progress and adjust',
              text: 'At agreed check-ins, the teacher reviews what has been covered, what is secure and what needs another pass. The plan can change: a student may move faster than expected, need more revision, or want to add a second subject. The goal is steady movement, not rushing through pages.',
            },
          ],
        },
        {
          type: 'h3',
          text: 'What happens inside a typical lesson',
        },
        {
          type: 'p',
          text: 'The exact structure depends on the subject and the student’s age, but most lessons follow a similar shape. The teacher begins with a short review of the previous lesson, because recall at the start of a class is one of the most efficient ways to strengthen memory. The student reads or recites the assigned portion while the teacher listens and notes errors.',
        },
        {
          type: 'p',
          text: 'The teacher then introduces the next piece: a new set of letters, a Tajweed rule, a passage to memorize, or a grammar pattern. The explanation is kept short enough for the student to use it immediately. Most of the lesson is guided practice, with the teacher correcting in the moment and asking the student to repeat the corrected portion until it is stable.',
        },
        {
          type: 'p',
          text: 'At the end, the teacher summarizes what was covered and sets the next task. For a young child, that task might be five minutes of listening and repeating. For an adult, it might be a page of reading and a short memorization portion. The task should be small enough to complete on a normal week, not only on a quiet weekend.',
        },
        {
          type: 'h3',
          text: 'What the student needs at home',
        },
        {
          type: 'checklist',
          items: [
            'A laptop, desktop or tablet with a working camera and microphone',
            'A stable internet connection and a quiet room',
            'A headset or earphones, which makes pronunciation easier to hear',
            'The Quran or course material the teacher recommends',
            'A notebook for new rules, vocabulary and reminders',
            'A parent nearby for younger children, at least for the first few lessons',
          ],
        },
        {
          type: 'p',
          text: 'A phone can work in an emergency, but a larger screen is better for reading Quran text and seeing the teacher’s mouth position. A headset matters more than an expensive camera: the teacher needs to hear the student clearly to correct pronunciation.',
        },
        {
          type: 'h3',
          text: 'How to prepare a child for the first lesson',
        },
        {
          type: 'p',
          text: 'Tell the child what will happen before the call: a teacher will say salaam, ask a few questions, and listen to them read or repeat. Keep the first lesson short in expectations, even if the slot is longer. Have water nearby, use the bathroom beforehand, and choose a room without a television or other distractions.',
        },
        {
          type: 'p',
          text: 'Do not coach the child to perform. The teacher needs to hear their real level, including the mistakes. A child who feels tested may go quiet; a child who feels welcomed is more likely to read. Sitting within view for the first lesson is usually enough to help.',
        },
        {
          type: 'h3',
          text: 'Missed lessons and changes to the schedule',
        },
        {
          type: 'p',
          text: 'Family life is unpredictable, and a class may need to move. The academy’s current rules on cancellations, rescheduling and missed lessons are set out on the [[Student Policy page|/policy]]. Read that page, or ask the academy directly, before you pay for a package so you know what notice is required and what happens if a lesson is missed.',
        },
        {
          type: 'callout',
          title: 'No card for the trial',
          text: 'The trial is free and does not require credit card details. You only choose a paid plan after you have met the teacher and seen how the class works.',
        },
      ],
    },
    {
      id: 'class-times',
      kicker: 'Scheduling',
      title: 'Class times that work in US time zones',
      intro:
        'Nebras Academy’s teachers are in Cairo, Egypt, while students join from across the United States. The academy schedules flexibly rather than publishing a single fixed timetable, but the examples below show how a Cairo evening maps to a US afternoon and evening.',
      blocks: [
        {
          type: 'table',
          head: ['US time zone', 'Example US window', 'Example Cairo time', 'Typical difference'],
          rows: US_TIMEZONE_ROWS.map((row) => [row.usZone, row.usExample, row.cairoExample, row.offset]),
          caption:
            'Illustrative conversions for a Cairo evening window. Exact availability is confirmed when the trial is booked; the table is not a published timetable.',
        },
        {
          type: 'p',
          text: 'The pattern is straightforward: when it is late evening in Cairo, it is afternoon or early evening in the United States. That gives a US student several plausible windows after school or after work. A family on the East Coast may prefer a late-afternoon slot; a family on the West Coast may prefer an earlier afternoon slot that falls in the Cairo evening.',
        },
        {
          type: 'h3',
          text: 'Daylight saving time changes the gap',
        },
        {
          type: 'p',
          text: 'The United States and Egypt do not change their clocks on the same dates. For most of the year the difference is stable, but for a few weeks in spring and autumn the gap is one hour smaller than the table shows. This is why a slot that worked in January may feel an hour earlier or later in April. The academy confirms the time in both zones when a class is scheduled, and families should double-check the first lesson after a clock change.',
        },
        {
          type: 'h3',
          text: 'How to choose a time that lasts',
        },
        {
          type: 'p',
          text: 'The best slot is not the most convenient one on paper; it is the one the family can keep for months. For children, avoid a time that runs into bedtime or a regular activity. For adults, avoid a slot immediately after work if that is when the household is busiest. Weekend mornings in the US can be a calm option, and they often fall comfortably within a Cairo afternoon or evening.',
        },
        {
          type: 'p',
          text: 'Consistency matters more than total hours. Two shorter, regular lessons are usually easier to sustain than one long weekend session, especially for beginners. Once the routine is established, a second lesson can be added if the student wants to move faster.',
        },
        {
          type: 'callout',
          title: 'Exact slots are confirmed at booking',
          text: 'The academy does not publish a fixed list of open slots on this page because availability changes with each teacher’s schedule. Tell the trial form which US time zone you are in and the windows that usually work, and the academy will confirm a real slot.',
        },
      ],
    },
    {
      id: 'teachers',
      kicker: 'Credentials',
      title: 'Our teachers: Ijazah, Sanad and Al-Azhar credentials',
      intro:
        'The most important decision in online Quran learning is the teacher. Nebras Academy publishes the credentials of its teachers so families can see what “certified” actually means in practice. The two teachers profiled here hold an Ijazah in the narration of Hafs ‘an ‘Asim, and one is also a graduate of Al-Azhar University.',
      blocks: [
        {
          type: 'h3',
          text: 'What an Ijazah is',
        },
        {
          type: 'p',
          text: 'An Ijazah is an authorization to teach the Quran. It is not a generic certificate of attendance. It is granted by a qualified teacher after the student has recited the entire Quran accurately and demonstrated mastery of the rules, and it names the student, the narration, and the chain of teachers through whom the authorization was passed down.',
        },
        {
          type: 'p',
          text: 'The Ijazah is what makes a claim of “certified” checkable. A family can ask which narration the teacher is authorized in, who authorized them, and whether the document is available to inspect. The academy publishes the documents on the [[Teachers page|/teachers]], alongside the authorizing teacher’s name and title.',
        },
        {
          type: 'h3',
          text: 'What a Sanad is, and why it matters',
        },
        {
          type: 'p',
          text: 'A Sanad is the chain of transmission: the list of teachers, generation after generation, through whom a recitation has been passed down. For the narration of Hafs ‘an ‘Asim, the chain runs back through the classical reciters to the Prophet Muhammad ﷺ. A connected Sanad is the traditional guarantee that what the teacher teaches is the same recitation that has been transmitted, not a personal interpretation.',
        },
        {
          type: 'p',
          text: 'A family does not need to be able to verify every name in the chain to benefit from this. The practical point is that a teacher with a connected Sanad has been trained inside a system of correction, and is likely to teach with the same care. It also means the teacher can explain differences between narrations if the student encounters them.',
        },
        {
          type: 'h3',
          text: 'Al-Azhar University credentials',
        },
        {
          type: 'p',
          text: 'Al-Azhar University in Cairo is one of the oldest centres of Islamic learning in the world. A degree from its Faculty of Islamic Da‘wah indicates sustained study of Arabic, Islamic sciences and teaching methods, not only recitation. Sheikh Ahmed Gouda Mahmoud Abdel Ghani is a graduate of that faculty, with a grade of Very Good with Honors, and also holds a Tajweed Ijazah in Hafs ‘an ‘Asim.',
        },
        {
          type: 'p',
          text: 'Credentials vary by teacher. Not every teacher at every academy is an Al-Azhar graduate, and a family should ask specifically rather than assume. The academy’s Teachers page lists each teacher’s Ijazah, authorizing teacher and, where applicable, university certificate.',
        },
        {
          type: 'h3',
          text: 'The two teachers profiled on this page',
        },
        {
          type: 'p',
          text: 'Sheikh Karim Ahmed Othman Ahmed is a Quran recitation and Tajweed instructor with an Ijazah in Hafs ‘an ‘Asim via the Shatibiyyah route. His authorizing teacher is Sheikh Abu ‘Ammar Muhammad ibn Hasan ibn Ibrahim ‘Alyan, a Quran and Tajweed instructor and faculty member at Al-Azhar University. Sheikh Karim’s teaching is known for patience and a structured approach to articulation.',
        },
        {
          type: 'p',
          text: 'Sheikh Ahmed Gouda Mahmoud Abdel Ghani holds a Tajweed Ijazah in Hafs ‘an ‘Asim and a bachelor’s degree from Al-Azhar University’s Faculty of Islamic Da‘wah, awarded with Very Good with Honors. He specializes in making Tajweed rules accessible to non-Arabic speakers and beginners.',
        },
        {
          type: 'p',
          text: 'Both teachers are based in Egypt and teach online. The avatars shown on this page are illustrations with deliberately blank faces, not photographs; the academy does not publish photographs of its teachers. Families who want to see the documents can open them on the Teachers page.',
        },
        {
          type: 'links',
          items: [
            {
              to: '/teachers',
              label: 'Teachers and Ijazah documents',
              description: 'Open the published Ijazah and Al-Azhar certificate for each teacher.',
            },
            {
              to: '/about',
              label: 'About Nebras Academy',
              description: 'How the academy approaches online Quran teaching.',
            },
          ],
        },
      ],
    },
    {
      id: 'see-a-class',
      kicker: 'Inside the classroom',
      title: 'See a real class before you book',
      intro:
        'A description can only do so much. Below are stills from real Nebras Academy lessons, shared with written parental consent, followed by a stage-by-stage description of how a class runs. Consented recordings will be added here when they are available; until then, the free trial is the most direct way to see the classroom, because the prospective student is in the lesson.',
      blocks: [
        {
          type: 'p',
          text: 'A Nebras Academy lesson is a conversation with a purpose. The teacher and student see each other on video, the Quran text is shared on screen, and the teacher listens closely. The student reads aloud, the teacher marks the exact letter or rule that needs work, and the student tries again. There is no crowd to hide in when the class is one-on-one, and no pressure to keep up with a room of strangers.',
        },
        {
          type: 'gallery',
          items: OWNER_TODO.consentedPhotos,
          caption:
            'Screenshots from live Nebras Academy lessons, published with written parental consent. Student display names are hidden; the teachers shown publish their credentials on the Teachers page.',
        },
        {
          type: 'h3',
          text: 'A lesson, stage by stage',
        },
        {
          type: 'table',
          head: ['Stage', 'What the teacher does', 'What the student does'],
          rows: [
            ['Opening review', 'Greets the student, asks about the week, and revisits the previous lesson.', 'Recalls the last portion and asks questions.'],
            ['Listening', 'Listens to the assigned reading or recitation without interrupting.', 'Reads aloud at a natural pace.'],
            ['Correction', 'Stops on specific errors, demonstrates the correct sound or rule, and explains why.', 'Repeats the corrected portion until it is stable.'],
            ['New material', 'Introduces one new rule, passage or vocabulary set and connects it to what is known.', 'Practises the new material with guidance.'],
            ['Practice', 'Listens again, mixes old and new material, and notes what needs work.', 'Reads, recites or answers with less prompting.'],
            ['Closing', 'Summarizes the lesson and sets a small task for the next class.', 'Notes the task and asks any final questions.'],
          ],
          caption: 'The exact shape varies by subject, age and level; this is a representative lesson, not a fixed script.',
        },
        {
          type: 'h3',
          text: 'Recordings and consent',
        },
        {
          type: 'p',
          text: 'The academy does not publish recordings of students without written permission from the student, or from a parent or guardian in the case of a child. The screenshots above follow the same rule: the families gave written permission, and every student display name is covered. When a recording is available with consent, it will appear in this section with a short written summary so visitors can read what happens even if they cannot play the video. A video is never presented as a testimonial unless the person in it has agreed to that use.',
        },
        {
          type: 'p',
          text: 'If you want to see how a teacher interacts with a student before enrolling, the free trial is the most honest preview available: you are not watching an edited clip, you are in a real lesson with a real teacher. You can ask the teacher to explain how they correct, how they handle mistakes, and how they keep a child engaged.',
        },
        {
          type: 'callout',
          title: 'A note on privacy',
          text: 'No full names, faces, school names or locations of children are published on this page without written consent. Where a child is mentioned, only a first name and a country would be used, and only with permission.',
        },
      ],
    },
    {
      id: 'pricing',
      kicker: 'Cost',
      title: 'Online Quran class pricing in USD',
      intro:
        'The academy publishes a per-hour rate rather than a long menu of packages with hidden differences. The base rate is $8 per hour per student. A reduced rate of $6 per hour applies to one-on-one bookings of ten or more hours per month and to group classes from the first hour.',
      blocks: [
        {
          type: 'table',
          head: ['Plan', 'Rate', 'How it applies'],
          rows: [
            ['One-on-one, standard', `$${PRICES.baseRate}/hour`, 'Individual lessons below the monthly discount threshold.'],
            ['One-on-one, 10+ hours per month', `$${PRICES.discountedRate}/hour`, 'The reduced rate applies once a student books at least ten individual hours in a month.'],
            ['Small group, 2–5 students', `$${PRICES.discountedRate}/hour per student`, 'The reduced rate applies from the first group hour.'],
            ['Free trial', 'No charge', 'No credit card required; trial length is confirmed at booking.'],
          ],
          caption: `Rates are in US dollars. Packages are available in durations from one to six months. Confirm the current package total before paying.`,
        },
        {
          type: 'h3',
          text: 'How the $6 rate works',
        },
        {
          type: 'p',
          text: 'The reduced rate is not a temporary promotion; it is a volume rate with a clear rule. For one-on-one lessons, it applies when the student books at least ten hours in a month. For group lessons, it applies from the first hour because the cost is shared across the group. In a group, each student pays the reduced per-hour rate.',
        },
        {
          type: 'p',
          text: 'A family with two children may find that a small group is the most economical option if the children are close in level. A student preparing for a memorization deadline may prefer one-on-one lessons and reach the ten-hour threshold during an intensive month. The academy can help compare the two arrangements based on the student’s goals.',
        },
        {
          type: 'h3',
          text: 'What the trial includes',
        },
        {
          type: 'p',
          text: 'The trial is a free live lesson with a teacher. It includes a conversation about goals, an informal assessment, and a proposed starting plan. It does not require a card, and it does not commit the family to a paid package. The length of the trial is confirmed when the slot is booked because it depends on the teacher and the student’s needs.',
        },
        {
          type: 'h3',
          text: 'What happens after the trial',
        },
        {
          type: 'p',
          text: 'After the trial, the family can choose to continue or stop. If they continue, the academy confirms the weekly schedule, the package length and the total cost before payment. The family should also ask which payment methods are accepted and read the [[Student Policy page|/policy]] for the current rules on cancellations, rescheduling and refunds. Those details are not assumed on this page.',
        },
        {
          type: 'h3',
          text: 'What is not included',
        },
        {
          type: 'p',
          text: 'The student provides their own device, internet connection and headset. The teacher will recommend the Quran or course material to use, but the family should confirm whether any book or workbook needs to be purchased separately. There is no charge for using the online classroom itself.',
        },
        {
          type: 'callout',
          title: 'Ask before you pay',
          text: 'Rates and package terms can change. Confirm the current total, the payment methods and the cancellation rules directly with the academy before paying. The [[Pricing page|/pricing]] summarises the published plans.',
        },
      ],
    },
    {
      id: 'who-its-for',
      kicker: 'Fit',
      title: "Who these online Quran classes are for",
      intro:
        'The academy teaches a wide range of students, but not every format suits every family. This section describes who tends to benefit most, and who may be better served by a different arrangement.',
      blocks: [
        {
          type: 'h3',
          text: 'Children from age five',
        },
        {
          type: 'p',
          text: 'The academy accepts students from age five. Younger children usually need a parent nearby, a short and predictable routine, and a teacher who can hold attention without turning the lesson into a lecture. A five-year-old may spend the first weeks on letter recognition, listening and repeating, and short oral practice rather than long reading passages.',
        },
        {
          type: 'p',
          text: 'For children, the most common mistake is starting with too much material. A twenty-minute habit that happens every week is more valuable than an ambitious plan that collapses after a month. The teacher can adjust the pace once the child’s attention span and home routine are clear.',
        },
        {
          type: 'h3',
          text: 'Teenagers',
        },
        {
          type: 'p',
          text: 'Teenagers often do well with a clear goal: finishing a Juz, improving recitation for a competition, or preparing to lead a family prayer. They may prefer a teacher who explains the reasoning behind a rule rather than only correcting the sound. A one-on-one format gives them room to ask questions they might not ask in a group.',
        },
        {
          type: 'h3',
          text: 'Adults, including complete beginners',
        },
        {
          type: 'p',
          text: 'Adults can start from zero. The academy teaches adults who never learned to read Arabic, adults who can read but want to correct inherited habits, and adults who want to memorize portions they have long wanted to learn. Adult lessons tend to focus on clear explanations, realistic practice between sessions, and goals that fit around work and family.',
        },
        {
          type: 'p',
          text: 'An adult beginner may feel self-conscious reading aloud. A one-on-one class avoids the pressure of a group, and the teacher can normalize the learning curve. Progress may feel slow in the first weeks because the student is building a new physical skill, not just collecting information.',
        },
        {
          type: 'h3',
          text: 'Converts and returning learners',
        },
        {
          type: 'p',
          text: 'Converts often need two things at once: the mechanics of reading and a patient explanation of why the practice matters. The academy teaches in English, so a student does not need Arabic fluency to begin. A teacher can explain a Tajweed rule in English first and then demonstrate it in Arabic.',
        },
        {
          type: 'p',
          text: 'Returning learners may have memorized portions as children and lost them, or may read fluently with pronunciation habits they want to fix. The assessment should identify what is secure before deciding where to restart. It is common to revise more than expected at the beginning; that revision is not a setback.',
        },
        {
          type: 'h3',
          text: 'Busy US families',
        },
        {
          type: 'p',
          text: 'Families who cannot commit to a weekly drive to a mosque often find online classes easier to sustain. The class happens at home, a parent can listen while cooking or working nearby, and siblings can take lessons on the same evening. The trade-off is that the family must protect the slot from distractions; a class in the living room competes with everything else in the house.',
        },
        {
          type: 'h3',
          text: 'Who may be better served elsewhere',
        },
        {
          type: 'p',
          text: 'Online classes are not the best fit for everyone. A student who needs in-person supervision, a family that wants a physical classroom and local community, or someone seeking formal religious rulings should look for a local arrangement. The academy does not issue fatwas, and it does not evaluate recitation through text chat alone. A student who wants to memorize with a teacher who can sit beside them may prefer a local mosque.',
        },
        {
          type: 'p',
          text: 'None of this makes online learning inferior. It simply means the format has a shape, and the best results come when the family chooses it deliberately rather than treating it as a substitute for every kind of religious education.',
        },
      ],
    },
  ],

  faqs: [
    {
      question: 'How much do online Quran classes cost?',
      answer:
        'The base rate is $8 per hour per student. The reduced rate is $6 per hour for one-on-one bookings of ten or more hours per month and for group classes from the first hour. The trial is free and does not require a credit card. Confirm the current package total before paying.',
    },
    {
      question: 'Is the free trial really free?',
      answer:
        'Yes. The trial is a live lesson with a teacher, not a paid consultation, and it does not require card details. The length of the trial is confirmed when the slot is booked. After the trial, you can choose a paid plan or stop without further commitment.',
    },
    {
      question: 'What times can we book from the United States?',
      answer:
        'The academy schedules flexibly across US time zones. Teachers are in Cairo, so a Cairo evening usually maps to a US afternoon or evening. Exact availability is confirmed at booking. Check the first lesson after a daylight-saving change, because the US and Egypt change clocks on different dates.',
    },
    {
      question: 'What age can my child start?',
      answer:
        'The academy accepts students from age five. Younger children usually need a parent nearby and a short, consistent routine. The trial is used to see what the child is ready for, and the teacher can adjust the pace after the first few lessons.',
    },
    {
      question: 'Do you offer one-on-one or group classes?',
      answer:
        'Both. Students can book one-on-one lessons or join a small group of no more than five students. One-on-one suits students who need individual correction and a fully personalised plan. Small groups can work well for siblings or friends at a similar level.',
    },
    {
      question: 'Which narration and curriculum do you teach?',
      answer:
        'The teachers profiled here hold Ijazah in the narration of Hafs ‘an ‘Asim. The academy teaches levels from 0 to 4, covering Quran reading with Noor Al-Bayan, Tajweed, memorization, Arabic and Islamic studies. Students can combine subjects, and the teacher proposes a starting point after the trial.',
    },
    {
      question: 'What equipment do we need?',
      answer:
        'A laptop, desktop or tablet with a camera and microphone, a stable internet connection, a quiet room, and a headset or earphones. A larger screen is better for reading Quran text, and a headset helps the teacher hear pronunciation clearly.',
    },
    {
      question: 'Can adults and converts join?',
      answer:
        'Yes. Adults can start from zero, revise reading they learned years ago, or work on Tajweed and memorization. Classes are available in English and Arabic, so a convert does not need Arabic fluency to begin. The trial is used to agree on a realistic starting point.',
    },
  ],
};
