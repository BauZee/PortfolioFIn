/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8800ff',
        danger: '#e3342f',
        success: '#38c172',
        textPrimary: '#000000',
        lightGray: '#f9fafb',
      },
      boxShadow: {
        custom: '0 36px 0 -30px #fff, -36px 0 0 -30px #fff, 0 -36px 0 -30px #fff, 36px 0 0 -30px #fff, 0 0 0 5px #8800ff',
        glow: '0 0 40px rgba(136, 0, 255, 0.3)',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        blink: 'blink 1s step-end infinite',
        flip: 'flip 1s linear',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#8800ff' },
        },
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        // Allgemeine Layouts und Abschnitte
        '.section-container': {
          '@apply py-20': {},
        },
        '.section-title': {
          '@apply text-4xl font-bold text-textPrimary text-center mb-8': {},
        },
        '.content-container': {
          '@apply container mx-auto px-6': {},
        },

        // Karten und wiederverwendbare Komponenten
        '.card': {
          '@apply bg-white rounded-2xl shadow-custom p-6 transition-shadow duration-300 hover:shadow-glow': {},
        },
        '.exercise-card': {
          '@apply card cursor-pointer': {},
        },
        '.card-title': {
          '@apply text-xl font-bold text-primary mb-3': {},
        },
        '.card-content': {
          '@apply text-black': {},
        },

        // Social Links (Seite: Über mich / Projekte)
        '.social-link': {
          '@apply flex items-center gap-4 hover:text-primary w-full': {},
        },
        '.social-icon': {
          '@apply w-8 flex justify-center items-center text-primary': {},
        },

        // Badges (Seitenübergreifend)
        '.badge': {
          '@apply bg-primary/10 text-primary px-4 py-2 rounded-full': {},
        },

        // Dropdown-Menü (Navigation / Mobile Menü)
        '.dropdown-menu': {
          '@apply absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200': {},
        },
        '.dropdown-item': {
          '@apply block px-4 py-2 info-value hover:text-primary hover:bg-primary/10': {},
        },

        // Mobile Menü
        '.mobile-menu': {
          '@apply md:hidden fixed inset-0 bg-white z-40 overflow-y-auto': {},
        },
        '.mobile-menu-item': {
          '@apply block py-2 px-8 hover:bg-primary/10 info-value': {},
        },
        '.dropdown-toggle': {
          '@apply text-primary pl-4': {},
        },
        '.mobile-submenu': {
          '@apply bg-gray-50': {},
        },
        '.desktop-menu-link': {
          '@apply info-value hover:text-primary px-3 py-2': {},
        },
        '.info-value': {
          '@apply text-gray-700 hover:text-primary': {},
        },

        // Code-Previews (Seite: Übungsserien)
        '.code-preview': {
          '@apply bg-lightGray p-4 rounded-lg overflow-x-auto': {},
        },
        '.code-label': {
          '@apply text-primary font-medium': {},
        },

        // Profilbereich (Seite: Über mich)
        '.profile-image': {
          '@apply w-64 h-64 object-cover rounded-full border-4 border-primary shadow-lg animate-flip': {},
        },

        // Hero-Bereich (Startseite)
        '.hero-profile-wrapper': {
          '@apply md:w-1/2 flex justify-center relative transition-opacity duration-1000': {},
        },
        '.hero-profile-image': {
          '@apply w-64 h-64 object-cover rounded-full border-4 border-primary shadow-lg': {},
        },

        // Navigation und Footer
        '.navigation-grid': {
          '@apply w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-8': {},
        },
        '.navigation-card': {
          '@apply card focus:ring-2 focus:ring-primary focus:outline-none': {},
        },
        '.navigation-card-content': {
          '@apply text-lg font-medium text-center': {},
        },
        '.navigation-link': {
          '@apply badge mb-6': {},
        },

        // Formulare (Seite: Kontakt)
        '.form-container': {
          '@apply max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-custom': {},
        },
        '.form-label': {
          '@apply block font-medium text-primary mb-2': {},
        },
        '.form-input': {
          '@apply w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors': {},
        },
        '.form-textarea': {
          '@apply w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors': {},
        },
        '.form-button': {
          '@apply w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors': {},
        },
        '.form-error': {
          '@apply mt-1 text-sm text-danger': {},
        },

        // Buttons (Seitenübergreifend)
        '.btn-primary': {
          '@apply bg-primary text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors': {},
        },
        '.btn-secondary': {
          '@apply bg-secondary text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors': {},
        },
        '.btn-danger': {
          '@apply bg-danger text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors': {},
        },


      });
    },
  ],
};
