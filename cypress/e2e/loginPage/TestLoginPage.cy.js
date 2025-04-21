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
        productPage.goToCart();

        cy.get("tr").each($el => {
            const $row = Cypress.$($el);
          
            const col = $row.find(".col-sm-8");
            if (col.length > 0 && col.is(":visible")) {
              const priceText = $row.find("td.col-sm-1 strong").first().text();
              const value = parseInt(priceText.replace(/[^\d]/g, ''));
              expect(value).to.be.lessThan(200000);
            }
        });

        //alternative vom Vortragenden
        let sum = 0; 
        cy.get("tr td:nth-child(4) strong").each($el => {
            const amount = Number($el.text().split(" ")[1].trim()); 
            sum = sum + amount
        }).then(()=>{
            expect(sum).to.be.lessThan(250000) // muss im then sein, da sonst zu früh getestet, nur cy wird in der richtigen Reihenfolge bearbeitet
        })

        cy.contains("button", "Checkout").click()

        cy.get("#country").type("Po")

        cy.contains("a", "Poland", { timeout: 8000 }).should("be.visible").click()

        cy.contains("input", "Purchase").click()

        cy.get(".alert-success").should("contain", "Success")
        
    })
})