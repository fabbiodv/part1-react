
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
	  setupNodeEvents(on, config){
	  },
	  baseUrl: 'http://localhost:3000',

	  BACKEND: 'http://localhost:3001/api'
  },
})
