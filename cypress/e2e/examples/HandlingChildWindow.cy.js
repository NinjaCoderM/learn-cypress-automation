describe("Handling Child Windows", () => {
   it("Should handle child window", () => {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
      cy.get("#opentab").invoke('removeAttr', 'target').click()
      cy.get("#navbarSupportedContent a[href*='about']").click()  //Timed out retrying after 4000ms: The command was expected to run against origin https://rahulshettyacademy.com but the application is at origin https://www.qaclickacademy.com.
    });


});