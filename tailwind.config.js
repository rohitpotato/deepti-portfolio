module.exports = {
 mode: 'jit',
 purge: ['./src/**/*.html', './src/**/*.js'],
 darkMode: false, // or 'media' or 'class'
 theme: {
  fontFamily: {
   sen: ['Sen', 'sans-serif'],
  },
  extend: {
   colors: {
    'bg-dark': 'rgb(18, 18, 18)',
    'primary-color-dark': '#181823',
    'light-text': 'rgb(225, 255, 255, 0.7)',
    'primary-purple': '#5221E6',
    'dark-text': 'rgb(139, 139, 144)',
    'grey-1': '#8491A0',
    'green-1': '#3CC74E',
    'green-2': 'rgb(164, 224, 174)',
   },
  },
 },
 variants: {
  extend: {},
 },
 plugins: [],
};
