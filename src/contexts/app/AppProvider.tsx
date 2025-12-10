import type { ReactNode } from "react";
import { AppContext } from "./AppContext";
import type { CategoryFormData } from "../../pages/category/schema/schema";
import { toast } from "react-toastify";
import { api } from "../../services/api/axios";

interface ContextProvider {
	children: ReactNode;
}

export function AppProvider({ children }: ContextProvider) {
	async function createCategory(data: CategoryFormData) {
		try {
			await api.post("/add/category", data);
			toast.success("Categoria cadastrada com sucesso");
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
	return (
		<AppContext.Provider value={{ createCategory }}>
			{children}
		</AppContext.Provider>
	);
}
