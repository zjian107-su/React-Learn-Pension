import { useEffect, useState, useContext } from "react";
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
  ResponsiveContainer,
} from "recharts";

type Props = {
  className?: string;
};

function PensionChart({ className = "" }: Props) {
  const { pensionData } = useContext(PensionContext);
  const [projections, setProjections] = useState<PensionProjection[]>([]);
  const [minNum, setMinNum] = useState(0);

  useEffect(() => {
    const newProjections = pensionCalculatorService(pensionData);
    // console.log("newProjections", newProjections);

    const newMinNum = pensionMinService(pensionData);
    // console.log("newMinNum", newMinNum);

    setProjections(newProjections);
    setMinNum(newMinNum);
  }, [pensionData]);

  return (
    <div className={`card bordered bg-amber-200 space-y-3 ${className}`}>
      <h2 className="text-3xl font-bold">📊Daniel's Pension Chart📊</h2>
      <h3 className="text-xl font-bold">
        Minimum Pension Fund Amount at 65: {minNum}
      </h3>

      {/* Show in table format */}
      {/* <div>
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
      </div> */}

      <br />

      <div className="chart">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={projections}
            margin={{ top: 5, right: 20, bottom: 5, left: 30 }}
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
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PensionChart;
