import { useCallback, useState, type ReactNode } from "react";
import { AppContext } from "./AppContext";
import type { CategoryFormData } from "../../pages/category/schema/schema";
import { toast } from "react-toastify";
import { api } from "../../services/api/axios";
import type { ProductFormData } from "../../pages/product/schema/schema";

interface ContextProvider {
	children: ReactNode;
}

export interface CategoryProps {
	id: string;
	name: string;
}

export interface CreateProductProps extends ProductFormData {
	file: File;
}

export interface ProductProps {
	banner: string;
	id: string;
	name: string;
	price: number;
	description: string;
}

export function AppProvider({ children }: ContextProvider) {
	const [listCategory, setListCategory] = useState<CategoryProps[]>([]);
	const [listProducts, setProducts] = useState<ProductProps[]>([]);
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
	const handleListCategories = useCallback(async () => {
		try {
			const response = await api.get("/categories");
			setListCategory(response.data);
		} catch (error) {
			console.log(error);
		}
	}, []);
	async function createProduct(data: CreateProductProps) {
		try {
			if (!data) return false;
			// Necessario criar o formdata devido ser multipart/form-data
			const formData = new FormData();
			formData.append("file", data.file); // arquivo
			formData.append("name", data.name); // texto
			formData.append("price", data.price);
			formData.append("description", data.description);
			formData.append("category_id", data.category);
			await api.post("/add/product", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			toast.success("Produto cadastrado com sucesso.");
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
	const handleListProducts = useCallback(async () => {
		try {
			const response = await api.get("/products");
			setProducts(response.data);
		} catch (error) {
			console.log(error);
		}
	}, []);
	return (
		<AppContext.Provider
			value={{
				createCategory,
				listCategory,
				handleListCategories,
				createProduct,
				handleListProducts,
				listProducts,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}
