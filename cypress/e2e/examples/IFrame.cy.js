/// <reference types="cypress" /> 
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe("Handling iFrame", () => {
    it("Test iFrame", () => {
       //Terminal npm install -D cypress-iframe
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
       cy.frameLoaded('#courses-iframe')
       cy.iframe().find("a[href*='mentorship']").eq(0).click()
       //This pricing title element has 6 inner frames. Currently ,cypress does not give inner frames switching support .
       //cy.iframe().find("h1[class*='pricing-title']").should('be.visible').should('have.length', 2)
       cy.iframe().find("a[href*='mentorship']").eq(0).should('have.attr', 'href').and('include', 'mentorship')
    });
});