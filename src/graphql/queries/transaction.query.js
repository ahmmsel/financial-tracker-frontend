import { gql } from "@apollo/client";

export const GET_TRANSACTIONS = gql`
	query Transactions {
		transactions {
			_id
			description
			paymentType
			category
			amount
			location
			date
		}
	}
`;
