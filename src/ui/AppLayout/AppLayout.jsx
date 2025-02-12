import { useLocation } from "react-router";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import "./AppLayout.css";

function AppLayout() {
	const location = useLocation();
	const showFooter = location.pathname.includes("create-address");

	return (
		<div className="layout">
			<Header />
			<Main />
			{showFooter && <Footer />}
		</div>
	);
}

export default AppLayout;
