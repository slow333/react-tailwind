const config = {
  theme: {
    extend: {
      screens: {
        'widescreen':  { 'raw': '(min-aspect-ratio: 3/2'},
        'tallscreen':  { 'raw': '(min-aspect-ratio: 13/20'},
      }
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;