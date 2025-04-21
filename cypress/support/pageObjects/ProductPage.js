import CartPage from "./CartPage";

class ProductPage{
    pageValidation(){
        cy.contains("Shop Name").should("be.visible")
    }
    getCardCount(){
        return cy.get("app-card")
    }
    addCart(product){
        cy.get("app-card").filter(`:contains("${product}")`) 
        .find('button.btn-info')      
        .click();  
    }
    goToCart(){
        cy.get("a:contains('Checkout')").click()
        return new CartPage(); 
    }
}
export default ProductPage; 