import { useQuery } from "@apollo/client";
import { useLocation } from "react-router-dom";

import { CategoriesList } from "@/components/categories/categories-list";
import { TransactionsList } from "@/components/transactions/transactions-list";
import { filterByCategory } from "@/lib/filter-by-category";
import { GET_TRANSACTIONS } from "@/graphql/queries/transaction.query";

export const TransactionsPage = () => {
	const location = useLocation();

	const { data, loading } = useQuery(GET_TRANSACTIONS);

	const searchParams = new URLSearchParams(location.search);

	const categoryQuery = searchParams.get("category");

	if (loading) return <p>loading...</p>;

	console.log(data, "log the data");

	return (
		<main className="wrapper space-y-6 my-4">
			{/*<div className="text-primary-foreground"></div>*/}
			<CategoriesList
				items={[
					{
						id: 0,
						label: "All Transactions",
					},
					{
						id: 1,
						label: "💰 Income",
						query: "income",
					},
					{
						id: 2,
						label: "💸 Expense",
						query: "expense",
					},
					{
						id: 3,
						label: "📈 Investment",
						query: "investment",
					},
				]}
			/>
			<TransactionsList
				items={filterByCategory(data.transactions, categoryQuery)}
			/>
		</main>
	);
};
