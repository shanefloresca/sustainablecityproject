/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'palette': {
          '100': '#DCEBCA',
          '200': '#CFE1B9',
          '300': '#C2D5AA',
          '400': '#B5C99A',
          '500': '#A6B98B',
          '600': '#97A97C',
          '700': '#849669',
          '800': '#728359',
          '900': '#606F49',
        }
      }
    },
  },
  plugins: [],
}

