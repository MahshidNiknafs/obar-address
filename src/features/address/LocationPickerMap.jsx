import { useState, useEffect, useCallback } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useFormContext } from "../../contexts/FormContext";
import "leaflet/dist/leaflet.css";
import "./LocationPickerMap.css";

const LocationPickerMap = () => {
	const { setSubmitAction, setFormData, formData } = useFormContext();
	const [position, setPosition] = useState([35.6895, 51.389]);

	useEffect(() => {
		setFormData((prev) => ({ ...prev, location: position }));
	}, [position, setFormData]);

	const submitLocation = useCallback(() => {
		console.log("Final Data with Location:", {
			...formData,
			location: position,
		});
	}, [formData, position]);

	useEffect(() => {
		setSubmitAction(() => submitLocation);
		return () => setSubmitAction(null);
	}, [setSubmitAction, submitLocation]);

	return (
		<div className="map-container">
			<h2>موقعیت مورد نظر خود را روی نقشه مشخص کنید</h2>
			<MapContainer
				center={position}
				zoom={15}
				attributionControl={false}
				className="leaflet-container"
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>
				<Marker position={position} />
				<LocationClickHandler setPosition={setPosition} />
			</MapContainer>
		</div>
	);
};

const LocationClickHandler = ({ setPosition }) => {
	useMapEvents({
		click(event) {
			setPosition([event.latlng.lat, event.latlng.lng]);
		},
	});
	return null;
};

export default LocationPickerMap;
