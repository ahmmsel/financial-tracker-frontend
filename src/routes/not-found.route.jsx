import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
	return (
		<main className="centerd gap-2">
			<p className="text-2xl font-medium">Sorry, this page is not found</p>
			<Button
				variant="link"
				className="text-primary text-xl font-normal p-0"
				asChild
			>
				<Link to="/">Back to Home Page</Link>
			</Button>
		</main>
	);
};
