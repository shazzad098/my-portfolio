// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  // Correct the paths to include the 'src' directory
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'sans-serif'],
        heading: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        light: {
          background: '#ffffff',
          primary: '#3b82f6',
          secondary: '#22d3ee',
          text: '#1e293b',
        },
        dark: {
          background: '#0f172a',
          primary: '#3b82f6',
          secondary: '#22d3ee',
          text: '#f1f5f9',
        },
      },
    },
  },
  plugins: [],
};
export default config;