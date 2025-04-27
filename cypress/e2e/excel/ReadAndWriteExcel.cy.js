/// <reference types="cypress" />
describe('Excel Test Suit', ()=> {
    it('Download, change an Upload excel', ()=>{
        const replacePrice = 350
        const product = "Apple"
        const pathToFile = Cypress.config("fileServerFolder") + "/cypress/downloads/download.xlsx"
        cy.visit("https://rahulshettyacademy.com/upload-download-test/")
        cy.get("#downloadButton").click();

        const success = cy.task('writeExcelTest', {searchText: product,replaceText: replacePrice,change: {rowChange:0, colChange:2},filePath: pathToFile}) 
          .then((success) => {
            expect(success, "should be true").equal(true);
          });

        cy.get('#fileinput').selectFile(pathToFile)

        cy.contains(product).parent().parent().find('#cell-4-undefined').should('have.text', replacePrice)
    })
})