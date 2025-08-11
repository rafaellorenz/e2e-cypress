class HomePage {
  // Elementos
  get viewMenu() {
    return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/menuIV")');
  }

  get loginOption() {
    return $('android=new UiSelector().text("Log In")');
  }

  get webViewOption() {
    return $('android=new UiSelector().text("WebView")');
  }

  get firstProduct() {
    return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productIV").instance(0)');
  }

  get webViewMenu() {
    return $('android=new UiSelector().text("WebView")');
  }

  get showCartButton() {
    return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/cartIV")');
  }

  // Ações
  async clickViewMenu() {
    await this.viewMenu.click();
  }

  async selectLoginOption() {
    await this.loginOption.click();
  }

  async selectWebViewOption() {
    await this.webViewOption.click();
  }

  async clickFirstProduct() {
    await this.firstProduct.click();
  }

  async clickWebViewMenu() {
    await this.webViewMenu.click();
  }

  async clickShowCartButton() {
    await this.showCartButton.click();
  }
}

module.exports = new HomePage();