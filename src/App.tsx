import React, { useState } from "react";
import PensionForm from "./components/PensionForm/PensionForm";
import PensionChart from "./components/PensionChart/PensionChart";
import PensionTest from "./components/PensionTest/pensionTest";
import { PensionProvider } from "./context/PensionContext";

function App() {
  return (
    <div>
      <PensionProvider>
        <h1 className="text-5xl font-bold">✨Daniel's Pension Tracker✨</h1>
        <br />
        <PensionTest />

        <br />

        <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
          <div className="flex-1 bg-green-100">
            <PensionForm />
          </div>
          <div className="flex-1 bg-amber-200">
            <PensionChart />
          </div>
        </div>

        <br />
      </PensionProvider>
    </div>
  );
}

export default App;
