import "./Button.css";

function Button({ onClick, loading, disabled }) {
	return (
		<button className="submit" onClick={onClick} disabled={loading || disabled}>
			{loading ? <span className="dots"></span> : "ثبت و ادامه"}
		</button>
	);
}

export default Button;
