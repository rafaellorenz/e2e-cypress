// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("login", (user, pass) => {
  cy.visit("/login");
  cy.get("#username").type(user);
  cy.get("#password").type(pass);
  cy.get("button[type=submit]").click();
});
