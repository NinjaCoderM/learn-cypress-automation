/// <reference types="cypress" /> --> für TypeScript oder wenn in anderen Ordner cy nicht erkannt wird
describe("Handling Table and MouseOver", () => {
    it("Test Table and MouseOver", () => {
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
       cy.contains('td', 'Master Selenium Automation in simple Python Language').next().should('contain', '25')

       cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
         if($e1.text().includes('Master Selenium Automation in simple Python Language'))cy.wrap($e1).contains('Master Selenium Automation in simple Python Language').next().should('contain', '25')
         })
    
        });
    
    
    });