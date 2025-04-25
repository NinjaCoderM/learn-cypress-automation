/// <reference types="cypress" />
describe('JWT Test Suite', function(){
    it('JWT Login Test', () => {
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
        cy.get('button').contains('India').click()
        cy.contains('Place Order').click()  
        
    })
})