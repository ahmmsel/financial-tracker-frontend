import { UserDropDownMenu } from "@/components/shared/user-dropdown-menu";
import { NavigationItem } from "./navigation-item";
import { NewTransaction } from "@/components/transactions/new-transaction";

export const Navigation = () => {
	return (
		<nav className="sticky top-0 py-4 z-50 bg-background">
			<div className="wrapper flex items-center justify-between">
				<aside className="flex items-center gap-x-6">
					<UserDropDownMenu />
					<NavigationItem to="/dashboard" label="Overview" />
					<NavigationItem to="/transactions" label="Transactions" />
				</aside>
				<NewTransaction />
			</div>
		</nav>
	);
};
