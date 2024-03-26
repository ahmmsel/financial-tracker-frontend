import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./login.route";
import { SignupPage } from "./signup.route";
import { NotFoundPage } from "./not-found.route";
import { DashboardPage } from "./dashboard.route";
import { TransactionsPage } from "./transactions.route";
import { Layout } from "@/layout";

export const Root = () => {
	return (
		<Routes>
			<Route path="/" element={<p>home</p>} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/signup" element={<SignupPage />} />
			<Route pa element={<Layout />}>
				<Route path="/dashboard" element={<DashboardPage />} />
				<Route path="/transactions" element={<TransactionsPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
};
