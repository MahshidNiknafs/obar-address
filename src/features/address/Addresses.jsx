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
              <span className="info-value">{address.landlineNumber}</span>
            </div>
            <div className="info-item">
              <span className="info-label">آدرس:</span>
              <span className="info-value">{address.address}</span>
            </div>
            <div className="info-item">
              <span className="info-label">جنسیت:</span>
              <span className="info-value">{address.gender}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Addresses;
///////////////////////////////////////////

// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./Addresses.css";

// const API_URL = "https://stage.achareh.ir/api/karfarmas/address";
// const AUTH_HEADER = "Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4";

// function Addresses() {
//   const [addresses, setAddresses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAddresses = async () => {
//       try {
//         const response = await axios.get(API_URL, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: AUTH_HEADER,
//           },
//         });
//         const formattedData = response.data.map((item) => ({
//           id: item.id,
//           firstName: item.first_name,
//           lastName: item.last_name,
//           mobileNumber: item.coordinate_mobile || "ندارد",
//           landlineNumber: item.coordinate_phone_number || "ندارد",
//           address: item.address,
//           gender: item.gender === "male" ? "مرد" : "زن",
//         }));
//         setAddresses(formattedData);
//       } catch (err) {
//         setError("خطا در دریافت اطلاعات");
//         console.log(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAddresses();
//   }, []);

//   if (loading) return <p>در حال دریافت اطلاعات...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="addresses-container">
//       {addresses.map((address) => (
//         <div key={address.id} className="address-card">
//           <h2 className="address-title">
//             {address.firstName} {address.lastName}
//           </h2>
//           <div className="address-info">
//             <div className="info-item">
//               <span className="info-label">شماره همراه:</span>
//               <span className="info-value">{address.mobileNumber}</span>
//             </div>
//             <div className="info-item">
//               <span className="info-label">شماره ثابت:</span>
//               <span className="info-value">{address.landlineNumber}</span>
//             </div>
//             <div className="info-item">
//               <span className="info-label">آدرس:</span>
//               <span className="info-value">{address.address}</span>
//             </div>
//             <div className="info-item">
//               <span className="info-label">جنسیت:</span>
//               <span className="info-value">{address.gender}</span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Addresses;

/////////////////////////////////////////
// import "./Addresses.css";

// const addressData = [
// 	{
// 		id: 1,
// 		firstName: "محمدرضا",
// 		lastName: "رضایی",
// 		mobileNumber: "09121234567",
// 		landlineNumber: "02112345678",
// 		address: "تهران، خیابان آزادی، پلاک ۱۰",
// 		gender: "مرد",
// 	},
// 	{
// 		id: 2,
// 		firstName: "زهرا",
// 		lastName: "احمدی",
// 		mobileNumber: "09131234567",
// 		landlineNumber: "02198765432",
// 		address: "مشهد، خیابان امام رضا، پلاک ۲۰",
// 		gender: "زن",
// 	},
// ];

// function Addresses() {
// 	return (
// 		<div className="addresses-container">
// 			{addressData.map((address) => (
// 				<div key={address.id} className="address-card">
// 					<h2 className="address-title">
// 						{address.firstName} {address.lastName}
// 					</h2>
// 					<div className="address-info">
// 						<div className="info-item">
// 							<span className="info-label">شماره همراه:</span>
// 							<span className="info-value">{address.mobileNumber}</span>
// 						</div>
// 						<div className="info-item">
// 							<span className="info-label">شماره ثابت:</span>
// 							<span className="info-value">
// 								{address.landlineNumber || "ندارد"}
// 							</span>
// 						</div>
// 						<div className="info-item">
// 							<span className="info-label">آدرس:</span>
// 							<span className="info-value">{address.address}</span>
// 						</div>
// 						<div className="info-item">
// 							<span className="info-label">جنسیت:</span>
// 							<span className="info-value">
// 								{address.gender === "مرد" ? "مرد" : "زن"}
// 							</span>
// 						</div>
// 					</div>
// 				</div>
// 			))}
// 		</div>
// 	);
// }

// export default Addresses;
