import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "5월",
    uv: 2687.45,
  },
  {
    name: "6월",
    uv: 2658.99,
  },
  {
    name: "7월",
    uv: 2305.42,
  },
  {
    name: "8월",
    uv: 2452.25,
  },
  {
    name: "9월",
    uv: 2415.61,
  },
  {
    name: "10월",
    uv: 2209.38,
  },
];

const KospiChart = () => {
  return (
    <div style={{ width: "100%" }}>
      <p style={{ fontSize: "15px" }}>코스피</p>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId="Kospi"
          margin={{
            top: 10,
            right: 0,
            left: 30,
            bottom: 0,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />

          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#ff0400" fill="#ff0400" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default KospiChart;
