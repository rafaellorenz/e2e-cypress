export class LoginPage {
  visit() {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
  }

  fillEmail(email) {
    cy.get('#email').clear().type(email);
  }

  fillPassword(password) {
    cy.get('#pass').clear().type(password);
  }

  submit() {
    cy.get('#send2').click();
  }
}
