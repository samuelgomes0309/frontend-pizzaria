import { createContext } from "react";
import type { CategoryFormData } from "../../pages/category/schema/schema";

interface ContextData {
	createCategory: (data: CategoryFormData) => Promise<boolean>;
}

export const AppContext = createContext({} as ContextData);
