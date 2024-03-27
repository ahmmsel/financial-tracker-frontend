import { Navigate, Outlet } from "react-router-dom";

export const AuthRoute = ({ authenticated }) => {
	return authenticated ? <Navigate to="/dashboard" /> : <Outlet />;
};
