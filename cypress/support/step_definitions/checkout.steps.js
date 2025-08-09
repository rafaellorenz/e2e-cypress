import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { HomePage } from '../../support/pages/HomePage';
import { ProductPage } from '../../support/pages/ProductPage';
import { CartPage } from '../../support/pages/CartPage';
import { CheckoutPage } from '../../support/pages/CheckoutPage';

const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

Given('que acesso a página inicial do e-commerce', () => {
  cy.visit('/');
});

Given('faço login com usuário {string} e senha {string}', (email, password) => {
  cy.login(email, password);
});

When('adiciono um produto ao carrinho', () => {
  homePage.visit();
  homePage.selectFirstProduct();
  productPage.selectSize();
  productPage.selectColor();
  productPage.addToCart();
});

When('vou para o carrinho e inicio o checkout', () => {
  productPage.goToCart();
});

When('preencho os dados de envio e pagamento', () => {
  checkoutPage.fillShippingDetails();
  checkoutPage.selectShippingMethod();
  checkoutPage.clickNext();
  checkoutPage.placeOrder();
});

Then('devo ver a mensagem de confirmação da compra', () => {
  checkoutPage.verifySuccessMessage();
});
