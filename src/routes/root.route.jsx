import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "./login.route";
import { SignupPage } from "./signup.route";
import { NotFoundPage } from "./not-found.route";
import { DashboardPage } from "./dashboard.route";
import { TransactionsPage } from "./transactions.route";
import { Layout } from "@/layout";
import { useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "@/graphql/queries/user.query";
import { AuthRoute } from "./auth.route";

export const Root = () => {
	const { loading, data } = useQuery(GET_AUTHENTICATED_USER);

	if (loading) <p className="centerd text-2xl font-extrabold">Loading...</p>;

	return (
		<Routes>
			<Route element={<AuthRoute authenticated={data?.authUser} />}>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignupPage />} />
			</Route>
			<Route element={<Layout authenticated={data?.authUser} />}>
				<Route path="/dashboard" element={<DashboardPage />} />
				<Route path="/transactions" element={<TransactionsPage />} />
			</Route>
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
};
