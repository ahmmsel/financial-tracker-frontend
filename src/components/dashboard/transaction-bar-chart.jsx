import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartCard } from "./chart-card";

const data = [
  { month: "Jan", transactions: 10 },
  { month: "Feb", transactions: 15 },
  { month: "Mar", transactions: 8 },
  { month: "Apr", transactions: 12 },
  { month: "May", transactions: 20 },
  { month: "Jun", transactions: 18 },
];

const COLORS = [
  "#FF7BAC",
  "#62D9FE",
  "#A3FFA3",
  "#4FD1C5",
  "#FDE047",
  "#7C3AED",
];

export const TransactionBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ChartCard>
        <BarChart
          width={400}
          height={260}
          data={data}
          margin={{
            right: 30,
            left: 20,
          }}
        >
          <XAxis dataKey="month" scale="point" />
          <Tooltip />
          <Bar dataKey="transactions" fill="hsl(var(--primary))" barSize={60} />
        </BarChart>
      </ChartCard>
    </ResponsiveContainer>
  );
};
