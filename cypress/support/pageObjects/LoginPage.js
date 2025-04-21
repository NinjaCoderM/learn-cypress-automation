import ProductPage from "./ProductPage"

class LoginPage{
    visit(url){
        cy.visit(url)
    }
    login(username, password){
        cy.get('#username').type(username ) // invoke geht aber ohne Events .invoke("val", "rahulshettyacademy")
        cy.get('#password').type(password)
        cy.contains("input", "Sign In").click()
        return new ProductPage(); 
    }
}
export default LoginPage;