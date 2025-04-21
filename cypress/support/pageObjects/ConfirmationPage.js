class ConfirmationPage{
    submitFormDetails(){
        cy.submitFormDetails()
        //cy.get("#country").type("Po")
        //cy.contains("a", "Poland", { timeout: 8000 }).should("be.visible").click()
        //cy.contains("input", "Purchase").click()
    }
    getSuccessMessage(){
        return cy.get(".alert-success")
    }
}
export default ConfirmationPage