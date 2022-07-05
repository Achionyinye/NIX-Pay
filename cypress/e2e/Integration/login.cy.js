import "../support/commands";

describe("renders signup page", () => {
  it("renders with correct details", () => {
    cy.visit("http://localhost:3001/login");
    cy.wait(5000);
    cy.get(".login").should("exist");
    cy.get("input[name=email]").should("be.visible")
      .type("achionyinyegiftbarbie@gmail.com");
    cy.get("input[name=password]").type("755224");
    cy.get(".submit").click();


  });
});