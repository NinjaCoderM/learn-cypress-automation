/// <reference types="cypress" />
describe('API Test Suite', function(){
    it('API Post Request Test', () => {
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
        "name":"Learn Appium Automation with Java",
        "isbn":"mscbcd",
        "aisle":"2287",
        "author":"John foe"
        }).then(response=>{
            expect(response.body).to.have.property("Msg", "successfully added")
            expect(response.status).to.eq(200)
        })
    })
})