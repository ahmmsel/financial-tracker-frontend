export const ReportCard = ({ label, total, icon: Icon }) => {
	return (
		<div className="border rounded-lg p-4 bg-transparent space-y-4">
			<div className="flex items-center justify-between">
				<p className="text-md font-semibold">{label}</p>
				<Icon className="w-5 h-5 text-muted-foreground" />
			</div>
			<div className="text-2xl font-bold">{total}</div>
		</div>
	);
};
