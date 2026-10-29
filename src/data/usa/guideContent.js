import { COURSE_LINKS } from './shared.js';

export const guidePage = {
  seo: {
    title: "Learn Quran Online: A Beginner's Guide for US Families",
    description:
      'A practical guide to learning Quran online in the USA: reading, Tajweed, Hifz, choosing a teacher, weekly study plans, classes for kids and adults, and how progress works.',
    canonical: '/learn-quran-online-usa',
    ogImage: '/images/quran-with-prayer-beads.webp',
  },

  hero: {
    eyebrow: 'A guide for US families and adult learners',
    title: 'Learn Quran Online in the USA: A Complete Guide for Families',
    intro:
      'Learning the Quran online can be simpler than it looks, but only if the goal, the teacher and the weekly routine are chosen deliberately. This guide explains the difference between reading, Tajweed and memorization, how to judge a teacher’s credentials, how to build a study plan around a US schedule, and what realistic progress looks like. It is written for parents, adults starting from zero, and converts who want a clear path rather than a pile of links.',
    bullets: [
      'Understand the three core Quran skills and how they fit together',
      'Ask the right questions before choosing a teacher',
      'Build a weekly routine that survives a busy US household',
      'See how kids, adults and converts can start at different points',
      'Know what progress should feel like at each stage',
    ],
    image: {
      src: '/images/quran-with-prayer-beads.webp',
      alt: 'A closed Quran beside white prayer beads on a dark prayer mat',
      width: 736,
      height: 981,
    },
    imageCaption: 'A clear plan matters more than a large collection of resources.',
    secondary: { to: '/online-quran-classes-usa', label: 'See the online classes' },
  },

  toc: [
    { id: 'where-to-start', title: 'Where to start' },
    { id: 'reading-tajweed-hifz', title: 'Reading vs Tajweed vs memorization' },
    { id: 'how-long', title: 'How long it takes' },
    { id: 'choosing-a-teacher', title: 'How to choose a teacher' },
    { id: 'online-vs-mosque', title: 'Online classes vs a local mosque' },
    { id: 'weekly-plan', title: 'A weekly plan for busy families' },
    { id: 'beginner-mistakes', title: 'Common beginner mistakes' },
    { id: 'kids-by-age', title: 'Quran classes for kids, age by age' },
    { id: 'adults-converts', title: 'Adults and converts' },
    { id: 'twelve-week-path', title: 'An illustrative 12-week path' },
    { id: 'faq', title: 'Frequently asked questions' },
    { id: 'next-step', title: 'Next step' },
  ],
};

