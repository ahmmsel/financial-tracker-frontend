import { TransactionItem } from "./transaction-item";

export const TransactionsList = ({ items = [] }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{items.map((item) => (
				<TransactionItem
					key={item._id}
					id={item._id}
					category={item.category.toLowerCase()}
					date={item.date}
					description={item.description}
					location={item.location}
					paymentType={item.paymentType}
					amount={item.amount}
				/>
			))}
		</div>
	);
};
