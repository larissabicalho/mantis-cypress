const { defineConfig } = require('cypress')

module.exports = defineConfig({
  url: 'http://127.0.0.1:8989',
  username: 'administrator',
  password: 'root',
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