export const guideSectionsPart1 = [
  {
    id: 'where-to-start',
    kicker: 'First steps',
    title: 'Where to start when you want to learn Quran online',
    intro:
      'The first decision is not which app to download or which teacher to follow. It is deciding what “learn the Quran” means for you or your child right now. That answer changes the method, the schedule and the teacher you need.',
    blocks: [
      {
        type: 'p',
        text: 'Most new students fall into one of three groups. The first group has never read Arabic and needs to start with the alphabet, letter forms and vowel sounds. The second group can read the script but has never been taught the rules of Tajweed, or learned them informally and wants to correct habits. The third group has memorized portions in the past, or reads fluently, and wants to strengthen retention, improve recitation or begin a structured memorization plan.',
      },
      {
        type: 'p',
        text: 'Each group needs a different starting point. A complete beginner should not be handed a page of Quran text and told to imitate; the letters need to be introduced first. A fluent reader should not be sent back to the alphabet simply because they have not studied formally. A returning learner may need a short revision phase before anything new. The assessment at the start of a good programme exists to sort this out.',
      },
      {
        type: 'image',
        src: '/images/sessions/quran-class-teacher-with-students.webp',
        alt: 'Video call with a Quran teacher in headphones and glasses beside three students in separate panels, one holding a tablet',
        width: 1200,
        height: 542,
        caption:
          'A live lesson: the teacher on camera with students joining from home. Screenshot from a Nebras Academy class, published with written parental consent; student display names are hidden.',
      },
      {
        type: 'h3',
        text: 'Write down three things before you book anything',
      },
      {
        type: 'checklist',
        items: [
          'The goal: read Arabic, recite accurately, memorize a portion, understand the meaning, or a combination.',
          'The available time: how many days a week, how many minutes, and which times are realistic rather than aspirational.',
          'The preferred language of instruction: English, Arabic, or a mix, especially for a child or a convert.',
        ],
      },
      {
        type: 'p',
        text: 'These three answers are more useful than a long list of preferences. A family that says “we want our eight-year-old to read fluently and we can do two short lessons a week, mostly in English” has given a teacher enough to build a plan. A family that says “we want Quran” has not yet made the decisions that determine success.',
      },
      {
        type: 'h3',
        text: 'Choose one teacher and one method',
      },
      {
        type: 'p',
        text: 'A common beginner mistake is collecting resources: three apps, five YouTube channels, a stack of workbooks and a rotating set of teachers. Each resource may be good, but together they create conflicting instructions. One teacher who can hear the student, correct in real time and adjust the plan is more valuable than a large library.',
      },
      {
        type: 'p',
        text: 'That does not mean you cannot use supporting material. A teacher may recommend a specific Qaida, a recitation to listen to, or a short daily drill. The difference is that the material supports a single plan rather than replacing it.',
      },
      {
        type: 'h3',
        text: 'Start smaller than feels ambitious',
      },
      {
        type: 'p',
        text: 'A beginner who commits to five lessons a week often lasts two weeks. A beginner who commits to two lessons and ten minutes of daily practice often lasts a year. The first month is about building the habit, not proving how much can be covered. Once the routine is stable, the load can increase.',
      },
      {
        type: 'p',
        text: 'For a child, “small” may mean one lesson a week plus a parent reading aloud for five minutes on other days. For an adult, it may mean one lesson on the weekend and listening to a recitation during the commute. The exact numbers matter less than the consistency.',
      },
      {
        type: 'callout',
        title: 'A practical first step',
        text: 'Book a trial with a teacher who can assess the student and propose a starting point. Nebras Academy offers a free trial with no card required; the [[trial form|/trial]] asks for the student’s level, goal and preferred times.',
      },
    ],
  },

  {
    id: 'reading-tajweed-hifz',
    kicker: 'The three skills',
    title: 'Quran reading vs Tajweed vs memorization: what is the difference?',
    intro:
      'Reading, Tajweed and memorization are related, but they are not the same skill. A student can read fluently and still recite with errors. A student can memorize a passage and still struggle to read a new page. Knowing the difference helps you choose the right programme and judge progress honestly.',
    blocks: [
      {
        type: 'h3',
        text: 'Quran reading: decoding the script',
      },
      {
        type: 'p',
        text: 'Reading is the ability to look at Arabic text and produce the correct letters, vowel sounds and word boundaries. For a beginner, this starts with recognising letter forms, then joining letters, then reading short vowels, then longer words and eventually full sentences. A phonics-based method such as Noor Al-Bayan is often used because it builds the skill in a deliberate sequence rather than asking the student to memorize whole words by sight.',
      },
      {
        type: 'p',
        text: 'Reading also includes the marks that tell the reader where to stop and continue. A student who knows every letter but pauses in the middle of a phrase has not yet mastered reading for Quranic purposes. Fluent reading is the foundation for everything else, which is why it usually comes first.',
      },
      {
        type: 'p',
        text: 'A good reading lesson sounds like this: the student reads aloud, the teacher stops them at a specific letter, demonstrates the correct sound, and asks them to repeat the word in context. The teacher is not only checking whether the word was guessed correctly; they are checking whether the student can produce the sound reliably on a new word.',
      },
      {
        type: 'h3',
        text: 'Tajweed: reciting correctly and beautifully',
      },
      {
        type: 'p',
        text: 'Tajweed is the set of rules that govern how the Quran is recited. It covers articulation points (makharij), the characteristics of letters (sifat), and rules for how letters interact, such as when a nasal sound is held, when a letter is merged, and how long a vowel is stretched. Tajweed is not decoration added after reading; it is part of reciting the text correctly.',
      },
      {
        type: 'p',
        text: 'A student can begin Tajweed once they can read words without excessive effort. The rules are easier to apply when the student is not simultaneously decoding every letter. Some teachers introduce Tajweed gradually alongside reading, starting with the sounds that matter most and adding rules as the student’s reading stabilises.',
      },
      {
        type: 'p',
        text: 'Tajweed is learned by ear as much as by rule. A teacher demonstrates a sound, the student imitates, and the teacher corrects. Reading a rule in a book is not the same as producing it. This is why live correction matters: a recording cannot tell the student that their ghunnah is too short or their qalqalah is too heavy.',
      },
      {
        type: 'h3',
        text: 'Memorization: keeping what you have learned',
      },
      {
        type: 'p',
        text: 'Memorization (Hifz) is a separate skill with its own routine. A typical Hifz lesson divides the work into three parts: the new portion (sabaq), the recent portion (sabqi), and the older revision (manzil). A student who only memorizes new material and never revises will watch earlier portions fade. A student who only revises will stop moving forward.',
      },
      {
        type: 'p',
        text: 'Memorization is easier when reading and Tajweed are already stable. If a student memorizes a passage with a pronunciation error, the error becomes part of the memory and is harder to correct later. For a young child, short surahs learned by listening can come first, with formal Hifz added once reading is secure.',
      },
      {
        type: 'h3',
        text: 'Which order should a beginner follow?',
      },
      {
        type: 'table',
        head: ['Student profile', 'Usually starts with', 'Then adds'],
        rows: [
          ['Never read Arabic', 'Letters, sounds and short words (reading)', 'Tajweed basics and short memorization'],
          ['Reads but wants to recite correctly', 'Assessment of current recitation', 'Applied Tajweed and regular correction'],
          ['Reads well and wants to memorize', 'A revision and memorization plan', 'Tajweed refinement and longer portions'],
          ['Wants to understand the Quran', 'Reading and Arabic', 'Vocabulary, grammar and Tafsir study'],
        ],
        caption: 'A general sequence, not a rule. The teacher may adjust it after hearing the student.',
      },
      {
        type: 'p',
        text: 'Arabic and Islamic studies can run alongside Quran work. Arabic helps a student understand what they are reciting; Islamic studies gives context for the passages. Neither is a prerequisite for reading, but both make the learning more meaningful over time. The academy’s programme pages describe each track:',
      },
      {
        type: 'links',
        items: COURSE_LINKS,
      },
    ],
  },

  {
    id: 'how-long',
    kicker: 'Timelines',
    title: 'How long does it take to learn Quran online?',
    intro:
      'This is the most common question from new students, and the most common place for marketing to become dishonest. There is no single timeline that applies to everyone. A realistic answer depends on the starting point, the goal, the weekly time, the quality of practice and the student’s age.',
    blocks: [
      {
        type: 'p',
        text: 'A student who practises ten minutes a day and attends two lessons a week will progress differently from a student who attends one lesson a week and practises only during the lesson. A child learning to decode letters is working on a different skill from an adult refining Tajweed. A student memorizing a short surah is working on a smaller scope than a student memorizing a full Juz.',
      },
      {
        type: 'p',
        text: 'This is why Nebras Academy does not publish a fixed promise such as “read Arabic in eight weeks” or “memorize the Quran in a year.” A timeline without assumptions is not a plan; it is a sales line. The teacher can give a more useful estimate after the assessment, once the student’s starting point and available practice time are known.',
      },
      {
        type: 'h3',
        text: 'The factors that actually change the timeline',
      },
      {
        type: 'table',
        head: ['Factor', 'Why it matters'],
        rows: [
          ['Starting point', 'A complete beginner and a returning reader need different plans even if they share a goal.'],
          ['Goal', 'Reading a page, reciting with Tajweed and memorizing a Juz are different projects.'],
          ['Weekly lesson time', 'More lessons can help, but only if the student has time to practise between them.'],
          ['Daily practice', 'Short, regular practice usually beats one long session before the lesson.'],
          ['Age and attention span', 'Younger children need shorter practice and more variety.'],
          ['Teacher fit', 'A teacher who explains in a way the student understands saves time.'],
          ['Revision habits', 'Memorized material fades without a revision routine.'],
        ],
      },
      {
        type: 'h3',
        text: 'Signs of progress that do not depend on a deadline',
      },
      {
        type: 'p',
        text: 'Instead of counting weeks, look for changes in what the student can do. A beginner is making progress when they recognise letters without prompting, read a new word correctly, or hear a mistake in their own recitation. A Tajweed student is making progress when a rule they learned last month appears correctly in a new passage without being reminded.',
      },
      {
        type: 'p',
        text: 'A memorization student is making progress when the new portion is recalled accurately after a night’s sleep, and when older portions still surface with minimal prompting. These signs are more reliable than a page count, because they show that the skill is transferring to new material.',
      },
      {
        type: 'h3',
        text: 'Ask for milestones, not guarantees',
      },
      {
        type: 'p',
        text: 'A good teacher will say something like: “If you practise ten minutes on the days between lessons, we should be able to finish the letter section and begin joined words by the end of the month. We will review that estimate after two weeks.” That is a milestone with an assumption attached. It can be checked and revised.',
      },
      {
        type: 'p',
        text: 'A teacher who promises a fixed result regardless of practice is either guessing or overselling. The honest version is more useful: it tells the family what the plan depends on and gives them a way to tell whether it is working.',
      },
      {
        type: 'h3',
        text: 'What to ask after the assessment',
      },
      {
        type: 'p',
        text: 'Once the teacher has heard the student, ask for three things: the next milestone, the practice habit it assumes, and the date you will review it together. A milestone should describe an observable skill rather than a page count. “Read a three-letter word with short vowels without prompting” is observable. “Finish the Qaida” is not, because two students can finish the same book with very different levels of fluency.',
      },
      {
        type: 'p',
        text: 'Write the milestone down and revisit it at the agreed review point. If the student has met it, the plan moves forward. If not, the teacher and family can ask why: was the practice realistic, was the material too difficult, was the schedule interrupted? A missed milestone is information, not a verdict on the student. This review habit is more valuable than any published estimate, because it keeps the plan honest as the student changes.',
      },
      {
        type: 'callout',
        title: 'Owner note',
        text: 'Any published timeline should state its assumptions: lessons per week, daily practice, starting level and goal. Until the academy confirms specific ranges, this page deliberately avoids inventing them.',
      },
    ],
  },

  {
    id: 'choosing-a-teacher',
    kicker: 'Due diligence',
    title: 'How to choose an online Quran teacher',
    intro:
      'A teacher is the most important variable in online Quran learning. The platform, the workbook and the schedule matter, but none of them can compensate for a teacher who cannot hear the student’s errors or explain the correction. Here is a practical checklist for evaluating a teacher before you pay.',
    blocks: [
      {
        type: 'h3',
        text: 'The credential checklist',
      },
      {
        type: 'table',
        head: ['What to check', 'Why it matters'],
        rows: [
          ['Ijazah in a named narration', 'An Ijazah is an authorization to teach, not a generic attendance certificate.'],
          ['The authorizing teacher’s name', 'A named authorizer makes the claim checkable.'],
          ['A connected Sanad', 'The chain shows the recitation has been transmitted, not improvised.'],
          ['Formal study, if relevant', 'An Al-Azhar degree or similar indicates broader training, but it is not the only valid path.'],
          ['Experience with the student’s age group', 'Teaching a five-year-old and teaching an adult require different skills.'],
          ['Comfort in the family’s language', 'A teacher who can explain in English helps beginners avoid confusion.'],
          ['A trial lesson', 'The trial shows how the teacher corrects, not just what they claim.'],
        ],
      },
      {
        type: 'p',
        text: 'The first three items are the core. A teacher should be able to tell you which narration they are authorized in, who authorized them and, if asked, show the document. If the answer is vague, ask again. “I have a certificate” is not the same as “I hold an Ijazah in Hafs ‘an ‘Asim, authorized by a named teacher.”',
      },
      {
        type: 'p',
        text: 'The academy publishes this information for its teachers on the [[Teachers page|/teachers]], including the Ijazah documents and the authorizing teacher’s title. Families should still ask questions in the trial; a published document is a starting point for a conversation, not a substitute for one.',
      },
      {
        type: 'h3',
        text: 'Questions to ask in the trial lesson',
      },
      {
        type: 'checklist',
        items: [
          'Which narration are you authorized to teach, and who authorized you?',
          'How do you assess a new student, and what would our first month look like?',
          'How do you correct a student who keeps making the same mistake?',
          'How much practice do you expect between lessons, and how do you adjust it for a child?',
          'How do you share feedback with the parent or adult student?',
          'What do you do if a student is frustrated or losing confidence?',
          'Which materials do you recommend, and are they included?',
          'What is your policy on missed lessons and rescheduling?',
        ],
      },
      {
        type: 'p',
        text: 'The answers matter more than the polish. A teacher who says “I would need to hear the student read before I promise anything” is being honest. A teacher who promises fluency in a fixed number of weeks before hearing the student is selling, not teaching.',
      },
      {
        type: 'h3',
        text: 'Red flags',
      },
      {
        type: 'ul',
        items: [
          'No named narration, no authorizing teacher and no willingness to show a document.',
          'Pressure to pay for a long package before a trial or assessment.',
          'Guaranteed results with no discussion of practice time or starting level.',
          'Refusal to answer questions about method or to let a parent observe a child’s lesson.',
          'No written policy on cancellations, rescheduling or refunds.',
          'Unusual payment requests, such as direct transfers to a personal account with no receipt.',
          'A teaching style that consists only of the student reading while the teacher says “again” without explaining why.',
        ],
      },
      {
        type: 'p',
        text: 'None of these automatically means a teacher is dishonest. But each one is a reason to slow down and ask for clarity. A legitimate teacher or academy should be comfortable with a family doing basic due diligence.',
      },
      {
        type: 'h3',
        text: 'One-on-one or small group?',
      },
      {
        type: 'p',
        text: 'One-on-one lessons give the student the full attention of the teacher. They suit beginners who need constant correction, students preparing for a specific goal, and anyone who feels self-conscious in a group. Small groups cost less per student and can provide companionship, but the lesson moves at the group’s pace and individual correction is shared.',
      },
      {
        type: 'p',
        text: 'For siblings at a similar level, a small group can work well. For a child who is far ahead or behind a sibling, separate lessons may be kinder. The right answer depends on the student, not on a general rule.',
      },
    ],
  },

  {
    id: 'online-vs-mosque',
    kicker: 'Format',
    title: 'Online Quran classes vs a local mosque or community centre',
    intro:
      'For many US families, this is not a choice between a good option and a bad one. A local mosque offers community, a physical space and people who know the family. An online class offers scheduling flexibility and access to teachers who may not live nearby. The useful question is which combination fits your household.',
    blocks: [
      {
        type: 'table',
        head: ['Consideration', 'Online classes', 'Local mosque or centre'],
        rows: [
          ['Access', 'Available from any state, including areas without a nearby Quran programme.', 'Depends on distance, transport and the mosque’s timetable.'],
          ['Scheduling', 'Flexible slots, including evenings and weekends across time zones.', 'Usually tied to fixed class times and term dates.'],
          ['Teacher choice', 'A wider pool of teachers, including specialists in a narration or age group.', 'Limited to the teachers available locally.'],
          ['Community', 'Weaker unless the family builds it separately.', 'Strong: neighbours, events and shared routines.'],
          ['Supervision', 'A parent can sit nearby at home.', 'Supervision depends on the mosque’s arrangements.'],
          ['Travel', 'None, which helps busy households.', 'Requires a weekly drive, sometimes significant.'],
          ['Technology', 'Depends on internet, device and a quiet room.', 'No device or connection needed.'],
          ['Cost', 'Varies by teacher and format; online can be more affordable per hour.', 'Varies; some programmes are free or subsidised.'],
          ['Accountability', 'The family must protect the slot at home.', 'The physical setting and group routine provide structure.'],
        ],
      },
      {
        type: 'p',
        text: 'Online learning is often chosen by families who cannot make a weekly drive work, or who live in an area without a suitable programme. It is also chosen by adults who prefer to learn privately, and by students who want a teacher qualified in a specific narration. The format removes geography as a barrier.',
      },
      {
        type: 'image',
        src: '/images/sessions/online-quran-class-on-laptop.webp',
        alt: 'Laptop screen showing a shared Arabic lesson slide with the class video panels along the left side',
        width: 1200,
        height: 695,
        caption:
          'A shared lesson slide inside a live class. Online learning removes the drive, but it still needs one quiet room and one screen.',
      },
      {
        type: 'p',
        text: 'The trade-off is that the home is full of distractions. A lesson in the kitchen competes with dinner, siblings and phones. Online students need a defined space and a household that treats the lesson as a real appointment. Without that, the flexibility becomes a weakness.',
      },
      {
        type: 'p',
        text: 'A local mosque offers something online cannot easily replicate: belonging. The child sees other children learning, the family knows the teacher in person, and the mosque becomes part of the weekly rhythm. For some families, that social dimension is the main reason the learning sticks.',
      },
      {
        type: 'h3',
        text: 'A hybrid approach often works best',
      },
      {
        type: 'p',
        text: 'Many families use online classes for the core skill work and the mosque for community. The online teacher provides individual correction and a plan; the mosque provides classes, events and friendships. The two are not in competition. If the local mosque offers a good programme, use it. If it does not, online fills the gap without removing the family from the community.',
      },
      {
        type: 'p',
        text: 'For a child, the combination can be especially effective: a weekly online lesson with a specialist, plus a weekend mosque class or halaqah for social contact. The parent does not have to choose one identity for the whole family.',
      },
      {
        type: 'h3',
        text: 'When online is the only realistic option',
      },
      {
        type: 'p',
        text: 'Some families live far from a mosque with a Quran programme, or cannot manage the drive after work. For them, the comparison is not really online versus local; it is online versus nothing. In that situation, a live online lesson with a qualified teacher is clearly better than waiting for a local programme that may not exist. The same applies to a family that moves frequently or travels for work.',
      },
      {
        type: 'p',
        text: 'The point is to be honest about the trade-off rather than pretend there is none. Online learning can deliver strong individual instruction, but it does not automatically create community. A family that chooses it should look for community elsewhere: the mosque, a local halaqah, family study, or a group that meets for Quran and friendship. The format is a tool, not a whole religious life.',
      },
      {
        type: 'callout',
        title: 'A fair test',
        text: 'Try the format for a month before deciding. A family that has never tried online learning may be surprised by how much correction a live one-on-one lesson allows; a family that has never tried the local mosque may be surprised by how much the community matters. Judge with experience, not assumption.',
      },
    ],
  },

  {
    id: 'weekly-plan',
    kicker: 'Routine',
    title: 'A weekly study plan for busy US families',
    intro:
      'Most families do not fail because they lack resources. They fail because the plan assumes a quiet, spacious week that never arrives. A sustainable plan is built around the week you actually have, including school runs, work, sports and the nights when everyone is tired.',
    blocks: [
      {
        type: 'p',
        text: 'The core principle is simple: short, frequent contact with the Quran is easier to sustain than a long session that happens once a week. A student who reads for ten minutes on four days and attends one lesson will usually retain more than a student who does nothing all week and then reads for an hour. The lesson is where correction happens; the days between are where the skill settles.',
      },
      {
        type: 'image',
        src: '/images/sessions/quran-class-group-recitation.webp',
        alt: 'Group class grid with eight student tiles, some on camera and some showing a letter avatar',
        width: 1200,
        height: 601,
        caption: 'A group lesson in progress: every student gets a turn to read while the rest listen.',
      },
      {
        type: 'h3',
        text: 'A sample week for a child',
      },
      {
        type: 'table',
        head: ['Day', 'Activity', 'Time'],
        rows: [
          ['Monday', 'Live lesson with the teacher', 'Lesson slot'],
          ['Tuesday', 'Review the lesson task with a parent', '10 minutes'],
          ['Wednesday', 'Listen to the assigned recitation and repeat', '10 minutes'],
          ['Thursday', 'Live lesson with the teacher', 'Lesson slot'],
          ['Friday', 'Light review or a short surah', '5–10 minutes'],
          ['Saturday', 'Family practice or a mosque class', 'Flexible'],
          ['Sunday', 'Rest or optional listening', 'Optional'],
        ],
        caption: 'An example, not a prescription. The lesson frequency and practice length should be agreed with the teacher.',
      },
      {
        type: 'p',
        text: 'The parent’s role is not to teach Tajweed. It is to protect the ten minutes, sit nearby for a younger child, and help the child remember what the teacher asked. A parent who tries to correct pronunciation without training can accidentally teach a second, conflicting version. When in doubt, record a question for the teacher instead of guessing.',
      },
      {
        type: 'h3',
        text: 'A sample week for an adult',
      },
      {
        type: 'table',
        head: ['Moment', 'Activity'],
        rows: [
          ['Commute or walk', 'Listen to the recitation assigned by the teacher'],
          ['After Fajr or before work', 'Read the assigned portion aloud for 10 minutes'],
          ['One evening or weekend slot', 'Live lesson'],
          ['Before bed', 'Review three new words or one Tajweed rule'],
        ],
        caption: 'Adults often do better with several small anchors than with one large study block.',
      },
      {
        type: 'p',
        text: 'An adult who travels for work can use the same pattern: listening during transit, a short reading at the hotel, and a lesson scheduled for a recurring slot at home. The plan should bend without breaking. If a week is lost, the next week resumes; it does not require a dramatic restart.',
      },
      {
        type: 'h3',
        text: 'Make the routine visible',
      },
      {
        type: 'p',
        text: 'A wall calendar or a shared phone reminder can do more than a motivational speech. Mark the lesson, the practice days and the revision day. For children, a simple sticker chart can help, but avoid turning Quran practice into a competition with siblings. The goal is a habit, not a performance.',
      },
      {
        type: 'p',
        text: 'Link the practice to an existing routine: after breakfast, after school, before the evening meal, or after a specific prayer. A new habit is easier to keep when it is attached to something that already happens every day.',
      },
      {
        type: 'h3',
        text: 'Adjust for Ramadan and school holidays',
      },
      {
        type: 'p',
        text: 'Ramadan changes the household rhythm. Some families increase Quran time; others struggle to keep the usual schedule. Both are normal. A teacher can adjust the plan for the month: less new material, more listening and revision, or a shorter lesson. The important thing is to decide in advance rather than let the classes quietly disappear.',
      },
      {
        type: 'p',
        text: 'School holidays can work in the opposite direction. A break from school may free up time for an intensive week or a memorization push. A family that plans the holiday around a realistic goal often gets more from it than a family that simply hopes to “do more Quran.”',
      },
      {
        type: 'callout',
        title: 'Protect the slot',
        text: 'The most common reason online lessons fail is not a bad teacher. It is a household that treats the lesson as optional. Put it in the family calendar, turn off notifications, and let the student know it is a real appointment.',
      },
    ],
  },
];
