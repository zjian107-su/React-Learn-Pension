# Frontend Developer Tech Test

Congratulations for making it to the tech test stage for Mintago! We have chosen a
technical task that is related to our business and we hope that it is enjoyable. We
don’t want you to spend too long on this. We believe it will take between 4 and 6
hours, but if you are not complete in this time please stop and just note down what
you would do next.

## Task
We would like you to build a Pension tracker, the user must be able to input the
following:
- income per year they would like to receive in retirement (IE. once I retire, I want to receive £16,000 a year in income)
- employer monthly contributions
- their personal contribution
- age at which they would like to retire

### the user should be able to see the following:
- a visual representation of their projected pension pot
- a visual representation of their money decreasing after retirement
- a visual representation of their desired pension pot

## Stretch
- an annual interest rate of 4.9% on the pension pot
allow the user to add current pension pots they may already have
- a visual representation of how their current pension pots contribute to their desired pension total


## Assumptions
- assume the user will live to 81
- the user will start their job at 25 and have that job their whole life until their chosen age of retirement

## Guidance

1.  Technologies:
- TypeScript
- React
- any styling you feel comfortable with
- feel free to use project generators
- any other technology, libraries, testing frameworks you see fit
1. Submission:
GitHub or equivalent repo
1. Additional Notes:
- Feel free to add any additional comments or explanations in a README.md file.
- If you face any challenges or limitations, document them along with your solution.

## Deadline
Please submit your completed test within the 2 weeks, if you would like more time or
if you have any questions or need clarifications please reach out. Good luck!


## Infrastructure Design (Draft)
1. First step: design components

Design the components includes two core parts: PensionForm that records user input, PensionChart that shows the visual

2. Second step: design interfaces



3. Third step: using service to hide logic from the UI functions. Ideally, I want to use custom hook to manage states, and then use services to manages logics that can be used within the custom hook.

4. Fourth step: Implementing math for testing and understanding. I think test the number and understand the business logic would help me to build more robust application. So I write down all the numbers the pension can progress so that I don't miss a year in starting pension investment or retirement. In order to make it more clean, I did some changes to interfaces.
