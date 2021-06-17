import { GoldilocksMap } from './GoldilocksMap';


function App() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="h-screen p-12 ">
      </div>
      <div className="h-screen p-6">
        <div className="h-full p-2 border-double border-8 border-black">
          <GoldilocksMap />
        </div>
      </div>

    </div>
  );
}

export default App;
