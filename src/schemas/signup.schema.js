import * as z from "zod";

export const SignupSchema = z
	.object({
		username: z.string(),
		name: z.string(),
		password: z.string(),
		confirmPassword: z.string(),
		gender: z.enum(["MALE", "FEMALE"]),
	})
	.refine(
		({ password, confirmPassword }) => {
			if (password !== confirmPassword) {
				return false;
			}

			return true;
		},
		{
			message: "Passwords doesn't match!",
		},
	);
