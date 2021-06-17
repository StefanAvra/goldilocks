import { useEffect, useState } from 'react';
import { GoldilocksMap } from './GoldilocksMap';


export default function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/airport-noise")
      .then(r => console.log(r));
  }, [setData])

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="h-screen p-12 ">
        <pre>
          {JSON.stringify(data)}
        </pre>
      </div>
      <div className="h-screen p-6">
        <div className="h-full p-2 border-double border-8 border-black">
          <GoldilocksMap />
        </div>
      </div>

    </div>
  );
}