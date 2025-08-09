import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que acesso a página de login", () => {
  cy.visit("/login");
});

When("faço login com usuário {string} e senha {string}", (user, pass) => {
  cy.get("#username").type(user);
  cy.get("#password").type(pass);
  cy.get("button[type=submit]").click();
});

Then("devo ver a página de boas vindas", () => {
  cy.contains("Secure Area").should("be.visible");
});
