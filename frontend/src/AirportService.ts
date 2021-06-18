
export interface AirportData {
    coordinates: [number, number];
    rad: number;
}

export interface SchoolData {
    coordinates: [number, number];
    rad: number;
}

export interface RestaurantData {
    coordinates: [number, number];
    rad: number;
}

export class AirportService {

    private baseUrl: string = "http://localhost:8000";

    async getNoise(): Promise<AirportData[]> {
        return fetch(`${this.baseUrl}/airport-noise`)
            .then(request => request.json())
            .then(json => json as AirportData[]);
    }

    async getSchools(): Promise<SchoolData[]> {
        return fetch(`${this.baseUrl}/schools`)
            .then(request => request.json())
            .then(json => json as SchoolData[]);
    }

    async getRestaurants(): Promise<RestaurantData[]> {
        return fetch(`${this.baseUrl}/retaurants`)
            .then(request => request.json())
            .then(json => json as RestaurantData[]);
    }
}

