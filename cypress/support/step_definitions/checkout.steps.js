import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { faker } from '@faker-js/faker';
import { CreateAccountPage } from '../pages/CreateAccountPage';
import { AccountPage } from '../pages/AccountPage';
import { HomePage } from '../../support/pages/HomePage';
import { ProductPage } from '../../support/pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../../support/pages/CheckoutPage';

let userData;

const createAccountPage= new CreateAccountPage();
const accountPage = new AccountPage();
const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

Given('que acesso a página inicial do e-commerce', () => {
  cy.visit('/');
});

Given('crio um novo usuário e verifico se já está logado', () => {
  userData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 12 })
  };
  cy.writeFile('cypress/fixtures/userData.json', userData);

  createAccountPage.clickCreateAccount();
  createAccountPage.fillNewUserData(userData.firstName, userData.lastName, userData.email, userData.password, userData.password);
  createAccountPage.confirmAccountCreation();
  accountPage.getWelcomeMessage().should('contain.text', 'My Account');
});

When('adiciono um produto ao carrinho', () => {
  homePage.visit();
  homePage.selectFirstProduct();
  productPage.selectSize();
  productPage.selectColor();
  productPage.addToCart();
});

When('vou para o carrinho e inicio o checkout', () => {
  homePage.goToCart();
  cartPage.waitCartPageLoad();
  cartPage.clickProceedToCheckout();
});

When('preencho os dados de envio e pagamento', () => {
  cy.fixture('userData').then((userData) => {
    checkoutPage.waitCheckoutPageLoad();
    checkoutPage.fillShippingDetails(userData.firstName, userData.lastName);
    checkoutPage.selectShippingMethod();
    checkoutPage.clickNext();
    checkoutPage.placeOrder();
  });
});

Then('devo ver a mensagem de confirmação da compra', () => {
  checkoutPage.verifySuccessMessage();
});
