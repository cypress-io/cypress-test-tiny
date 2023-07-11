const { defineConfig } = require("cypress");
const { debuggerPlugin } = require("cypress-debugger");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      debuggerPlugin(on, config, {
        meta: {
          key: "value",
        },
        callback: (path, data) => {
          console.log({
            path,
            data,
          });
        },
      });
      return config;
    },
  },
});
