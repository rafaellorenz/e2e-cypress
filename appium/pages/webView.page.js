class WebViewPage {
  get gotToSiteButton() {
    return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/goBtn")');
  }

  get errorText() {
    return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/urlErrorTV")');
  }

  async clickGoToSiteButton() {
    await this.gotToSiteButton.click();
  }

  async isErrorVisible() {
    return await this.errorText.isDisplayed();
  }
}

module.exports = new WebViewPage();