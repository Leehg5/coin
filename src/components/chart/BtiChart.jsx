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

    가격: 49383000,
  },
  {
    name: "6월",

    가격: 37880000,
  },
  {
    name: "7월",

    가격: 25556000,
  },
  {
    name: "8월",

    가격: 30851000,
  },
  {
    name: "9월",

    가격: 27571000,
  },
  {
    name: "10월",
    가격: 27868000,
  },
];

const BtiChart = () => {
  return (
    <div style={{ width: "100%" }}>
      <p style={{ fontSize: "15px" }}>비트코인</p>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId="Bit"
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
            dataKey="가격"
            stroke="#0004ff"
            fill="#0004ff"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BtiChart;
