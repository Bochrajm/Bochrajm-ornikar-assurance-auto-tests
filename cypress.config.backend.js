const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await preprocessor.addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );

      return config;
    },
    specPattern: 'cypress/e2e/backend/**/*.feature',
    baseUrl: 'https://insurance-api.ornikar.com',
    reporter: "mochawesome",
    reporterOptions: {
      "reportDir": "reports/backend",
      "overwrite": true,
      "html": true,
      "json": false
    }
  },
});