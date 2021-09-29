/// <reference types="cypress" />

//Executes TS_0004 - Add Expense

//TC_AE_001
describe("TC_AE_001 Validate user submit new expense", () => {

    it("User should Visit SignIn page", () => {
        cy.visit("http://localhost:3000/signin");

    })
    it("successfully submit account details and sign in", () => {
        cy.get('#email').type("useralpha@gmail.com");
        cy.get('#password').type("12345678");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
        cy.wait(1000)
    })
    it("navigate to ADD EXPENSE page", () => {
        cy.log("in home page, click on ADD EXPENSE navbar button");
        cy.get('button').contains(' Add Expense').click();
        cy.url().should('eq', 'http://localhost:3000/expenses/new')
    })
    it("User should be able to successfully submit new expense", () => {
        cy.get('#title').type("Car");
        cy.get('#amount').type("3000");
        cy.get('#category').type("Transportation");
        cy.get('#multiline-flexible').type("new car for my wife");
        cy.log("After all EXPENSE details provided, click SUBMIT");
        cy.get('.MuiButton-containedPrimary > .MuiButton-label').click();
    })
    it("User should be redirected to home page", () => {
        cy.url().should('eq', 'http://localhost:3000/')
    })
  })
//End of TC_AE_001

//######################################################################################################################### */

//TC_AE_002
describe("TC_AE_002 Validate error message when submit new expense when providing only (Title)", () => {

    it("User should Visit SignIn page", () => {
        cy.visit("http://localhost:3000/signin");

    })
    it("successfully submit account details and sign in", () => {
        cy.get('#email').type("useralpha@gmail.com");
        cy.get('#password').type("12345678");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
        cy.wait(1000)
    })
    it("navigate to ADD EXPENSE page", () => {
        cy.log("in home page, click on ADD EXPENSE navbar button");
        cy.get('[href="/signup"] > .MuiButtonBase-root > .MuiButton-label').click();
        cy.url().should('eq', 'http://localhost:3000/expenses/new')
    })
    it("User should be able to successfully submit new expense", () => {
        cy.get('#title').type("Car");
        cy.log("After EXPENSE details provided, click SUBMIT");
        
    })
    it("click on submit button display error message Category is required", () => {
        cy.get('.MuiButton-containedPrimary > .MuiButton-label').click();
        cy.get('p').should(($p) => {
            //should have found 1 elements 
            expect($p).to.have.length(1)
            //make sure the element contains text content
            expect($p.last()).to.contain("Category is required")
        });
    })
})//End of TC_AE_002

//######################################################################################################################### */

//TC_AE_003
describe("TC_AE_003 Validate error message when submit new expense when providing only (Title, Amount)", () => {

    it("User should Visit SignIn page", () => {
        cy.visit("http://localhost:3000/signin");

    })
    it("successfully submit account details and sign in", () => {
        cy.get('#email').type("useralpha@gmail.com");
        cy.get('#password').type("12345678");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
        cy.wait(1000)
    })
    it("navigate to ADD EXPENSE page", () => {
        cy.log("in home page, click on ADD EXPENSE navbar button");
        cy.get('[href="/signup"] > .MuiButtonBase-root > .MuiButton-label').click();
        cy.url().should('eq', 'http://localhost:3000/expenses/new')
    })
    it("User should be able to successfully submit new expense", () => {
        cy.get('#title').type("Car");
        cy.get('#amount').type("3000");
        cy.log("After EXPENSE details provided, click SUBMIT");

    })
    it("click on submit button display error message Category is required", () => {
        cy.get('.MuiButton-containedPrimary > .MuiButton-label').click();
        cy.get('p').should(($p) => {
            //should have found 1 elements 
            expect($p).to.have.length(1)
            //make sure the element contains text content
            expect($p.last()).to.contain("Category is required")
        });
    })
})//End of TC_AE_003

//######################################################################################################################### */

