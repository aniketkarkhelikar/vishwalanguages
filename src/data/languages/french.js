import { colors } from '@/lib/tokens';

/**
 * VISHWA LANGUAGES — French Language Program
 */

export const french = {
  slug:       'french',
  title:      'French Language Program',
  nativeName: 'Français',
  displayChar: 'F',
  subtitle:   'The language of diplomacy, culture, and global opportunity.',
  tagline:    'Open doors across 29 countries where French is the official language.',

  color:  colors.sage,
  bgTint: 'rgba(110,125,100,0.05)',
  comingSoon: false,

  seo: {
    title:       'French Language Program — Vishwa Languages',
    description: 'French language courses at Vishwa Languages. Prepare for DELF/DALF and global opportunities.',
    canonical:   '/languages/french',
  },

  hero: {
    eyebrow:  'Language Program',
    title:    'French Language\nProgram',
    subtitle: 'From A1 to B2. Master the language of diplomacy, culture, and global business.',
    cta:      'Book Free Session',
  },
  
  certificateName: 'DELF / DALF',

  card: {
    index:       '03',
    title:       'French',
    description: 'Open doors across 29 countries where French is the official language.',
    progression: 'A1 Débutant → B2 Avancé',
    outcomes:    ['Diplomatic careers', 'EU opportunities'],
  },

  stats: [
    { label: '350+ learners' },
    { label: '29 countries' },
    { label: '90% pass rate' },
  ],
  
  levels: [
    { level: 'A1-A2', title: 'Foundations of French', desc: 'Build core vocabulary, basic grammar, and conversational skills for daily interactions.', duration: '12 weeks', outcomes: ['Basic introductions', 'Travel scenarios', 'Simple emails'] },
    { level: 'B1', title: 'Independent Speaker', desc: 'Handle most situations while traveling and express opinions on abstract topics.', duration: '16 weeks', outcomes: ['Workplace communication', 'Debating ideas', 'Cultural fluency'] },
    { level: 'B2', title: 'Professional Fluency', desc: 'Achieve advanced proficiency for academic and professional environments in francophone countries.', duration: '16 weeks', outcomes: ['Complex negotiations', 'Technical discussions', 'DELF B2 certification'] },
  ],
  
  highlights: [
    'Comprehensive DELF/DALF exam preparation.',
    'Small batch sizes for maximum speaking time.',
    'Cultural immersion sessions including French cinema and literature.',
    'Career guidance for opportunities in France, Canada, and the EU.',
  ],
  
  faq: [
    { q: 'Is this program suitable for complete beginners?', a: 'Yes, our A1 level is designed from scratch assuming zero prior knowledge of French.' },
    { q: 'How is the DELF exam structured?', a: 'The DELF assesses four skills: listening, reading, writing, and speaking. Our curriculum mimics this structure to ensure comprehensive preparation.' },
    { q: 'Do you help with study in France?', a: 'Absolutely. We provide guidance for university applications and visa procedures for francophone countries.' },
  ],
  
  testimonials: [
    { quote: 'The B2 program gave me the confidence to ace my university interview in Paris.', initials: 'AM', name: 'Aisha M.', role: 'Student', outcome: 'Admitted to Sorbonne' }
  ],

  cta: {
    heading:     'French program now enrolling.',
    subtext:     'Register for the upcoming batch.',
    buttonLabel: 'Enroll Now',
  },
};
