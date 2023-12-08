import { useState, useEffect } from "react";
import calculatePension from "../services/pensionCalculatorService";
import CalculatorInput from "../interfaces/calculatorInput";
import PensionProjection from "../interfaces/pensionProjection";

const usePensionCalculator = (initialValues: CalculatorInput) => {
  const [inputs, setInputs] = useState(initialValues);
  const [pensionProjection, setPensionProjection] = useState<
    PensionProjection[]
  >([]);

  useEffect(() => {
    const projection: PensionProjection[] = calculatePension(
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
