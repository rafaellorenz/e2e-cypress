exports.config = {
  runner: "local",
  specs: ["appium/tests/**/*.js"],
  maxInstances: 1,
  capabilities: [{
    platformName: "Android",
    "appium:deviceName": "emulator-5554",
    "appium:platformVersion": "16.0",
    "appium:app": "mda-2.2.0-25.apk",
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
  services: ["appium"],
  appium: {
    command: "appium",
  },
};
