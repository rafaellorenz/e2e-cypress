class CheckoutPage {
  // Elementos
  get fullNameEdit() {
    return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/fullNameET")');
  }

  get addressEdit() {
    return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/address1ET")');
  }

  get cityEdit() {
    return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/cityET")');
  }

  get zipcodeEdit() {
    return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/zipET")');
  }

  get countryEdit() {
    return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/countryET")');
  }

  get toPaymentoButton() {
    return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/paymentBtn")');
  }

  get cardFullNameEdit() {
    return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/nameET")');
  }

  get cardNumberEdit() {
    return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/cardNumberET")');
  }

  get expireDateEdit() {
    return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/expirationDateET")');
  }

  get securityCodeEdit() {
    return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/securityCodeET")');
  }

  get reviewOrderButton() {
    return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/paymentBtn")');
  }

  // Ações
  async fillFullName(fullName) {
    await this.fullNameEdit.click();
    await this.fullNameEdit.setValue(fullName);
  }

  async fillAddress(address) {
    await this.addressEdit.click();
    await this.addressEdit.setValue(address);
  }

  async fillCity(city) {
    await this.cityEdit.click();
    await this.cityEdit.setValue(city);
  }

  async fillZipcode(zipcode) {
    await this.zipcodeEdit.click();
    await this.zipcodeEdit.setValue(zipcode);
  }

  async fillCountry(country) {
    await this.countryEdit.click();
    await this.countryEdit.setValue(country);
  }

  async clickToPaymentButton() {
    await this.toPaymentoButton.click();
  }

  async fillCardFullName(cardFullName) {
    await this.cardFullNameEdit.click();
    await this.cardFullNameEdit.setValue(cardFullName);
  }

  async fillCardNumber(cardNumber) {
    await this.cardNumberEdit.click();
    await this.cardNumberEdit.setValue(cardNumber);
  }

  async fillExpireDate(expireDate) {
    await this.expireDateEdit.click();
    await this.expireDateEdit.setValue(expireDate);
  }

  async fillSecurityCode(securityCode) {
    await this.securityCodeEdit.click();
    await this.securityCodeEdit.setValue(securityCode);
  }

  async clickReviewOrderButton() {
    await this.reviewOrderButton.click();
  }
}

module.exports = new CheckoutPage();