import { MapContainer, TileLayer } from 'react-leaflet';


export function GoldilocksMap() {
  return (
    <MapContainer className={"h-screen"} center={[51.1657, 10.4515]} zoom={6.4} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}