import { Outlet } from "react-router-dom";

import { Navigation } from "./navigation";

export const Layout = () => {
	return (
		<>
			<Navigation />
			<Outlet />
		</>
	);
};
