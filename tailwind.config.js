/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors:{
      'gray-50':'#f7f7f8',
      'gray-100':'#efeef0',
      'gray-200':'#dbdadd',
      'gray-300':'#bbb9c0',
      'gray-400':'#96939d',
      'gray-500':'#6e6b76',
      'gray-600':'#635f6a',
      'gray-700':'#514e56',
      'gray-800':'#454349',
      'gray-900':'#3c3b3f',
      'gray-950':'#28272a',

      'green': {
        '50': '#effef3',
        '100': '#d9ffe5',
        '200': '#b5fdcc',
        '300': '#7bfaa5',
        '400': '#3bed76',
        '500': '#12e258',
        '600': '#07b241',
        '700': '#0a8b36',
        '800': '#0e6d2f',
        '900': '#0d5a2a',
        '950': '#013213',
    },

    }
  },
  plugins: [],
}
