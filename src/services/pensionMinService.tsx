import PensionProjection from "../interfaces/pensionProjection";

const calculatePension = (
  currentAge: number,
  retireAge: number,
  deathAge: number,
  monthlyInput: number,
  desiredRetireIncome: number,
  yearlyInterest: number,
  transferredPension: number
): number => {
  let pensionArray: PensionProjection[] = [];
  let pensionAmount: number = 0;

  // Accumulate pension until retirement
  for (let age = deathAge; age >= retireAge; age--) {
    pensionArray.unshift({ age: age, pensionAmount: pensionAmount });
    pensionAmount =
      (pensionAmount + desiredRetireIncome) / (1 + yearlyInterest);
  }

  return pensionArray[0].pensionAmount;
};

export default calculatePension;
