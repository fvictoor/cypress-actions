const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vdg8y4',
  e2e: {
    name: 'chrome',
    viewportWidth: 1440,
    viewportHeight: 900,
    video: true,
    taskTimeout: 100000,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },


  }
});
