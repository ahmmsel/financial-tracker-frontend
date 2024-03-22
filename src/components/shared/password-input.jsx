import { forwardRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = forwardRef((props, ref) => {
	const [showPassowrd, setShowPassword] = useState(false);

	const handleShowPassword = () => setShowPassword((prevState) => !prevState);

	return (
		<div className="relative">
			<Input {...props} ref={ref} type={showPassowrd ? "text" : "password"} />
			{showPassowrd ? (
				<EyeOff
					onClick={handleShowPassword}
					role="button"
					className="w-4 h-4 absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer"
				/>
			) : (
				<Eye
					onClick={handleShowPassword}
					role="button"
					className="w-4 h-4 absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer"
				/>
			)}
		</div>
	);
});

export { PasswordInput };
