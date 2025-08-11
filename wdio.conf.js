exports.config = {
  runner: "local",
  specs: ["appium/tests/**/*.js"],
  maxInstances: 1,
  capabilities: [{
    platformName: "Android",
    "appium:deviceName": "emulator-5554",
    "appium:platformVersion": "16.0",
    "appium:app": "/QA/e2e-cypress/mda-2.2.0-25.apk",
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
  reporters: ["spec"],
  services: ["appium"],
  appium: {
    command: "appium",
  },
};
