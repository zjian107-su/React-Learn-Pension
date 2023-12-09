import React, { useEffect, useContext } from "react";
import "./PensionForm.css";
import { useForm } from "react-hook-form";
import { PensionContext } from "../../context/PensionContext";
import CalculatorInput from "../../interfaces/calculatorInput";

function PensionForm() {
  const { pensionData, setPensionData } = useContext(PensionContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      currentAge: 25,
      retireAge: 65,
      deathAge: 81,
      personalInput: 300,
      employerInput: 300,
      desiredRetireIncome: 30000,
      yearlyInterest: 0.05,
      transferredPension: 0,
    },
  });

  const handleSubmitForm = (data: any) => {
    setPensionData(data);
  };

  // test the global state
  // useEffect(() => {
  //   console.log("PENSIONDATA", pensionData);
  // }, [pensionData]);

  return (
    <>
      <h2>Daniel's Pension Form</h2>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <label htmlFor="desiredRetireIncome">Desired Retirement Income: </label>
        <input
          type="number"
          id="desiredRetireIncome"
          {...register("desiredRetireIncome", {
            required: "Required",
            setValueAs: (v) => parseInt(v),
          })}
        />
        <p>{errors.desiredRetireIncome?.message}</p>

        <label htmlFor="personalInput">Personal Monthly Input: </label>
        <input
          type="text"
          id="personalInput"
          {...register("personalInput", {
            required: "Required",
            setValueAs: (v) => parseInt(v),
          })}
        />
        <p>{errors.personalInput?.message}</p>
        <label htmlFor="employerInput">Employer Monthly Input: </label>
        <input
          type="text"
          id="employerInput"
          {...register("employerInput", {
            required: "Required",
            setValueAs: (v) => parseInt(v),
          })}
        />
        <p>{errors.employerInput?.message}</p>

        <label htmlFor="retireAge">Retire Age: </label>
        <input
          type="number"
          id="retireAge"
          {...register("retireAge", {
            required: "Required",
            min: { value: 18, message: "Age must be at least 18" },
            max: { value: 120, message: "Age must be under 120" },
            setValueAs: (v) => parseInt(v),
          })}
        />
        <p>{errors.retireAge?.message}</p>

        <label htmlFor="transferredPension">Transferred Pension: </label>
        <input
          type="number"
          id="transferredPension"
          {...register("transferredPension", {
            required: "Required",
            setValueAs: (v) => parseInt(v),
          })}
        />
        <br />

        {/* OPTIONAL */}

        <br />
        <h3>Default Assumption</h3>
        <label htmlFor="currentAge">Current Age: </label>
        <input
          type="number"
          id="currentAge"
          disabled
          {...register("currentAge", {
            required: "Required",

            min: { value: 18, message: "Age must be at least 18" },
            max: { value: 120, message: "Age must be under 120" },
            setValueAs: (v) => parseInt(v),
          })}
        />
        <br />
        <label htmlFor="deathAge">Death Age:</label>
        <input
          type="number"
          id="deathAge"
          disabled
          {...register("deathAge", {
            required: "Required",
            min: { value: 18, message: "Age must be at least 18" },
            max: { value: 120, message: "Age must be under 120" },
            setValueAs: (v) => parseInt(v),
          })}
        />

        <br />
        <label htmlFor="yearlyInterest">Yearly Interest (0-1): </label>
        <input
          type="text"
          id="yearlyInterest"
          disabled
          {...register("yearlyInterest")}
        />

        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default PensionForm;
