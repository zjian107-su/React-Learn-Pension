import { useState, useEffect } from "react";
import pensionCalculatorService from "../services/pensionCalculatorService";
import CalculatorInput from "../interfaces/calculatorInput";
import PensionProjection from "../interfaces/pensionProjection";

const usePensionCalculator = (initialValues: CalculatorInput) => {
  const [inputs, setInputs] = useState(initialValues);
  const [pensionProjection, setPensionProjection] = useState<
    PensionProjection[]
  >([]);
  const [pensionMinProjection, setPensionMinProjection] = useState<
    PensionProjection[]
  >([]);

  useEffect(() => {
    const projection: PensionProjection[] = pensionCalculatorService(
      inputs.currentAge,
      inputs.retireAge,
      inputs.deathAge,
      inputs.personalInput,
      inputs.employerInput,
      inputs.desiredRetireIncome,
      inputs.yearlyInterest,
      inputs.transferredPension
    );
    setPensionProjection(projection);
  }, [inputs]);

  return { pensionProjection, setInputs };
};

export default usePensionCalculator;
