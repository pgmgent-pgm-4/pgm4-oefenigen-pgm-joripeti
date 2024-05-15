
import "./App.css";
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import Root from "./layout/Root";
import { HomePage, LoginPage } from "./pages";
import { UserProvider } from "./context/UserContext";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Root />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
			</Route>
		)
	);
	return (
		<UserProvider>
			<RouterProvider router={router} />
		</UserProvider>
	);
}

export default App;
