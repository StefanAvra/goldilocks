import { MapContainer } from 'react-leaflet';
import { HeatMapLayer } from './HeatMapLayer';

export function GoldilocksMap() {

  return (
    <MapContainer className={"h-full"} center={[51.1657, 10.4515]} zoom={6.4} scrollWheelZoom={false}>
      <HeatMapLayer />
    </MapContainer>
  );
}