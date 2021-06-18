import { Circle, MapContainer, TileLayer } from 'react-leaflet';
import { AirportData, SchoolData, RestaurantData } from './AirportService';
import "leaflet/dist/leaflet.css";

interface GoldilocksMapProps {
  airports: AirportData[];
  schools: SchoolData[];
  restaurants: RestaurantData[];
}

export function GoldilocksMap({ airports, schools, restaurants }: GoldilocksMapProps) {


  /*
  var center = point([48.5, 9.245882875524904]);
  var radius = 200;
  var circle = turf.circle(center, radius);

  var center2 = point([48.5, 11.704768133631378]);
  var circle2 = turf.circle(center2, radius);

  var union = turf.intersect(circle, circle2);

  console.log(union.geometry.coordinates);
  const purpleOptions = { color: 'purple' }
  const redOptions = { color: 'red' }
  const blueOptions = { color: 'blue' }
  */

  return (
    <MapContainer className={"h-full"} center={[51.1657, 10.4515]} zoom={6.4} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {airports.map(d => <Circle center={d.coordinates} radius={d.intensity * 10000} />)}
      {schools.map(d => <Circle center={d.coordinates} radius={d.radius * 10000} />)}
      {restaurants.map(d => <Circle center={d.coordinates} radius={d.radius * 10000} />)}
    </MapContainer>
  );
}