//TC_AE_004
describe("TC_AE_004 Validate error message when submit new expense when providing only (Title, Category)", () => {

    it("User should Visit SignIn page", () => {
        cy.visit("http://localhost:3000/signin");

    })
    it("successfully submit account details and sign in", () => {
        cy.get('#email').type("useralpha@gmail.com");
        cy.get('#password').type("12345678");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
        cy.wait(1000)
    })
    it("navigate to ADD EXPENSE page", () => {
        cy.log("in home page, click on ADD EXPENSE navbar button");
        cy.get('[href="/signup"] > .MuiButtonBase-root > .MuiButton-label').click();
        cy.url().should('eq', 'http://localhost:3000/expenses/new')
    })
    it("User should be able to successfully submit new expense", () => {
        cy.get('#title').type("Car");
        cy.get('#category').type("Transportation");
        cy.log("After EXPENSE details provided, click SUBMIT");

    })
    it("click on submit button display error message Category is required", () => {
        cy.get('.MuiButton-containedPrimary > .MuiButton-label').click();
        cy.get('p').should(($p) => {
            //should have found 1 elements 
            expect($p).to.have.length(1)
            //make sure the element contains text content
            expect($p.last()).to.contain("Amount is required")
        });
    })
})//End of TC_AE_004

//######################################################################################################################### */

//TC_AE_005
describe("TC_AE_005 Validate error message when submit new expense when providing only (Title, Notes)", () => {

    it("User should Visit SignIn page", () => {
        cy.visit("http://localhost:3000/signin");

    })
    it("successfully submit account details and sign in", () => {
        cy.get('#email').type("useralpha@gmail.com");
        cy.get('#password').type("12345678");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
        cy.wait(1000)
    })
    it("navigate to ADD EXPENSE page", () => {
        cy.log("in home page, click on ADD EXPENSE navbar button");
        cy.get('[href="/signup"] > .MuiButtonBase-root > .MuiButton-label').click();
        cy.url().should('eq', 'http://localhost:3000/expenses/new')
    })
    it("User should be able to successfully submit new expense", () => {
        cy.get('#title').type("Car");
        cy.get('#multiline-flexible').type("New car for my wife");
        cy.log("After EXPENSE details provided, click SUBMIT");

    })
    it("click on submit button display error message Category is required", () => {
        cy.get('.MuiButton-containedPrimary > .MuiButton-label').click();
        cy.get('p').should(($p) => {
            //should have found 1 elements 
            expect($p).to.have.length(1)
            //make sure the element contains text content
            expect($p.last()).to.contain("Category is required")
        });
    })
})//End of TC_AE_005

//######################################################################################################################### */

//TC_AE_006
describe("TC_AE_006 Validate error message when submit new expense when providing only (Amount, Notes)", () => {

    it("User should Visit SignIn page", () => {
        cy.visit("http://localhost:3000/signin");

    })
    it("successfully submit account details and sign in", () => {
        cy.get('#email').type("useralpha@gmail.com");
        cy.get('#password').type("12345678");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
        cy.wait(1000)
    })
    it("navigate to ADD EXPENSE page", () => {
        cy.log("in home page, click on ADD EXPENSE navbar button");
        cy.get('[href="/signup"] > .MuiButtonBase-root > .MuiButton-label').click();
        cy.url().should('eq', 'http://localhost:3000/expenses/new')
    })
    it("User should be able to successfully submit new expense", () => {
        cy.get('#amount').type("3000");
        cy.get('#multiline-flexible').type("New car for my wife");
        cy.log("After EXPENSE details provided, click SUBMIT");

    })
    it("click on submit button display error message Category is required", () => {
        cy.get('.MuiButton-containedPrimary > .MuiButton-label').click();
        cy.get('p').should(($p) => {
            //should have found 1 elements 
            expect($p).to.have.length(1)
            //make sure the element contains text content
            expect($p.last()).to.contain("Title is required")
        });
    })
})//End of TC_AE_006

