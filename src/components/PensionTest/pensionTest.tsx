import { useEffect, useState } from "react";
import pensionMinService from "../../services/pensionMinService";
import { usePensionContext } from "../../context/PensionContext";

// this is a test component to test the global state
// when you click the button, it should change the gloobal state
function PensionTest() {
  const [retirementAmount, setRetirementAmount] = useState(0);
  const { pensionData, setPensionData, devMode } = usePensionContext();

  const clickHandler = () => {
    setPensionData({
      currentAge: 25,
      retireAge: 65,
      deathAge: 81,
      personalInput: 300,
      employerInput: 300,
      // monthlyInput: 28,
      desiredRetireIncome: 50000,
      yearlyInterest: 0.049,
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
      {devMode ? (
        <div className="card bordered bg-rose-300 space-y-3">
          <h2 className="text-3xl font-bold">🧪Daniel's Pension Test🧪</h2>
          <h1>Current Age: {pensionData.currentAge}</h1>
          <h1>Retire Age: {pensionData.retireAge}</h1>
          <h1>Death Age: {pensionData.deathAge}</h1>
          <h1>Personal Input: {pensionData.personalInput}</h1>
          <h1>Employer Input: {pensionData.employerInput}</h1>
          <h1>Desired Retire Income: {pensionData.desiredRetireIncome}</h1>
          <h1>Yearly Interest: {pensionData.yearlyInterest}</h1>
          <h1>Transferred Pension: {pensionData.transferredPension}</h1>

          <h1 className="text-xl font-bold">
            Minimum Pension Amount To Retire: {retirementAmount}
          </h1>
          <div className="flex mt-4">
            <button className="btn btn-primary w-full" onClick={clickHandler}>
              Click to change desired retire income and transferred pension
            </button>
          </div>

          <br />
        </div>
      ) : null}
    </>
  );
}

export default PensionTest;
