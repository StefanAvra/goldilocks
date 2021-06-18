import "leaflet/dist/leaflet.css";
import React from 'react';
import { TileLayer } from 'react-leaflet';

export function HeatMapLayer() {


  return (
    <>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </>
  );
}