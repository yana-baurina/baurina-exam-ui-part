const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
  defaultCommandTimeout: 1000,
  env: {
    anticaptchaApiKey: 'YOUR_ANTICAPTCHA_API_KEY'
  },

  e2e: {
    baseUrl: 'https://juice-shop-sanitarskyi.herokuapp.com/#',
    
  },
});
