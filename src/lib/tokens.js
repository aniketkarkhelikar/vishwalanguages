/**
 * VISHWA LANGUAGES — Design Tokens
 * Single source of truth for all brand values.
 * These mirror tailwind.config.js but are available as JS objects
 * for use in Framer Motion and dynamic styles.
 */

// --- Color Palette ---
export const colors = {
  paper:      '#FFFFFF',
  surface:    '#FAFAF8',
  tile:       '#F5F2EC',
  ink:        '#171512',
  inkSoft:    'rgba(23,21,18,0.55)',
  line:       'rgba(23,21,18,0.09)',
  brown:      '#8A5A44',
  terracotta: '#B85C38',
  sage:       '#6E7D64',
  blue:       '#4C6478',
  clay:       '#E4D5C4',
  gold:       '#D9A98A',
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
  french:   { primary: colors.sage,       bgTint: 'rgba(110,125,100,0.05)' },
  spanish:  { primary: colors.brown,      bgTint: 'rgba(138,90,68,0.05)' },
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
