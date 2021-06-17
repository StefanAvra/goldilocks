import "leaflet/dist/leaflet.css";
import L, { HeatLatLngTuple } from "leaflet";
import "leaflet.heat";
import { useEffect, useState } from 'react';
import { TileLayer, useMap, useMapEvents } from 'react-leaflet';
import { AirportService } from './AirportService';

export function HeatMapLayer() {

  const map = useMap()
  const [zoom, setZoom] = useState(map.getZoom());
  const [data, setData] = useState<HeatLatLngTuple[]>([]);

  let layer = L.heatLayer(data, { radius: 10 * zoom });

  const mapevets = useMapEvents({
    zoom: () => {
      setZoom(zoom);
      console.log(mapevets.getZoom())
      map.removeLayer(layer)
      layer = L.heatLayer(data, { radius: 20 * zoom });
      map.addLayer(layer);

    }
  })

  useEffect(() => {
    async function fetchData() {
      const airportService = new AirportService();
      const airportNoise = await airportService.getNoise();

      setData(airportNoise);

    }
    fetchData();
  }, [setData])



  return (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  );
}