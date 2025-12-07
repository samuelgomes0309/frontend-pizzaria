import { useState } from "react";
import SignUp from "./signup";
import SignIn from "./signin";

export interface LoginProps {
	setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Login() {
	const [isLogin, setIsLogin] = useState<boolean>(false);
	return isLogin ? (
		<SignIn setIsLogin={setIsLogin} />
	) : (
		<SignUp setIsLogin={setIsLogin} />
	);
}
