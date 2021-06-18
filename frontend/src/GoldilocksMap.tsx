import { Feature, Polygon } from 'geojson';
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from 'react';
import { Circle, MapContainer, Polygon as PolygonComponent, TileLayer } from 'react-leaflet';
import { AirportData, RestaurantData, SchoolData, AldiData } from './AirportService';
import * as turf from '@turf/turf'
import '@turf/meta'
import { latLng, LatLngBoundsExpression, LatLngExpression, LatLngTuple } from 'leaflet';

export interface GoldilocksMapProps {
  airports: AirportData[];
  schools: SchoolData[];
  restaurants: RestaurantData[];
  aldi?: AldiData;
}

export function GoldilocksMap({ airports, schools, restaurants, aldi }: GoldilocksMapProps) {

  const [intersections, setIntersections] = useState<Feature<Polygon>[]>([])
  const [differences, setDifferences] = useState<Feature<Polygon>[]>([])

  useEffect(() => {

    var airportCircles = airports.map(a => turf.circle(turf.point(a.coordinates), a.rad));
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

    if (aldi && aldi.nord && aldi.sued) {

      aldi.nord.push(aldi.nord[0]);
      let aldiNord = turf.polygon([aldi.nord]);

      airportCircles.forEach(a => {
        let diff = turf.difference(aldiNord, a);
        aldiNord = diff;
      })
      setDifferences([aldiNord]);
    }

    setIntersections(intersectionCircles);

  }, [airports, schools, restaurants, aldi, setIntersections, setDifferences])


  return (
    <MapContainer className={"h-full"} center={[51.1657, 10.4515]} zoom={6.4} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/*  {airports.map(d => <Circle center={d.coordinates} radius={d.rad * 1000} color="red" />)}
        {schools.map(d => <Circle center={d.coordinates} radius={d.rad * 1000} color="green" />)}
        {restaurants.map(d => <Circle center={d.coordinates} radius={d.rad * 1000} color="yellow" />)}
        {aldi && <PolygonComponent positions={aldi.nord} color="gray" />}
        {aldi && <PolygonComponent positions={aldi.sued} color="gray" />} */}
      {differences.map(d => <PolygonComponent positions={d.geometry.coordinates as LatLngExpression[][]} color="gray" />)}
      {intersections.map(i => <PolygonComponent positions={i.geometry.coordinates as LatLngExpression[][]} color="blue" />)}
    </MapContainer>
  );
}