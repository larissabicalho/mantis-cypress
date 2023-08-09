// File: cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  username: 'administrator',
  password: 'root',
  video: true,
  env: {
    loginUrl: '/login_page.php',
    grepFilterSpecs: true,
    grepOmitFiltered: false
  },
  e2e: {
    baseUrl: 'http://127.0.0.1:8989', // Add the baseUrl property with the appropriate URL,
    setupNodeEvents(on, config) {
      require('@bahmutov/cy-grep/src/plugin')(config)
      return config
    },
  },
})

