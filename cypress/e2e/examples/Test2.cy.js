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
    cy.get(".product").as("productLocator")
    cy.get("@productLocator").should("have.length", 5);
    cy.get(".products .product").should("have.length", 4);
    cy.get(".product:visible").should("have.length", 4); //:visible nur in cypress
    cy.get(".products").find(".product").as("productLocatorInProducts")
    cy.get("@productLocatorInProducts").should("have.length", 4);
    //cy.get('div.products div.product:nth-of-type(2) div button').click()
    //cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click(); // Besser weil Zwischenergebnisse
    //cy.get(".products").find(".product").contains("Capsicum").parent().contains("ADD TO CART").click();   
    cy.get("@productLocatorInProducts").each(($el) => {
        if ($el.text().includes("Capsicum")) {
          cy.wrap($el).contains("ADD TO CART").click();
        }
      });       
    cy.get('.brand').then(($el) => {
      const text = $el.text();
      cy.log(text);
    });
    //kurz
    cy.get('.brand').should("have.text", "GREENKART")
    //auch aber lange form
    cy.get('.brand').then(($el) => {
        expect($el.text()).to.equal("GREENKART");
    });  
    //assert chai
    cy.get('.brand').then(($el) => {
        assert.equal($el.text(), "GREENKART");
    });
    cy.get('.cart-icon').click();
    //cy.get('.cart-preview > .action-block > button').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.get('[style="text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;"] > :nth-child(14)')
    cy.get('button').each($el => {
        if($el.text() === "Place Order") {
            cy.wrap($el).click()
        }
    })
  });
});
