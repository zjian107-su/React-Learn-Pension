import PensionProjection from "../interfaces/pensionProjection";

const pensionCalculatorService = (
  currentAge: number,
  retireAge: number,
  deathAge: number,
  personalInput: number,
  employerInput: number,
  desiredRetireIncome: number,
  yearlyInterest: number,
  transferredPension: number
): PensionProjection[] => {
  let timeBeforeRetire = retireAge - currentAge;
  let timeBeforeDeath = deathAge - currentAge;
  let pensionArray: PensionProjection[] = [];
  let monthlyInput = personalInput + employerInput;
  console.log(
    `currentAge: ${currentAge}, retireAge: ${retireAge}, deathAge: ${deathAge}, personalInput: ${personalInput}, employerInput: ${employerInput}, desiredRetireIncome: ${desiredRetireIncome}, yearlyInterest: ${yearlyInterest}, transferredPension: ${transferredPension}`
  );

  pensionArray.push({ age: currentAge, pensionAmount: transferredPension });

  // Accumulate pension until retirement
  for (let i = 1; i < timeBeforeRetire; i++) {
    let newAmount =
      pensionArray[i - 1].pensionAmount * (1 + yearlyInterest) +
      monthlyInput * 12;

    pensionArray.push({ age: currentAge + i, pensionAmount: newAmount });
    // console.log({ age: currentAge + i, pensionAmount: newAmount });
  }

  for (let i = timeBeforeRetire; i < timeBeforeDeath; i++) {
    let newAmount =
      pensionArray[i - 1].pensionAmount * (1 + yearlyInterest) -
      desiredRetireIncome;

    // console.log({ age: currentAge + i, pensionAmount: newAmount });
    pensionArray.push({ age: currentAge + i, pensionAmount: newAmount });
  }

  return pensionArray;
};

export default pensionCalculatorService;
