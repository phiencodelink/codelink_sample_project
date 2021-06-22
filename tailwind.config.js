  // tailwind.config.js
  module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
        backgroundImage: theme => ({
          'main-background': "url('assets/images/background.png')",
        })
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }
