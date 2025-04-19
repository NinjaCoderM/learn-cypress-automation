/// <reference types="cypress" />
describe("Calendar Test-Suite", () => {
    it("Testen des Calendars", () => {
        const yearPlus2 = (new Date().getFullYear() + 2).toString();
        Date.now

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get("a.cart-header-navlink")
           .filter((index, $el)=>$el.innerText?.trim()==='Top Deals')
           .invoke('removeAttr', 'target')
           .click()
        cy.get("input.react-date-picker__inputGroup__day").click()
        cy.get("button.react-calendar__navigation__label").click()
        cy.get("button.react-calendar__navigation__label").click()
        cy.contains("button", yearPlus2).click()
        cy.contains("button", "Juli").click()
        cy.get("button").contains("23").click()
    });
});
