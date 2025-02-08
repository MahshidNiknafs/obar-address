import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import "./AppLayout.css";

function AppLayout() {
	return (
		<div className="layout">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default AppLayout;
