import { HeatLatLngTuple } from "leaflet";

export interface AirportNoise {
    IATA: string;
    airport_name: string;
    coordinates: [number, number];
    intensity: number;
}

export class AirportService {

    private baseUrl: string = "http://localhost:8000";

    async getNoise(): Promise<HeatLatLngTuple[]> {
        return fetch(`${this.baseUrl}/airport-noise`)
            .then(request => request.json())
            .then(json => json as AirportNoise[])
            .then(noise => noise
                .map(n => [n.coordinates[0], n.coordinates[1], n.intensity] as HeatLatLngTuple));
    }
}