import { Outlet } from "react-router";
import Header from "../Header/Header";

import "./AppLayout.css";
import Footer from "../Footer/Footer";

function AppLayout() {
	return (
		<div className="layout">
			<Header />

			<main className="layout-main">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default AppLayout;
