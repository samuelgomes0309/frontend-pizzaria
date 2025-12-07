import { createBrowserRouter } from "react-router";
import Dashboard from "./pages/dashboard";
import Layout from "./components/layout";
import Login from "./pages/login";

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Dashboard />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
]);

export { router };
