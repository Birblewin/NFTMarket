/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundColor: {
        'link-side-panel-container': 'rgba(0, 0, 0, 0.6)',
        'link-side-panel-container__side-panel': 'rgb(24, 25, 27)',
        'link-side-panel-container__side-panel--rewards-button': 'rgb(20, 20, 20)',
        // SPECIAL CLASSES
        'link-side-panel-container__side-panel--rewards-button++active': 'rgb(231, 215, 150)'
      },

      boxShadow: { 'link-side-panel-container__side-panel': '0px 10px 20px black' },
      
      colors: { 
        'side-panel--navbar--side-buttons--p': 'rgb(156, 163, 175)', 
        'link-side-panel-container__side-panel--launchpad-section--div--a': 'rgb(231, 215, 150)', 
        // SPECIAL CLASSES
        'link-side-panel-container__side-panel--rewards-button++active': 'rgb(20, 20, 20)', 
      },

      borderColor: {
        'link-side-panel-container__side-panel--rewards-button': 'rgb(231, 215, 150)',
      }
    },
  },
  plugins: [],
}

