const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      screens: {
        ...defaultTheme.screens,
        xs: '0px',
        sm: '576px',
        md: '768px',
        lg: '1023px',
        xl: '1200px',
        xxl: '1400px',
        xxxl: '1700px',
        qxl: '2000px',
      },
      spacing: {
        13: '3.25rem', // 52px
        15: '3.75rem', // 60px
      },
    },
  },
  plugins: [],
};
