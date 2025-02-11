import Button from "../Button/Button";
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

	const loading = false;
	const disabled = false;

	return (
		<footer className="layout-footer">
			<Button onClick={handleClick} loading={loading} disabled={disabled} />
		</footer>
	);
}

export default Footer;

/////////////////////////////////////
// original before btn

// // import Button from "../Button/Button";
// import { useFormContext } from "../../contexts/FormContext";

// import "./Footer.css";

// function Footer() {
// 	const { submitAction } = useFormContext();

// 	const handleClick = () => {
// 		if (submitAction) {
// 			submitAction();
// 		} else {
// 			console.warn("No submit action registered.");
// 		}
// 	};

// 	return (
// 		<footer className="layout-footer">
// 			<button className="submit-button" onClick={handleClick}>
// 				تایید
// 			</button>
// 		</footer>
// 	);
// }
// export default Footer;
