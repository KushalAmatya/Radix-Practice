import { Dispatch } from "react";
import { Carousel } from "../components/Carousel";

type HeroProps = {
  activetheme: string;
  setActivetheme: Dispatch<string>;
};
export const Hero = ({ activetheme, setActivetheme }: HeroProps) => {
  return (
    <div>
      <div
        id="hero"
        className="flex flex-col items-center justify-center h-screen text-white"
      >
        <Carousel activetheme={activetheme} setActivetheme={setActivetheme} />
      </div>
    </div>
  );
};
