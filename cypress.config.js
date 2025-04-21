const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 4000,
  env:{
    url: "https://rahulshettyacademy.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.cy.js",
  },
});
