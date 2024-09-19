/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
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
