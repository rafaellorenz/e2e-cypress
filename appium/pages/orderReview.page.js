class OrderReviewPage {
  // Elementos
  get placeOrderButton() {
    return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/paymentBtn")');
  }

  get completeCheckoutText() {
    return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/completeTV")');
  }

  // Ações
  async clickPlaceOrderButton() {
    await this.placeOrderButton.click();
  }

  async isOrderCompleteTextVisible() {
    return await this.completeCheckoutText.isDisplayed();
  }
}

module.exports = new OrderReviewPage();