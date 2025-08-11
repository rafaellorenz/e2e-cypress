class LoginPage {
  get usernameEdit() {
    return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/nameET")');
  }

  get passwordEdit () {
    return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/passwordET")');
  }

  get loginButton () {
    return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/loginBtn")');
  }

  async fillUsername(username) {
    await this.usernameEdit.setValue(username);
  }

  async fillPassword(password) {
    await this.passwordEdit.setValue(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }
}

module.exports = new LoginPage();