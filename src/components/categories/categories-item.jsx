import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

export const CategoryItem = ({ label, query }) => {
	const location = useLocation();

	const searchParams = new URLSearchParams(location.search);

	const category = searchParams.get("category");

	return (
		<Button
			variant="outline"
			className={cn(
				"gap-x-2 px-4 py-2 rounded-full",
				category === query && "text-primary border-primary hover:text-primary",
			)}
			asChild
		>
			<Link to={query ? { search: `category=${query}` } : "/transactions"}>
				{label}
			</Link>
		</Button>
	);
};
