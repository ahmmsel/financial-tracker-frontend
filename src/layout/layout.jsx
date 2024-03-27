import { Outlet, Navigate } from "react-router-dom";

import { Navigation } from "./navigation";

export const Layout = ({ authenticated }) => {
	if (!authenticated) {
		return <Navigate to="/login" />;
	}

	return (
		<>
			<Navigation />
			<Outlet />
		</>
	);
};
