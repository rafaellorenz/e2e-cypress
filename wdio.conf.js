exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  runner: "local",
  specs: ["appium/tests/**/*.js"],
  maxInstances: 1,
  capabilities: [{
    platformName: "Android",
    "appium:deviceName": "emulator-5554",
    "appium:platformVersion": "16.0",
    "appium:app": "bs://48061ed201f9c086394f6ab3e9fbc2c9c1ed8515",
    "appium:automationName": "UiAutomator2",
    'appium:autoGrantPermissions': true,
    'appium:unicodeKeyboard': true,
    'appium:resetKeyboard': true
  }],
  logLevel: "info",
  framework: "mocha",
  mochaOpts: {
    timeout: 600000
  },
  reporters: [
    ['mochawesome', {
      outputDir: './reports',
      outputFileFormat: function(opts) { 
        return `results-${opts.cid}.${opts.capabilities}.json`;
      },
      mochawesomeOpts: {
        reportDir: './reports',
        reportFilename: 'report',
        quiet: true,
        json: false,
        html: true,
      }
    }]
  ],
  services: ["appium"],['browserstack'],
  appium: {
    command: "appium",
  },
};
