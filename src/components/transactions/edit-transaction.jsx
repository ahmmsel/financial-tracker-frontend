import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@apollo/client";

import { UPDATE_TRANSACTION } from "@/graphql/mutations/transaction.mutation";
import { GET_TRANSACTIONS } from "@/graphql/queries/transaction.query";
import { toast } from "@/components/ui/use-toast";
import { TransactionForm } from "./trasnaction-form";
import { UpdateTransaction } from "@/schemas/update-transaction.schema";

export const EditTransaction = ({ defaultValues, children }) => {
	const [updateTransaction] = useMutation(UPDATE_TRANSACTION, {
		refetchQueries: [GET_TRANSACTIONS],
	});

	const form = useForm({
		resolver: zodResolver(UpdateTransaction),
		defaultValues: {
			...defaultValues,
			date: new Date(parseInt(defaultValues.date)),
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

	return (
		<TransactionForm form={form} onSubmit={onSubmit} children={children} />
	);
};
