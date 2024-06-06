module.exports = {
  purge: [],
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset:
      {
        '1/5':'20%',
      },
      spacing: {
        '1/5': '20%',
        '1/12':'5%'

      },
      height: {
        'fit-content': 'fit-content',
      },
      width:
      {
        '90':'90%',
        '60':'60%',
        '40':'40%',
        'fit-content': 'fit-content',
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
