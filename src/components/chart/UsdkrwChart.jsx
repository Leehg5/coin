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
import { textAlign } from "@mui/system";

const data = [
  {
    name: "11",
    매수: 1289.17,
  },
  {
    name: "12",
    매수: 1272.38,
  },
  {
    name: "1",
    매수: 1320.71,
  },
  {
    name: "2",
    매수: 1327.83,
  },
  {
    name: "3",
    매수: 1382.27,
  },
  {
    name: "4",
    매수: 1452.99,
  },
  {
    name: "5",
    매수: 1289.17,
  },
  {
    name: "6",
    매수: 1272.38,
  },
  {
    name: "7",
    매수: 1320.71,
  },
  {
    name: "8",
    매수: 1327.83,
  },
  {
    name: "9",
    매수: 1382.27,
  },
  {
    name: "10",
    매수: 1452.99,
  },
];
const cardinal = curveCardinal.tension(0.2);

const UsdkrwChart = () => {
  return (
    <div style={{ width: "80%" }}>
      <p style={{ fontSize: "15px", marginBottom: "10px" }}>달러 매수 </p>
      <ResponsiveContainer width="100%" height="80%">
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
            fill="#00ff0000"
          />
        </AreaChart>
      </ResponsiveContainer>
      <p style={{ textAlign: "end", marginRight: "21px" }}>(월) </p>
    </div>
  );
};

export default UsdkrwChart;
