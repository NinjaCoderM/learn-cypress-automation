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

      cy.get('#dropdown-class-example').select("option2").should('have.value', 'option2')

      cy.get("#autocomplete").type("ind")
      cy.get(".ui-menu li").filter((index, el) => (el.textContent?.trim() ?? "") === "India").click()
      cy.get("#autocomplete").should("have.value", "India")

      cy.get("#displayed-text").should('be.visible')
      cy.get("#hide-textbox").click()
      cy.get("#displayed-text").should('not.be.visible')
      cy.get("#show-textbox").click()
      cy.get("#displayed-text").should('be.visible')

      cy.get("#radio-btn-example").contains('label', 'Radio2').find("input").check();
      cy.get('input[value="radio2"]').should('be.checked');

    });


});