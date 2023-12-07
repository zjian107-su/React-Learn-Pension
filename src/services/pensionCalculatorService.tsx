import CompoundInterestsData from "../interfaces/compoundInterestsData";

const calculateCompoundInterest = (
  principal: number,
  rate: number,
  time: number
): CompoundInterestsData => {
  const amount = principal * Math.pow(1 + rate / 100, time);
  const interest = amount - principal;
  return { amount, interest };
};

export default calculateCompoundInterest;
