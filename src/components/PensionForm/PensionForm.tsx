import React, { useEffect, useContext } from "react";
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
      desiredRetireIncome: 70000,
      yearlyInterest: 0.049,
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
      <div className="card bordered">
        <h2 className="text-3xl font-bold">📓Daniel's Pension Form📓</h2>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <label className="label label-text" htmlFor="desiredRetireIncome">
            Desired Retirement Income:{" "}
          </label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="number"
            id="desiredRetireIncome"
            {...register("desiredRetireIncome", {
              required: "Required",
              setValueAs: (v) => parseInt(v),
            })}
          />
          <p className="text-red-500">{errors.desiredRetireIncome?.message}</p>

          <label className="label label-text" htmlFor="personalInput">
            Personal Monthly Input:{" "}
          </label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            id="personalInput"
            {...register("personalInput", {
              required: "Required",
              setValueAs: (v) => parseInt(v),
            })}
          />
          <p className="text-red-500">{errors.personalInput?.message}</p>
          <label className="label label-text" htmlFor="employerInput">
            Employer Monthly Input:{" "}
          </label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            id="employerInput"
            {...register("employerInput", {
              required: "Required",
              setValueAs: (v) => parseInt(v),
            })}
          />
          <p className="text-red-500">{errors.employerInput?.message}</p>

          <label className="label label-text" htmlFor="retireAge">
            Retire Age:{" "}
          </label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="number"
            id="retireAge"
            {...register("retireAge", {
              required: "Required",
              min: { value: 18, message: "Age must be at least 18" },
              max: { value: 120, message: "Age must be under 120" },
              setValueAs: (v) => parseInt(v),
            })}
          />
          <p className="text-red-500">{errors.retireAge?.message}</p>

          <label className="label label-text" htmlFor="transferredPension">
            Transferred Pension:{" "}
          </label>
          <input
            className="input input-bordered w-full max-w-xs"
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
          <h3 className="text-xl font-bold">Default Assumption</h3>
          <label className="label label-text" htmlFor="currentAge">
            Current Age:{" "}
          </label>
          <input
            type="number"
            id="currentAge"
            disabled
            className="input input-bordered w-full max-w-xs"
            {...register("currentAge", {
              required: "Required",

              min: { value: 18, message: "Age must be at least 18" },
              max: { value: 120, message: "Age must be under 120" },
              setValueAs: (v) => parseInt(v),
            })}
          />
          <br />
          <label className="label label-text" htmlFor="deathAge">
            Death Age:
          </label>
          <input
            type="number"
            id="deathAge"
            className="input input-bordered w-full max-w-xs"
            disabled
            {...register("deathAge", {
              required: "Required",
              min: { value: 18, message: "Age must be at least 18" },
              max: { value: 120, message: "Age must be under 120" },
              setValueAs: (v) => parseInt(v),
            })}
          />

          <br />
          <label className="label label-text" htmlFor="yearlyInterest">
            Yearly Interest (0-1):{" "}
          </label>
          <input
            type="text"
            id="yearlyInterest"
            className="input input-bordered w-full max-w-xs"
            disabled
            {...register("yearlyInterest")}
          />

          <br />
          <br />

          <button className="btn btn-primary" type="submit">
            Update Form
          </button>
        </form>
      </div>
      <></>
    </>
  );
}

export default PensionForm;
