import React, { useState } from "react";
import PensionForm from "./components/PensionForm/PensionForm";
import PensionChart from "./components/PensionChart/PensionChart";
import PensionLine from "./components/PensionLine/pensionLine";
import { PensionContext } from "./context/PensionContext";
import CalculatorInput from "./interfaces/calculatorInput";

function App() {
  const [pensionData, setPensionData] = useState({
    currentAge: 26,
    retireAge: 65,
    deathAge: 81,
    personalInput: 300,
    employerInput: 300,
    desiredRetireIncome: 69500,
    yearlyInterest: 0.05,
    transferredPension: 0,
  } as CalculatorInput);

  return (
    <>
      <PensionContext.Provider value={{ pensionData, setPensionData }}>
        <h1 className="text-5xl font-bold">✨Daniel's Pension Tracker✨</h1>
        {/* <PensionLine /> */}
        <br />

        <PensionForm />
        <br />

        <PensionChart />
      </PensionContext.Provider>
    </>
  );
}

export default App;
