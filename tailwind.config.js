/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // --- Brand Colors ---
      colors: {
        paper:      '#FFFFFF',
        surface:    '#F5F5F7', // Apple-like subtle gray
        tile:       '#F5F5F7',
        ink:        '#000000', // Solid black for contrast
        brown:      '#8A5A44',
        terracotta: '#0066CC', // Apple-like blue accent instead of terracotta
        sage:       '#86868B', // Apple-like gray text
        'vw-blue':  '#0066CC',
        blue:       '#0066CC',
        clay:       '#E5E5EA',
        gold:       '#F5F5F7', // Changed to match surface for simplicity
        // Healthcare palette
        'health':       '#0066CC',
        'health-dark':  '#004C99',
        'health-light': '#F0F8FF',
        'health-accent': '#3385D6',
      },

      // --- Typography ---
      fontFamily: {
        display: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        body:    ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },

      // --- Font Sizes ---
      fontSize: {
        'hero':  ['clamp(3rem, 7vw, 7rem)', { lineHeight: '1', letterSpacing: '-0.04em', fontWeight: '600' }],
        'h1':    ['clamp(2.5rem, 5vw, 5rem)',   { lineHeight: '1.1',  letterSpacing: '-0.03em', fontWeight: '600' }],
        'h2':    ['clamp(2rem, 4vw, 3.5rem)',   { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h3':    ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2', fontWeight: '500' }],
        'micro': ['0.75rem', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '500' }],
        'label': ['0.625rem', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '500' }],
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
          '0%':   { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
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
