import logoImage from "../../../assets/images/logo.png";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import "./Header.css";

function Header() {
	return (
		<header className="layout-header">
			<img src={logoImage} alt="logo" />
			<Breadcrumb />
		</header>
	);
}

export default Header;
