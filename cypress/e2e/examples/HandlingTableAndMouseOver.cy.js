/// <reference types="cypress" /> --> für TypeScript oder wenn in anderen Ordner cy nicht erkannt wird
describe("Handling Table and MouseOver", () => {
    it("Test Table and MouseOver", () => {
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
       cy.contains('td', 'Master Selenium Automation in simple Python Language').next().should('contain', '25')

       
     });
 
 
 });