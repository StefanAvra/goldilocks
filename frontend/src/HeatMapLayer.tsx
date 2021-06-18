import { point } from "@turf/helpers";
import * as turf from '@turf/turf';
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from 'react';
import { Circle, Polygon, TileLayer } from 'react-leaflet';
import { AirportNoise, AirportService } from './AirportService';

export function HeatMapLayer() {

  const [data, setData] = useState<AirportNoise[]>([]);


  useEffect(() => {
    async function fetchData() {
      const airportService = new AirportService();
      const airportNoise = await airportService.getNoise();

      setData(airportNoise);
    }
    fetchData();
  }, [setData])

  var center = point([0, 9.245882875524904]);
  var radius = 200;
  var circle = turf.circle(center, radius);

  var center2 = point([0, 11.704768133631378]);
  var circle2 = turf.circle(center2, radius);

  var union = turf.intersect(circle, circle2);

  console.log(union.geometry.coordinates);
  const purpleOptions = { color: 'purple' }
  const redOptions = { color: 'red' }
  const blueOptions = { color: 'blue' }



  return (
    <>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polygon pathOptions={redOptions} positions={circle.geometry.coordinates as LatLngExpression[][]} />
      <Polygon pathOptions={blueOptions} positions={circle2.geometry.coordinates as LatLngExpression[][]} />
      <Polygon pathOptions={purpleOptions} positions={union.geometry.coordinates as LatLngExpression[][]} />
      {data.map(d => <Circle center={d.coordinates} radius={d.intensity * 10000} />)}
    </>
  );
}