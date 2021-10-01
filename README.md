# SolveQA Expense Tracker - Full testing project

[![CI/CD Pipeline](https://github.com/orensrauch/solveqa-expense-tracker/actions/workflows/ci.js.yml/badge.svg?branch=main)](https://github.com/orensrauch/solveqa-expense-tracker/actions/workflows/ci.js.yml)
------------

**Table of Contents**

<!-- - [About](#An-expense-tracking-MERN-application-with-data-visualization---developed-using-React,-Node,-Express,-MongoDB-and-Victory.) -->
- [Automation Testing](#Automation-Testing)
- [Testing Documents](#Testing-Documents)
- [run this project locally](#What-you-need-to-run-this-project-locally)
- [How to run test scripts](#How-to-run-test-scripts)

------------

### An expense tracking MERN application with data visualization - developed using React, Node, Express, MongoDB and Victory.

* Project is tested following this [`Software Test Plan`](https://github.com/orensrauch/solveqa-expense-tracker/blob/main/doc/test-plan-expense-track.pdf) and all test documents are included in the `doc` folder included in this repo for download.
<div align="center">
<img src="https://github.com/orensrauch/solveqa-expense-tracker/blob/main/client/assets/githubAssets/ExpenseTracker1.gif" alt="software testing" width="100%"/>
</div>

# Automation Testing

* `Cypress` Integration testing following the [`Test Cases`](https://github.com/orensrauch/solveqa-expense-tracker/tree/main/doc) Document file provided in the `doc` folder.
<div align="center">
<img src="https://github.com/orensrauch/solveqa-expense-tracker/blob/main/client/assets/githubAssets/solveqa-cypress-demo.gif" alt="software testing cypress" width="100%"/>
</div>
------

* `K6` for Load and Stress testing

# Testing Documents

This project is for educational purposes to demonstrate software testing lifecycle.
in this repo, you can find all related test plan documents which handle test project documentation traceability as shown in this documents diagram flow

<img src="https://github.com/orensrauch/solveqa-expense-tracker/blob/main/doc/DocumentsDiagram.jpeg" alt="software testing documents diagram flow" width="300"/>

[`Download Test Plan`](https://drive.google.com/file/d/14Fzj0VrXbgpPYjotRNEGUsnHubJeANoJ/view?usp=sharing)
[`Download Test Cases document`](https://docs.google.com/spreadsheets/d/1xFUjl8ssVujLCmM4ah8t1E3IXM8gYMsO/edit?usp=sharing&ouid=110070234660526095621&rtpof=true&sd=true)
[`Download Test Scenarios document`](https://docs.google.com/spreadsheets/d/115Y9p9aYiJnMFk8pna8UcMwPCS4oVMNr/edit?usp=sharing&ouid=110070234660526095621&rtpof=true&sd=true)


# What you need to run this project locally
1. Node (13.12.0)
2. NPM (6.14.4) or Yarn (1.22.4)
3. MongoDB (4.2.0)

####  How to run this code
1. Make sure MongoDB is running on your system
2. Clone this repository
3. Open command line in the cloned folder,
   - To install dependencies, run ```  npm install  ``` 
   - To run the application, run ```  npm run start  ``` 
4. Open [localhost:3000](http://localhost:3000/) in the browser

# How to run test scripts
## * Test with Cypress
1. Make sure to run project `npm run start`
2. create New Terminal and split to two terminals (git bash) 
now you should work as `terminal 1` is running the project and `terminal 2`(new one) will run the test
3. In `terminal 2` execute `npm run cy:open` to run cypress tests in GUI mode
4. In `terminal 2` execute `npm run cy:run` to run cypress tests in headless mode
----

## * Test with k6
1. Make sure you ['installed k6 on yor machine'](https://k6.io/docs/getting-started/installation/)
2. check k6 is installed by run `k6 verstion` in terminal
3. run `k6 run load.js` in terminal


