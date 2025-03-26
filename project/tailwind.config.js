/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        golden: '#FFD700',
        'golden-light': '#FFE55C',
      },
    },
  },
  plugins: [],
};