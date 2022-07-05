import "../support/commands";

describe("renders signup page", () => {
  it("renders with correct details", () => {
    cy.visit("http://localhost:3001/logout");
    cy.wait(5000);
    cy.get(".register").should("exist");
    cy.get("input[name=fullName]").should("be.visible").type("Lawrence");
    cy.get("input[name=gender]").should("be.visible").type("male");
    cy.get("input[name=userName]").should("be.visible").type("Law");
    cy.get("input[name=email]")
      .should("be.visible")
      .type("achionyinyegiftbarbie@gmail.com");
    cy.get("input[name=dateOfBirth]").should("be.visible").type("04/03/11");
    cy.get("input[name=bvn]").should("be.visible").type("223457691");
    cy.get("input[name=religion]").should("be.visible").type("Pagan");
    cy.get("input[name=occupation]").should("be.visible").type("Programmer");
    cy.get("input[name=address]").should("be.visible").type("21, GRA");
    cy.get("input[name=phoneNumber]").should("be.visible").type("21, GRA");
    cy.get("input[name=address]").should("be.visible").type("21, GRA");
    cy.get("input[name=address]").should("be.visible").type("21, GRA");

    cy.get(".signUpInput").should("be.visible").type("male");

    cy.get(".signUpInput").should("be.visible").type("Law");

    cy.get(".signUpInput")
      .should("be.visible")
      .type("achionyinyegiftbarbie@gmail.com");

    cy.get(".signUpInput").should("be.visible").type("04/03/11");

    cy.get(".signUpInput").should("be.visible").type("223457691");

    cy.get(".signUpInput").should("be.visible").type("Pagan");

    cy.get(".signUpInput").should("be.visible").type("Programmer");

    cy.get(".signUpInput").should("be.visible").type("21, GRA");

    cy.get(".signUpInput").should("be.visible").type("9575556721");

    cy.get(".signUpInput").should("be.visible").type("755224");

    cy.get(".signUpInput").should("be.visible").type("755224");

    cy.get(".submit").click();
    cy.wait(5000);
    cy.get(".signUpInput").should("be.visible").type("123456");
   

    cy.get(".login").click();
  });
});
