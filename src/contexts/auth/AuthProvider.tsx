import { useState, type ReactNode } from "react";
import { AuthContext, type UserProps } from "./AuthContext";
import type { SigninData, SignupData } from "../../pages/login/schema/schema";

interface ContextProvider {
	children: ReactNode;
}
export function AuthContextProvider({ children }: ContextProvider) {
	const [user, setUser] = useState<UserProps | null>(null);
	async function handleSignUp(data: SignupData) {
		console.log(data);
		setUser(null);
	}
	async function handleSignIn(data: SigninData) {
		console.log(data);
		setUser(null);
	}
	return (
		<AuthContext.Provider value={{ user, handleSignUp, handleSignIn }}>
			{children}
		</AuthContext.Provider>
	);
}
