module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '375px',
      'sm':	'640px',
      'md':	'768px',	
      'lg':	'1024px',	
      'xl':	'1280px',	
      '2xl':	'1536px',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'custom-gray': '#F9F9F7',
      'custom-dark-gray': '#E7E7E7',
     }),
    extend: {
      backgroundImage: {
        'custom-gradient': "linear-gradient(180deg, black 0%, black 30%, #F9F9F7 30%, #F9F9F7 100%)",
       },
       outline: {
        'green-blue': '2px solid #6CA39A',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
