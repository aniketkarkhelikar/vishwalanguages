import { colors } from '@/lib/tokens';

/**
 * VISHWA LANGUAGES — Japanese Language Program
 *
 * This is the single source of truth for all Japanese-related content.
 * The LanguageTemplate renders this data — no React code changes needed to edit content.
 */

export const japanese = {
  slug:       'japanese',
  title:      'Japanese Language Program',
  nativeName: '日本語',
  displayChar: '日',
  subtitle:   'Begin with Hiragana. Grow into seamless global communication.',
  tagline:    'Bridge cultural nuances and technical vocabulary required for success in Japan.',

  // Brand colors for this language
  color:  colors.terracotta,
  bgTint: 'rgba(184,92,56,0.05)',

  // SEO
  seo: {
    title:       'Japanese Language Program — JLPT Prep & Career Placement | Vishwa Languages',
    description: 'Career-focused Japanese language courses from N5 to N2. Hiragana, Katakana, Keigo, JLPT preparation and Tokyo placement support.',
    canonical:   '/languages/japanese',
  },

  // Hero section data
  hero: {
    eyebrow:  'Language Program',
    title:    'Japanese Language\nProgram',
    subtitle: 'Structured JLPT training from N5 to N2, designed for engineers and healthcare professionals.',
    cta:      'Book Free Session',
  },
  certificateName: 'JLPT (Japanese-Language Proficiency Test)',

  // Quick stats
  stats: [
    { label: '1,200+ learners' },
    { label: '92% pass rate'  },
    { label: 'Tokyo placements' },
  ],

  // Program overview card (used on homepage)
  card: {
    index:       '01',
    title:       'Japanese',
    description: 'Bridge the cultural nuances and technical vocabulary required for success in Japan.',
    progression: 'N5 Foundation → N1 Pro',
    outcomes:    ['IT Placements', 'Keigo Mastery'],
  },

  // Learning pathway (curriculum levels)
  levels: [
    {
      level:    'N5',
      title:    'Foundation',
      desc:     'Master the scripts — Hiragana, Katakana, and basic Kanji. Learn sentence structures for daily communication and survival Japanese.',
      duration: '12 Weeks',
      outcomes: ['Hiragana mastery', 'Katakana mastery', '100 basic Kanji', 'Basic conversation'],
    },
    {
      level:    'N4',
      title:    'Practical',
      desc:     'Understand intent, intermediate texts, and navigate standard interactions in Japanese society and standard workplaces.',
      duration: '16 Weeks',
      outcomes: ['300 Kanji', 'Workplace Japanese', 'Reading comprehension', 'JLPT N4 prep'],
    },
    {
      level:    'N3–N2',
      title:    'Professional',
      desc:     'The bridge to a career. Specialized vocabulary, business email etiquette (Keigo), and fluent corporate communication.',
      duration: '24 Weeks',
      outcomes: ['Keigo business Japanese', 'JLPT N2 preparation', 'Corporate email writing', 'Interview preparation'],
    },
  ],

  // Career outcomes section
  careerOutcomes: {
    heading:   'Where Vishwa graduates go.',
    outcomes: [
      { role: 'Software Engineer', company: 'Tokyo-based tech firms', level: 'N3+' },
      { role: 'Business Analyst',  company: 'Japan-India joint ventures', level: 'N2+' },
      { role: 'Interpreter',       company: 'Embassy & corporate events', level: 'N2+' },
      { role: 'Healthcare Worker', company: 'Japanese hospitals', level: 'N3+' },
    ],
  },

  // Why this language
  highlights: [
    'JLPT examination preparation aligned curriculum',
    'Native-speaker faculty for pronunciation coaching',
    'Cultural immersion workshops',
    'Placement support for Tokyo and Osaka roles',
    'Small batch sizes — maximum 15 students',
  ],

  // FAQs
  faq: [
    {
      q: 'How long does it take to reach JLPT N2 from zero?',
      a: 'Our structured program takes approximately 52 weeks from zero to N2. Most students reach N4 in the first 6 months.',
    },
    {
      q: 'Do you provide JLPT exam registration support?',
      a: 'Yes. We guide students through the JLPT registration process and conduct mock examinations before every official test.',
    },
    {
      q: 'What are the batch sizes?',
      a: 'We maintain a strict maximum of 15 students per batch to ensure individual attention and quality of interaction.',
    },
    {
      q: 'Is there a placement guarantee?',
      a: 'We do not guarantee placement, but we actively support job search with our partner network in Japan and Japanese companies in India.',
    },
  ],

  // Testimonials specific to this language
  testimonials: [
    {
      quote:    'Vishwa didn\'t just teach me grammar. They prepared me for the culture. That fluency helped me clear my interviews and seamlessly join a Tokyo-based tech firm.',
      name:     'Aniket Sharma',
      role:     'Software Engineer (N3)',
      outcome:  'Placed in Tokyo',
      initials: 'AS',
    },
  ],

  // Page CTA
  cta: {
    heading:   'Ready to begin your Japanese journey?',
    subtext:   'Book a free consultation with a program advisor.',
    buttonLabel: 'Book Free Consultation',
  },
};
