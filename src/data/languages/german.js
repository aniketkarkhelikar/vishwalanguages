import { colors } from '@/lib/tokens';

/**
 * VISHWA LANGUAGES — German Language Program
 */

export const german = {
  slug:       'german',
  title:      'German Language Program',
  nativeName: 'Deutsch',
  displayChar: 'D',
  subtitle:   'Master the precision of German. Engineer your future in Europe.',
  tagline:    'Attain the linguistic precision required for Europe\'s leading engineering and business hubs.',

  color:  '#DD0000',
  flagColors: ['#DD0000', '#FFCE00', '#000000'],
  bgTint: 'rgba(221,0,0,0.05)',

  seo: {
    title:       'German Language Program — Goethe Aligned, EU Career Ready | Vishwa Languages',
    description: 'Structured German language courses from A1 to C1. Goethe-Zertifikat preparation, European job placement, and engineering career support.',
    canonical:   '/languages/german',
  },

  hero: {
    eyebrow:  'Language Program',
    title:    'German Language\nProgram',
    subtitle: 'CEFR-aligned training from A1 to B2, focused on engineering and healthcare placements.',
    cta:      'Book Free Session',
  },
  certificateName: 'Goethe-Zertifikat / ÖSD',

  stats: [
    { label: '850+ learners' },
    { label: 'Goethe-Zertifikat aligned' },
    { label: 'EU Engineering roles' },
  ],

  card: {
    index:       '02',
    title:       'German',
    description: 'Attain the linguistic precision required for Europe\'s leading engineering and business hubs.',
    progression: 'A1 Essentials → C1 Fluent',
    outcomes:    ['EU Education', 'Automotive / Tech'],
  },

  levels: [
    {
      level:    'A1–A2',
      title:    'Essentials',
      desc:     'Build a strong grammatical foundation. Navigate everyday situations, introductions, and basic information exchange.',
      duration: '14 Weeks',
      outcomes: ['Basic grammar', 'Everyday vocabulary', 'Simple conversation', 'Goethe A2 prep'],
    },
    {
      level:    'B1',
      title:    'Independent',
      desc:     'Handle most situations encountered while traveling. Produce simple connected text on topics of personal interest.',
      duration: '16 Weeks',
      outcomes: ['Travel German', 'Written communication', 'B1 Goethe exam prep', 'Work introductions'],
    },
    {
      level:    'B2–C1',
      title:    'Fluency',
      desc:     'Understand the main ideas of complex text on both concrete and abstract topics, including technical discussions in your field.',
      duration: '20 Weeks',
      outcomes: ['Technical German', 'Academic writing', 'C1 exam prep', 'Job interview preparation'],
    },
  ],

  careerOutcomes: {
    heading:   'Where Vishwa graduates go.',
    outcomes: [
      { role: 'Mechanical Engineer',    company: 'German automotive companies', level: 'B2+' },
      { role: 'Research Scholar',       company: 'German universities (DAAD)', level: 'B2+' },
      { role: 'Registered Nurse',       company: 'German hospitals',           level: 'B2+' },
      { role: 'Software Developer',     company: 'Berlin/Munich tech startups', level: 'B1+' },
    ],
  },

  highlights: [
    'Goethe-Institut examination aligned curriculum',
    'Specialized tracks for engineering and healthcare',
    'Cultural and visa support guidance',
    'Direct connections with German employer networks',
    'Maximum 12 students per batch',
  ],

  faq: [
    {
      q: 'How long to reach B1 from zero?',
      a: 'Our B1 program takes approximately 10 months from A1. Students with prior exposure may progress faster.',
    },
    {
      q: 'Is this aligned with Goethe-Institut exams?',
      a: 'Yes. Our curriculum is fully aligned with the Goethe-Institut examination framework at every level.',
    },
    {
      q: 'Do you support German visa applications?',
      a: 'We provide guidance and documentation support, particularly for students pursuing the healthcare placement pathway.',
    },
  ],

  testimonials: [
    {
      quote:    'I have been attending a German class for a few months, and I really enjoy it. The lessons are interesting and well-organized. Our teacher explains everything clearly and patiently... We practice speaking, listening, reading, and writing in every class. The classroom atmosphere is friendly and supportive.',
      name:     'Vishakha Mhaske',
      role:     'German Learner',
      outcome:  'Improved Fluency',
      initials: 'VM',
    },
  ],

  cta: {
    heading:     'Ready to begin your German journey?',
    subtext:     'Book a free consultation with a program advisor.',
    buttonLabel: 'Book Free Consultation',
  },
};
