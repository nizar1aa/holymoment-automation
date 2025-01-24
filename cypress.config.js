const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl: 'https://dev-holymoment-v2.holywings.id/',
    //testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
