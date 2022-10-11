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
    지수: 901.82,
  },
  {
    name: "6월",
    지수: 891.14,
  },
  {
    name: "7월",
    지수: 729.48,
  },
  {
    name: "8월",
    지수: 807.61,
  },
  {
    name: "9월",
    지수: 788.32,
  },
  {
    name: "10월",
    지수: 672.65,
  },
];

const KosdaqChart = () => {
  return (
    <div style={{ width: "100%" }}>
      <p style={{ fontSize: "15px" }}>코스닥</p>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId="Kosdaq"
          margin={{
            top: 10,
            right: 0,
            left: 30,
            bottom: 0,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />

          <Tooltip />
          <Area
            type="monotone"
            dataKey="지수"
            stroke="##ff0400"
            fill="#ff0400"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default KosdaqChart;
