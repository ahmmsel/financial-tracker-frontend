export const TransactionField = ({ label, value, icon: Icon }) => {
	return (
		<div className="text-sm flex items-center gap-x-2">
			<Icon className="w-4 h-4" />
			<span className="font-medium capitalize">{label}: </span>
			{value}
		</div>
	);
};
