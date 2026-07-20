import { colors } from '@/lib/tokens';

export const mandarin = {
  slug:       'mandarin',
  title:      'Mandarin Chinese Program',
  nativeName: '中文',
  displayChar: '中',
  subtitle:   'Master Mandarin, the language of the world\'s fastest-growing economy.',
  tagline:    'Connect with over 1.1 billion speakers and tap into global trade power.',

  color:  colors.terracotta,
  bgTint: 'rgba(184,92,56,0.05)',
  comingSoon: false,
  countryImage: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80',

  seo: {
    title:       'Mandarin Chinese Program — Vishwa Languages',
    description: 'Learn Mandarin Chinese from HSK 1 to HSK 6. Comprehensive courses for business and trade.',
    canonical:   '/languages/mandarin',
  },

  hero: {
    eyebrow:  'Language Program',
    title:    'Mandarin Chinese\nProgram',
    subtitle: 'From HSK 1 to HSK 6. Connect with over 1.1 billion speakers across the globe.',
    cta:      'Book Free Session',
  },
  
  certificateName: 'HSK (Hanyu Shuiping Kaoshi)',

  card: {
    index:       '05',
    title:       'Mandarin',
    description: 'Master Mandarin, the language of the world\'s fastest-growing economy.',
    progression: 'HSK 1 → HSK 6',
    outcomes:    ['International Trade', 'Global Finance'],
  },

  stats: [
    { label: 'Tonal accuracy focus' },
    { label: 'HSK 1-6 alignment' },
    { label: '92% pass rate' },
  ],
  
  levels: [
    { level: 'HSK 1-2', title: 'Basic Conversational Mandarin', desc: 'Master Pinyin, basic pronunciation, core vocabulary, and 300+ characters for everyday conversations.', duration: '12 weeks', outcomes: ['Pinyin mastery', 'Daily dialogues', 'Basic Hanzi writing'] },
    { level: 'HSK 3-4', title: 'Independent Speaker', desc: 'Gain confidence in reading news, expressing opinions, and communicating fluently in daily & professional scenarios.', duration: '16 weeks', outcomes: ['Fluency in conversations', 'Writing simple essays', 'Workplace communication'] },
    { level: 'HSK 5-6', title: 'Advanced Business Mandarin', desc: 'Understand complex technical texts, business negotiations, and express thoughts fluently on abstract topics.', duration: '18 weeks', outcomes: ['Professional translation', 'Corporate negotiating', 'HSK 6 preparation'] },
  ],
  
  highlights: [
    'Targeted preparation for official HSK exams.',
    'Mastery of the four tones and correct pronunciation.',
    'Practical business vocabulary and trade scenarios.',
    'Cultural immersion and business etiquette training.',
  ],
  
  faq: [
    { q: 'Is Mandarin Chinese difficult for beginners?', a: 'While the characters and tones are unique, our Pinyin-first curriculum makes it approachable, allowing you to speak standard Mandarin from day one.' },
    { q: 'What is the HSK exam?', a: 'The HSK is China\'s standardized test of Chinese language proficiency for non-native speakers, recognized worldwide by employers and universities.' },
    { q: 'How many characters will I learn?', a: 'By HSK 4, you will master approximately 1,200 characters, which covers about 90% of daily written Chinese.' },
  ],
  
  testimonials: [
    { quote: 'Learning Mandarin at Vishwa helped me negotiate directly with our manufacturing partners in Shenzhen without an interpreter.', initials: 'VD', name: 'Vikram D.', role: 'Operations Lead', outcome: 'Trade Specialist' }
  ],

  cta: {
    heading:     'Mandarin program now enrolling.',
    subtext:     'Register for the upcoming cohort.',
    buttonLabel: 'Enroll Now',
  },
};
