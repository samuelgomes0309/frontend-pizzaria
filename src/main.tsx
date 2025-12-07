import { createRoot } from "react-dom/client";
import { router } from "./App.tsx";
import { RouterProvider } from "react-router";
import "./index.css";
import { AuthContextProvider } from "./contexts/auth/AuthProvider.tsx";

createRoot(document.getElementById("root")!).render(
	<AuthContextProvider>
		<RouterProvider router={router} />
	</AuthContextProvider>
);
