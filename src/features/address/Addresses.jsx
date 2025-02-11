import "./Addresses.css";

const addressData = [
	{
		id: 1,
		firstName: "محمدرضا",
		lastName: "رضایی",
		mobileNumber: "09121234567",
		landlineNumber: "02112345678",
		address: "تهران، خیابان آزادی، پلاک ۱۰",
		gender: "مرد",
	},
	{
		id: 2,
		firstName: "زهرا",
		lastName: "احمدی",
		mobileNumber: "09131234567",
		landlineNumber: "02198765432",
		address: "مشهد، خیابان امام رضا، پلاک ۲۰",
		gender: "زن",
	},
];

function Addresses() {
	return (
		<div className="addresses-container">
			{addressData.map((address) => (
				<div key={address.id} className="address-card">
					<h2 className="address-title">
						{address.firstName} {address.lastName}
					</h2>
					<div className="address-info">
						<div className="info-item">
							<span className="info-label">شماره همراه:</span>
							<span className="info-value">{address.mobileNumber}</span>
						</div>
						<div className="info-item">
							<span className="info-label">شماره ثابت:</span>
							<span className="info-value">
								{address.landlineNumber || "ندارد"}
							</span>
						</div>
						<div className="info-item">
							<span className="info-label">آدرس:</span>
							<span className="info-value">{address.address}</span>
						</div>
						<div className="info-item">
							<span className="info-label">جنسیت:</span>
							<span className="info-value">
								{address.gender === "مرد" ? "مرد" : "زن"}
							</span>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default Addresses;
