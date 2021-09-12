/// <reference types="cypress" />

//Executes TS_0002 - Sign In 

//TC_SI_001
describe("TC_SI_001 Validate Sign-In an Account by providing only the Mandatory fields with existing account", () => {

    it("User should be directed to the SIGN IN page", () => {
        cy.visit("http://localhost:3000/signin");

    })
    it("successfully submit account details and sign in", () => {
        cy.get('#email').type("useralpha@gmail.com");
        cy.get('#password').type("12345678");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
        cy.wait(1000)
    })
    it("User should be able to see SIGN OUT button element on top right header", () => {
        cy.get('.MuiButton-colorInherit > .MuiButton-label').should('include.text', 'Sign out');
    })
})//End of TC_SI_001

//######################################################################################################################### */

//TC_SI_002
describe("TC_SI_002 Validate Sign-In an Account by providing only the Mandatory fields with existing account", () => {

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

//######################################################################################################################### */

//TC_SI_003
describe("TC_SI_003 Validate Sign-In error message when user providing only registered Password field.", () => {

    it("User should be directed to the SIGN IN page", () => {
        cy.visit("http://localhost:3000/signin");

    })
    it("unsuccessfully submit account details", () => {
        cy.get('#password').type("12345678");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
    })
    it("after submit account details error message appear Email or password don\'t match.", () => {
        cy.get('.MuiTypography-body1').should('include.text', 'Sorry, User not found');
    })
})//End of TC_SI_003

//######################################################################################################################### */

//TC_SI_004
describe("TC_SI_004 Validate Sign-In error message when user providing unregistered account details.", () => {

    it("User should be directed to the SIGN IN page", () => {
        cy.visit("http://localhost:3000/signin");

    })
    it("unsuccessfully submit account details", () => {
        cy.get('#email').type("yada@gmail.com")
        cy.get('#password').type("12345678");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
    })
    it("after submit account details error message appear Email or password don\'t match.", () => {
        cy.get('.MuiTypography-body1').should('include.text', 'Sorry, User not found');
    })
})//End of TC_SI_004

//######################################################################################################################### */

//TC_SI_005
describe("TC_SI_005 Validate Sign-In error message when user providing registered Email account with wrong password details.", () => {

    it("User should be directed to the SIGN IN page", () => {
        cy.visit("http://localhost:3000/signin");

    })
    it("unsuccessfully submit account details", () => {
        cy.get('#email').type("usera@gmail.com")
        cy.get('#password').type("87654321");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
    })
    it("after submit account details error message appear Email or password don\'t match.", () => {
        cy.get('.MuiTypography-body1').should('include.text', 'Email or password don\'t match.');
    })
})//End of TC_SI_005

//######################################################################################################################### */

//TC_SI_006
describe("TC_SI_006 Validate Sign-In error message when user providing unregistered Email account with existing password details.", () => {

    it("User should be directed to the SIGN IN page", () => {
        cy.visit("http://localhost:3000/signin");

    })
    it("unsuccessfully submit account details", () => {
        cy.get('#email').type("userp@gmail.com")
        cy.get('#password').type("12345678");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
    })
    it("after submit account details error message appear Email or password don\'t match.", () => {
        cy.get('.MuiTypography-body1').should('include.text', 'Sorry, User not found');
    })
})//End of TC_SI_006

//######################################################################################################################### */

//TC_SI_007
describe("TC_SI_007 Validate Sign-In error message when user providing only numbers in Email field and only letters in password field.", () => {

    it("User should be directed to the SIGN IN page", () => {
        cy.visit("http://localhost:3000/signin");

    })
    it("unsuccessfully submit account details", () => {
        cy.get('#email').type("777777777")
        cy.get('#password').type("aaaaaaaa");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
    })
    it("after submit account details error message appear Email or password don\'t match.", () => {
        cy.get('.MuiTypography-body1').should('include.text', 'Sorry, User not found');
    })
})//End of TC_SI_007

//######################################################################################################################### */

//TC_SI_008
describe("TC_SI_008 Validate Sign-In error message when user providing Half registered Email address and currect password.", () => {

    it("User should be directed to the SIGN IN page", () => {
        cy.visit("http://localhost:3000/signin");

    })
    it("unsuccessfully submit account details", () => {
        cy.get('#email').type("userb@")
        cy.get('#password').type("12345678");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
    })
    it("after submit account details error message appear Email or password don\'t match.", () => {
        cy.get('.MuiTypography-body1').should('include.text', 'Sorry, User not found');
    })
})//End of TC_SI_008

//######################################################################################################################### */

//TC_SI_009
describe("TC_SI_009 Validate Sign-In page access from Home page  main banner link", () => {

    it("User should visit home page and sign out", () => {
        cy.visit("http://localhost:3000/");
        cy.get('.MuiButton-colorInherit > .MuiButton-label').click();
    })
    it("user should be directed to SIGN IN page after sign in button click", () => {
        cy.log("see home page main banner");
        cy.get('.MuiTypography-root > [href="/signin"]').click();
        cy.log("confirm the url is match /signin page");
        cy.url().should('eq', 'http://localhost:3000/signin')
    })

})//End of TC_SI_009

//######################################################################################################################### */

//TC_SI_010
describe("TC_SI_010 Validate Sign-In page access from SIGN UP page", () => {

    it("User should visit home page ", () => {
        cy.visit("http://localhost:3000/");
        
    })
    it("user should click on sign up at navbar and directed to sign up page", () => {
        cy.get('[href="/signup"] > .MuiButtonBase-root > .MuiButton-label').click()
        cy.log("confirm the url is match /signup page");
        cy.url().should('eq', 'http://localhost:3000/signup')
        cy.log("confirm the url is match /signin page");
        cy.get('[href="/signin"] > .MuiButtonBase-root > .MuiButton-label').click()
        cy.url().should('eq', 'http://localhost:3000/signin')

    })

})//End of TC_SI_010

//######################################################################################################################### */