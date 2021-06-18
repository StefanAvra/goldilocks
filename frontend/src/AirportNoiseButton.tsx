import { ButtonState } from "./App";

interface ButtonProps {
  state: ButtonState,
  handler: () => void,
  whateverText: string,
  wantedText: string,
  unwantedText: string,
}

export default function AirportNoiseButton({ state, handler, whateverText, wantedText, unwantedText }: ButtonProps) {

  return (
    <button className={`bg-transparent text-white font-semibold
       ${state === ButtonState.WHATEVER && "bg-buttonGray hover:buttonGray"}
       ${state === ButtonState.WANTED && "bg-buttonGreen hover:bg-buttonGreen"}
       ${state === ButtonState.UNWANTED && "bg-buttonRed hover:bg-buttonRed"}
       `}
      onClick={handler}>
      <div className="border-double border-4 border-black py-2 px-4 text-3xl ">
        {state === ButtonState.WHATEVER && whateverText}
        {state === ButtonState.WANTED && wantedText}
        {state === ButtonState.UNWANTED && unwantedText}
      </div>
    </button>
  );
}