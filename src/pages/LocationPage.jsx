import LocationPickerMap from "../features/address/LocationPickerMap";
import Card from "../ui/Card/Card";

function LocationPage() {
	return (
		<Card cardTitle="انتخاب آدرس">
			<LocationPickerMap />
		</Card>
	);
}

export default LocationPage;
