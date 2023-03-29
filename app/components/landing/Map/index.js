import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./index.css";
import { TranslationContext } from "../../../page";
import React from "react";

export default function Map() {
  const language = React.useContext(TranslationContext);

  const icon = L.icon({
    iconUrl: "./tiger.png",
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });

  return (
    <section className="map-container">
      <h3>{language?.getString("map.title")}</h3>
      <div className="map">
        <MapContainer
          center={{ lat: 25.72678, lng: -100.31368 }}
          zoom={17}
          style={{ height: "400px", width: "85%", border: "solid black 1px" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[25.72678, -100.31368]} icon={icon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <p>{language?.getString("map.place")}</p>
    </section>
  );
}
