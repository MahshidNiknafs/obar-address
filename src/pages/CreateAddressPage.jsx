import CreateAddressForm from "../features/address/CreateAddressForm";

import "./CreateAddressPage.css";

function CreateAddressPage() {
	return (
		<div className="card-container">
			<div className="card-title">ثبت آدرس</div>

			<CreateAddressForm />
		</div>
	);
}

export default CreateAddressPage;
