import { useForm } from "react-hook-form";
import "./CreateAddressForm.css";

function CreateAddressForm({ onSubmit }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// const onSubmit = (data) => {
	// 	console.log(data);
	// };

	return (
		<form className="form-container" onSubmit={handleSubmit(onSubmit)}>
			<h1 className="form-title">لطفا مشخصات و آدرس خود را وارد کنید</h1>

			<div className="form-inputs">
				{/* First Name */}
				<div className="input-container">
					<label className="label">نام</label>
					<input
						className="input"
						type="text"
						placeholder="مثال: محمدرضا"
						{...register("firstName", {
							required: "نام اجباری است",
							minLength: {
								value: 3,
								message: "نام باید حداقل ۳ حرف باشد",
							},
						})}
					/>
					{errors.firstName && (
						<span className="error">{errors.firstName.message}</span>
					)}
				</div>

				{/* Last Name */}
				<div className="input-container">
					<label className="label">نام خانوادگی</label>
					<input
						className="input"
						type="text"
						placeholder="مثال: رضایی"
						{...register("lastName", {
							required: "نام خانوادگی اجباری است",
							minLength: {
								value: 3,
								message: "نام خانوادگی باید حداقل ۳ حرف باشد",
							},
						})}
					/>
					{errors.lastName && (
						<span className="error">{errors.lastName.message}</span>
					)}
				</div>

				{/* Mobile Number */}
				<div className="input-container">
					<label className="label">شماره تلفن همراه</label>
					<input
						className="input"
						type="text"
						placeholder=" مثال: ۰۹۱۲۱۲۳۴۵۶۷"
						{...register("mobileNumber", {
							required: "شماره تلفن همراه اجباری است",
							pattern: {
								value: /^09\d{9}$/,
								message: "شماره تلفن همراه باید ۱۱ رقم باشد و با ۰۹ شروع شود",
							},
						})}
					/>
					{errors.mobileNumber && (
						<span className="error">{errors.mobileNumber.message}</span>
					)}
				</div>

				{/* Landline Number */}
				<div className="input-container">
					<div className="label-container">
						<label className="label">
							شماره تلفن ثابت
							<span className="optional"> (اختیاری)</span>
						</label>
						<span className="note">*با پیش شماره</span>
					</div>
					<input
						className="input"
						type="text"
						placeholder="مثال: ۰۲۱۱۲۳۴۵۶۷"
						{...register("landlineNumber", {
							pattern: {
								value: /^\d{11}$/,
								message: "شماره تلفن ثابت باید ۱۱ رقم باشد",
							},
						})}
					/>
					{errors.landlineNumber && (
						<span className="error">{errors.landlineNumber.message}</span>
					)}
				</div>

				{/* Address */}
				<div className="textarea-container">
					<label className="label">آدرس</label>
					<textarea
						className="textarea"
						placeholder="آدرس خود را وارد کنید"
						{...register("address", {
							required: "آدرس اجباری است",
							minLength: {
								value: 10,
								message: "آدرس باید حداقل ۱۰ حرف باشد",
							},
						})}
					/>
					{errors.address && (
						<span className="error">{errors.address.message}</span>
					)}
				</div>
			</div>

			{/* Gender */}
			<div className="gender-container">
				<label className="label">جنسیت</label>
				<div className="radio-group">
					<label className="radio-label">
						<input
							className="radio"
							type="radio"
							value="male"
							{...register("gender", {
								required: "لطفاً جنسیت را انتخاب کنید",
							})}
						/>
						<span>مرد</span>
					</label>
					<label className="radio-label">
						<input
							className="radio"
							type="radio"
							value="female"
							{...register("gender", {
								required: "لطفاً جنسیت را انتخاب کنید",
							})}
						/>
						<span>زن</span>
					</label>
				</div>
				{errors.gender && (
					<span className="error">{errors.gender.message}</span>
				)}
			</div>
		</form>
	);
}

export default CreateAddressForm;

/////////////////////////////////////////////
// the original before submit in footer

// import { useForm } from "react-hook-form";
// import "./CreateAddressForm.css";

// function CreateAddressForm() {
// 	const {
// 		register,
// 		handleSubmit,
// 		formState: { errors },
// 	} = useForm();

// 	const onSubmit = (data) => {
// 		console.log(data);
// 	};

// 	return (
// 		<form className="form-container" onSubmit={handleSubmit(onSubmit)}>
// 			<h1 className="form-title">لطفا مشخصات و آدرس خود را وارد کنید</h1>

