/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Erfasst alle relevanten Dateien
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8800ff', // Primärfarbe
        secondary: '#ff8800', // Sekundärfarbe
        danger: '#e3342f', // Für Fehlermeldungen oder kritische Aktionen
        success: '#38c172', // Für Erfolgsmeldungen
        textPrimary: '#333333', // Standardtextfarbe
        lightGray: '#f9fafb', // Für Code-Previews
      },
      boxShadow: {
        custom: '0 36px 0 -30px #fff, -36px 0 0 -30px #fff, 0 -36px 0 -30px #fff, 36px 0 0 -30px #fff, 0 0 0 5px #8800ff',
        glow: '0 0 40px rgba(136, 0, 255, 0.3)', // Fliederfarbener Glow-Effekt
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
        // **Globale Layouts und Sektionen**
        '.section-container': {
          '@apply py-20': {},
        },
        '.section-title': {
          '@apply text-4xl font-bold text-textPrimary text-center mb-8': {},
        },
        '.sub-section-title': {
          '@apply text-2xl text-center font-bold text-gray-800 mb-8': {},
        },
        '.content-container': {
          '@apply container mx-auto px-6': {},
        },

        // **Karten und Projekte**
        '.card': {
          '@apply bg-white rounded-2xl shadow-custom p-6 transition-shadow duration-300 hover:shadow-glow': {}, // Standardkarte mit Hover-Effekt
        },
        '.card-header': {
          '@apply flex justify-between items-center': {}, // Header für Akkordeon-Karten
        },
        '.project-card': {
          '@apply card group cursor-pointer': {}, // Karte für Projekte
        },
        '.card-title': {
          '@apply text-xl font-bold text-primary mb-3': {}, // Titel in Karten
        },
        '.card-content': {
          '@apply text-gray-600': {}, // Standardtext in Karten
        },
        '.accordion-content': {
          '@apply transition-all duration-300 overflow-hidden': {}, // Animation für Akkordeon-Inhalte
        },

        '.project-grid': {
          '@apply grid grid-cols-1 gap-8': {}, // Basis-Grid für Projekte
        },

        '.accordion-content': {
          '@apply transition-all duration-300 overflow-hidden': {}, // Animierte Inhalte für Akkordeon
        },
        '.card-header': {
          '@apply flex justify-between items-center': {}, // Header von Akkordeon-Karten
        },
        '.accordion-title': {
          '@apply text-xl font-semibold text-primary': {}, // Titel in Akkordeons
        },


        // **Badges und Technologien**
        '.badge': {
          '@apply bg-primary/10 text-primary px-4 py-2 rounded-full text-sm': {}, // Badges
        },
        '.technology-badge': {
          '@apply px-3 py-1 bg-primary/10 text-primary rounded-full text-sm': {}, // Technologien-Badges
        },

        // **Skill-Übersicht**
        '.skill-category': {
          '@apply text-xl font-semibold text-primary mb-4': {}, // Kategorie-Titel
        },
        '.skill-list': {
          '@apply space-y-2': {}, // Liste der Fähigkeiten
        },
        '.skill-item': {
          '@apply flex items-center gap-2': {}, // Einzelne Fähigkeit
        },

        // **Profilbereich**
        '.profile-image-wrapper': {
          '@apply relative mb-8': {}, // Profilbild-Wrapper
        },
        '.profile-image': {
          '@apply w-64 h-64 object-cover rounded-full border-4 border-primary shadow-lg animate-flip': {}, // Profilbild
        },

        // **Hero-Bereich**
        '.hero-container': {
          '@apply flex flex-col md:flex-row items-center justify-center md:justify-between': {},
        },
        '.hero-title': {
          '@apply text-4xl md:text-5xl font-bold whitespace-pre-line text-center': {},
        },
        '.hero-title-blink': {
          '@apply border-r-4 border-primary ml-1 animate-blink': {}, // Blinken
        },
        '.hero-profile-wrapper': {
          '@apply md:w-1/2 flex justify-center relative transition-opacity duration-1000': {}, // Ohne group
        },
        '.hero-profile-image': {
          '@apply w-64 h-64 object-cover rounded-full border-4 border-primary shadow-lg': {}, // Profilbild selbst
        },

        // **Navigation und Footer**
        '.navigation-grid': {
          '@apply w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-8': {}, // Grid-Layout für Karten
        },
        '.navigation-card': {
          '@apply card focus:ring-2 focus:ring-primary focus:outline-none': {}, // Standard für Karten
        },
        '.navigation-card-content': {
          '@apply text-lg font-medium text-gray-800 text-center': {}, // Inhalt der Karten
        },
        '.navigation-link': {
          '@apply badge mb-6': {}, // Navigation Badge
        },

        // **Formulare**
        '.form-container': {
          '@apply max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-custom': {}, // Formularwrapper
        },
        '.form-label': {
          '@apply block font-medium text-primary mb-2': {}, // Labels
        },
        '.form-input': {
          '@apply w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors': {}, // Input-Felder
        },
        '.form-textarea': {
          '@apply w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors': {}, // Textarea-Felder
        },
        '.form-button': {
          '@apply w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors': {}, // Submit-Button
        },
        '.form-error': {
          '@apply mt-1 text-sm text-danger': {}, // Fehlermeldungen
        },

        // **Buttons**
        '.btn-primary': {
          '@apply bg-primary text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors': {}, // Standardbutton
        },
        '.btn-secondary': {
          '@apply bg-secondary text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors': {}, // Sekundärbutton
        },
        '.btn-danger': {
          '@apply bg-danger text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors': {}, // Fehlerbutton
        },

        // **Footer**
        '.footer-container': {
          '@apply bg-gray-800 text-white py-6': {}, // Footerbereich
        },
        '.footer-link': {
          '@apply text-primary hover:underline': {}, // Footerlinks
        },
      });
    },
  ],
};
