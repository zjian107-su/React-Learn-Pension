import { useEffect, useState } from "react";
import "./PensionLine.css";
import CalculatorInput from "../../interfaces/calculatorInput";
import calculatePension from "../../services/pensionCalculatorService";
import PensionProjection from "../../interfaces/pensionProjection";
import pensionMinService from "../../services/pensionMinService";

function PensionLine() {
  const [inputData, setInputData] = useState<CalculatorInput>({
    currentAge: 26,
    retireAge: 65,
    deathAge: 81,
    monthlyInput: 300,
    desiredRetireIncome: 30000,
    yearlyInterest: 0.05,
    transferredPension: 0,
  });
  const [retirementAmount, setRetirementAmount] = useState(0);

  useEffect(() => {
    let updatedRetiredmentAmount: PensionProjection[] = pensionMinService(
      inputData.currentAge,
      inputData.retireAge,
      inputData.deathAge,
      inputData.monthlyInput,
      inputData.desiredRetireIncome,
      inputData.yearlyInterest,
      inputData.transferredPension
    );
    setRetirementAmount(updatedRetiredmentAmount[0].pensionAmount);
  }, [retirementAmount]);

  return (
    <>
      <h1>{retirementAmount}</h1>
    </>
  );
}

export default PensionLine;
