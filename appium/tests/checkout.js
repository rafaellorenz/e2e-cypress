const { faker } = require('@faker-js/faker');
const HomePage = require('../pages/home.page');
const LoginPage = require('../pages/login.page');
const ProductPage = require('../pages/product.page');
const CartPage = require('../pages/cart.page');
const CheckoutPage = require('../pages/checkout.page');
const OrderReviewPage = require('../pages/orderReview.page');
const checkoutPage = require('../pages/checkout.page');

describe('Realizar o fluxo de checkout', () => {
  it('Deve fazer o login e realizar o fluxo de checkout', async() => {
    let userFullName = faker.person.fullName();

    // Abre o view menu e seleciona a opção de login
    await HomePage.clickViewMenu();
    await HomePage.selectLoginOption();

    // Preenche usuário, senha e clica em login
    await LoginPage.fillUsername("bod@example.com");
    await LoginPage.fillPassword("10203040");
    await LoginPage.clickLoginButton();

    // Seleciona o primeiro produto da tela
    await HomePage.clickFirstProduct();
    
    // Adiciona ao carrinho
    await ProductPage.clickAddToCartButton();

    // Exande a opção do carrinho
    await HomePage.clickShowCartButton();
    
    // Clica em checkout
    await CartPage.clickCheckoutButton();

    // Preenche as informações pessoais e de pagamento
    await CheckoutPage.fillFullName(userFullName);
    await CheckoutPage.fillAddress(faker.location.streetAddress());
    await CheckoutPage.fillCity(faker.location.city());
    await CheckoutPage.fillZipcode(faker.location.zipCode());
    await CheckoutPage.fillCountry(faker.location.country());
    await CheckoutPage.clickToPaymentButton();
    await CheckoutPage.fillCardFullName(userFullName);
    await CheckoutPage.fillCardNumber(faker.finance.creditCardNumber());
    await CheckoutPage.fillExpireDate("08/30");
    await CheckoutPage.fillSecurityCode(faker.finance.creditCardCVV());
    await CheckoutPage.clickReviewOrderButton();

    // Finalizar a compra e valida a se foi para a página de compra conluída
    await OrderReviewPage.clickPlaceOrderButton();
    const isVisible = await OrderReviewPage.isOrderCompleteTextVisible();
    if (!isVisible) throw new Error("The order has not been completed!");    
  });
});
