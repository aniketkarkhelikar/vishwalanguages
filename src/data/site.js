/**
 * VISHWA LANGUAGES — Site Configuration
 * Global site metadata, brand voice, and defaults.
 * Every piece of copy lives in data — never hardcoded in JSX.
 */

export const site = {
  name:        'Vishwa Languages',
  tagline:     'Every language opens a world.',
  established: 2021,
  description: 'A global communication company offering career-focused language programs, corporate training, interpretation services, and healthcare placement.',

  // Brand identity
  brand: {
    nameDevanagari: 'विश्व',
    mission: 'Building bridges across cultures through rigorous, career-focused language education.',
    voice: {
      tone:       ['Professional', 'Warm', 'Confident', 'Global', 'Elegant', 'Minimal'],
      principle:  'Never overwhelm. Every page has one primary CTA. Whitespace before complexity.',
    },
  },

  // Contact
  contact: {
    email:    'hello@vishwalanguages.com',
    phone:    '+91 00000 00000',
    whatsapp: '+91 00000 00000',
    address:  'Pune, Maharashtra, India',
  },

  // Social
  social: {
    instagram: 'https://instagram.com/vishwalanguages',
    linkedin:  'https://linkedin.com/company/vishwalanguages',
    youtube:   'https://youtube.com/@vishwalanguages',
  },

  // Global stats (homepage, modal sidebar)
  stats: {
    learners:   '3,200+',
    languages:  4,
    passRate:   '92%',
    placements: '800+',
    clients:    '20+',
    trained:    '500+',
  },

  // UX Principles (guides every design decision)
  uxPrinciples: [
    'Never overwhelm. One focal point per page.',
    'Every page has exactly one primary CTA.',
    'Whitespace before complexity.',
    'Motion supports hierarchy — never distracts.',
    'Reading rhythm matters.',
    'Less, but better.',
    'Every future feature must be additive, never disruptive.',
  ],
};
