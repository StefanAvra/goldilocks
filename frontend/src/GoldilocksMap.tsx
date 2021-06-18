import { Feature, Polygon } from 'geojson';
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from 'react';
import { Circle, MapContainer, Polygon as PolygonComponent, TileLayer } from 'react-leaflet';
import { AirportData, RestaurantData, SchoolData } from './AirportService';
import * as turf from '@turf/turf'
import { LatLngExpression } from 'leaflet';

export interface GoldilocksMapProps {
  airports: AirportData[];
  schools: SchoolData[];
  restaurants: RestaurantData[];
}

export function GoldilocksMap({ airports, schools, restaurants }: GoldilocksMapProps) {

  const [intersections, setIntersections] = useState<Feature<Polygon>[]>([])

  useEffect(() => {

    var airportCircles = airports.map(a => turf.circle(turf.point(a.coordinates), 7.5));
    var schoolCircles = schools.map(s => turf.circle(turf.point(s.coordinates), s.rad))
    var restaurantCircles = restaurants.map(r => turf.circle(turf.point(r.coordinates), r.rad));

    let firstIntersectionCircles: Feature<Polygon>[] = [];

    airportCircles.forEach(a => {
      schoolCircles.forEach(s => {
        let intersection = turf.intersect(a, s);
        if (intersection != null) {
          firstIntersectionCircles.push(intersection as Feature<Polygon>)
        }
      })
    })

    let intersectionCircles: Feature<Polygon>[] = [];

    firstIntersectionCircles.forEach(i => {
      restaurantCircles.forEach(r => {
        let intersection = turf.intersect(i, r);
        if (intersection != null) {
          intersectionCircles.push(intersection as Feature<Polygon>)
        }
      })
    })


    setIntersections(intersectionCircles);

  }, [airports, schools, restaurants, setIntersections])

  return (
    <MapContainer className={"h-full"} center={[51.1657, 10.4515]} zoom={6.4} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {airports.map(d => <Circle center={d.coordinates} radius={7500} color="red" />)}
      {schools.map(d => <Circle center={d.coordinates} radius={d.rad * 1000} color="green" />)}
      {restaurants.map(d => <Circle center={d.coordinates} radius={d.rad * 1000} color="yellow" />)}
      {intersections.map(i => <PolygonComponent positions={i.geometry.coordinates as LatLngExpression[][]} color="blue" />)}
    </MapContainer>
  );
}