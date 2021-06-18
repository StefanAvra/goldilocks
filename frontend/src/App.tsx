
import { GoldilocksMap } from './GoldilocksMap';


export default function App() {


  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="h-screen p-12 ">
        <pre>

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