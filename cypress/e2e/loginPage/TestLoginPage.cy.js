/// <reference types="cypress" />

import LoginPage from "../../support/pageObjects/LoginPage";

describe("Test Suite End to End ecommerce Test", () => {
  let fdata;
  before(() => {
    cy.fixture("example").then((data) => {
      fdata = data;
    });
  });

  it("Submit Order", () => {
    Cypress.config("defaultCommandTimeout", 10000);

    const loginPage = new LoginPage();
    loginPage.visit(Cypress.env("url") + "/loginpagePractise/#");
    cy.screenshot("nach-visit");
    cy.log(`Username: ${fdata.username}`);
    const productPage = loginPage.login(fdata.username, fdata.password);

    productPage.pageValidation();
    cy.screenshot("ProductPage");
    productPage.getCardCount().should("have.length", 4);
    productPage.addCart(fdata.productNameNokia);
    productPage.addCart(fdata.productNameSamsung);
    cy.screenshot("Cart-two-products");
    const cartPage = productPage.goToCart();

    cartPage.sumOfProducts().then((sum) => expect(sum).to.be.lessThan(250000));
    cy.screenshot("cartPage");
    const confirmationPage = cartPage.checkout();

    //cy.pause()

    confirmationPage.submitFormDetails();
    confirmationPage.getSuccessMessage();
    cy.screenshot("confirmationPage");
  });
});
