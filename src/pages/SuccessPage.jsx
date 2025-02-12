import successImage from "../../assets/images/success.png";
import "./SuccessPage.css";

function SuccessPage() {
	return (
		<div className="success-container">
			<img src={successImage} alt="logo" />
			<h1>اطلاعات شما با موفقیت ثبت شد</h1>
			<button className="information-btn">مشاهده اطلاعات</button>
		</div>
	);
}

export default SuccessPage;
