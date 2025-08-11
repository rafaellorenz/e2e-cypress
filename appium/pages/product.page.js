class ProductPage {
  // Elementos
  get addToCartButton() {
    return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/cartBt")');
  }

  // Ações
  async clickAddToCartButton() {
    await this.addToCartButton.click();
  }
}

module.exports = new ProductPage();