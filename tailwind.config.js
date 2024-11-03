/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        newsreader: ['Newsreader', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'tgreen-50': '#83af5e',
        'tgreen-100': '#426B1F',
        'twhite-100': '#FFFFFF',
        'tblack-100': '#000000',
        'tgrey-50': '##FAFAF5',
        'tgrey-60': '#E6E6E6',
        'tgrey-100': '#6D6D6D'
      },
    },
  },
  plugins: [],
};
