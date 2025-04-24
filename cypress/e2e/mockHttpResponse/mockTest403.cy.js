/// <reference types="cypress" />
describe('MockTest Suite Fail', function(){
    it('Mock Test Status 403 -> depricated, req.url not writeable in new cypress version', () => {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        cy.intercept('GET', "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty", (req=> {
            req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
            req.continue(res=>{
                if(false)expect(res.statusCode).to.equal(403) //IDOR-Sicherheitslücke (Insecure Direct Object Reference) #
                // AuthorName müsste geprüft werden oder gleich aus dem JWT Token geholt werden
                // Leider ist cypress in der aktuellen Version nicht mehr in der Lage die URL zu ändern. 
            })
        })).as("dummyURL")
        cy.get('.btn-primary').click()
        cy.wait("@dummyURL")
       
    })

    it('should return 403 for unauthorized author access', () => {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        
        cy.window().then((win) => {
          return win.fetch("https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra")
            .then((res) => {
              expect(res.status).to.eq(403) // erwartet 403 – FAILT, wenn der Server 200 oder leer gibt
            })
        })
    })
})