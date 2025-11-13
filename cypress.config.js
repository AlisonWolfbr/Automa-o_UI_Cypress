const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    viewportWidth: 1366,
    viewportHeight: 768,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {},
  },
});
