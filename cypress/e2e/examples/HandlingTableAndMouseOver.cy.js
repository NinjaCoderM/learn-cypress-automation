/// <reference types="cypress" /> --> für TypeScript oder wenn in anderen Ordner cy nicht erkannt wird
describe("Handling Table and MouseOver", () => {
    it("Test Table", () => {
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
       cy.contains('td', 'Master Selenium Automation in simple Python Language').next().should('contain', '25')

       cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
         if($e1.text().includes('Master Selenium Automation in simple Python Language')){
            cy.wrap($e1).contains('Master Selenium Automation in simple Python Language').next().should('contain', '25')
            cy.get('tr td:nth-child(3)').eq(index).should('have.text', '25')
            cy.get('tr td:nth-child(3)').eq(index).then(($td) => {
              expect($td.text().trim()).to.equal('25');
            });
          }
        })
    });
    it("Test MouseOver", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        // falsch weil invoke show betrifft nicht den Button cy.get('#mousehover').invoke('show');
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').should('be.visible');
        cy.contains('Top').click({ force: true });
    });
    it("Equals String", () => {
        expect('str1').equal('str1')//erlaubt
        expect('str1').to.equal('str1')//Richtige Variante
        expect('str1').to.equals('str1')//typischer Fehler und inzwischen auch erlaubt
    });
});