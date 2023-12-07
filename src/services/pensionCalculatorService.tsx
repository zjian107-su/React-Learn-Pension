import CalculatorInput from "../interfaces/calculatorInput";

const calculatePension = (
  currentAge: number,
  retireAge: number,
  deathAge: number,
  monthlyInput: number,
  desiredRetireIncome: number,
  yearlyInterest: number,
  transferredPension: number
): Number[] => {
  let timeBeforeRetire = retireAge - currentAge;
  let timeBeforeDeath = deathAge - currentAge;
  let pensionArray = Array.from({ length: timeBeforeDeath }, () => 0);
  pensionArray[0] = transferredPension;

  for (let i = 1; i < timeBeforeRetire; i++) {
    pensionArray[i] =
      pensionArray[i - 1] * (1 + yearlyInterest) + monthlyInput * 12;
  }

  for (let i = timeBeforeRetire; i < timeBeforeDeath; i++) {
    pensionArray[i] =
      pensionArray[i - 1] * (1 + yearlyInterest) - desiredRetireIncome;
  }

  return pensionArray;
};

export default calculatePension;
