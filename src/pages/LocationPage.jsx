import LocationPickerMap from "../features/address/LocationPickerMap";
import Card from "../ui/Card/Card";

function LocationPage() {
	return (
		<Card cardTitle="انتخاب آدرس">
			<LocationPickerMap />
			{/* <div style={{ backgroundColor: "red" }}>map</div> */}
		</Card>
	);
}

export default LocationPage;
