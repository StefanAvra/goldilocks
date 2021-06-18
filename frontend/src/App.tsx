import { useState } from 'react';
import AirportNoiseButton from './AirportNoiseButton';
import { AirportService, AldiData } from './AirportService';
import { GoldilocksData, GoldilocksMap, GoldilocksMapProps } from './GoldilocksMap';
import Logo from './logofont.png';
import Pattern from "./pattern.jpg";

export enum ButtonState {
  WANTED,
  UNWANTED,
  WHATEVER
}

export default function App() {
  const [airport, setAirport] = useState<ButtonState>(ButtonState.WHATEVER)
  const [school, setSchool] = useState<ButtonState>(ButtonState.WHATEVER)
  const [restaurant, setRestaurant] = useState<ButtonState>(ButtonState.WHATEVER)
  const [aldiState, setAldiState] = useState<ButtonState>(ButtonState.WHATEVER)

  const handleAirportClick = () => {
    if (airport === ButtonState.WHATEVER) setAirport(ButtonState.WANTED);
    if (airport === ButtonState.WANTED) setAirport(ButtonState.UNWANTED);
    if (airport === ButtonState.UNWANTED) setAirport(ButtonState.WHATEVER);
  }

  const handleSchoolClick = () => {
    if (school === ButtonState.WHATEVER) setSchool(ButtonState.WANTED);
    if (school === ButtonState.WANTED) setSchool(ButtonState.UNWANTED);
    if (school === ButtonState.UNWANTED) setSchool(ButtonState.WHATEVER);
  }

  const handleRestaurantClick = () => {
    if (restaurant === ButtonState.WHATEVER) setRestaurant(ButtonState.WANTED);
    if (restaurant === ButtonState.WANTED) setRestaurant(ButtonState.UNWANTED);
    if (restaurant === ButtonState.UNWANTED) setRestaurant(ButtonState.WHATEVER);
  }

  const handleAldiClick = () => {
    if (aldiState === ButtonState.WHATEVER) setAldiState(ButtonState.WANTED);
    if (aldiState === ButtonState.WANTED) setAldiState(ButtonState.UNWANTED);
    if (aldiState === ButtonState.UNWANTED) setAldiState(ButtonState.WHATEVER);
  }


  const [goldilocksMapProps, setGoldilocksMapProps] = useState<GoldilocksData>();

  const airportService = new AirportService();

  const handleClick = async () => {
    const airports = await airportService.getNoise();
    const schools = await airportService.getSchools();
    const restaurants = await airportService.getRestaurants();
    const aldi = await airportService.getAldi();
    setGoldilocksMapProps({ airports, schools, restaurants, aldi })
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
            <AirportNoiseButton state={airport} handler={handleAirportClick} whateverText="Flughäfen sind mir egal" wantedText="Ich fliege öfter um die Welt" unwantedText="Ich hasse Flugzeuglärm" />
            <AirportNoiseButton state={school} handler={handleSchoolClick} whateverText="Schulen sind mir egal" wantedText="Meine Kinder müssen zur Schule" unwantedText="Ich hasse Kinder" />
            <AirportNoiseButton state={restaurant} handler={handleRestaurantClick} whateverText="Restaurants sind mir egal" wantedText="Ich gehe gerne essen" unwantedText="Ich koche Zuhause" />
            <AirportNoiseButton state={aldiState} handler={handleAldiClick} whateverText="Aldi ist mir egal" wantedText="Aldi Süd beschde" unwantedText="Aldi Nord über alles" />
          </div>
        </div>
        <div className="flex justify-end ">
          <button className="bg-buttonGreen text-white font-semiboldbg-buttonGreen hover:bg-buttonGreenHover"
            onClick={handleClick}>
            <div className="border-double border-4 border-black py-2 px-4 text-3xl ">Suchen!</div>
          </button>
        </div>

      </div>
      <div className="h-screen p-6">
        <div className="h-full p-2 border-double border-8 border-black">
          <GoldilocksMap
            goldilocksData={goldilocksMapProps}
            airportState={airport}
            schoolState={school}
            restaurantState={restaurant}
            aldiState={aldiState}
          />
        </div>
      </div>

    </div>
  );
}