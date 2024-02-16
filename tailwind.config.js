/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        climate: '#F9F7D0',
        labor: '#4CAA49',
        housing: '#9DADD6',
        ai: '#E6D5F9',
        conflict: '#F37A4B',
      }
    },
  },
  plugins: [],
};
