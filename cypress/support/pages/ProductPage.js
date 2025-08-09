export class ProductPage {
  selectSize() {
    cy.get('#option-label-size-143-item-168')
      .should('be.visible')
      .click();
  }

  selectColor() {
    cy.get('#option-label-color-93-item-56')
      .should('be.visible')
      .click();
  }

  addToCart() {
    cy.get('#product-addtocart-button').click();
    cy.get('[data-ui-id="message-success"]', { timeout: 10000 }).should('be.visible');
  }
}
