/// <reference types="cypress" /> --> für TypeScript oder wenn in anderen Ordner cy nicht erkannt wird
describe("Meine Test-Suite", () => {

  it("sollte etwas testen", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#alertbtn").click();
    cy.get("[value='Confirm']").click();
    cy.on('window:alert', (str) => {
      //Mocha
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
    cy.on('window:confirm', (str) => {
      //Mocha
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })
  });

});