// 			<div className="form-inputs">
// 				{/* First Name */}
// 				<div className="input-container">
// 					<label className="label">نام</label>
// 					<input
// 						className="input"
// 						type="text"
// 						placeholder="مثال: محمدرضا"
// 						{...register("firstName", {
// 							required: "نام اجباری است",
// 							minLength: {
// 								value: 3,
// 								message: "نام باید حداقل ۳ حرف باشد",
// 							},
// 						})}
// 					/>
// 					{errors.firstName && (
// 						<span className="error">{errors.firstName.message}</span>
// 					)}
// 				</div>

// 				{/* Last Name */}
// 				<div className="input-container">
// 					<label className="label">نام خانوادگی</label>
// 					<input
// 						className="input"
// 						type="text"
// 						placeholder="مثال: رضایی"
// 						{...register("lastName", {
// 							required: "نام خانوادگی اجباری است",
// 							minLength: {
// 								value: 3,
// 								message: "نام خانوادگی باید حداقل ۳ حرف باشد",
// 							},
// 						})}
// 					/>
// 					{errors.lastName && (
// 						<span className="error">{errors.lastName.message}</span>
// 					)}
// 				</div>

// 				{/* Mobile Number */}
// 				<div className="input-container">
// 					<label className="label">شماره تلفن همراه</label>
// 					<input
// 						className="input"
// 						type="text"
// 						placeholder=" مثال: ۰۹۱۲۱۲۳۴۵۶۷"
// 						{...register("mobileNumber", {
// 							required: "شماره تلفن همراه اجباری است",
// 							pattern: {
// 								value: /^09\d{9}$/,
// 								message: "شماره تلفن همراه باید ۱۱ رقم باشد و با ۰۹ شروع شود",
// 							},
// 						})}
// 					/>
// 					{errors.mobileNumber && (
// 						<span className="error">{errors.mobileNumber.message}</span>
// 					)}
// 				</div>

// 				{/* Landline Number */}
// 				<div className="input-container">
// 					<div className="label-container">
// 						<label className="label">
// 							شماره تلفن ثابت
// 							<span className="optional"> (اختیاری)</span>
// 						</label>
// 						<span className="note">*با پیش شماره</span>
// 					</div>
// 					<input
// 						className="input"
// 						type="text"
// 						placeholder="مثال: ۰۲۱۱۲۳۴۵۶۷"
// 						{...register("landlineNumber", {
// 							pattern: {
// 								value: /^\d{11}$/,
// 								message: "شماره تلفن ثابت باید ۱۱ رقم باشد",
// 							},
// 						})}
// 					/>
// 					{errors.landlineNumber && (
// 						<span className="error">{errors.landlineNumber.message}</span>
// 					)}
// 				</div>

// 				{/* Address */}
// 				<div className="textarea-container">
// 					<label className="label">آدرس</label>
// 					<textarea
// 						className="textarea"
// 						placeholder="آدرس خود را وارد کنید"
// 						{...register("address", {
// 							required: "آدرس اجباری است",
// 							minLength: {
// 								value: 10,
// 								message: "آدرس باید حداقل ۱۰ حرف باشد",
// 							},
// 						})}
// 					/>
// 					{errors.address && (
// 						<span className="error">{errors.address.message}</span>
// 					)}
// 				</div>
// 			</div>

// 			{/* Gender */}
// 			<div className="gender-container">
// 				<label className="label">جنسیت</label>
// 				<div className="radio-group">
// 					<label className="radio-label">
// 						<input
// 							className="radio"
// 							type="radio"
// 							value="male"
// 							{...register("gender", {
// 								required: "لطفاً جنسیت را انتخاب کنید",
// 							})}
// 						/>
// 						<span>مرد</span>
// 					</label>
// 					<label className="radio-label">
// 						<input
// 							className="radio"
// 							type="radio"
// 							value="female"
// 							{...register("gender", {
// 								required: "لطفاً جنسیت را انتخاب کنید",
// 							})}
// 						/>
// 						<span>زن</span>
// 					</label>
// 				</div>
// 				{errors.gender && (
// 					<span className="error">{errors.gender.message}</span>
// 				)}
// 			</div>

// 			<button type="submit" className="submit-button">
// 				ارسال
// 			</button>
// 		</form>
// 	);
// }

// export default CreateAddressForm;
