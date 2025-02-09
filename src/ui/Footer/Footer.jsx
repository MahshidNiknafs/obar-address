import { useFormContext } from "../../contexts/FormContext";
import Button from "../Button/Button";
import "./Footer.css";

function Footer() {
	const { handleSubmit } = useFormContext();

	const handleClick = () => {
		handleSubmit();
	};

	return (
		<footer className="layout-footer">
			{/* <Button onClick={handleClick}>ثبت و ادامه</Button> */}

			{children}
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
