import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './index.css';

export default function Map() {
  const icon = L.icon({
    iconUrl: './tiger.png',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });

  return (
    <section className='map-container'>
      <h3>Map</h3>
      <div className='map'>
        <MapContainer
          center={{ lat: 25.72678, lng: -100.31368 }}
          zoom={17}
          style={{ height: '400px', width: '85%', border: 'solid black 1px' }}
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
      <p>Polideportivo, Pedro de Alba, Niños Héroes, Ciudad Universitaria, San Nicolás de los Garza, N.L.</p>
    </section>
  );
}
