/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': "url('/images/headerimg/bg.png')",
      },
      gridTemplateRows: {
        'gr-2': 'repeat(2, minmax(0, 2fr))',
        
      },
      gridTemplateColumns: {
        '50-25-25': '50% 25% 25%',
        'grid-burger': '27% 35% auto'
      },
    },
  },
  plugins: [],
};
