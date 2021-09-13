# SolveQA Expense Tracker - Full testing project

<div align="center">
<img src="https://github.com/orensrauch/solveqa-expense-tracker/blob/main/client/assets/githubAssets/expense-tracker.jpg" alt="software testing" width="100%"/>
</div>

### An expense tracking MERN application with data visualization - developed using React, Node, Express, MongoDB and Victory.

* Project is tested following this [`Software Test Plan`](https://github.com/orensrauch/solveqa-expense-tracker/raw/main/doc/Expense-Tracker-Test-Plan.docx) and all test documents are included in the `doc` folder included in this repo for download.
<div align="center">
<img src="https://github.com/orensrauch/solveqa-expense-tracker/blob/main/client/assets/githubAssets/ExpenseTracker1.gif" alt="software testing" width="100%"/>
</div>

# Automation Testing

* `Cypress` Integration testing following the [`Test Cases`](https://github.com/orensrauch/solveqa-expense-tracker/tree/main/doc) Document file provided in the `doc` folder.
<div align="center">
<img src="https://github.com/orensrauch/solveqa-expense-tracker/blob/main/client/assets/githubAssets/solveqa-cypress-demo.gif" alt="software testing cypress" width="100%"/>
</div>
------

* `Jest` Unit testing for functional testing

* `K6` for Load and Stress testing

# Testing Documents

This project is for educational purposes only to demonstrate software testing lifecycle.
in this repo, you can find all related test plan documents which handle test project documentation traceability as shown in this documents diagram flow

<img src="https://github.com/orensrauch/solveqa-expense-tracker/blob/main/doc/DocumentsDiagram.jpeg" alt="software testing documents diagram flow" width="300"/>

# What you need to run this project locally
1. Node (13.12.0)
2. NPM (6.14.4) or Yarn (1.22.4)
3. MongoDB (4.2.0)

####  How to run this code
1. Make sure MongoDB is running on your system
2. Clone this repository
3. Open command line in the cloned folder,
   - To install dependencies, run ```  npm install  ``` or ``` yarn ```
   - To run the application for development, run ```  npm run development  ``` or ``` yarn development ```
4. Open [localhost:3000](http://localhost:3000/) in the browser

# How to run test scripts
## * Test with Cypress
1. Make sure to run project `npm run development`
2. create New Terminal and split to two terminals (git bash) 
now you should work as `terminal 1` is running the project and `terminal 2`(new one) will run the test
3. In `terminal 2` execute `npm run cy:open` to run cypress tests in GUI mode
4. In `terminal 2` execute `npm run cy:run` to run cypress tests in headless mode
----
