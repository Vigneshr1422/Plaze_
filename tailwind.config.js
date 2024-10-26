/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust if your components are in different folders
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 5s infinite', // Custom slow bounce animation
      },
    },
  },
  plugins: [],
}
