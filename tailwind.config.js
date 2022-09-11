module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-dark': '#202d36',
        'control-dark': '#2b3743',
      },
    },
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
