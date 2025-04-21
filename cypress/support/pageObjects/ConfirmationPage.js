class ConfirmationPage{
    submitFormDetails(){
        cy.submitFormDetails()
        //cy.get("#country").type("Po")
        //cy.contains("a", "Poland", { timeout: 8000 }).should("be.visible").click()
        //cy.contains("input", "Purchase").click()
    }
    validateSuccess(){
        cy.get(".alert-success").should("contain", "Success")
    }
}
export default ConfirmationPage