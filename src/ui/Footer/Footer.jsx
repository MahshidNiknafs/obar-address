import "./Footer.css";
import Button from "../Button/Button";

function Footer({ onSubmit }) {
	return (
		<footer className="layout-footer">
			<Button onSubmit={onSubmit} />
		</footer>
	);
}

export default Footer;

/////////////////////////////////////////////
// import Button from "../Button/Button";
// import "./Footer.css";

// function Footer() {
// 	return (
// 		<footer className="layout-footer">
// 			<Button />
// 		</footer>
// 	);
// }
// export default Footer;
