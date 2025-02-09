import { useState } from "react";
import "./Button.css";

function Button({ onSubmit }) {
	const [loading, setLoading] = useState(false);

	const handleClick = async () => {
		setLoading(true);
		await onSubmit();
		setLoading(false);
	};

	return (
		<button className="submit" onClick={handleClick} disabled={loading}>
			{loading ? <span className="dots"></span> : "ثبت و ادامه"}
		</button>
	);
}

export default Button;
