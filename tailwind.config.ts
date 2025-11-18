// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-manrope)', 'sans-serif'],
      },
      colors: {
        dark: {
          background: '#0A0A0A',
          surface: '#1A1A1A',
          text: '#FFFFFF',
          accent: '#007AFF',
        },
        light: {
          background: '#FFFFFF',
          surface: '#F5F5F7',
          text: '#1D1D1F',
          accent: '#007AFF',
        },
      },
    },
  },
  plugins: [],
};
export default config;