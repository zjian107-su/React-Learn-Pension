import { useEffect, useState, useContext } from "react";
import "./PensionChart.css";
import pensionCalculatorService from "../../services/pensionCalculatorService";
import PensionProjection from "../../interfaces/pensionProjection";
import pensionMinService from "../../services/pensionMinService";
import { PensionContext } from "../../context/PensionContext";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";

function PensionChart() {
  const { pensionData } = useContext(PensionContext);

  const [projections, setProjections] = useState<PensionProjection[]>([]);
  const [minNum, setMinNum] = useState(0);

  useEffect(() => {
    const newProjections = pensionCalculatorService(
      pensionData.currentAge,
      pensionData.retireAge,
      pensionData.deathAge,
      pensionData.personalInput,
      pensionData.employerInput,
      pensionData.desiredRetireIncome,
      pensionData.yearlyInterest,
      pensionData.transferredPension
    );
    console.log("newProjections", newProjections);
    const newMinNum = pensionMinService(
      pensionData.currentAge,
      pensionData.retireAge,
      pensionData.deathAge,
      pensionData.personalInput,
      pensionData.employerInput,
      pensionData.desiredRetireIncome,
      pensionData.yearlyInterest,
      pensionData.transferredPension
    );
    console.log("newMinNum", newMinNum);

    setProjections(newProjections);
    setMinNum(newMinNum);
  }, [pensionData]);

  return (
    <>
      <h1>Daniel's Pension Chart</h1>
      {/* <h1>{projections}</h1> */}
      <h1>{minNum}</h1>

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
              <tr key={projection.age}>
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
          <ReferenceLine y={minNum} label="Minimum Required" stroke="red" />
        </LineChart>
      </div>
    </>
  );
}

export default PensionChart;
