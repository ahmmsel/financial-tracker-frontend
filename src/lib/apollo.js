import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
	uri: "http://localhost:5000",
	cache: new InMemoryCache(),
	credentials: "include",
});
