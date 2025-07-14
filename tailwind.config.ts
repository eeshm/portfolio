
import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';


const config: Config = {
  darkMode:'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [animate],
};

export default config;