// import Header from "../Header/Header";
// import Main from "../Main/Main";
// import Footer from "../Footer/Footer";

// import "./AppLayout.css";
// import Button from "../Button/Button";
// import { Outlet } from "react-router";

// function AppLayout() {
// 	return (
// 		<div className="layout">
// 			<Header />
// 			<Main>
// 				<Outlet />
// 			</Main>
// 			<Footer>
// 				<Button />
// 			</Footer>
// 		</div>
// 	);
// }

// export default AppLayout;
////////////////////////////////////////////////////
// // the original

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
