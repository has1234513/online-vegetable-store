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
        'twhite-50': '#FFFFFF',
        'twhite-100': '#FFFFFF',
        'tblack-50': '#000000',
        'tblack-100': '#000000',
      },
    },
  },
  plugins: [],
};
