import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import "./App.css";

import AppLayout from "./ui/AppLayout/AppLayout";
import CreateAddressPage from "./pages/CreateAddressPage";
import AddressesPage from "./pages/AddressesPage";

const routes = [
	{ path: "/create-address", element: <CreateAddressPage /> },
	{ path: "/addresses", element: <AddressesPage /> },
];

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AppLayout />}>
					<Route index element={<Navigate replace to="/create-address" />} />
					{routes.map((route) => (
						<Route key={route.path} path={route.path} element={route.element} />
					))}

					<Route path="/create-address" element={<CreateAddressPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
