
export interface AirportNoise {
    IATA: string;
    airport_name: string;
    coordinates: [number, number];
    intensity: number;
}

export class AirportService {

    private baseUrl: string = "http://localhost:8000";

    async getNoise(): Promise<AirportNoise[]> {
        return fetch(`${this.baseUrl}/airport-noise`)
            .then(request => request.json())
            .then(json => json as AirportNoise[]);
    }
}