const tailwindcss = require('tailwindcss');

module.exports = () =>
 // const prod = process.env.NODE_ENV === 'production';
 ({
  plugins: [
   // require('postcss-fixes'),
   // require('postcss-import'),
   tailwindcss('./tailwind.config.js'),
   require('autoprefixer'),
  ],
 });
