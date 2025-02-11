import { useState } from "react";
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./LocationPickerMap.css";

const LocationPicker = ({ onLocationChange }) => {
	const [position, setPosition] = useState([35.6895, 51.389]);
	const map = useMapEvent("click", (event) => {
		const { lat, lng } = event.latlng;
		setPosition([lat, lng]);
		onLocationChange(lat, lng);
	});

	return (
		<Marker position={position}>
			<Popup>
				Latitude: {position[0]}, Longitude: {position[1]}
			</Popup>
		</Marker>
	);
};

const LocationPickerMap = ({ onLocationChange }) => {
	return (
		<div className="map-container">
			<h2>موقعیت مورد نظر خود را روی نقشه مشخص کنید</h2>
			<MapContainer
				center={[35.6895, 51.389]}
				zoom={15}
				attributionControl={false}
				className="leaflet-container" /* This is optional; Leaflet adds this class automatically */
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>
				<LocationPicker onLocationChange={onLocationChange} />
			</MapContainer>
		</div>
	);
};

export default LocationPickerMap;
