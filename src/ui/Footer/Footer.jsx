import { useNavigate } from "react-router";
import Button from "../Button/Button";
import { useFormContext } from "../../contexts/FormContext";
import "./Footer.css";

function Footer() {
	const { submitAction } = useFormContext();
	const navigate = useNavigate();

	const handleClick = () => {
		if (submitAction) {
			submitAction();
			navigate("/create-address/set-location");
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
