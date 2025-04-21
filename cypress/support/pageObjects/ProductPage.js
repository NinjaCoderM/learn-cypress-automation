import CartPage from "./CartPage";

class ProductPage{
    pageValidation(){
        cy.contains("Shop Name").should("be.visible")
    }
    cartLimit(){
        cy.get("app-card").should("have.length", 4)
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