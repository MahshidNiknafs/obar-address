import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://stage.achareh.ir/api/karfarmas/address";
const AUTH_HEADER = "Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4";

function useAddresses() {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: AUTH_HEADER,
          },
        });
        const formattedData = response.data.map((item) => ({
          id: item.id,
          firstName: item.first_name,
          lastName: item.last_name,
          mobileNumber: item.coordinate_mobile || "ندارد",
          landlineNumber: item.coordinate_phone_number || "ندارد",
          address: item.address,
          gender: item.gender === "male" ? "مرد" : "زن",
        }));
        setAddresses(formattedData);
      } catch (err) {
        setError("خطا در دریافت اطلاعات");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAddresses();
  }, []);

  return { addresses, loading, error };
}

export default useAddresses;
