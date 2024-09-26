/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato-bold': ['Lato-bold', 'sans-serif'],
        'lato-regular': ['Lato-regular', 'sans-serif'],
      },
      fontSize: {
        '4rem': '4rem',
          4.5: '1.125rem',
          7.5:  '1.875rem',
          5: '1.25rem',
      },
      colors:{
        'banner-blue': '#0281ad',
        'form-gray': '#e4e9f2',
        'dimgray': '#747472',
        'btn1': 'rgba(143, 155, 179, 0.48)',
        'border1': '#747472',
        silver: '#acb5c9',
        whitesmoke: '#ecf0f6',
        dashbody: '#edf1f7',
        badgegreen: '#00d68f',
        inputbg: '#f7f9fc',
        deeppink: '#ff3d71',
        aquamarine: '#8fedce',
        badgeblue: '#0095ff',
        badgeorange: '#ffaa00',
        circlebrown: '#f0ad54',
      },
      height:{
        18: '4.5rem',
        148: '37rem',
        74: '18.5rem',
        108.5: '28.5rem',
        90: '22.5rem',
        '77%': '77%',
        '80%': '80%',
      },
      width: {
        136: '25rem',
        138: '27rem',
        '90%': '90%',
      },
      margin:{
        13: '3.25rem',
      },
      spacing:{
        34: '8.5rem',
        14: '3.5rem',
      },
      lineHeight:{
        12: '3rem',
        10: '2.5rem',
        8: '2rem',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

