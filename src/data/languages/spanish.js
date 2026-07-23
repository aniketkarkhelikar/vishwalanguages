import { colors } from '@/lib/tokens';

/**
 * VISHWA LANGUAGES — Spanish Language Program
 */

export const spanish = {
  slug:       'spanish',
  title:      'Spanish Language Program',
  nativeName: 'Español',
  displayChar: 'Ñ',
  subtitle:   'The world\'s second most spoken language. The career opportunities are limitless.',
  tagline:    'From Latin America to Spain — one language, a continent of opportunity.',

  color:  colors.ruby,
  bgTint: 'rgba(200,16,46,0.05)',
  comingSoon: false,

  seo: {
    title:       'Spanish Language Program — Vishwa Languages',
    description: 'Spanish language courses at Vishwa Languages. Prepare for DELE and global opportunities.',
    canonical:   '/languages/spanish',
  },

  hero: {
    eyebrow:  'Language Program',
    title:    'Spanish Language\nProgram',
    subtitle: 'From A1 to B2. Connect with 460 million native speakers across 21 countries.',
    cta:      'Book Free Session',
  },
  
  certificateName: 'DELE (Diplomas de Español como Lengua Extranjera)',

  card: {
    index:       '04',
    title:       'Spanish',
    description: 'From Latin America to Spain — one language, a continent of opportunity.',
    progression: 'A1 Básico → B2 Avanzado',
    outcomes:    ['International business', 'Latin America roles'],
  },

  stats: [
    { label: '400+ learners' },
    { label: '21 countries' },
    { label: '94% pass rate' },
  ],
  
  levels: [
    { level: 'A1-A2', title: 'Spanish Fundamentals', desc: 'Master the basics of pronunciation, essential verbs, and daily conversation.', duration: '12 weeks', outcomes: ['Greetings & introductions', 'Navigating cities', 'Present & past tense'] },
    { level: 'B1', title: 'Conversational Fluency', desc: 'Understand the main points of clear standard input on familiar matters regularly encountered in work, school, leisure, etc.', duration: '16 weeks', outcomes: ['Travel independence', 'Expressing opinions', 'Future & conditional tense'] },
    { level: 'B2', title: 'Advanced Proficiency', desc: 'Interact with a degree of fluency and spontaneity that makes regular interaction with native speakers quite possible without strain.', duration: '16 weeks', outcomes: ['Professional settings', 'Complex texts', 'DELE B2 certification'] },
  ],
  
  highlights: [
    'Targeted preparation for the DELE exams.',
    'Interactive sessions focusing on Latin American and Peninsular Spanish dialects.',
    'Practical role-playing for real-world scenarios.',
    'Access to native speaker language exchange networks.',
  ],
  
  faq: [
    { q: 'Which Spanish dialect do you teach?', a: 'We teach a standard form of Spanish, covering vocabulary and pronunciation differences between Spain and Latin America so you are prepared for any context.' },
    { q: 'Can I take the DELE exam at your center?', a: 'We prepare you rigorously for the DELE. The exams themselves are administered by the Instituto Cervantes at official testing centers.' },
    { q: 'How fast can I reach B1?', a: 'With consistent study and our intensive tracks, you can reach B1 in approximately 6-8 months.' },
  ],
  
  testimonials: [
    { quote: 'The focus on conversational practice meant I was speaking Spanish from day one. Invaluable for my job in Madrid.', initials: 'RK', name: 'Rahul K.', role: 'Engineer', outcome: 'Relocated to Spain' }
  ],

  cta: {
    heading:     'Spanish program now enrolling.',
    subtext:     'Register for the upcoming batch.',
    buttonLabel: 'Enroll Now',
  },
};
