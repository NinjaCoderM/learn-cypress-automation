/// <reference types="cypress" /> --> für TypeScript oder wenn in anderen Ordner cy nicht erkannt wird
describe("Handling Child Windows", () => {
    it("Should handle child window", () => {
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
       cy.get("#opentab").invoke('removeAttr', 'target').click()
       cy.origin("https://www.qaclickacademy.com", ()=>{
         cy.get("#navbarSupportedContent a[href*='about']").click() 
         cy.get(".mt-50 h2").should('contain', 'QAClick Academy')
       }) 
    });
    it("Should handle child window, cy.visit instead of remove target", () => {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
      cy.get('#opentab').invoke('prop', 'href').then((href) => {
        cy.visit(href)
        cy.origin("https://www.qaclickacademy.com", ()=>{
          cy.get("#navbarSupportedContent a[href*='about']").click() 
          cy.get(".mt-50 h2").should('contain', 'QAClick Academy')
        }) 
      })
    });

 
 });