const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      poppins: ['Poppins'],
    },
    boxShadow: {
      'custom-alt': '3px 3px 20px rgba(80, 78, 78, 0.5)',
      'custom-light': ' 0 0 10px #313131',
      'custom-dark': '5px 5px 10px #00ccff , -5px -5px 10px #14161c',
    },

    extend: {
      inset: {
        17: '68px',
      },
      colors: {
        'regal-blue': '#243c5a',
        green: {
          DEFAULT: '#0e1538',
        },
        dark: {
          DEFAULT: '#010101',
          100: '#00ccff',
          200: '#16181d',
          300: '#16181d',
          500: '#0f1115',
          700: '#202125',
        },
      },
    },
    animate: {
      bounce: 'bounce 5s',
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
    },
  },
  plugins: [],
};
