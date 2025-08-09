export class HomePage {
  visit() {
    cy.visit('/');
  }

  selectFirstProduct() {
    cy.get('.product-item').first().click();
  }
}
