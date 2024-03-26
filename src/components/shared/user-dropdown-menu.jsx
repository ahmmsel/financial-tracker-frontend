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

export const UserDropDownMenu = () => {
	const { setTheme } = useTheme();

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
				<DropdownMenuItem onClick={() => setTheme("light")}>
					<Sun className="mr-2 w-4 h-4" />
					Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>
					<Moon className="mr-2 w-4 h-4" />
					Dark
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<LogOut className="mr-2 w-4 h-4" />
					Logout
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
