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

	return (
		<footer className="layout-footer">
			{/* <Button onClick={handleClick} loading={loading} disabled={disabled} /> */}
			<Button onClick={handleClick} />
		</footer>
	);
}

export default Footer;

////////////////////////////////////
// // the original

// import Button from "../Button/Button";
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

// 	const loading = false;
// 	const disabled = false;

// 	return (
// 		<footer className="layout-footer">
// 			<Button onClick={handleClick} loading={loading} disabled={disabled} />
// 		</footer>
// 	);
// }

// export default Footer;
