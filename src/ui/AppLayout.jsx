import { Outlet } from "react-router";

function AppLayout() {
	return (
		<>
			<Outlet />
		</>

		// 		<>
		// <Headerr />
		// 			<Outlet />
		// 		<Footer />
		//     </>
	);
}

export default AppLayout;
