import { useState, useEffect } from "react";
import calculatePension from "../services/pensionCalculatorService";
import CalculatorInput from "../interfaces/calculatorInput";

const usePensionCalculator = (initialValues: CalculatorInput) => {
  const [inputs, setInputs] = useState(initialValues);
  const [pensionProjection, setPensionProjection] = useState<Number[]>([]);

  useEffect(() => {
    const projection = calculatePension(
      inputs.currentAge,
      inputs.retireAge,
      inputs.deathAge,
      inputs.monthlyInput,
      inputs.desiredRetireIncome,
      inputs.yearlyInterest,
      inputs.transferredPension
    );
    setPensionProjection(projection);
  }, [inputs]);

  return { pensionProjection, setInputs };
};

export default usePensionCalculator;
