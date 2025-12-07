import { createContext } from "react";
import type { SigninData, SignupData } from "../../pages/login/schema/schema";

interface ContextData {
	user: UserProps | null;
	handleSignUp: (data: SignupData) => Promise<void>;
	handleSignIn: (data: SigninData) => Promise<void>;
}

export interface UserProps {
	name: string;
	email: string;
}

export const AuthContext = createContext({} as ContextData);
