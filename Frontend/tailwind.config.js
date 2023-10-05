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
        'primraryLight': '#EB618A'
      }
    },
  },
  plugins: [],
}

