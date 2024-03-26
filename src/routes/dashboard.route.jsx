import { ArrowUpDown } from "lucide-react";

import { ReportCard } from "@/components/dashboard/report-card";
import { TransactionPieChart } from "@/components/dashboard/transaction-pie-chart";
import { TransactionBarChart } from "@/components/dashboard/transaction-bar-chart";

export const DashboardPage = () => {
	return (
		<main className="my-4 wrapper grid grid-cols-1 lg:grid-cols-2 gap-4">
			<div className="col-span-1 h-fit">
				<TransactionPieChart />
			</div>
			<div className="col-span-1 space-y-2">
				<div className="row-span-1">
					<ReportCard
						label="Total Transactions"
						total={253}
						icon={ArrowUpDown}
					/>
				</div>
				<div className="row-span-3 h-fit">
					<TransactionBarChart />
				</div>
			</div>
		</main>
	);
};
