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
    매도: 1244.83,
  },
  {
    name: "6월",
    매도: 1228.62,
  },
  {
    name: "7월",
    매도: 1275.29,
  },
  {
    name: "8월",
    매도: 1282.17,
  },
  {
    name: "9월",
    매도: 1334.73,
  },
  {
    name: "10월",
    매도: 1403.01,
  },
];
const cardinal = curveCardinal.tension(0.2);

const UsdkrwChart1 = () => {
  return (
    <div style={{ width: "100%" }}>
      <p style={{ fontSize: "15px" }}>달러 매도</p>
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
            type={cardinal}
            dataKey="매도"
            stroke="#ff00d4"
            fill="#ff00d4"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UsdkrwChart1;
