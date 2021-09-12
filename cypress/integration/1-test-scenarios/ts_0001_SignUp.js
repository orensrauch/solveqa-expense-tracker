/// <reference types="cypress" />

//Executes TS_0001 - Sign Up 

//TC_SU_001
describe("TC_SU_001 Validate Sign-Up an Account by providing only the Mandatory fields", () => {
    
    it("Should be able to submit a successfull submission via Sign Up form", () => {
        cy.visit("http://localhost:3000/signup");
        cy.get('[id="name"]').type("UserA");
        cy.get('[id="email"]').type("usera@gmail.com")
        cy.get('[id="password"]').type("12345678")
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
        cy.get('.MuiDialogActions-root > a > .MuiButtonBase-root > .MuiButton-label').click();
    })
})//End of TC_SU_001

//######################################################################################################################### */

//TC_SU_002
describe("TC_SU_002 Validate Sign-Up an Account by providing all the fields", () => {
   
    it("Should be able to submit a successfull submission via Sign Up form", () => {
        cy.visit("http://localhost:3000/signup");
        cy.get('[id="name"]').type("UserA");
        cy.get('#phone').type("0123456789")
        cy.get('[id="email"]').type("userb@gmail.com")
        cy.get('[id="password"]').type("12345678")
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
        cy.get('.MuiDialogActions-root > a > .MuiButtonBase-root > .MuiButton-label').click();
    })
})//End of TC_SU_002

//######################################################################################################################### */

//TC_SU_003
describe("TC_SU_003 Validate proper notification messages are displayed on form by leaving all field empty", () => {

    it("Should not be able to submit a successfull submission via Sign Up form", () => {
        cy.visit("http://localhost:3000/signup");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
        //validate error message content
        cy.get('p').should(($p) => {
            //should have found 3 elements 
            expect($p).to.have.length(3)
            //make sure the element contains text content
            expect($p.last()).to.contain("Name is required")
        });
    })
})//End of TC_SU_003

//######################################################################################################################### */

//TC_SU_004
describe("TC_SU_004 Validate Sign Up an Account by providing the existing account details (i.e. existing email address)", () => {

    it("Should be able to submit a successfull submission via Sign Up form", () => {
        cy.visit("http://localhost:3000/signup");
        cy.get('[id="name"]').type("UserC");
        cy.get('#phone').type("0123456789")
        cy.get('[id="email"]').type("userb@gmail.com")
        cy.get('[id="password"]').type("12345678")
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
        cy.get('.MuiDialogActions-root > a > .MuiButtonBase-root > .MuiButton-label').click();
    })
})//End of TC_SU_004

//######################################################################################################################### */

//TC_SU_005
describe("TC_SU_005 Validate Sign Up SIGNIN ts_0002 Account by providing the given details", () => {

    it("Should be able to submit a successfull submission via Sign Up form", () => {
        cy.visit("http://localhost:3000/signup");
        cy.get('[id="name"]').type("User Alpha");
        cy.get('[id="email"]').type("useralpha@gmail.com")
        cy.get('[id="password"]').type("12345678")
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
        cy.get('.MuiDialogActions-root > a > .MuiButtonBase-root > .MuiButton-label').click();
        
    })
})//End of TC_SU_005

//######################################################################################################################### */