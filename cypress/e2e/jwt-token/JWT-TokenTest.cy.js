/// <reference types="cypress" />
const neatCSV = require('neat-csv')
describe('JWT Test Suite', function(){
    it('JWT Login Test', async() => {
        cy.LoginAPI().then(()=>{
            cy.visit("https://rahulshettyacademy.com/client", {
                onBeforeLoad: function(window){
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })
        })
        cy.get('.card-body').contains('ADIDAS ORIGINAL')
            .parents('.card-body')
            .contains('Add To Cart')
            .click()
        cy.get('button').contains('Cart').click()
        cy.contains('Checkout').click()    
        cy.get('input[placeholder="Select Country"]').type("Ind")
        cy.wait(1000)
        cy.get('button').contains('India').click()
        cy.contains('Place Order').click()  
        cy.wait(2000)
        cy.get('.order-summary button').contains('CSV').click()
        
        const text = cy.readFile(Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_test1976.csv")
        .then(async text=>{
            const csv = await neatCSV(text)
            console.log(csv)
        })

        
    })
})