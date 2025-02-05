import { NavLink } from "react-router-dom";
import "./Breadcrumb.css";

function Breadcrumb() {
	return (
		<nav className="breadcrumb">
			<NavLink
				to="/create-address"
				className={({ isActive }) => (isActive ? "link active" : "link")}
			>
				ثبت آدرس
			</NavLink>
			<NavLink
				to="/addresses"
				className={({ isActive }) => (isActive ? "link active" : "link")}
			>
				مشاهده آدرس ها
			</NavLink>
		</nav>
	);
}

export default Breadcrumb;
