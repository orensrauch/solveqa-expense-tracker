/// <reference types="cypress" />

//Executes TS_0002 - Sign In 

//TC_SI_001
describe("TC_SU_001 Validate Sign-In an Account by providing only the Mandatory fields with existing account", () => {

    it("User should be directed to the SIGN IN page", () => {
        cy.visit("http://localhost:3000/signin");

    })
    it("successfully submit account details and sign in",() => {
        cy.get('#email').type("userb@gmail.com");
        cy.get('#password').type("12345678");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
    })
    it("User should be able to see SIGN OUT button element on top right header", () => {
        cy.get('.MuiButton-colorInherit > .MuiButton-label').should('include.text', 'Sign out');
    })
})//End of TC_SI_001

//TC_SI_002
describe("TC_SU_001 Validate Sign-In an Account by providing only the Mandatory fields with existing account", () => {

    it("User should be directed to the SIGN IN page", () => {
        cy.visit("http://localhost:3000/signin");

    })
    it("unsuccessfully submit account details", () => {
        cy.get('#email').type("userb@gmail.com");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
    })
    it("after submit account details error message appear Email or password don\'t match.", () => {
        cy.get('.MuiTypography-body1').should('include.text', 'Email or password don\'t match.');
    })
})//End of TC_SI_002



