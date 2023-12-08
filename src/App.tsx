import React from 'react';
import PensionForm from "./components/PensionForm/PensionForm";
import PensionChart from "./components/PensionChart/PensionChart";

function App() {
  return (
    <>
      <h1>Daniel's Pension Tracker</h1>
      <br />
      <PensionChart />
      <PensionForm />
    </>
  );
}

export default App;
