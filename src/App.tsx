import { createBrowserRouter } from "react-router";
import Dashboard from "./pages/dashboard";
import Layout from "./components/layout";
import Login from "./pages/login";
import Private from "./routes/Private";
import Category from "./pages/category";
import Product from "./pages/product";

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: (
					<Private>
						<Dashboard />
					</Private>
				),
			},
			{
				path: "/category",
				element: (
					<Private>
						<Category />
					</Private>
				),
			},
			{
				path: "/new-product",
				element: (
					<Private>
						<Product />
					</Private>
				),
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
]);

export { router };
