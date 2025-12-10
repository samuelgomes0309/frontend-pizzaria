import { createBrowserRouter } from "react-router";
import Dashboard from "./pages/dashboard";
import Layout from "./components/layout";
import Login from "./pages/login";
import Private from "./routes/Private";
import Category from "./pages/category";
import Product from "./pages/product";
import { AppProvider } from "./contexts/app/AppProvider";

const router = createBrowserRouter([
	{
		element: (
			<AppProvider>
				<Layout />
			</AppProvider>
		),
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
