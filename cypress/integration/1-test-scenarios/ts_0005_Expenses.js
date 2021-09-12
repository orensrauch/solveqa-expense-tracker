/// <reference types="cypress" />

//Executes TS_0005 - Expenses

//TC_EP_001
describe("TC_EP_001 validate query selector functionality ", () => {

    it("User should Visit SignIn page", () => {
        cy.visit("http://localhost:3000/signin");

    })
    it("successfully submit account details and sign in", () => {
        cy.get('#email').type("useralpha@gmail.com");
        cy.get('#password').type("12345678");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click().wait(1000);
        
    })
    it("navigate to ADD EXPENSE page", () => {
        cy.log("in home page, click on ADD EXPENSE navbar button");
        cy.get('[href="/signup"] > .MuiButtonBase-root > .MuiButton-label').click();
        cy.url().should('eq', 'http://localhost:3000/expenses/new');
    })
    it("User should be signed and to be able to successfully submit new expense", () => {
        cy.get('#title').type("New Laptop");
        cy.get('#amount').type("1000");
        cy.get('#category').type("Electronics");
        cy.log('after providing first fields, click to open expense date')
        cy.get('[format="MMMM do hh:mm aaaa"] > .MuiInputBase-root > .MuiInputBase-input').click().wait(500);
        cy.log('after dates window open');
        cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiButton-label > .MuiTypography-root').click();
        cy.log('after click on year');
        cy.get(':nth-child(121)').click();
        cy.log('after selecting year 2020');
        cy.get('.MuiPickersMonthSelection-container > :nth-child(8)').click();
        cy.log('after selecting Aug month');
        cy.get(':nth-child(3) > :nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .MuiTypography-root');
        cy.log('after selecting 10th of the month');
        cy.get('.MuiDialogActions-root > :nth-child(3) > .MuiButton-label').click();
        cy.log('after click on OK button to confirm expense date');
        cy.get('#multiline-flexible').type("new laptop for my wife");
        cy.log("After all EXPENSE details provided, click SUBMIT");
        cy.get('.MuiButton-containedPrimary > .MuiButton-label').click();
    })
    it("Should visit EXPENSES page", () => {
        cy.get('[href="/expenses/all"] > .MuiButtonBase-root > .MuiButton-label').click();
        cy.url().should('eq','http://localhost:3000/expenses/all');
        cy.log('confirmed the EXPENSES page is currently visited');
    })
    it("Should execute query to specific date and see the expense", () => {
        cy.log('Before click on the FROM date pick');
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').click();
        cy.log('After FROM date pick was clicked');
        cy.get(':nth-child(1) > .MuiButton-label > .MuiTypography-root').click();
        cy.log('After YEAR was clicked');
        cy.get(':nth-child(121)').click();
        cy.log('after selecting year 2020');
        cy.get('.MuiPickersMonthSelection-container > :nth-child(8)').click();
        cy.log('after selecting Aug month');
        cy.get(':nth-child(3) > :nth-child(2) > .MuiButtonBase-root').click();
        cy.log('after selecting 10th of the month');
        cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').click();
        cy.log('after click on OK button to confirm expense date');
        cy.get('.makeStyles-search-48 > .MuiButtonBase-root').click();
        cy.log('after click on GO button to execute query');
    })
    it("Confirm display of expense", () => {
        cy.get('p').should(($p) => {
            //make sure the element contains text content
            expect($p).to.contain("New Laptop")
        });
        cy.log('confirmed display of expense in a specific date');
    })
})//End of TC_EP_001

//######################################################################################################################### */