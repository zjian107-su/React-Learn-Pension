import PensionProjection from "../interfaces/pensionProjection";

const calculatePension = (
  currentAge: number,
  retireAge: number,
  deathAge: number,
  monthlyInput: number,
  desiredRetireIncome: number,
  yearlyInterest: number,
  transferredPension: number
): PensionProjection[] => {
  let timeBeforeRetire = retireAge - currentAge;
  let timeBeforeDeath = deathAge - currentAge;
  let pensionArray: PensionProjection[] = [];

  pensionArray.push({ age: currentAge, pensionAmount: transferredPension });

  // Accumulate pension until retirement
  for (let i = 1; i < timeBeforeRetire; i++) {
    let newAmount =
      pensionArray[i - 1].pensionAmount * (1 + yearlyInterest) +
      monthlyInput * 12;
    pensionArray.push({ age: currentAge + i, pensionAmount: newAmount });
  }

  // Deplete pension after retirement
  for (let i = timeBeforeRetire; i < timeBeforeDeath; i++) {
    let newAmount =
      pensionArray[i - 1].pensionAmount * (1 + yearlyInterest) -
      desiredRetireIncome;
    pensionArray.push({ age: currentAge + i, pensionAmount: newAmount });
  }

  return pensionArray;
};

export default calculatePension;
