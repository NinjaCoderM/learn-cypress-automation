import ConfirmationPage from "./ConfirmationPage";

class CartPage{
    validateMaxSum(){
        let sum = 0; 
        cy.get("tr td:nth-child(4) strong").each($el => {
            const amount = Number($el.text().split(" ")[1].trim()); 
            sum = sum + amount
        }).then(()=>{
            expect(sum).to.be.lessThan(250000) // muss im then sein, da sonst zu früh getestet, nur cy wird in der richtigen Reihenfolge bearbeitet
        })
    }
    checkout(){
        cy.contains("button", "Checkout").click()
        return new ConfirmationPage();
    }
}
export default CartPage