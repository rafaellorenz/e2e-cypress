export class HomePage {
  visit() {
    cy.visit('/');
  }

  selectFirstProduct() {
    cy.get('.product-item')
      .first()
      .should('be.visible')
      .click();
  }

  goToCart() {
    cy.get('.showcart').click();
    cy.get(':nth-child(7) > .secondary > .action > span')
      .should('be.visible')
      .click();
  }
}
