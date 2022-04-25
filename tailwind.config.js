module.exports = {
  theme: {
    extend: {},
  },
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './components/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  variants: {
    // control which variants should be enabled for each core plugin
    extend: {},
  },
  plugins: [],
};
