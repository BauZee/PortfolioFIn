/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 36px 0 -30px #fff, -36px 0 0 -30px #fff, 0 -36px 0 -30px #fff, 36px 0 0 -30px #fff, 0 0 0 5px #8800ff'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], 
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'flip': 'flip 1s linear',
      },
      keyframes: {
        typewriter: {
          'from': { width: '0' },
          'to': { width: '24em' }
        },
        blink: {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#8800ff' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      }
    }
  },
  plugins: [],
}
