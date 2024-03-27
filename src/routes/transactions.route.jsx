import { CategoriesList } from "@/components/categories/categories-list";
import { TransactionsList } from "@/components/transactions/transactions-list";
import { filterByCategory } from "@/lib/filter-by-category";
import { useLocation } from "react-router-dom";

export const TransactionsPage = () => {
	const location = useLocation();

	const searchParams = new URLSearchParams(location.search);

	const categoryQuery = searchParams.get("category");

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
				items={filterByCategory(
					[
						{
							_id: "1",
							userId: "user1",
							description: "Transaction 1",
							paymentType: "Credit Card",
							category: "EXPENSE",
							amount: 50.0,
							location: "Location 1",
							date: "2024-03-25",
							createdAt: "2024-03-25T12:00:00Z",
							updatedAt: "2024-03-25T12:00:00Z",
						},
						{
							_id: "2",
							userId: "user1",
							description: "Transaction 2",
							paymentType: "Cash",
							category: "INVESTMENT",
							amount: 30.0,
							location: "Location 2",
							date: "2024-03-24",
							createdAt: "2024-03-24T12:00:00Z",
							updatedAt: "2024-03-24T12:00:00Z",
						},
						{
							_id: "3",
							userId: "user2",
							description: "Transaction 3",
							paymentType: "Debit Card",
							category: "INCOME",
							amount: 100.0,
							location: "Location 3",
							date: "2024-03-23",
							createdAt: "2024-03-23T12:00:00Z",
							updatedAt: "2024-03-23T12:00:00Z",
						},
						{
							_id: "4",
							userId: "user2",
							description: "Transaction 4",
							paymentType: "Credit Card",
							category: "INVESTMENT",
							amount: 200.0,
							location: "Location 4",
							date: "2024-03-22",
							createdAt: "2024-03-22T12:00:00Z",
							updatedAt: "2024-03-22T12:00:00Z",
						},
						{
							_id: "5",
							userId: "user3",
							description: "Transaction 5",
							paymentType: "Cash",
							category: "EXPENSE",
							amount: 70.0,
							location: "Location 5",
							date: "2024-03-21",
							createdAt: "2024-03-21T12:00:00Z",
							updatedAt: "2024-03-21T12:00:00Z",
						},
					],
					categoryQuery,
				)}
			/>
		</main>
	);
};
