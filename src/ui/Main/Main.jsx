import { Outlet } from "react-router";
import "./Main.css";

function Main() {
	return (
		<main className="layout-main">
			<Outlet />
		</main>
	);
}

export default Main;
