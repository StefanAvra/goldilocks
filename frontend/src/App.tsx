import { useState } from 'react';
import AirportNoiseButton from './AirportNoiseButton';
import { AirportData, AirportService, RestaurantData, SchoolData } from './AirportService';
import { GoldilocksMap } from './GoldilocksMap';
import Logo from './logofont.png'
import Pattern from "./pattern.jpg"


export default function App() {
  const [airportData, setAirportData] = useState<AirportData[]>([]);
  const [schoolData, setSchoolData] = useState<SchoolData[]>([]);
  const [restaurantData, setRestaurantData] = useState<RestaurantData[]>([]);

  const airportService = new AirportService();


  const handleClick = async () => {
    const airports = await airportService.getNoise();
    const schools = await airportService.getSchools();
    const restaurants = await airportService.getRestaurants();
    setAirportData(airports);
    setSchoolData(schools);
    setRestaurantData(restaurants);
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="h-screen bg-repeat bg-contain" style={{ backgroundImage: `url(${Pattern})` }} >
        <img className="w-1/2 p-4 bg-white" src={Logo} alt="logo" />
        <div className="bg-white bg-opacity-70 p-4">
          <h1 className="text-logo leading-relaxed text-6xl font-bold text-center ">Beschreibe dein perfektes Zuhause! ❤️🏠 </h1>
        </div>

        <div className="p-12 ">

          <div className="grid gap-6 justify-items-center">
            <AirportNoiseButton />
            <AirportNoiseButton />
            <AirportNoiseButton />
          </div>
        </div>
        <div className="flex justify-end ">
          <button className="bg-transparent text-white font-semiboldbg-buttonGreen hover:bg-buttonGreen"
            onClick={handleClick}>
            <div className="border-double border-4 border-black py-2 px-4 text-3xl ">Suchen!</div>
          </button>
        </div>

      </div>
      <div className="h-screen p-6">
        <div className="h-full p-2 border-double border-8 border-black">
          <GoldilocksMap airports={airportData} schools={schoolData} restaurants={restaurantData} />
        </div>
      </div>

    </div>
  );
}