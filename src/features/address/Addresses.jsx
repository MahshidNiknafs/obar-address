import useAddresses from "./useAddresses";
import "./Addresses.css";

function Addresses() {
	const { addresses, loading, error } = useAddresses();

	if (loading) return <p>در حال دریافت اطلاعات...</p>;
	if (error) return <p>{error}</p>;

	return (
		<div className="addresses-container">
			{addresses.map((address) => (
				<div key={address.id} className="address-card">
					<div className="info-item">
						<span className="info-label">نام</span>
						<span className="info-value">{address.firstName}</span>
					</div>
					<div className="info-item">
						<span className="info-label">نام خانوادگی</span>
						<span className="info-value">{address.lastName}</span>
					</div>
					<div className="info-item">
						<span className="info-label">شماره همراه</span>
						<span className="info-value">{address.mobileNumber}</span>
					</div>
					<div className="info-item">
						<span className="info-label">شماره ثابت</span>
						<span className="info-value">
							{address.landlineNumber || "ندارد"}
						</span>
					</div>
					<div className="info-item address">
						<span className="info-label">آدرس</span>
						<span className="info-value">{address.address}</span>
					</div>
					<div className="info-item">
						<span className="info-label">جنسیت</span>
						<span className="info-value">
							{address.gender === "مرد" ? "مرد" : "زن"}
						</span>
					</div>
				</div>
			))}
		</div>
	);
}

export default Addresses;
