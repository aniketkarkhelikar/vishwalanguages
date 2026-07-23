/**
 * VISHWA LANGUAGES — Design Tokens
 * Single source of truth for all brand values.
 * These mirror tailwind.config.js but are available as JS objects
 * for use in Framer Motion and dynamic styles.
 */

// --- Color Palette ---
export const colors = {
  paper:      '#FDFCFB',
  surface:    '#F4F1ED',
  tile:       '#E8E3DD',
  ink:        '#18181A',
  inkSoft:    'rgba(24,24,26,0.6)',
  line:       'rgba(24,24,26,0.1)',
  brown:      '#8C7355',
  terracotta: '#B85C38', // Brand Warm Accent
  sage:       '#6E7D64',
  blue:       '#004B87', // Brand Primary Blue
  clay:       '#D4C5B9',
  gold:       '#D4AF37',
  ruby:       '#C8102E', // Vibrant Red for French/Spanish
  saffron:    '#FF671F', // Vibrant Orange for Sanskrit
  teal:       '#0D9488', // Professional Teal for IELTS
};

// --- Healthcare Palette (distinct from corporate) ---
export const healthcareColors = {
  primary:    '#0284C7',   // Medical Blue
  secondary:  '#0369A1',   // Deeper Medical Blue
  accent:     '#0EA5E9',   // Bright Blue
  light:      '#F0F9FF',   // Very light blue
  bgTint:     'rgba(2,132,199,0.06)',
  gold:       '#D4AF37',   // Warm gold
};

// --- Typography ---
export const fonts = {
  display: '"Libre Baskerville", Georgia, serif',
  body:    '"Inter", system-ui, sans-serif',
};

// --- Language Brand Colors ---
// Each language has its own accent color drawn from the palette
export const languageColors = {
  japanese: { primary: colors.terracotta, bgTint: 'rgba(184,92,56,0.05)' },
  german:   { primary: colors.blue,       bgTint: 'rgba(76,100,120,0.05)' },
  french:   { primary: colors.ruby,       bgTint: 'rgba(200,16,46,0.05)' },
  spanish:  { primary: colors.gold,       bgTint: 'rgba(212,175,55,0.05)' },
};

// --- Breakpoints (mirrors Tailwind defaults) ---
export const breakpoints = {
  sm:  640,
  md:  768,
  lg:  1024,
  xl:  1280,
  '2xl': 1536,
};

// --- Elevation (z-index scale) ---
export const elevation = {
  base:    0,
  card:    10,
  sticky:  40,
  overlay: 50,
  modal:   100,
  toast:   200,
};
