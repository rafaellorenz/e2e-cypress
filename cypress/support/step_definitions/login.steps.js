import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../../support/pages/LoginPage';
import { AccountPage } from '../../support/pages/AccountPage';

const loginPage = new LoginPage();
const accountPage = new AccountPage();

Given('que acesso a página de login', () => {
  loginPage.visit();
});
/*
When('faço login com usuário {string} e senha {string}', (email, password) => {
  loginPage.fillEmail(email);
  loginPage.fillPassword(password);
  loginPage.submit();
});
*/
Then('devo ver a página da conta do usuário', () => {
  accountPage.getWelcomeMessage().should('contain.text', 'My Account');
});
