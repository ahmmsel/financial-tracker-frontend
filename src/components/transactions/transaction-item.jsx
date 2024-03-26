import { format } from "date-fns";
import { Calendar, CreditCard, Landmark, Map, Wallet } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TransactionField } from "./transaction-field";

const colorsMap = {
	income: "from-emerald-800 to-emerald-600",
	expense: "from-pink-800 to-pink-600",
	investment: "from-blue-800 to-blue-600",
};

export const TransactionItem = ({
	id,
	category,
	description,
	paymentType,
	amount,
	location,
	date,
}) => {
	const formattedDate = format(date, "dd MMMM yyyy");

	return (
		<Card
			className={cn(
				"bg-gradient-to-b capitalize text-white",
				colorsMap[category],
			)}
		>
			<CardHeader>
				<CardTitle className="capitalize">{description}</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<TransactionField
					label="Account"
					value={category.toLowerCase()}
					icon={Landmark}
				/>
				<TransactionField
					label="Payment"
					value={paymentType}
					icon={CreditCard}
				/>
				<TransactionField label="Amount" value={amount} icon={Wallet} />
				<TransactionField label="Location" value={location} icon={Map} />
				<TransactionField label="Date" value={formattedDate} icon={Calendar} />
			</CardContent>
		</Card>
	);
};
