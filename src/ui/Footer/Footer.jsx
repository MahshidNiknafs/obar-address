import Button from "../Button/Button";
import { useFormContext } from "../../contexts/FormContext";
import "./Footer.css";

function Footer() {
	const { submitAction, isSubmitting } = useFormContext();

	const handleClick = () => {
		if (submitAction) {
			submitAction();
		} else {
			console.warn("No submit action registered.");
		}
	};

	return (
		<footer className="layout-footer">
			<Button onClick={handleClick} loading={isSubmitting} />
		</footer>
	);
}

export default Footer;
