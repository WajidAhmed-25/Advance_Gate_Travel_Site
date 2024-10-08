/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs':'300px',
        'xs': '480px',   
        'sm': '640px',   
        'md': '768px',  
        'lgg':'940px',
        'lg': '1024px',  
        'xl': '1280px',  
        '2xl': '1536px', 
      },
    },
  },
  plugins: [],
}
