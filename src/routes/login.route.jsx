import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormItem,
	FormField,
	FormLabel,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { LoginSchema } from "@/schemas/login.schema";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/shared/password-input";
import { Button } from "@/components/ui/button";

export const LoginPage = () => {
	const form = useForm({
		resolver: zodResolver(LoginSchema),
	});

	return (
		<main className="centerd">
			<Card>
				<CardHeader>
					<CardTitle>Login</CardTitle>
					<CardDescription>Welcome back!</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-4">
					<Form {...form}>
						<form className="space-y-3">
							<FormField
								control={form.control}
								name="username"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Username</FormLabel>
										<FormControl>
											<Input {...field} placeholder="e.g. jhonedoe" />
										</FormControl>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<PasswordInput {...field} placeholder="********" />
										</FormControl>
									</FormItem>
								)}
							/>
							<Button type="submit" className="w-full">
								Submit
							</Button>
						</form>
					</Form>
					<Separator />
					<p className="text-center">
						Do not have an accont?{" "}
						<Link to="/signup" className="text-primary font-bold underline">
							Sign up
						</Link>
					</p>
				</CardContent>
			</Card>
		</main>
	);
};
