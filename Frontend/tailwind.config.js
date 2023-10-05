/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E11D58',
        'primraryLight': '#EB618A',
        'customTitle': '#080B12',
        'customText': '#0F172A',
        'customPlaceholder': '#969A9C',
        'customBorder': '#E9E8E7',
      },
      fontFamily: {
        customGrotesk: ['grotesk', 'sans-serif'],
        customRegular: ['poppins-regular', 'sans-serif'],
        customMedium: ['poppins-medium', 'sans-serif'],
        customSemibold: ['poppins-semibold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