//######################################################################################################################### */

//TC_AE_007
describe("TC_AE_007 Validate user submit new expense when providing only Numbers", () => {

    it("User should Visit SignIn page", () => {
        cy.visit("http://localhost:3000/signin");

    })
    it("successfully submit account details and sign in", () => {
        cy.get('#email').type("useralpha@gmail.com");
        cy.get('#password').type("12345678");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
        cy.wait(1000)
    })
    it("navigate to ADD EXPENSE page", () => {
        cy.log("in home page, click on ADD EXPENSE navbar button");
        cy.get('[href="/signup"] > .MuiButtonBase-root > .MuiButton-label').click();
        cy.url().should('eq', 'http://localhost:3000/expenses/new')
    })
    it("User should be able to successfully submit new expense", () => {
        cy.get('#title').type("1111");
        cy.get('#amount').type("1111");
        cy.get('#category').type("1111");
        cy.get('#multiline-flexible').type("1111");
        cy.log("After all EXPENSE details provided, click SUBMIT");
        cy.get('.MuiButton-containedPrimary > .MuiButton-label').click();
    })
    it("User should be redirected to home page", () => {
        cy.url().should('eq', 'http://localhost:3000/')
    })
})//End of TC_AE_007

//######################################################################################################################### */

//TC_AE_008
describe("TC_AE_008 Validate user submit new expense when providing only Characters", () => {

    it("User should Visit SignIn page", () => {
        cy.visit("http://localhost:3000/signin");

    })
    it("successfully submit account details and sign in", () => {
        cy.get('#email').type("useralpha@gmail.com");
        cy.get('#password').type("12345678");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
        cy.wait(1000)
    })
    it("navigate to ADD EXPENSE page", () => {
        cy.log("in home page, click on ADD EXPENSE navbar button");
        cy.get('[href="/signup"] > .MuiButtonBase-root > .MuiButton-label').click();
        cy.url().should('eq', 'http://localhost:3000/expenses/new')
    })
    it("User should be able to successfully submit new expense", () => {
        cy.get('#title').type("aaaa");
        cy.get('#amount').type("aaaa");
        cy.get('#category').type("aaaa");
        cy.get('#multiline-flexible').type("aaaa").wait(1000);
        cy.log("After all EXPENSE details provided, click SUBMIT");
        cy.get('.MuiButton-containedPrimary > .MuiButton-label').click();
    })
    it("User should be redirected to myauctions page", () => {
        cy.url().should('eq', 'http://localhost:3000/expenses/new')
    })
})//End of TC_AE_008

//######################################################################################################################### */

//TC_AE_009
describe("TC_AE_009 Validate user cancel new expense after providing all fields", () => {

    it("User should Visit SignIn page", () => {
        cy.visit("http://localhost:3000/signin");

    })
    it("successfully submit account details and sign in", () => {
        cy.get('#email').type("useralpha@gmail.com");
        cy.get('#password').type("12345678");
        cy.get('.MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
        cy.wait(1000)
    })
    it("navigate to ADD EXPENSE page", () => {
        cy.log("in home page, click on ADD EXPENSE navbar button");
        cy.get('[href="/signup"] > .MuiButtonBase-root > .MuiButton-label').click();
        cy.url().should('eq', 'http://localhost:3000/expenses/new')
    })
    it("User should be able to successfully submit new expense", () => {
        cy.get('#title').type("aaaa");
        cy.get('#amount').type("aaaa");
        cy.get('#category').type("aaaa");
        cy.get('#multiline-flexible').type("aaaa");
        cy.log("After all EXPENSE details provided, click CANCEL");
        cy.get('a.makeStyles-submit-24 > .MuiButtonBase-root').click();
    })
    it("User should be redirected to myauctions page", () => {
        cy.url().should('eq', 'http://localhost:3000/myauctions')
    })
})//End of TC_AE_009

//######################################################################################################################### */