import AirportNoiseButton from './AirportNoiseButton';
import { GoldilocksMap } from './GoldilocksMap';
import Logo from './logofont.png'
import Pattern from "./pattern.jpg"


export default function App() {

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="h-screen bg-repeat bg-contain" style={{ backgroundImage: `url(${Pattern})` }} >
        <img className="w-1/2 p-4" src={Logo} alt="logo" />
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
          <AirportNoiseButton />
        </div>

      </div>
      <div className="h-screen p-6">
        <div className="h-full p-2 border-double border-8 border-black">
          <GoldilocksMap />
        </div>
      </div>

    </div>
  );
}