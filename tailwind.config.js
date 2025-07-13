// tailwind.config.js
module.exports = {
  darkMode: 'class', // <- This is required for class-based dark mode
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {} },
  plugins: [],
};
