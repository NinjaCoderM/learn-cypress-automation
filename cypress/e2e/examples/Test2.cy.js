/// <reference types="cypress" /> --> für TypeScript oder wenn in anderen Ordner cy nicht erkannt wird
describe('Meine Test-Suite', () => {
    before(() => {
        // wird einmal vor allen Tests ausgeführt
    });

    beforeEach(() => {
        // wird vor jedem einzelnen Test ausgeführt
    });

    it('sollte etwas testen', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product').should('have.length', 5)
        cy.get('.products .product').should('have.length', 4)
        cy.get('.product:visible').should('have.length', 4) //:visible nur in cypress
        cy.get('.products').find('.product').should('have.length', 4)
        
    });
});