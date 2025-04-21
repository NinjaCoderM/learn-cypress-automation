const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.cy.js",
  },
});
