import ConfirmationPage from "./ConfirmationPage";

class CartPage{
    sumOfProducts(){
        let sum = 0; 
        return cy.get("tr td:nth-child(4) strong").each($el => {
            const amount = Number($el.text().split(" ")[1].trim()); 
            sum = sum + amount
        }).then(()=>{
            return sum
        })
    }
    checkout(){
        cy.contains("button", "Checkout").click()
        return new ConfirmationPage();
    }
}
export default CartPage