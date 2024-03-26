import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

export const NavigationItem = ({ to, label }) => {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				cn(
					"font-normal text-base hover:text-primary hover:underline transition-all duration-300",
					isActive && "text-primary",
				)
			}
		>
			{label}
		</NavLink>
	);
};
