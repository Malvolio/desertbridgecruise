import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: '#F5E6C8',
        gold: '#E6C88A',
        umber: '#3E2F1C',
        dune: '#C9A56C',
        clay: '#8C6341',
        ivory: '#FCF6EA',
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'Didot', 'Bodoni MT', 'serif'],
        sans: ['"Manrope"', '"Avenir Next"', 'sans-serif'],
      },
      boxShadow: {
        frame: '0 24px 70px rgba(62, 47, 28, 0.16)',
        soft: '0 18px 50px rgba(62, 47, 28, 0.12)',
      },
      backgroundImage: {
        'desert-glow':
          'radial-gradient(circle at top, rgba(230, 200, 138, 0.28), transparent 48%), linear-gradient(180deg, #fcf6ea 0%, #f5e6c8 100%)',
        'gold-wash':
          'linear-gradient(135deg, rgba(230, 200, 138, 0.9) 0%, rgba(245, 230, 200, 0.95) 46%, rgba(201, 165, 108, 0.85) 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config
