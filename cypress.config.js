const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");
const { Client } = require('pg'); // PostgreSQL Client

const user = 'cc'        //im Terminal export DB_USER=mein_user         -> process.env.DB_USER;
const password = 'cc155' //im Terminal export DB_PASSWORD=mein_passwort -> process.env.DB_PASSWORD;

module.exports = defineConfig({
  defaultCommandTimeout: 4000,
  env: {
    url: "https://rahulshettyacademy.com",
    db: {
      user: user,
      host: "localhost",
      database: "codecrafters_db",
      password: password,
      port: 5432
    }
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
      on('task', {
        queryDb: (query) => {
          const client = new Client(config.env.db);
          return client.connect()
            .then(() => client.query(query))
            .then(res => {
              client.end();
              return res.rows;
            })
            .catch(err => {
              client.end();
              throw err;
            });
        }
      });
      on('task', {
        readExcelFile(filePath) {
          const excelToJson = require('convert-excel-to-json');
          const absolutePath = path.join(__dirname, filePath);
          const fileBuffer = fs.readFileSync(absolutePath);
          const result = excelToJson({ source: fileBuffer });
          return result;
        }
      });
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
