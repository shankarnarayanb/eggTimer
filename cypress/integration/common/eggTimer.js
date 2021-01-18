import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I see {string} in the title`, (title) => {
  cy.title().should("include", title);
});

When(`User enters {string} and click on Start`, (value) => {
  cy.get("#EggTimer-start-time-input-text").type(value);
  cy.get(".EggTimer-start-time-input > button").click();
});

Then(
  `Verify that Time Expired text message is displayed after the given time`,
  () => {
    cy.wait(25000).get("span").should("contain", "Time Expired!");
  }
);

Then(`Remaining time should decreases by one-sec`, () => {
  const now = Date.now();
  cy.clock(now, ["setTimeout", "clearTimeout"])
    .get("span")
    .should("have.text", "25 seconds ")
    .tick(1000)
    .get("span")
    .should("have.text", "24 seconds ")
    .tick(1000)
    .get("span")
    .should("have.text", "23 seconds ")
    .tick(1000)
    .get("span")
    .should("have.text", "22 seconds ")
    .tick(1000)
    .get("span")
    .should("have.text", "21 seconds ")
    .tick(1000)
    .get("span")
    .should("have.text", "20 seconds ")
    .tick(1000)
    .get("span")
    .should("have.text", "19 seconds ")
    .tick(1000)
    .get("span")
    .should("have.text", "18 seconds ")
    .tick(1000)
    .get("span")
    .should("have.text", "17 seconds ")
    .tick(1000)
    .get("span")
    .should("have.text", "16 seconds ")
    .tick(1000)
    .get("span")
    .should("have.text", "15 seconds ")
    .tick(1000)
    .get("span")
    .should("have.text", "14 seconds ")
    .tick(1000)
    .get("span")
    .should("have.text", "13 seconds ")
    .tick(1000)
    .get("span")
    .should("have.text", "12 seconds ")
    .tick(1000)
    .get("span")
    .should("have.text", "11 seconds ")
    .tick(1000)
    .get("span")
    .should("have.text", "10 seconds ")
    .tick(1000)
    .get("span")
    .should("have.text", "9 seconds ")
    .tick(1000)
    .get("span")
    .should("have.text", "8 seconds ")
    .tick(1000)
    .get("span")
    .should("have.text", "7 seconds ")
    .tick(1000)
    .get("span")
    .should("have.text", "6 seconds ")
    .tick(1000)
    .get("span")
    .should("have.text", "5 seconds ")
    .tick(1000)
    .get("span")
    .should("have.text", "4 seconds ")
    .tick(1000)
    .get("span")
    .should("have.text", "3 seconds ")
    .tick(1000)
    .get("span")
    .should("have.text", "2 seconds ")
    .tick(1000)
    .get("span")
    .should("have.text", "1 second ")
    .tick(1000)
    .get("span")
    .should("have.text", "0 second ")
    .tick(1000)
    .get("span")
    .should("have.text", "Time Expired!");
  cy.clock().invoke("restore");
});
