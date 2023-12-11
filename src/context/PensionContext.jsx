import React, { useState, createContext } from "react";
import CalculatorInput from "../interfaces/calculatorInput";

export const PensionContext = createContext();

export function PensionProvider({ children }) {
  const [pensionData, setPensionData] = useState({
    currentAge: 25,
    retireAge: 65,
    deathAge: 81,
    personalInput: 300,
    employerInput: 300,
    desiredRetireIncome: 70000,
    yearlyInterest: 0.049,
    transferredPension: 0,
  });

  const [devMode, setDevMode] = useState(true);

  const contextData = {
    pensionData,
    setPensionData,
    devMode,
    setDevMode,
  };

  return (
    <PensionContext.Provider value={contextData}>
      {children}
    </PensionContext.Provider>
  );
}
