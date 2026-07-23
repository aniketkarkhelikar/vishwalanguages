import { colors } from '@/lib/tokens';

export const korean = {
  slug:       'korean',
  title:      'Korean Language Program',
  nativeName: '한국어',
  displayChar: '한',
  subtitle:   'Unlock a dynamic culture. Master Korean, the language of Hallyu wave and global technology.',
  tagline:    'Learn Hangul and open doors in global tech, automotive, and creative sectors.',

  color:  '#0047A0',
  flagColors: ['#0047A0', '#CD2E3A', '#000000'],
  bgTint: 'rgba(0,71,160,0.05)',
  comingSoon: false,
  countryImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80',

  seo: {
    title:       'Korean Language Program — Vishwa Languages',
    description: 'Learn Korean from TOPIK I to TOPIK II. Comprehensive courses matching the Hallyu wave and tech careers.',
    canonical:   '/languages/korean',
  },

  hero: {
    eyebrow:  'Language Program',
    title:    'Korean Language\nProgram',
    subtitle: 'From TOPIK I to TOPIK II. Connect with the global wave of culture and industry.',
    cta:      'Book Free Session',
  },
  
  certificateName: 'TOPIK (Test of Proficiency in Korean)',

  card: {
    index:       '06',
    title:       'Korean',
    description: 'Master Korean, the language of Hallyu wave, technology, and global enterprise.',
    progression: 'TOPIK I → TOPIK II',
    outcomes:    ['Global Entertainment', 'Tech & Automotive'],
  },

  stats: [
    { label: 'Hangul in 1 week' },
    { label: 'Hallyu culture track' },
    { label: '94% pass rate' },
  ],
  
  levels: [
    { level: 'TOPIK I', title: 'Korean Fundamentals (Lv 1-2)', desc: 'Learn Hangul script, basic pronunciation, shopping, food order, and essential daily conversations.', duration: '12 weeks', outcomes: ['Hangul mastery', 'Introduce yourself', 'Basic sentence structures'] },
    { level: 'TOPIK II (Intermediate)', title: 'Independent Speaker (Lv 3-4)', desc: 'Interact with native speakers in public spaces, read simple articles, and express opinions on familiar topics.', duration: '16 weeks', outcomes: ['Cultural integration', 'Expressing opinions', 'Understanding drama content'] },
    { level: 'TOPIK II (Advanced)', title: 'Professional Fluency (Lv 5-6)', desc: 'Prepare for academic study, technical work, and complex business negotiations in South Korea.', duration: '16 weeks', outcomes: ['Academic research', 'Corporate negotiations', 'TOPIK II level 6 prep'] },
  ],
  
  highlights: [
    'Scientific and structured Hangul script lessons.',
    'K-pop, K-drama, and cultural integration track.',
    'Rigorous preparation for official TOPIK examinations.',
    'Career guidance for placements in leading Korean companies.',
  ],
  
  faq: [
    { q: 'Is Hangul difficult to learn?', a: 'No, Hangul is praised by linguists for its logical and scientific design. Most students learn to read and write it in just one week.' },
    { q: 'What is the TOPIK exam?', a: 'TOPIK is the Test of Proficiency in Korean, a standardized test administered by the South Korean government for non-native speakers.' },
    { q: 'Are there job opportunities with Korean companies?', a: 'Yes, Korea has a massive presence in tech, automotive, and electronics (Samsung, Hyundai, LG), which highly value bilingual speakers.' },
  ],
  
  testimonials: [
    { quote: 'The focus on conversational practice meant I was speaking Korean from day one. Invaluable for my transfer to our Seoul branch.', initials: 'RK', name: 'Rahul K.', role: 'Engineer', outcome: 'Relocated to Seoul' }
  ],

  cta: {
    heading:     'Korean program now enrolling.',
    subtext:     'Begin your journey to Seoul today.',
    buttonLabel: 'Enroll Now',
  },
};
