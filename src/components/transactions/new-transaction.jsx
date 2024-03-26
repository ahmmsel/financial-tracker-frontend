import { CalendarIcon, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CreateTransaction } from "@/schemas/create-transaction.schema";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

export const NewTransaction = () => {
	const form = useForm({
		resolver: zodResolver(CreateTransaction),
	});

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button size="sm" className="gap-x-2">
					<Plus className="w-4 h-4" />
					<span className="hidden md:block">New Transaction</span>
				</Button>
			</DialogTrigger>
			<DialogContent className="space-y-6 overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Add New Transaction</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form className="space-y-6">
						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Description</FormLabel>
									<FormControl>
										<Input {...field} placeholder="e.g. Salary" />
									</FormControl>
								</FormItem>
							)}
						/>
						<div className="grid grid-cols-3 gap-2">
							<FormField
								control={form.control}
								name="paymentType"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Payment Type</FormLabel>
										<FormControl>
											<Input {...field} placeholder="e.g. Credit Card" />
										</FormControl>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="category"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Category</FormLabel>
										<Select value={field.value} onValueChange={field.onChange}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Select Category" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="INCOME">💰 Income</SelectItem>
												<SelectItem value="EXPENSE">💸 Expense</SelectItem>
												<SelectItem value="INVESTMENT">
													📈 Investment
												</SelectItem>
											</SelectContent>
										</Select>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="amount"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Amount</FormLabel>
										<FormControl>
											<Input {...field} type="number" placeholder="e.g. 100" />
										</FormControl>
									</FormItem>
								)}
							/>
						</div>
						<div className="grid grid-cols-2 gap-2">
							<FormField
								control={form.control}
								name="location"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Location</FormLabel>
										<FormControl>
											<Input {...field} placeholder="e.g. Freelance" />
										</FormControl>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="date"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Transaction Date</FormLabel>
										<Popover>
											<PopoverTrigger asChild>
												<FormControl>
													<Button
														variant={"outline"}
														className={cn(
															"w-full pl-3 text-left font-normal",
															!field.value && "text-muted-foreground",
														)}
													>
														{field.value ? (
															format(field.value, "PPP")
														) : (
															<span>Pick a date</span>
														)}
														<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
													</Button>
												</FormControl>
											</PopoverTrigger>
											<PopoverContent
												side="center"
												className="w-auto p-0"
												align="start"
											>
												<Calendar
													mode="single"
													selected={field.value}
													onSelect={field.onChange}
													disabled={(date) =>
														date > new Date() || date < new Date("1900-01-01")
													}
													initialFocus
												/>
											</PopoverContent>
										</Popover>
									</FormItem>
								)}
							/>
						</div>
						<Button
							type="submit"
							className="w-full"
							disabled={!form.formState.isValid}
						>
							Save
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};
