import "./CreateAddressForm.css";

function CreateAddressForm() {
	return (
		<form className="form-container">
			<h1 className="form-title">لطفا مشخصات و آدرس خود را وارد کنید</h1>

			<div className="form-inputs">
				<div className="input-container">
					<label className="label">نام</label>
					<input className="input" type="text" placeholder="مثال: محمدرضا" />
				</div>

				<div className="input-container">
					<label className="label">نام خانوادگی</label>
					<input className="input" type="text" placeholder="مثال: رضایی" />
				</div>

				<div className="input-container">
					<label className="label">شماره تلفن همراه</label>
					<input
						className="input"
						type="number"
						placeholder=" مثال: ۰۹۱۲۱۲۳۴۵۶۷"
					/>
				</div>

				<div className="input-container">
					<label className="label">شماره تلفن ثابت (اختیاری)</label>
					<input
						className="input"
						type="number"
						placeholder="مثال: ۰۲۱۱۲۳۴۵۶۷"
					/>
				</div>

				<div className="textarea-container">
					<label className="label">آدرس</label>
					<textarea className="textarea" placeholder="آدرس خود را وارد کنید" />
				</div>
			</div>

			<div className="gender-container">
				<label className="label">جنسیت</label>
				<div className="radio-group">
					<label className="radio-label">
						<input className="radio" type="radio" name="gender" value="male" />
						<span>مرد</span>
					</label>
					<label className="radio-label">
						<input
							className="radio"
							type="radio"
							name="gender"
							value="female"
						/>
						<span>زن</span>
					</label>
				</div>
			</div>
		</form>
	);
}

export default CreateAddressForm;
//////////////////////////////////////////////////////
// function CreateAddressForm() {
// 	return <div style={{ backgroundColor: "red" }}>CreateAddressForm</div>;
// }

// export default CreateAddressForm;

/////////////////////////////
// import "./CreateAddressForm.css";

// function CreateAddressForm() {
// 	return (
// 		<form className="form-container">
// 			<h1 className="form-title">لطفا مشخصات و آدرس خود را وارد کنید</h1>

// 			<div className="form-inputs">
// 				<div className="input-container">
// 					<label className="label">نام</label>
// 					<input className="input" type="text" placeholder="نام" />
// 				</div>

// 				<div className="input-container">
// 					<label className="label">نام خانوادگی</label>
// 					<input className="input" type="text" placeholder="نام خانوادگی" />
// 				</div>

// 				<div className="input-container">
// 					<label className="label">شماره تلفن همراه</label>
// 					<input
// 						className="input"
// 						type="number"
// 						placeholder="شماره تلفن همراه"
// 					/>
// 				</div>

// 				<div className="input-container">
// 					<label className="label">شماره تلفن ثابت (اختیاری)</label>
// 					<input
// 						className="input"
// 						type="number"
// 						placeholder="شماره تلفن ثابت"
// 					/>
// 				</div>

// 				<div className="textarea-container">
// 					<label className="label">آدرس</label>
// 					<textarea
// 						className="textarea"
// 						placeholder="آدرس خود را وارد کنید"
// 					></textarea>
// 				</div>
// 			</div>

// 			<div className="gender-container">
// 				<label className="label">جنسیت</label>
// 				<div className="radio-group">
// 					<label className="radio-label">
// 						<input className="radio" type="radio" name="gender" value="male" />
// 						<span>مرد</span>
// 					</label>
// 					<label className="radio-label">
// 						<input
// 							className="radio"
// 							type="radio"
// 							name="gender"
// 							value="female"
// 						/>
// 						<span>زن</span>
// 					</label>
// 				</div>
// 			</div>
// 		</form>
// 	);
// }

// export default CreateAddressForm;
//////////////////////////////////////////
// import "./CreateAddressForm.css";

// function CreateAddressForm() {
// 	return (
// 		<form className="form-container">
// 			<h1 className="form-title">لطفا مشخصات و آدرس خود را وارد کنید</h1>

// 			<div>
// 				<div className="input-container">
// 					<label className="label">نام</label>
// 					<input className="input" type="text" />
// 				</div>

// 				<div className="input-container">
// 					<label className="label">نام خانوادگی</label>
// 					<input className="input" type="text" />
// 				</div>

// 				<div className="input-container">
// 					<label className="label">شماره تلفن همراه</label>
// 					<input className="input" type="number" />
// 				</div>

// 				<div className="input-container">
// 					<label className="label">شماره تلفن ثابت (اختیاری)</label>
// 					<input className="input" type="number" />
// 				</div>

// 				<div className="">
// 					<label className="label">آدرس</label>
// 					<textarea />
// 				</div>
// 			</div>
// 		</form>
// 	);
// }

// export default CreateAddressForm;
