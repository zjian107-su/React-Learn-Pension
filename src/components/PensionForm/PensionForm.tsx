import React from "react";
import "./PensionForm.css";
import { useForm } from "react-hook-form";

function PensionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      currentAge: 25,
      retireAge: 65,
      deathAge: 81,
      personlyInput: 300,
      employerInput: 300,
      desiredRetirementIncome: 30000,
      yearlyInterest: 0.05,
      transferredPension: 0,
    },
  });

  return (
    <>
      <h1>Daniel's Pension Form</h1>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <label htmlFor="desiredRetirementIncome">
          Desired Retirement Income
        </label>
        <input
          type="text"
          id="desiredRetirementIncome"
          {...register("desiredRetirementIncome", {
            required: "Required",
            pattern: { value: /^\d+$/, message: "Invalid age" },
          })}
        />
        <p>{errors.desiredRetirementIncome?.message}</p>

        <label htmlFor="personlyInput">Personal Monthly Input: </label>
        <input
          type="text"
          id="personlyInput"
          {...register("personlyInput", {
            required: "Required",
            pattern: { value: /^\d+$/, message: "Invalid age" },
          })}
        />
        <p>{errors.personlyInput?.message}</p>
        <label htmlFor="employerInput">Employer Monthly Input: </label>
        <input
          type="text"
          id="employerInput"
          {...register("employerInput", {
            required: "Required",
            pattern: { value: /^\d+$/, message: "Invalid age" },
          })}
        />
        <p>{errors.employerInput?.message}</p>

        <label htmlFor="retireAge">Retire Age:</label>
        <input
          type="text"
          id="retireAge"
          {...register("retireAge", {
            required: "Required",
            min: { value: 18, message: "Age must be at least 18" },
            max: { value: 120, message: "Age must be under 120" },
            pattern: { value: /^\d+$/, message: "Invalid age" },
          })}
        />
        <p>{errors.retireAge?.message}</p>

        <label htmlFor="transferredPension">Transferred Pension: </label>
        <input
          type="text"
          id="transferredPension"
          {...register("transferredPension", {
            required: "Required",
            pattern: { value: /^\d+$/, message: "Invalid input" },
          })}
        />

        {/* OPTIONAL */}

        <br />
        <label htmlFor="currentAge">Current Age:</label>
        <input
          {...register("currentAge", {
            required: "Required",
            min: { value: 18, message: "Age must be at least 18" },
            max: { value: 120, message: "Age must be under 120" },
            pattern: { value: /^\d+$/, message: "Invalid age" },
          })}
          type="text"
          id="currentAge"
        />

        <label htmlFor="deathAge">Death Age:</label>
        <input
          type="text"
          id="deathAge"
          {...register("deathAge", {
            required: "Required",
            min: { value: 18, message: "Age must be at least 18" },
            max: { value: 120, message: "Age must be under 120" },
            pattern: { value: /^\d+$/, message: "Invalid age" },
          })}
        />

        <br />
        <label htmlFor="yearlyInterest">Yearly Interest (0-1): </label>
        <input
          type="text"
          id="yearlyInterest"
          {...register("yearlyInterest")}
        />

        <br />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default PensionForm;
