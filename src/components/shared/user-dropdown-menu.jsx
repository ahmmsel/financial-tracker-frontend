import { ChevronsUpDown, LogOut, Moon, Settings, Sun } from "lucide-react";
import { Link } from "react-router-dom";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "@/components/providers/theme-provider";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useMutation } from "@apollo/client";
import { LOGOUT } from "@/graphql/mutations/user.mutation";
import { GET_AUTHENTICATED_USER } from "@/graphql/queries/user.query";

export const UserDropDownMenu = () => {
	const { setTheme } = useTheme();

	const [logout] = useMutation(LOGOUT, {
		refetchQueries: [GET_AUTHENTICATED_USER],
	});

	const handleLogout = async () => {
		try {
			await logout();
		} catch {
			toast({
				title: "Faild to logout",
				variant: "destructive",
			});
		}
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" className="gap-x-2 p-2 pl-0 rounded-full">
					<Avatar className="w-10 h-10 object-cover">
						<AvatarImage
							src="https://avatar.iran.liara.run/public"
							alt="User"
						/>
						<AvatarFallback>username</AvatarFallback>
					</Avatar>
					<span>username</span>
					<ChevronsUpDown className="w-3 h-3 text-muted-foreground" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem asChild>
					<Link to="/settings">
						<Settings className="mr-2 w-4 h-4" />
						Settings
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem role="button" onClick={() => setTheme("light")}>
					<Sun className="mr-2 w-4 h-4" />
					Light
				</DropdownMenuItem>
				<DropdownMenuItem role="button" onClick={() => setTheme("dark")}>
					<Moon className="mr-2 w-4 h-4" />
					Dark
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem role="button" onClick={handleLogout}>
					<LogOut className="mr-2 w-4 h-4" />
					Logout
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
