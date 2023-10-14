# Gilded Rose

Welcome to my Gilded Rose TypeScript Refactoring project!
In this repository, I tackled the classic Gilded Rose kata in two main processes. First testing, refactoring and implementing new feature, and second, implementing a user interface around the application.

## Getting started

Install dependencies

```sh
npm install
```

### Running tests

To run all tests from the Gilded Rose app

(I have only used mocha)

```sh
npm run test:mocha
```

### Running the ui

To run the ui with react

```sh
npm run ui:start
```

## Main folder structure
```sh
./app         Gilded Rose source code
./src         React app source code
./test        Gilded Rose Tests
```

## My Approach

My approach was to prioritize a thorough understanding of the business rules before going with the code. I paid attention to the rules, identifying all the requirements and complexities, in order to think in my test case strategy.

I wrote a suite of test cases, covering standard scenarios and including edge cases. This approach ensured that the refactored code would stand up to a variety of real-world situations.

The heart of the project lays in meticulous refactoring, taking small, measured steps to simplify the codebase while preserving functionality and maintainability.

In the course of this project, I identified that the unique behavior of Sulfuras items wasn't implemented. I decided to implement this feature by writing the test cases and then the functionality.
In a real world case, I would discuss this with the responsible or product owner, also with the team, to confirm my interpretation about maximum 80 quality for Sulfuras rule.

### Future steps

I finished the refactoring process when I considered that I should define a code standard and adapt the code to it. Collaboration with a team would define and document these standards for future project refactoring.

## Implementing a User Interface

As a final step, I integrated a React web application with hooks and context to create a dynamic user interface. I used styled components with Emotion to maintain a visually appealing and adaptative front-end, to achieve a visual interaction with the Gilded Rose inventory system.

## Feedback

If you have any feedback, question or recommendation, please don't hesitate in contacting me.
