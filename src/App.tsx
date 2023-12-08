import React from 'react';
import PensionForm from "./components/PensionForm/PensionForm";
import PensionChart from "./components/PensionChart/PensionChart";
import PensionLine from "./components/PensionLine/pensionLine";

function App() {
  return (
    <>
      <h1>Daniel's Pension Tracker</h1>
      <br />
      <PensionLine />
      <br />
      <PensionChart />
      <br />
      <PensionForm />
    </>
  );
}

export default App;
