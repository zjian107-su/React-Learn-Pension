import { useEffect, useState } from "react";
import "./PensionChart.css";
import CalculatorInput from "../../interfaces/calculatorInput";
import calculatePension from "../../services/pensionCalculatorService";
import PensionProjection from "../../interfaces/pensionProjection";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function PensionChart() {
  let inputData: CalculatorInput = {
    currentAge: 26,
    retireAge: 65,
    deathAge: 81,
    monthlyInput: 300,
    desiredRetireIncome: 30000,
    yearlyInterest: 0.05,
    transferredPension: 0,
  };

  const [projections, setprojections] = useState<PensionProjection[]>([]);

  useEffect(() => {
    const projections = calculatePension(
      inputData.currentAge,
      inputData.retireAge,
      inputData.deathAge,
      inputData.monthlyInput,
      inputData.desiredRetireIncome,
      inputData.yearlyInterest,
      inputData.transferredPension
    );
    console.log(projections);
    setprojections(projections);
  }, [inputData]);

  return (
    <>
      <h1>Daniel's Pension Chart</h1>

      {/* Show in table format */}
      <div>
        <table>
          <thead>
            <tr>
              <th>Age</th>
              <th>Pension Amount</th>
            </tr>
          </thead>
          <tbody>
            {projections.map((projection) => (
              <tr>
                <td>{projection.age}</td>
                <td>{projection.pensionAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <br />

      <div className="chart">
        <LineChart
          width={600}
          height={300}
          data={projections}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <XAxis dataKey="age" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pensionAmount"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    </>
  );
}

export default PensionChart;
