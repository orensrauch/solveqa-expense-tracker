/// <reference types="cypress" />

//Executes TS_0003 - Sign Out

//TC_SO_001
describe("TC_SO_001 Validate user SignOut after being signed-in.", () => {

    it("User should Visit SignIn page", () => {
        cy.visit("http://localhost:3000/signin");

    })
    it("successfully submit account details and sign in", () => {
        cy.get('#email').type("useralpha@gmail.com");
        cy.get('#password').type("12345678");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
        cy.wait(1000)
    })
    it("User should be able to see Sign Out button", () => {
        cy.get('.MuiButton-colorInherit > .MuiButton-label').should('include.text', 'Sign out');
    })
    it("User should be able to Sign Out from his logged profile", () => {
        cy.get('.MuiButton-colorInherit > .MuiButton-label').click();
    })
})//End of TC_SO_001

//######################################################################################################################### */

//TC_SO_002
describe("TC_SO_002 Validate user SignOut from the EXPENSES page after being signed-in.", () => {

    it("User should Visit SignIn page", () => {
        cy.visit("http://localhost:3000/signin");

    })
    it("successfully submit account details and sign in", () => {
        cy.get('#email').type("useralpha@gmail.com");
        cy.get('#password').type("12345678");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
        cy.wait(1000)
    })
    it("User navigate to EXPENSES page", () => {
        cy.log("in home page, click on EXPENSES navbar button");
        cy.get('[href="/expenses/all"] > .MuiButtonBase-root').click();
    })
    it("User should be able to see Sign Out button", () => {
        cy.get('.MuiButton-colorInherit > .MuiButton-label').should('include.text', 'Sign out');
    })
    it("User should be able to Sign Out from Expenses Page", () => {
        cy.get('.MuiButton-colorInherit > .MuiButton-label').click();
    })
})//End of TC_SO_002

//######################################################################################################################### */

//TC_SO_003        
describe("TC_SO_003 Validate user SignOut from the REPORTS page after being signed-in.", () => {

    it("User should Visit SignIn page", () => {
        cy.visit("http://localhost:3000/signin");
    })
    it("successfully submit account details and sign in", () => {
        cy.get('#email').type("useralpha@gmail.com");
        cy.get('#password').type("12345678");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
        cy.wait(1000)
    })
    it("User navigate to REPORTS page", () => {
        cy.log("in home page, click on REPORTS navbar button");
        cy.get('[href="/expenses/reports"] > .MuiButtonBase-root').click();
    })
    it("User should be able to see Sign Out button", () => {
        cy.get('.MuiButton-colorInherit > .MuiButton-label').should('include.text', 'Sign out');
    })
    it("User should be able to Sign Out from Expenses Page", () => {
        cy.get('.MuiButton-colorInherit > .MuiButton-label').click();
    })
})//End of TC_SO_003

//######################################################################################################################### */

//TC_SO_004        
describe("TC_SO_004 Validate user SignOut from the ADD EXPENSE page after being signed-in.", () => {

    it("User should Visit SignIn page", () => {
        cy.visit("http://localhost:3000/signin");
    })
    it("successfully submit account details and sign in", () => {
        cy.get('#email').type("useralpha@gmail.com");
        cy.get('#password').type("12345678");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
        cy.wait(1000)
    })
    it("User navigate to ADD EXPENSE page", () => {
        cy.log("in home page, click on ADD EXPENSE navbar button");
        cy.get('[href="/expenses/new"] > .MuiButtonBase-root').click();
        cy.url().should('eq','http://localhost:3000/expenses/new')
    })
    it("User should be able to see Sign Out button", () => {
        cy.get('.MuiButton-colorInherit > .MuiButton-label').should('include.text', 'Sign out');
    })
    it("User should be able to Sign Out from Expenses Page", () => {
        cy.get('.MuiButton-colorInherit > .MuiButton-label').click();
    })
})//End of TC_SO_004

//######################################################################################################################### */

//TC_SO_005        
describe("TC_SO_005 Validate user SignOut from the MY PROFILE page after being signed-in.", () => {

    it("User should Visit SignIn page", () => {
        cy.visit("http://localhost:3000/signin");
    })
    it("successfully submit account details and sign in", () => {
        cy.get('#email').type("useralpha@gmail.com");
        cy.get('#password').type("12345678");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
        cy.wait(1000)
    })
    it("User navigate to MY PROFILE page", () => {
        cy.log("in home page, click on MY PROFILE navbar button");
        //CHANGE user ID per the profile db id
        cy.get('[href="/user/613dc2f252e937775c0a6a82"] > .MuiButtonBase-root > .MuiButton-label').click();

    })
    it("User should be able to see Sign Out button", () => {
        cy.get('.MuiButton-colorInherit > .MuiButton-label').should('include.text', 'Sign out');
    })
    it("User should be able to Sign Out from Expenses Page", () => {
        cy.get('.MuiButton-colorInherit > .MuiButton-label').click();
    })
})//End of TC_SO_005

//######################################################################################################################### */