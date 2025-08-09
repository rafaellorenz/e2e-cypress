export class CheckoutPage {
  waitCheckoutPageLoad() {
    cy.get('#checkout-step-shipping').should('be.visible');
  }

  fillShippingDetails(firstName, lastName) {
    cy.get('input[name="firstname"]').type(firstName);
    cy.get('input[name="lastname"]').type(lastName);
    cy.get('input[name="street[0]"]').type('Rua Exemplo 123');
    cy.get('input[name="city"]').type('Toledo');
    cy.get('select[name="country_id"]').select('Brazil');
    cy.get('select[name="region_id"]').select('Paraná');
    cy.get('input[name="postcode"]').type('85900-000');
    cy.get('input[name="telephone"]').type('44999999999');
  }

  confirmAddress() {
    cy.get('.shipping-address-item').should('be.visible');
  }

  selectShippingMethod() {
    cy.get('input[name="ko_unique_1"]').check({ force: true });
  }

  clickNext() {
    cy.wait(2000);
    cy.get('.button').click();
  }

  placeOrder() {
    cy.contains('Place Order', { timeout: 10000 })
      .should('be.visible')
      .click();
  }

  verifySuccessMessage() {
    cy.contains('Thank you for your purchase!').should('be.visible');
  }
}
