# Pension App
[**Live Demo on Netlify**](https://daniel-react-pension.netlify.app)

## Infrastructure Design

#### First step: design components

Design the components includes two core parts: 1. PensionForm that can record or change user's input. 2. PensionChart that shows the visual graph.

Ideally, the graph that is made from reCharts should include:

- Pension amount projection
- Decrement trajectory after retirement
- Min pension amount line to be a worry-free retired man 
- Gap between the current pension amount to the min pension line

#### Second Step: design interfaces

There should be mainly two interfaces, one to record the form, and one as a data format to show in the graph. 

Minor struggles that I had: deciding what attributes to include into the interface or what kind of interfaces was not difficult. However, how to design efficient one at the very first place was a bit challenging. I originally created 4 interfaces because I wanted to give the user the flexibility to change some default, for example, `$currentAge`, `$deathAge` and `$yearlyInterest`.

Solution: Eventually I figured out the most effective way is only having two interfaces, one for data record update and re-rendering, and one for pension projection.

#### Third step: state management
Originally, I wanted to build a custom hook that could be used as a single source of truth for data management. In order to keep this custom hook clean. I tried to created services that only contain function logics.

#### Fourth step: create services that helps manage state
PensionCalculatorService: by providing calculatorInput data type, you can expect an array of projections. They look like this `[{age:26, pensionAmount: 0}]`.

PensionMinService: by providing calculatorInput data type, you can expect a number that you may want to hit before your retirement. This gives a baseline of where you are in your financial map.


#### Fifth step: math implementation
This part includes research about component interests and the math behind it. 

#### Sixth step: ContextAPI
I later leaned more towards global state management solution such as Redux and ContextAPI. I chose ContextAPI due to the size and complexity of our web application. 


## Styling
I crated a separated css file for each UI component.
Later I ditched that method and I picked TailwindCSS and DaisyUI for a quick style implementation. Even thought it makes the UI component looks more messy because they are inline, but for the speed of the development, I think it is a great choice. In addition, they are free.

## Libraries
1. `react-error-boundary`: UI fallback when the pension chart fails to work
2. `react-hook-form`: controlled form for React
3. `recharts`: build reliable charts for React


## Challenge
1. I spent some time to figure out the math, and try to make sure my formulate makes sense. In order to do that, I researched how compound interests work, and how to code them. **My solution**: I searched the formula for compound interest, then adding the complexity when the user joined the program with pre-existing pension. 
2. I ran into a state management problem with contextAPI, but those got fixed quickly. **My solution**: I created another little contextAPI project to test how it works to brush up my knowledge before implementing into my program. This helps me to understand it before it has negative impact on my project. 
3. Reach hook form chart validation took me some time also. It is tricky to handle new data record's data type because it might see your data input as a string instead of a number that you can use in your calculation. I eventually figured it out by using `setValueAs` to pre-processing the data before passing into the state.  **My solution**: I used StackOverflow to find the reason why it would see my changed input as a string. It is because the type of the input is set as "text", so I have to type cast it into number. I was worried if the user input float number into the field, I did not find a quick solution to this. 
4. I did not have enough time to write test for this project, so I tested it manually. Usually in production you want your code to be covered as 85% and above, but I do not have that knowledge to implement test quickly under the time constraint, but I am interested in doing so. 


## Conclusion
It is a fun little project to code. It involved math, global context management, local state management, lifecycle management, styling, graphs, forms and validators. If there are more time, I wish to dig into Jest testing for React. I also wish I committed more often as smaller chunks of changes. 
