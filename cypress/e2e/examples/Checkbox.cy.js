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
      cy.get('#checkBoxOption1').check().should('be.checked')
    });
});