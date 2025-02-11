// import { Outlet } from "react-router";
// import "./Main.css";

// function Main({ children }) {
// 	return (
// 		<main className="layout-main">
// 			{/* <Outlet /> */}

// 			{children}
// 		</main>
// 	);
// }

// export default Main;

////////////////////////////////////
// // the original

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
