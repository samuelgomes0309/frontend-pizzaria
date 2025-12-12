import { createContext } from "react";
import type { CategoryFormData } from "../../pages/category/schema/schema";
import type { CategoryProps, CreateProductProps } from "./AppProvider";

interface ContextData {
	createCategory: (data: CategoryFormData) => Promise<boolean>;
	listCategory: CategoryProps[];
	handleListCategories: () => Promise<void>;
	createProduct: (data: CreateProductProps) => Promise<boolean>;
}

export const AppContext = createContext({} as ContextData);
