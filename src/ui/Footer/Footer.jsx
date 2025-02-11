// import Button from "../Button/Button";
import { useFormContext } from "../../contexts/FormContext";

import "./Footer.css";

function Footer() {
	const { submitAction } = useFormContext();

	const handleClick = () => {
		if (submitAction) {
			submitAction();
		} else {
			console.warn("No submit action registered.");
		}
	};

	return (
		<footer className="layout-footer">
			<button className="submit-button" onClick={handleClick}>
				تایید
			</button>
		</footer>
	);
}
export default Footer;

/////////////////////////////////////////////'
// the original

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
