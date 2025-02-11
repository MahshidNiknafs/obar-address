import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { FormProvider } from "./contexts/FormContext";
import "./App.css";

import AppLayout from "./ui/AppLayout/AppLayout";
import CreateAddressPage from "./pages/CreateAddressPage";
import AddressesPage from "./pages/AddressesPage";
import LocationPage from "./pages/LocationPage";

const routes = [
	{ path: "/create-address", element: <CreateAddressPage /> },
	{ path: "/addresses", element: <AddressesPage /> },
	{ path: "/create-address/set-location", element: <LocationPage /> },
];

function App() {
	return (
		<BrowserRouter>
			<FormProvider>
				<Routes>
					<Route element={<AppLayout />}>
						<Route index element={<Navigate replace to="/create-address" />} />
						{routes.map((route) => (
							<Route
								key={route.path}
								path={route.path}
								element={route.element}
							/>
						))}

						<Route path="/create-address" element={<CreateAddressPage />} />
					</Route>
				</Routes>
			</FormProvider>
		</BrowserRouter>
	);
}

export default App;
