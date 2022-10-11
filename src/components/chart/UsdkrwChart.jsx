import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { curveCardinal } from "d3-shape";

const data = [
  {
    name: "5월",
    매수: 1289.17,
  },
  {
    name: "6월",
    매수: 1272.38,
  },
  {
    name: "7월",
    매수: 1320.71,
  },
  {
    name: "8월",
    매수: 1327.83,
  },
  {
    name: "9월",
    매수: 1382.27,
  },
  {
    name: "10월",
    매수: 1452.99,
  },
];
const cardinal = curveCardinal.tension(0.2);

const UsdkrwChart = () => {
  return (
    <div style={{ width: "100%" }}>
      <p style={{ fontSize: "15px" }}>달러 매수 </p>
      <ResponsiveContainer width="100%" height="90%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="매수"
            stroke="#ff00d4"
            fill="#ff00d4"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UsdkrwChart;
