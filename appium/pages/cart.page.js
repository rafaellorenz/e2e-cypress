class CartPage {
  // Elementos
  get checkoutButton() {
    return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/cartBt")');
  }

  // Ações
  async clickCheckoutButton() {
    await this.checkoutButton.click();
  }
}

module.exports = new CartPage();