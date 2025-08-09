export class CreateAccountPage {
  visitCreateAccountPage() {
    cy.visit('/customer/account/create');
  }

  clickCreateAccount() {
    cy.get('.panel > .header > :nth-child(3) > a').click();
  }

  fillNewUserData(firstName, lastName, email, password) {
    cy.get('#firstname').type(firstName);
    cy.get('#lastname').type(lastName);
    cy.get('#email_address').type(email);
    cy.get('#password').type(password);
    cy.get('#password-confirmation').type(password);
  }

  confirmAccountCreation() {
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
  }
}