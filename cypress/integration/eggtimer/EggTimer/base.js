import { Given } from "cypress-cucumber-preprocessor/steps";

const url = "https://e.ggtimer.com/";

Given(`Eggtimer page is loaded`, () => {
  cy.visit(url);
  cy.title().should("eq", "e.ggtimer - a simple countdown timer");
  cy.get(".EggTimer-start-welcome > :nth-child(1)").should(
    "contain",
    "E.ggTimer is a simple countdown timer."
  );
});
