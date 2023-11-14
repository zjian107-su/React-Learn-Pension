import React, { useState, createContext, useContext } from "react";
import CalculatorInput from "../interfaces/calculatorInput";

interface PensionContextType {
  pensionData: {
    currentAge: number;
    retireAge: number;
    deathAge: number;
    personalInput: number;
    employerInput: number;
    desiredRetireIncome: number;
    yearlyInterest: number;
    transferredPension: number;
  };
  setPensionData: React.Dispatch<
    React.SetStateAction<{
      currentAge: number;
      retireAge: number;
      deathAge: number;
      personalInput: number;
      employerInput: number;
      desiredRetireIncome: number;
      yearlyInterest: number;
      transferredPension: number;
    }>
  >;
  devMode: boolean;
  setDevMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PensionContext = createContext<PensionContextType | undefined>(
  undefined
);

export function usePensionContext() {
  const context = useContext(PensionContext);
  if (context === undefined) {
    throw new Error("usePensionContext must be used within a PensionProvider");
  }
  return context;
}

export function PensionProvider({ children }: { children: React.ReactNode }) {
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
