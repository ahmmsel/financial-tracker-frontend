import * as z from "zod";

export const CreateTransaction = z.object({
	description: z.string(),
	paymentType: z.string(),
	category: z.enum(["INCOME", "EXPENSE", "INVESTMENT"]),
	amount: z.string(),
	location: z.string().optional(),
	date: z.date(),
});
