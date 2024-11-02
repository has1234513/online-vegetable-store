/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        tgreen: "#426B1F",
        twhite: "#FFFFFF",
        tblack: "#000000"
      },
    },
  },
  plugins: [],
}
