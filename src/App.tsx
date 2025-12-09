import { createBrowserRouter } from "react-router";
import Dashboard from "./pages/dashboard";
import Layout from "./components/layout";
import Login from "./pages/login";
import Private from "./routes/Private";

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
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
]);

export { router };
