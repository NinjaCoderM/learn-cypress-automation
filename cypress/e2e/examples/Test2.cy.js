/// <reference types="cypress" /> --> für TypeScript oder wenn in anderen Ordner cy nicht erkannt wird
describe("Meine Test-Suite", () => {
  before(() => {
    // wird einmal vor allen Tests ausgeführt
  });

  beforeEach(() => {
    // wird vor jedem einzelnen Test ausgeführt
  });

  it("sollte etwas testen", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get(".product").should("have.length", 5);
    cy.get(".products .product").should("have.length", 4);
    cy.get(".product:visible").should("have.length", 4); //:visible nur in cypress
    cy.get(".products").find(".product").should("have.length", 4);
    //cy.get('div.products div.product:nth-of-type(2) div button').click()
    //cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click(); // Besser weil Zwischenergebnisse
    //cy.get(".products").find(".product").contains("Capsicum").parent().contains("ADD TO CART").click();   
    cy.get(".products").find(".product").each(($el) => {
        if ($el.text().includes("Capsicum")) {
          cy.wrap($el).contains("ADD TO CART").click();
        }
      });          
    
  });
});
