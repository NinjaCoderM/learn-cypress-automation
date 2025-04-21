const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  defaultCommandTimeout: 4000,
  env: {
    url: "https://rahulshettyacademy.com",
  },
  retries: {
    runMode: 2
  },
  reporter: "cypress-mochawesome-reporter",
  video: true,
  screenshotsFolder: "cypress/reports/html/screenshots",
  videosFolder: "cypress/reports/html/videos",
  reporterOptions: {
    reportDir: "cypress/reports/html",
    reportFilename: "index.html",
    overwrite: false,
    html: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    videoOnFailOnly: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // 🧹 Automatisch index.html löschen (und optional andere)
      const reportFolder = path.join(__dirname, "cypress/reports/html");
      const indexFile = path.join(reportFolder, "index.html");

      // Wenn vorhanden, löschen
      if (fs.existsSync(indexFile)) {
        fs.unlinkSync(indexFile);
        console.log("✅ Alte index.html gelöscht");
      }
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    specPattern: "cypress/e2e/**/*.cy.js",
  },
});
