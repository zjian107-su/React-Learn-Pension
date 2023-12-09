import PensionProjection from "../interfaces/pensionProjection";
import calculatorInput from "../interfaces/calculatorInput";

const pensionCalculatorService = (
  userInput: calculatorInput
): PensionProjection[] => {
  let timeBeforeRetire = userInput.retireAge - userInput.currentAge;
  let timeBeforeDeath = userInput.deathAge - userInput.currentAge;
  let pensionArray: PensionProjection[] = [];
  let monthlyInput = userInput.personalInput + userInput.employerInput;
  // console.log(
  //   `currentAge: ${userInput.currentAge}, retireAge: ${userInput.retireAge}, deathAge: ${userInput.deathAge}, personalInput: ${userInput.personalInput}, employerInput: ${userInput.employerInput}, desiredRetireIncome: ${userInput.desiredRetireIncome}, yearlyInterest: ${userInput.yearlyInterest}, transferredPension: ${userInput.transferredPension}`
  // );

  pensionArray.push({
    age: userInput.currentAge,
    pensionAmount: userInput.transferredPension,
  });

  // Accumulate pension until retirement
  for (let i = 1; i < timeBeforeRetire; i++) {
    let newAmount =
      pensionArray[i - 1].pensionAmount * (1 + userInput.yearlyInterest) +
      monthlyInput * 12;

    pensionArray.push({
      age: userInput.currentAge + i,
      pensionAmount: newAmount,
    });
    // console.log({ age: userInput.currentAge + i, pensionAmount: newAmount });
  }

  for (let i = timeBeforeRetire; i < timeBeforeDeath; i++) {
    let newAmount =
      pensionArray[i - 1].pensionAmount * (1 + userInput.yearlyInterest) -
      userInput.desiredRetireIncome;

    // console.log({ age: userInput.currentAge + i, pensionAmount: newAmount });
    pensionArray.push({
      age: userInput.currentAge + i,
      pensionAmount: newAmount,
    });
  }

  return pensionArray;
};

export default pensionCalculatorService;
