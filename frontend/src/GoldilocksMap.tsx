import '@turf/meta';
import * as turf from '@turf/turf';
import { Feature, Polygon } from 'geojson';
import { LatLngExpression } from 'leaflet';
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from 'react';
import { MapContainer, Polygon as PolygonComponent, TileLayer } from 'react-leaflet';
import { AirportData, AldiData, RestaurantData, SchoolData } from './AirportService';
import { ButtonState } from './App';


export interface GoldilocksData {
  airports: AirportData[];
  schools: SchoolData[];
  restaurants: RestaurantData[];
  aldi: AldiData;
}

export interface GoldilocksMapProps {
  goldilocksData?: GoldilocksData
  airportState: ButtonState;
  schoolState: ButtonState;
  restaurantState: ButtonState;
  aldiState: ButtonState;
}

export function GoldilocksMap({ goldilocksData, airportState, schoolState, restaurantState, aldiState }: GoldilocksMapProps) {

  const [intersections, setIntersections] = useState<Feature<Polygon>[]>([])

  useEffect(() => {

    if (!goldilocksData) return;
    console.log(`airportState: ${ButtonState[airportState]} schoolState: ${ButtonState[schoolState]} restaurantState:${ButtonState[restaurantState]} aldiState: ${ButtonState[aldiState]}`);

    let diffPlane = turf.polygon([goldilocksData.aldi.germany]);
    var airportCircles = goldilocksData.airports.map(a => turf.circle(turf.point(a.coordinates), a.rad));
    var schoolCircles = goldilocksData.schools.map(s => turf.circle(turf.point(s.coordinates), s.rad))
    var restaurantCircles = goldilocksData.restaurants.map(r => turf.circle(turf.point(r.coordinates), r.rad));

    if (aldiState === ButtonState.UNWANTED) {
      diffPlane = turf.polygon([goldilocksData.aldi.nord]);
    } else if (aldiState === ButtonState.WANTED) {
      diffPlane = turf.polygon([goldilocksData.aldi.sued]);
    }

    if (airportState === ButtonState.UNWANTED) {
      airportCircles.forEach(a => {
        let diff = turf.difference(diffPlane, a);
        diffPlane = diff;
      })
    }

    //TODO.AWU: Fix performance
    // if (schoolState === ButtonState.UNWANTED) {
    //   schoolCircles.forEach(s => {
    //     let diff = turf.difference(diffPlane, s);
    //     diffPlane = diff;
    //   })
    // }

    // if (restaurantState === ButtonState.UNWANTED) {
    //   restaurantCircles.forEach(r => {
    //     let diff = turf.difference(diffPlane, r);
    //     diffPlane = diff;
    //   })
    // }

    let intersectionCircles: Feature<Polygon>[] = [];

    if (airportState === ButtonState.WANTED) {
      airportCircles.forEach(a => {
        let intersection = turf.intersect(diffPlane, a);
        if (intersection != null) {
          intersectionCircles.push(intersection as Feature<Polygon>)
        }
      })
    }

    if (schoolState === ButtonState.WANTED) {

      if (intersectionCircles.length > 0) {

        let newIntersectionCircles: Feature<Polygon>[] = [];

        intersectionCircles.forEach(i => {
          schoolCircles.forEach(s => {
            let intersection = turf.intersect(i, s);
            if (intersection != null) {
              newIntersectionCircles.push(intersection as Feature<Polygon>)
            }
          })
        })

        intersectionCircles = newIntersectionCircles;
      } else {
        schoolCircles.forEach(s => {
          let intersection = turf.intersect(diffPlane, s);
          if (intersection != null) {
            intersectionCircles.push(intersection as Feature<Polygon>)
          }
        })
      }
    }

    if (restaurantState === ButtonState.WANTED) {
      if (intersectionCircles.length > 0) {

        let newIntersectionCircles: Feature<Polygon>[] = [];

        intersectionCircles.forEach(i => {
          restaurantCircles.forEach(r => {
            let intersection = turf.intersect(i, r);
            if (intersection != null) {
              newIntersectionCircles.push(intersection as Feature<Polygon>)
            }
          })
        })
        intersectionCircles = newIntersectionCircles;
      } else {
        restaurantCircles.forEach(r => {
          let intersection = turf.intersect(diffPlane, r);
          if (intersection != null) {
            intersectionCircles.push(intersection as Feature<Polygon>)
          }
        })
      }
    }

    if (intersectionCircles.length <= 0) {
      setIntersections([diffPlane]);
    } else {
      setIntersections(intersectionCircles);
    }

  }, [goldilocksData, airportState, schoolState, restaurantState, aldiState, setIntersections])


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
      {intersections.map(i => <PolygonComponent positions={i.geometry.coordinates as LatLngExpression[][]} color="#FF665A" />)}
    </MapContainer>
  );
}