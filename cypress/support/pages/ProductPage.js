export class ProductPage {
  selectSize() {
    cy.get('#option-label-size-143-item-168').click();
  }

  selectColor() {
    cy.get('#option-label-color-93-item-56').click();
  }

  addToCart() {
    cy.get('#product-addtocart-button').click();
    cy.get('[data-ui-id="message-success"]', { timeout: 10000 }).should('be.visible');
  }

  goToCart() {
    cy.get('.showcart').click();
    cy.get('#top-cart-btn-checkout').click();
  }
}
