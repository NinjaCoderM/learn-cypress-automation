/// <reference types="cypress" />
describe('JWT Test Suite', function(){
    it('JWT Login Test', async() => {
        cy.sqlServer('select * from Student').then(result=>{
            console.log(result[0])
        })
    })
})