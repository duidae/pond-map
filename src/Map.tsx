import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {LatLngExpression} from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.scss";

// Hack for icon issue from https://github.com/PaulLeCam/react-leaflet/issues/453
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

const pondsGeojson = require("./ponds.json");

export const Map = () => {
    const center: LatLngExpression = [24.977707, 121.277557];
    const pondPositions: LatLngExpression[] = [
        [24.977707, 121.277557],
        [24.980168, 121.27829],
        [24.97987, 121.278476]
    ];

    const pondMarkers = pondPositions?.map((pondPosition, index) => {
        return (
            <Marker key={index} position={pondPosition}>
                <Popup>Pond {pondPosition}</Popup>
            </Marker>
        );
    });

    return (
        <MapContainer center={center} zoom={12}>
            <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {pondMarkers}
        </MapContainer>
    );
};
