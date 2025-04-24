/// <reference types="cypress" />
describe('MockTest Suite', function(){
    it('Mock Test Simple', () => {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        cy.intercept({
            method: 'GET',
            url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        },{  
          statusCode: 200,
          body:[ {
            "book_name": "Learn Appium Automation with Java",
            "isbn": "RR398",
            "aisle": "227"
        }]}).as('bookretrievals')
        cy.get('.btn-primary').click()
        cy.wait('@bookretrievals')
        cy.get('p').should('have.text', 'Oops only 1 Book available')
    })
})
