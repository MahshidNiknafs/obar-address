import "./Card.css";

function Card({ children, cardTitle }) {
	return (
		<div className="card-container">
			<div className="card-title">{cardTitle}</div>
			{children}
		</div>
	);
}

export default Card;
