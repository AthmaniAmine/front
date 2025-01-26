/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        primary: "#133E87", 
        secondary:"#CBDCEB",
        tertiary:"#F3F3E0",
        common:"#f2f6fa"
      },
      container:{
      center: true,
      padding: '5rem',
      
    }},
  },
  plugins: [],
}