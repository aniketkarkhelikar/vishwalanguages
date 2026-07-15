/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // --- Brand Colors ---
      colors: {
        paper:      '#FFFFFF',
        surface:    '#FAFAF8',
        tile:       '#F5F2EC',
        ink:        '#171512',
        brown:      '#8A5A44',
        terracotta: '#B85C38',
        sage:       '#6E7D64',
        'vw-blue':  '#4C6478',
        blue:       '#4C6478',
        clay:       '#E4D5C4',
        gold:       '#D9A98A',
        // Healthcare palette
        'health':       '#1B8A6B',
        'health-dark':  '#14705A',
        'health-light': '#E8F5F0',
        'health-accent': '#2CB88A',
      },

      // --- Typography ---
      fontFamily: {
        display: ['"Libre Baskerville"', 'Georgia', 'serif'],
        body:    ['"Inter"', 'system-ui', 'sans-serif'],
      },

      // --- Font Sizes ---
      fontSize: {
        'hero':  ['clamp(3.5rem, 8vw, 8.5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'h1':    ['clamp(2.5rem, 5vw, 5rem)',   { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
        'h2':    ['clamp(2rem, 4vw, 3.5rem)',   { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'h3':    ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2' }],
        'micro': ['0.625rem', { lineHeight: '1', letterSpacing: '0.2em' }],
        'label': ['0.5625rem', { lineHeight: '1', letterSpacing: '0.2em' }],
      },

      // --- Spacing Scale ---
      spacing: {
        'section':  '8rem',   // 128px — vertical section padding
        'section-sm': '6rem', // 96px — tighter sections
        'container': '1.5rem', // 24px — mobile horizontal padding
        'container-md': '3rem', // 48px — desktop horizontal padding
      },

      // --- Container ---
      maxWidth: {
        'site':   '1600px',
        'prose':  '1200px',
        'narrow': '800px',
        'text':   '560px',
      },

      // --- Border Radius ---
      borderRadius: {
        'tile':  '20px',
        '2xl':   '16px',
        '3xl':   '24px',
        '4xl':   '32px',
      },

      // --- Custom Shadows ---
      boxShadow: {
        'lift':    '0 20px 40px -12px rgba(23,21,18,0.12)',
        'card':    '0 4px 24px rgba(23,21,18,0.06)',
        'modal':   '0 40px 80px -20px rgba(23,21,18,0.25)',
        'tile-glass': '0 15px 35px rgba(23,21,18,0.06), inset 0 1px 0 rgba(255,255,255,0.7)',
        'tile-solid': '0 18px 36px -10px rgba(23,21,18,0.16), inset 0 2px 4px rgba(255,255,255,0.35)',
        'glow-health': '0 12px 32px -8px rgba(27,138,107,0.25)',
      },

      // --- Custom Animation ---
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'float':   'float 7s ease-in-out infinite',
        'glow':    'glow-breathe 8s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%':      { transform: 'translateY(-15px) rotate(4deg)' },
        },
        'glow-breathe': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%':      { opacity: '0.5', transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },

      // --- Letter Spacing ---
      letterSpacing: {
        'micro': '0.2em',
        'wide':  '0.15em',
        'wider': '0.12em',
      },

      // --- Screen breakpoints (explicit for responsive design) ---
      screens: {
        'xs': '475px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};
