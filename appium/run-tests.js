const { remote } = require("webdriverio");

async function main() {
  const client = await remote({
    path: "/wd/hub",
    port: 4723,
    capabilities: {
      platformName: "Android",
      deviceName: "Android Emulator",
      platformVersion: "11.0",
      app: "/caminho/para/app.apk",
      automationName: "UiAutomator2",
    },
  });

  // exemplo simples de ação
  const btn = await client.$("~elementoIdOuAcessibilityId");
  await btn.click();

  await client.deleteSession();
}

main();
