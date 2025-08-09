exports.config = {
  runner: "local",
  specs: ["./tests/**/*.js"],
  maxInstances: 1,
  capabilities: [
    {
      platformName: "Android",
      "appium:deviceName": "Android Emulator",
      "appium:platformVersion": "11.0",
      "appium:app": "/caminho/para/app.apk",
      "appium:automationName": "UiAutomator2",
    },
  ],
  logLevel: "info",
  framework: "mocha",
  reporters: ["spec"],
  services: ["appium"],
  appium: {
    command: "appium",
  },
};
