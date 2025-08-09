export class CartPage {
  proceedToCheckout() {
    cy.contains('Proceed to Checkout').click();
  }
}
