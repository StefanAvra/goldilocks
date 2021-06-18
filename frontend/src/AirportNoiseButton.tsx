import { useState } from "react";

enum ButtonState {
  WANTED,
  UNWANTED,
  WHATEVER
}

export default function AirportNoiseButton() {

  const [state, setState] = useState<ButtonState>(ButtonState.WHATEVER)

  const handleClick = () => {
    if (state === ButtonState.WHATEVER) setState(ButtonState.WANTED);
    if (state === ButtonState.WANTED) setState(ButtonState.UNWANTED);
    if (state === ButtonState.UNWANTED) setState(ButtonState.WHATEVER);
  }

  return (
    <button className={`bg-transparent text-white font-semibold
       ${state === ButtonState.WHATEVER && "bg-buttonGray hover:buttonGray"}
       ${state === ButtonState.WANTED && "bg-buttonGreen hover:bg-buttonGreen"}
       ${state === ButtonState.UNWANTED && "bg-buttonRed hover:bg-buttonRed"}
       `}
      onClick={handleClick}>
      <div className="border-double border-4 border-black py-2 px-4 text-3xl ">
        {state === ButtonState.WHATEVER && "Reisen ist mir egal."}
        {state === ButtonState.WANTED && "Ich liebe Jetlag!"}
        {state === ButtonState.UNWANTED && "Ich hasse Flugzeuglärm!"}
      </div>
    </button>
  );
}