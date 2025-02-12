import "./Button.css";

function Button({ onClick, loading }) {
	return (
		<button className="submit" onClick={onClick} disabled={loading}>
			{loading ? (
				<span className="dots">
					<span></span>
					<span></span>
					<span></span>
				</span>
			) : (
				"ثبت و ادامه"
			)}
		</button>
	);
}

export default Button;
