/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily:{
        sixtyfour: ["Sixtyfour",'sans-serif'],
        orbitron: ['Orbitron','sans-serif']
      },
      colors:{
        lightorange: '#E46A00',
      },
    },
  },
  plugins: [],
}