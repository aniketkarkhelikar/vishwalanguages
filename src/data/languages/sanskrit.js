import { colors } from '@/lib/tokens';

export const sanskrit = {
  slug:       'sanskrit',
  title:      'Sanskrit Language Program',
  nativeName: 'संस्कृतम्',
  displayChar: 'सं',
  subtitle:   'Reconnect with your roots. Master Sanskrit, the classical language of ancient wisdom.',
  tagline:    'Learn Devanagari, read ancient scriptures, and discover classical heritage.',

  color:  colors.saffron,
  bgTint: 'rgba(255,103,31,0.05)',
  comingSoon: false,
  countryImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80',

  seo: {
    title:       'Sanskrit Language Program — Learn Sanskrit | Vishwa Languages',
    description: 'Learn Sanskrit online. Comprehensive courses for beginners and Indology research.',
    canonical:   '/languages/sanskrit',
  },

  hero: {
    eyebrow:  'Language Program',
    title:    'Sanskrit Language\nProgram',
    subtitle: 'From Devanagari script to Indology. Reconnect with India\'s heritage and classical philosophy.',
    cta:      'Book Free Session',
  },
  
  certificateName: 'Saral Sanskrit Examinations',

  card: {
    index:       '09',
    title:       'Sanskrit',
    description: 'Reconnect with your roots. Master Sanskrit, the classical language of ancient wisdom.',
    progression: 'Prathama → Kovida',
    outcomes:    ['Linguistics & AI', 'Cultural Preservation'],
  },

  stats: [
    { label: 'Devanagari mastery' },
    { label: 'Shloka pronunciation' },
    { label: 'Classical literature' },
  ],
  
  levels: [
    { level: 'Foundational', title: 'Sanskrit Grammar & Script', desc: 'Learn the Devanagari script, basic pronunciation of sounds, and fundamental grammatical sentence structures.', duration: '12 weeks', outcomes: ['Devanagari script', 'Basic grammar rules', 'Simple conversations'] },
    { level: 'Intermediate', title: 'Shloka & Text Reading', desc: 'Read and understand simple verses, mantras, and short prose passages while expanding your vocabulary.', duration: '16 weeks', outcomes: ['Recitation of shlokas', 'Reading simple verses', 'Understanding philosophical terms'] },
    { level: 'Advanced', title: 'Classical Indology', desc: 'Study original manuscripts, deep-dive into Pāṇinian grammar, and analyze Indology texts under scholarly guidance.', duration: '18 weeks', outcomes: ['Manuscript translation', 'Advanced grammar analytics', 'Saral Sanskrit Exam preparation'] },
  ],
  
  highlights: [
    'Highly logical structure suitable for computational linguistics.',
    'Veda, Upanishad, and Bhagavad Gita shloka recitation training.',
    'Grades exam alignment (e.g. Saral Sanskrit Exams).',
    'Deep cultural, historical, and philosophical context.',
  ],
  
  faq: [
    { q: 'Is this course suitable for absolute beginners?', a: 'Yes, our foundational course assumes no prior knowledge and starts with learning the Devanagari alphabet.' },
    { q: 'How is Sanskrit useful in modern technology?', a: 'Sanskrit\'s highly structured and rule-based grammar (codified by Pāṇini) is widely studied in NLP, compiler design, and computational linguistics.' },
    { q: 'Can I study ancient scriptures directly after this?', a: 'Yes, by the intermediate level, you will be able to read and translate simple verses from the Gita and Upanishads.' },
  ],
  
  testimonials: [
    { quote: 'Deepening my Sanskrit understanding at Vishwa transformed my Yoga and Ayurveda practice. I can now read original texts without depending on translations.', initials: 'AM', name: 'Aarav M.', role: 'Yoga Instructor', outcome: 'Scriptural Fluency' }
  ],

  cta: {
    heading:     'Discover ancient wisdom.',
    subtext:     'Enroll in Sanskrit cohorts today.',
    buttonLabel: 'Enroll Now',
  },
};
