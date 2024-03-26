import React from "react";
import {
	PieChart,
	Pie,
	Cell,
	Legend,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { ChartCard } from "./chart-card";

const data = [
	{ name: "Income", value: 4000 },
	{ name: "Expense", value: 2000 },
	{ name: "Investment", value: 3000 },
];

const COLORS = ["#E11D48", "#2B6CB0", "#047857"];

export const TransactionPieChart = () => (
	<ResponsiveContainer width="100%" height="100%">
		<ChartCard>
			<PieChart width={400} height={400}>
				<Pie
					data={data}
					cx={200}
					cy={200}
					innerRadius={60}
					outerRadius={80}
					fill="#8884d8"
					paddingAngle={5}
					dataKey="value"
					stroke="none"
					label
				>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
				<Tooltip />
				<Legend />
			</PieChart>
		</ChartCard>
	</ResponsiveContainer>
);
