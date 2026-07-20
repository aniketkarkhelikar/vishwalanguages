import { colors } from '@/lib/tokens';

export const ielts = {
  slug:       'ielts',
  title:      'IELTS Preparation Course',
  nativeName: 'IELTS',
  displayChar: 'I',
  subtitle:   'Secure your future. Strategic IELTS training to achieve Band 7.5+ and beyond.',
  tagline:    'Targeted preparation for Academic and General Training IELTS tracks.',

  color:  colors.terracotta,
  bgTint: 'rgba(166,43,43,0.05)',
  comingSoon: false,
  countryImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',

  seo: {
    title:       'IELTS Exam Prep — Achieve Band 7.5+ | Vishwa Languages',
    description: 'Get your dream IELTS score with specialized strategy courses. Mock tests and certified instructors.',
    canonical:   '/languages/ielts',
  },

  hero: {
    eyebrow:  'Exam Preparation',
    title:    'IELTS Exam\nPreparation',
    subtitle: 'Academic & General Training. Specialized strategies to secure Band 7.5+ and study/work abroad.',
    cta:      'Book Free Session',
  },
  
  certificateName: 'IELTS Academic / General Training',

  card: {
    index:       '08',
    title:       'IELTS Prep',
    description: 'Strategic IELTS training to achieve Band 7.5+ and beyond for study & migration.',
    progression: 'Diagnostic Test → Band 7.5+',
    outcomes:    ['Study abroad', 'Global migration'],
  },

  stats: [
    { label: 'Band 7.5+ target' },
    { label: 'Regular Mock Exams' },
    { label: 'One-on-one speaking' },
  ],
  
  levels: [
    { level: 'Phase 1', title: 'Diagnostic & Basics', desc: 'Take a full-length baseline test to identify core weaknesses and build grammar and speed.', duration: '4 weeks', outcomes: ['Diagnostic report', 'Core strategy overview', 'Time management plan'] },
    { level: 'Phase 2', title: 'Section Mastery', desc: 'Focus intensely on the strategy for Listening, Reading, Academic/General Writing, and Speaking interviews.', duration: '6 weeks', outcomes: ['Essay structure templates', 'Listening accent adaption', 'Reading skimming tricks'] },
    { level: 'Phase 3', title: 'Mock Marathon & Feedback', desc: 'Simulate full exams under timed conditions with comprehensive grading and personalized corrections.', duration: '4 weeks', outcomes: ['Real test simulation', 'One-on-one correction', 'Final score projection'] },
  ],
  
  highlights: [
    'Strategies directly targeted at IELTS band descriptors.',
    'Detailed, paragraph-by-paragraph essay grading.',
    'Mock speaking tests simulating the actual examiner format.',
    'Comprehensive materials and up-to-date question banks.',
  ],
  
  faq: [
    { q: 'What is the difference between Academic and General?', a: 'Academic IELTS is for students seeking university admissions, while General Training is for immigration and vocational training.' },
    { q: 'How is the speaking test conducted?', a: 'It is a one-on-one interview with an examiner assessing your fluency, vocabulary, grammar, and pronunciation.' },
    { q: 'How many mock tests are included?', a: 'Our regular prep course includes 8 full-length simulated mock tests with detailed scoring feedback.' },
  ],
  
  testimonials: [
    { quote: 'The writing correction program helped me raise my score from a 6.0 to a 7.5 in just 6 weeks. I got admitted to my dream college.', initials: 'AP', name: 'Aditya P.', role: 'Graduate Student', outcome: 'Scored Band 8.0' }
  ],

  cta: {
    heading:     'Aiming for a Band 7.5+?',
    subtext:     'Register for a diagnostic test now.',
    buttonLabel: 'Book Diagnostic',
  },
};
