const HomePage = require('../pages/home.page');
const LoginPage = require('../pages/login.page');
const WebViewPage = require('../pages/webView.page');

describe('Login e navegação', () => {
  it('Deve fazer o login e validar um elemento na tela', async() => {
    await HomePage.clickViewMenu();
    await HomePage.selectLoginOption();

    await LoginPage.fillUsername("bod@example.com");
    await LoginPage.fillPassword("10203040");
    await LoginPage.clickLoginButton();

    await HomePage.clickViewMenu();
    await HomePage.clickWebViewMenu();

    await WebViewPage.clickGoToSiteButton();
    const isVisible = await WebViewPage.isErrorVisible();
    if (!isVisible) throw new Error("The element is not visible!");
  });
});