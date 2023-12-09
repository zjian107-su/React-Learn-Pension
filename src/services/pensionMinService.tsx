import PensionProjection from "../interfaces/pensionProjection";
import calculatorInput from "../interfaces/calculatorInput";

const pensionMinService = (userInput: calculatorInput): number => {
  let pensionArray: PensionProjection[] = [];
  let pensionAmount: number = 0;

  // Accumulate pension until retirement
  for (let age = userInput.deathAge; age >= userInput.retireAge; age--) {
    pensionArray.unshift({ age: age, pensionAmount: pensionAmount });
    pensionAmount =
      (pensionAmount + userInput.desiredRetireIncome) /
      (1 + userInput.yearlyInterest);
  }

  return pensionArray[0].pensionAmount;
};

export default pensionMinService;
