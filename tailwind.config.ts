import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { charcoal: '#171717', ivory: '#F3EFE7', gold: '#B99A69', sage: '#747C75', ink: '#292925' },
      fontFamily: { sans: ['var(--font-manrope)', 'Arial', 'sans-serif'], display: ['var(--font-cormorant)', 'Georgia', 'serif'] },
      boxShadow: { soft: '0 20px 60px rgba(23,23,23,.08)' }
    }
  },
  plugins: []
};
export default config;
