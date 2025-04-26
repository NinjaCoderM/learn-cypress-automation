/// <reference types="cypress" />
describe("Postgres Suite", function () {
  it("select Abfrage", () => {
    cy.task("queryDb", "SELECT * FROM student WHERE id = 1").then((result) => {
      cy.log("Query Result:", result);
      // Hier kannst du mit den Resultaten weiterarbeiten
    });
  });
});
