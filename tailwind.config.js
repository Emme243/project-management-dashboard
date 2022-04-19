module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#058179',
        primaryLight: '#E2EEEC',
        greyLight: '#F7F7F7',
        greyMedium: '#E6E6E6',
        grey: '#5E666E',
        success: '#61C255',
        warning: '#F9DB72',
        needed: '#EA9E2C',
        danger: '#E35656',
      },
    },
  },
  plugins: [],
};
