import { Outlet } from "react-router";
import Header from "../Header/Header";

import "./AppLayout.css";

function AppLayout() {
	return (
		<div className="layout">
			<Header />

			<main className="layout-main">
				<Outlet />
			</main>
			<footer className="layout-footer">Footer Content</footer>
		</div>
	);
}

export default AppLayout;
