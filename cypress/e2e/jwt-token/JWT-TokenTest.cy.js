/// <reference types="cypress" />
const neatCSV = require('neat-csv')
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
let productName 
describe('JWT Test Suite', function(){
    it('JWT Login Test', () => {
        cy.LoginAPI().then(()=>{
            cy.visit("https://rahulshettyacademy.com/client", {
                onBeforeLoad: function(window){
                    window.localStorage.setItem('token', Cypress.env('token'))
                    //console.log(Cypress.env('token'))
                }
            })
        })
        cy.get(".card-body b").eq(1).then($ele => {
            productName = $ele.text()
            console.log('>'+productName)
            cy.get('.card-body').contains(productName, { timeout: 10000 })
            .parents('.card-body')
            .contains('Add To Cart')
            .click()
        })
        
        cy.get('button').contains('Cart', { timeout: 10000 }).click()
        cy.contains('Checkout').click()    
        cy.get('input[placeholder="Select Country"]').type("Ind")
        cy.get('button').contains('India', { timeout: 10000 }).click()
        cy.contains('Place Order').click()  
        cy.wait(2000)
        cy.get('.order-summary button', { timeout: 10000 }).contains('CSV').click()
        cy.get('.order-summary button', { timeout: 10000 }).contains('Excel').click()
        
        const text = cy.readFile(Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_test1976.csv")
        .then(async text=>{
            const csv = await neatCSV(text)
            console.log(csv)
            const pName = csv[0]['Product Name'] //normalerweise csv[0].ProductName aber wegen space mit []
            expect(pName, 'should be equal').equal(productName)
        })

        cy.task('readExcelFile', '/cypress/downloads/order-invoice_test1976.xlsx').then((result) => {
            console.log(result);
        });
    })
})