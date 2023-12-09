import { useEffect, useState, useContext } from "react";
import "./PensionLine.css";
import CalculatorInput from "../../interfaces/calculatorInput";
import PensionProjection from "../../interfaces/pensionProjection";
import pensionMinService from "../../services/pensionMinService";
import { PensionContext } from "../../context/PensionContext";

function PensionLine() {
  const [retirementAmount, setRetirementAmount] = useState(0);
  const { pensionData, setPensionData } = useContext(PensionContext);

  const clickHandler = () => {
    setPensionData({
      currentAge: 26,
      retireAge: 27,
      deathAge: 28,
      personalInput: 29,
      employerInput: 30,
      // monthlyInput: 28,
      desiredRetireIncome: 31,
      yearlyInterest: 0.05,
      transferredPension: 100,
    });
  };

  // test the global state
  useEffect(() => {
    console.log(pensionData);
  }, [pensionData]);

  useEffect(() => {
    let updatedRetiredmentAmount: number = pensionMinService(pensionData);
    setRetirementAmount(updatedRetiredmentAmount);
  }, [pensionData]);

  return (
    <>
      <h1>{pensionData.currentAge}</h1>
      <h1>{pensionData.retireAge}</h1>
      <h1>{pensionData.deathAge}</h1>
      <h1>{pensionData.personalInput}</h1>
      <h1>{pensionData.employerInput}</h1>
      <h1>{pensionData.desiredRetireIncome}</h1>
      <h1>{pensionData.yearlyInterest}</h1>
      <h1>{pensionData.transferredPension}</h1>

      <h1>{retirementAmount}</h1>
      <button onClick={clickHandler}>
        Click to change the state form the global state
      </button>
    </>
  );
}

export default PensionLine;
