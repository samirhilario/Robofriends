/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, rgba(7,27,82,1) 0%, rgba(0,128,128,1) 100%)',
      },
    },
  },
  plugins: [],
}

