/// <reference types="cypress" /> --> für TypeScript oder wenn in anderen Ordner cy nicht erkannt wird
describe("Meine Test-Suite", () => {
    before(() => {
      // wird einmal vor allen Tests ausgeführt
    });
  
    beforeEach(() => {
      // wird vor jedem einzelnen Test ausgeführt
    });
  
    it("sollte etwas testen", () => {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
      cy.get('#checkbox-example input[type="checkbox"]') /*.check() für alle */ .check(['option2', 'option3'])
    });
});