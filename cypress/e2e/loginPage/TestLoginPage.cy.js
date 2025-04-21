/// <reference types="cypress" />

import LoginPage from "../../support/pageObjects/LoginPage";

describe("Test Suite End to End ecommerce Test", ()=>{
    let fdata;
    before(()=>{
        cy.fixture('example').then((data)=>{
            fdata = data;
        })
    })


    it("Submit Order", ()=>{
        Cypress.config('defaultCommandTimeout', 10000)

        const loginPage = new LoginPage(); 
        loginPage.visit("https://rahulshettyacademy.com/loginpagePractise/#")
        const productPage = loginPage.login(fdata.username, fdata.password)

        productPage.pageValidation()
        productPage.cartLimit();
        productPage.addCart(fdata.productNameNokia)
        productPage.addCart(fdata.productNameSamsung)
        const cartPage = productPage.goToCart();

        cartPage.validateMaxSum()
        const confirmationPage = cartPage.checkout()

        //cy.pause()

        confirmationPage.submitFormDetails()
        confirmationPage.validateSuccess()    
        
        
    })
})