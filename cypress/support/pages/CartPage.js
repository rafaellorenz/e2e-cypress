export class CartPage {
  waitCartPageLoad() {
    cy.get('.base').should('be.visible');
  }

  clickProceedToCheckout() {
    cy.get('.checkout-methods-items > :nth-child(1) > .action').click();
  }
}