/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainColor': {
          '50': '#f4f4fb',
          '100': '#e8e8f6',
          '200': '#cbcdec',
          '300': '#9da2dc',
          '400': '#6870c8',
          '500': '#454fb2',
          '600': '#333996',
          '700': '#2b2e79',
          '800': '#272a65',
          '900': '#252655',
          '950': '#030307',
      },
      
      }
    },
  },
  plugins: [],
}

