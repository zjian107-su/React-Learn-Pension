import { useEffect, useState } from "react";
import "./PensionChart.css";
import CalculatorInput from "../../interfaces/calculatorInput";
import calculatePension from "../../services/pensionCalculatorService";

function PensionChart() {
  const [dataArray, setDataArray] = useState<Number[]>([]); // Initialize dataArray as state

  let inputData: CalculatorInput = {
    currentAge: 26,
    retireAge: 65,
    deathAge: 81,
    monthlyInput: 300,
    desiredRetireIncome: 30000,
    yearlyInterest: 0.05,
    transferredPension: 0,
  };

  useEffect(() => {
    const projection = calculatePension(
      inputData.currentAge,
      inputData.retireAge,
      inputData.deathAge,
      inputData.monthlyInput,
      inputData.desiredRetireIncome,
      inputData.yearlyInterest,
      inputData.transferredPension
    );
    console.log(projection);
    setDataArray(projection);
  }, []);

  return (
    <>
      <h1>Daniel's Pension Chart</h1>
      <div className="chart">
        {dataArray.map((value, index) => (
          <div className="bar" key={index}>
            {index + inputData.currentAge} {value.toString()}{" "}
            {/* Make sure to convert Number to string */}
          </div>
        ))}
      </div>
    </>
  );
}

export default PensionChart;
