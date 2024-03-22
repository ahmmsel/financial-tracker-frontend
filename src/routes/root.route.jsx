import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./login.route";

export const Root = () => {
	return (
		<Routes>
			<Route path="/" element={<p>home</p>} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/signup" element={<p>sign up</p>} />
		</Routes>
	);
};
