/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector', // Optional: Passe dies nach Bedarf an
  content: [
    "./src/**/*.{html,ts}" // Stelle sicher, dass alle relevanten Dateien erfasst werden
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8800ff' // Definiert die primäre Farbe
      },
      boxShadow: {
        'custom': '0 36px 0 -30px #fff, -36px 0 0 -30px #fff, 0 -36px 0 -30px #fff, 36px 0 0 -30px #fff, 0 0 0 5px #8800ff',
        'glow': '0 0 40px rgba(136, 0, 255, 0.3)'
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'flip': 'flip 1s linear',
      },
      keyframes: {
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
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.card': {
          '@apply rounded-2xl p-8 shadow-custom transition-all duration-300 hover:scale-105 ring-[5px] ring-transparent hover:ring-primary': {}
        },
        '.section-container': {
          '@apply py-20': {}
        },
        '.section-title': {
          '@apply text-4xl font-bold text-gray-800 text-center mb-8': {}
        },
        '.content-container': {
          '@apply container mx-auto px-6': {}
        },
        '.info-label': {
          '@apply text-primary font-medium': {}
        },
        '.info-value': {
          '@apply text-gray-700': {}
        },
        '.badge': {
          '@apply bg-primary/10 text-primary px-4 py-2 rounded-full': {}
        },
        '.navigation-card-content': {
          '@apply flex flex-col items-center justify-center h-full': {}
        },
        '.glow-effect': {
          '@apply absolute -inset-4 bg-primary opacity-20 blur-xl rounded-full group-hover:opacity-40 transition duration-500': {}
        },
        '.profile-image': {
          '@apply relative w-64 h-64 object-cover rounded-full border-4 border-primary shadow-lg transform transition-transform duration-500': {}
        },
        '.card-title': {
          '@apply text-2xl font-semibold text-gray-800 mb-8': {}
        },
      })
    }
  ]
}
