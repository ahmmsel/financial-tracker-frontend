import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@apollo/client";

import { CREATE_TRANSACTION } from "@/graphql/mutations/transaction.mutation";
import { GET_TRANSACTIONS } from "@/graphql/queries/transaction.query";
import { toast } from "@/components/ui/use-toast";
import { TransactionForm } from "./trasnaction-form";
import { CreateTransaction } from "@/schemas/create-transaction.schema";
import { Button } from "@/components/ui/button";

export const NewTransaction = () => {
	const [createTransaction] = useMutation(CREATE_TRANSACTION, {
		refetchQueries: [GET_TRANSACTIONS],
	});

	const form = useForm({
		resolver: zodResolver(CreateTransaction),
	});

	const onSubmit = async (values) => {
		try {
			await createTransaction({
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
		<TransactionForm form={form} onSubmit={onSubmit}>
			<Button size="sm" className="gap-x-2">
				<Plus className="w-4 h-4" />
				<span className="hidden md:block">New Transaction</span>
			</Button>
		</TransactionForm>
	);
};
