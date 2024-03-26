import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { SignupSchema } from "@/schemas/signup.schema";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/shared/password-input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export const SignupPage = () => {
	const form = useForm({
		resolver: zodResolver(SignupSchema),
	});

	return (
		<main className="centerd">
			<Card>
				<CardHeader>
					<CardTitle>Sign Up</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-4">
					<Form {...form}>
						<form className="space-y-3">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Name</FormLabel>
											<FormControl>
												<Input {...field} placeholder="e.g. jhonedoe" />
											</FormControl>
										</FormItem>
									)}
								/>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
								<FormField
									control={form.control}
									name="password"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Password</FormLabel>
											<FormControl>
												<PasswordInput {...field} placeholder="*******" />
											</FormControl>
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="confirmPassword"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Confirm Password</FormLabel>
											<FormControl>
												<PasswordInput {...field} placeholder="*******" />
											</FormControl>
										</FormItem>
									)}
								/>
							</div>
							<FormField
								control={form.control}
								name="gender"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Gender</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Select your geneder..." />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="MALE">Male</SelectItem>
												<SelectItem value="FEMALE">Female</SelectItem>
											</SelectContent>
										</Select>
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
						Already have an account?{" "}
						<Link to="/login" className="text-primary font-bold underline">
							Login
						</Link>
					</p>
				</CardContent>
			</Card>
		</main>
	);
};
