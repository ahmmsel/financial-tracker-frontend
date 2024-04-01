import { format } from "date-fns";
import {
	Calendar,
	CreditCard,
	Landmark,
	Map,
	MoreHorizontal,
	Pencil,
	Trash,
	Wallet,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TransactionField } from "./transaction-field";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { NewTransaction } from "./new-transaction";
import { EditTransaction } from "./edit-transaction";
import { useForm } from "react-hook-form";
import { UpdateTransaction } from "@/schemas/update-transaction.schema";
import { GET_TRANSACTIONS } from "@/graphql/queries/transaction.query";
import { UPDATE_TRANSACTION } from "@/graphql/mutations/transaction.mutation";
import { useMutation } from "@apollo/client";
import { TransactionForm } from "./trasnaction-form";
import { toast } from "../ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";

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
	const [updateTransaction] = useMutation(UPDATE_TRANSACTION, {
		refetchQueries: [GET_TRANSACTIONS],
	});

	const form = useForm({
		resolver: zodResolver(UpdateTransaction),
		defaultValues: {
			category,
			description,
			paymentType,
			amount,
			location,
			date: new Date(parseInt(date)),
		},
	});

	const onSubmit = async (values) => {
		try {
			await updateTransaction({
				variables: {
					input: {
						...values,
						amount: Number(values.amount),
					},
				},
			});

			form.reset();
		} catch {
			toast({
				title: "Something went wrong!",
				variant: "destructive",
			});
		}
	};

	const formattedDate = format(new Date(parseInt(date)), "dd MMMM yyyy");

	return (
		<Card
			className={cn(
				"bg-gradient-to-b capitalize text-white",
				colorsMap[category],
			)}
		>
			<CardHeader className="flex flex-row justify-between items-center">
				<CardTitle className="capitalize">{description}</CardTitle>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<MoreHorizontal className="w-5 h-5" role="button" />
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<TransactionForm form={form} onSubmit={onSubmit}>
							<DropdownMenuItem role="button">
								<Pencil className="w-4 h-4 mr-2" />
								Edit
							</DropdownMenuItem>
						</TransactionForm>
						<DropdownMenuItem role="button">
							<Trash className="w-4 h-4 mr-2" />
							Delete
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
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
				<TransactionField label="Amount" value={`$${amount}`} icon={Wallet} />
				<TransactionField label="Location" value={location} icon={Map} />
				<TransactionField label="Date" value={formattedDate} icon={Calendar} />
			</CardContent>
		</Card>
	);
};
